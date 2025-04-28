
import React from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import MultiSelect from "./MultiSelect";
import SelectDropdown from "./SelectDropdown";
import {
  Interest,
  ReadingLevel,
  Mood,
  AgeGroup,
  ReadingTime,
  BookRequest,
} from "@/types/book";

interface BookFilterFormProps {
  formData: BookRequest;
  onChange: (formData: BookRequest) => void;
  onSubmit: () => void;
  isLoading: boolean;
}

const interestOptions: Interest[] = [
  "Romance",
  "Mystery",
  "Thriller",
  "Crime",
  "Fantasy",
  "Science Fiction",
  "Historical Fiction",
  "Horror",
  "Self-Help",
  "Biography",
];

const readingLevelOptions: ReadingLevel[] = [
  "Beginner",
  "Intermediate",
  "Advanced",
];

const moodOptions: Mood[] = [
  "Thoughtful",
  "Lighthearted",
  "Dark",
  "Inspirational",
  "Fantastical",
  "Intellectual",
  "Emotional",
  "Relaxed",
];

const ageGroupOptions: AgeGroup[] = ["Kids", "Teens", "Adults", "Seniors"];

const readingTimeOptions: ReadingTime[] = [
  "Short stories",
  "Medium reads",
  "Epic sagas",
];

const BookFilterForm: React.FC<BookFilterFormProps> = ({
  formData,
  onChange,
  onSubmit,
  isLoading,
}) => {
  const handleChange = <K extends keyof BookRequest>(
    key: K,
    value: BookRequest[K]
  ) => {
    onChange({ ...formData, [key]: value });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="interests">Interests (optional)</Label>
            <MultiSelect
              options={interestOptions}
              selectedValues={formData.interests}
              onChange={(value) => handleChange("interests", value)}
              placeholder="Select interests"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="reading-level">Reading Level</Label>
            <SelectDropdown
              options={readingLevelOptions}
              value={formData.readingLevel}
              onChange={(value) => handleChange("readingLevel", value)}
              placeholder="Select reading level"
              className="w-full"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="moods">Mood (optional)</Label>
            <MultiSelect
              options={moodOptions}
              selectedValues={formData.moods}
              onChange={(value) => handleChange("moods", value)}
              placeholder="Select moods"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="age-group">Age Group</Label>
            <SelectDropdown
              options={ageGroupOptions}
              value={formData.ageGroup}
              onChange={(value) => handleChange("ageGroup", value)}
              placeholder="Select age group"
              className="w-full"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="reading-time">Reading Time</Label>
            <SelectDropdown
              options={readingTimeOptions}
              value={formData.readingTime}
              onChange={(value) => handleChange("readingTime", value)}
              placeholder="Select reading time"
              className="w-full"
            />
          </div>

          <div className="flex items-end">
            <Button
              onClick={onSubmit}
              className="bg-bookapp-accent hover:bg-bookapp-accent/90 text-white w-full md:w-auto px-8"
              disabled={isLoading}
            >
              {isLoading ? "Generating..." : "Generate Recommendations"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookFilterForm;
