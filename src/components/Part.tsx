import React from 'react';
import { CoursePartBase } from '../types/CourseTypes'; 

interface PartProps extends CoursePartBase {
  description?: string;
  groupProjectCount?: number;
  exerciseSubmissionLink?: string;
  status?: string;
}

const Part: React.FC<PartProps> = ({ name, exerciseCount, description, exerciseSubmissionLink, groupProjectCount, status }) => {
  return (
    <p> {name} - Exercises: {exerciseCount}
     {description ? ` - Description: ${description}` : ''}
      {exerciseSubmissionLink ? ` Link: ${exerciseSubmissionLink}` : ''}  {groupProjectCount ? `- Group Project Count: ${groupProjectCount}` : ''}
      { status? `Status of development: ${status}` : ''}
       </p>
  );
};

export default Part;