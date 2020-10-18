import React from 'react'
import { assertNever } from '../common/utils';
import { CoursePart } from '../types/CourseTypes';
import Part from './Part';

interface ContentProps {
  courseParts: CoursePart[]
};

const Content: React.FC<ContentProps> = ({ courseParts }) => {
  return (
    <>
    {courseParts.map((part) => {
      switch (part.name) {
        case 'Fundamentals':

        return <Part exerciseCount={part.exerciseCount} name={part.name} description={part.description} />

        case 'Using props to pass data': 

        return <Part name={part.name} exerciseCount={part.exerciseCount} groupProjectCount={part.groupProjectCount}  />

        case 'Deeper type usage':

        return <Part name={part.name} exerciseCount={part.exerciseCount} description={part.description} exerciseSubmissionLink={part.exerciseSubmissionLink} />

        case 'This is the fourth part':

        return <Part name={part.name} exerciseCount={part.exerciseCount} description={part.description} status={part.status} />

        default:
          return assertNever(part);
      }
    })}
    </>
  );
};

export default Content;