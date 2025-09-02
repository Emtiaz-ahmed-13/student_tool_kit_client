import React from 'react';
import { SubjectCard } from '../components/SubjectCard';
import { SUBJECTS } from '@/constants';

export const DashboardPage: React.FC = () => {
  const handleSubjectClick = (subjectId: string) => {
    // TODO: Navigate to subject page
    console.log(`Navigate to ${subjectId}`);
  };

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to Your Student Toolkit
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Your comprehensive learning companion for Physics, Mathematics, Computer Science, and Chess.
          Organize your studies, track progress, and excel in your academic journey.
        </p>
      </div>

      {/* Subjects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {Object.values(SUBJECTS).map((subject) => (
          <SubjectCard
            key={subject.id}
            subject={subject}
            onClick={() => handleSubjectClick(subject.id)}
          />
        ))}
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <div className="text-3xl font-bold text-blue-600">4</div>
          <div className="text-gray-600">Subjects</div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <div className="text-3xl font-bold text-green-600">12</div>
          <div className="text-gray-600">Active Courses</div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <div className="text-3xl font-bold text-purple-600">85%</div>
          <div className="text-gray-600">Overall Progress</div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;