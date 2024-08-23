export type Students = {
  firstName: string;
  lastName: string;
  grades: number[];
};

export type StudentsAvgGrades = {
  lastName: string;
  avgGrade: number;
};

type TestUnit = {
  students: Students[];
  expectedStudentsAvgGrades: StudentsAvgGrades[];
};

export type TestData = {
  test1: TestUnit;
  test2: TestUnit;
  test3: TestUnit;
};
