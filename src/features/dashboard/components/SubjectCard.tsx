import { SUBJECTS } from "@/constants";
import { cn } from "@/utils";
import React from "react";

interface SubjectCardProps {
  subject: (typeof SUBJECTS)[keyof typeof SUBJECTS];
  onClick?: () => void;
}

export const SubjectCard: React.FC<SubjectCardProps> = ({
  subject,
  onClick,
}) => {
  return (
    <div
      className={cn(
        "bg-white rounded-lg shadow-md p-6 cursor-pointer",
        "hover:shadow-lg transition-shadow duration-200",
        "border-l-4"
      )}
      style={{ borderLeftColor: subject.color }}
      onClick={onClick}
    >
      <div className="flex items-center space-x-3">
        <div className="text-3xl">{subject.icon}</div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            {subject.name}
          </h3>
          <p className="text-sm text-gray-500">Click to explore</p>
        </div>
      </div>
    </div>
  );
};

export default SubjectCard;
