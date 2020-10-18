export interface CoursePartBase {
  name: string;
  exerciseCount: number;
};

interface PartWithDescription extends CoursePartBase {
  description: string;
};

interface CoursePartOne extends CoursePartBase {
  name: 'Fundamentals';
  description: string;
};

interface CoursePartTwo extends CoursePartBase {
  name: 'Using props to pass data';
  groupProjectCount: number;
};

interface CoursePartThree extends PartWithDescription {
  name: 'Deeper type usage';
  exerciseSubmissionLink: string;
};

interface CoursePartFour extends PartWithDescription {
  name: 'This is the fourth part';
  status: string;
}


export type CoursePart = CoursePartOne | CoursePartTwo | CoursePartThree | CoursePartFour;