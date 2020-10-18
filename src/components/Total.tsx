import React from 'react'

interface TotalProps {
  totalExercisesCount: number;
};

const Total: React.FC<TotalProps> = ({ totalExercisesCount }) => {
  return (
    <>
    Number of Exercises:{" "}
    {totalExercisesCount}
    </>
  )
};

export default Total;
