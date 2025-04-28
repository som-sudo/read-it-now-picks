
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SelectDropdownProps<T extends string> {
  options: T[];
  value: T | undefined;
  onChange: (value: T) => void;
  placeholder?: string;
  className?: string;
}

export function SelectDropdown<T extends string>({
  options,
  value,
  onChange,
  placeholder = "Select an option",
  className,
}: SelectDropdownProps<T>) {
  return (
    <Select
      value={value}
      onValueChange={(val) => onChange(val as T)}
    >
      <SelectTrigger className={className}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectItem key={option} value={option}>
            {option}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

export default SelectDropdown;
