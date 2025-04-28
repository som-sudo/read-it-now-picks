
import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Check, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface MultiSelectProps<T extends string> {
  options: T[];
  selectedValues: T[];
  onChange: (values: T[]) => void;
  placeholder?: string;
  className?: string;
}

export function MultiSelect<T extends string>({
  options,
  selectedValues,
  onChange,
  placeholder = "Select options",
  className,
}: MultiSelectProps<T>) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleOption = (option: T) => {
    if (selectedValues.includes(option)) {
      onChange(selectedValues.filter((item) => item !== option));
    } else {
      onChange([...selectedValues, option]);
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const displayText = selectedValues.length > 0
    ? selectedValues.join(", ")
    : placeholder;

  return (
    <div ref={dropdownRef} className={cn("relative w-full", className)}>
      <Button
        type="button"
        variant="outline"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center bg-white text-left font-normal"
      >
        <span className="truncate">{displayText}</span>
        <ChevronDown className={cn("h-4 w-4 transition-transform", isOpen ? "transform rotate-180" : "")} />
      </Button>

      {isOpen && (
        <div className="absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          {options.map((option) => (
            <div
              key={option}
              className={cn(
                "relative cursor-pointer select-none py-2 pl-10 pr-4 hover:bg-bookapp-light",
                selectedValues.includes(option) ? "bg-bookapp-light" : ""
              )}
              onClick={() => toggleOption(option)}
            >
              <span className={cn("block truncate font-normal", selectedValues.includes(option) ? "font-medium" : "")}>
                {option}
              </span>
              {selectedValues.includes(option) && (
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-bookapp-accent">
                  <Check className="h-4 w-4" aria-hidden="true" />
                </span>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MultiSelect;
