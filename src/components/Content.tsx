import React from 'react'

interface ContentProps {
  courseName: string;
  exerciseCount: number;
};

const Content: React.FC<ContentProps> = ({ courseName, exerciseCount }) => {
  return (
    <>
    <p> {courseName} - {exerciseCount} </p>
    </>
  );
};

export default Content;