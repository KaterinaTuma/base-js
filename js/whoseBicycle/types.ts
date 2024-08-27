export type Diary = {
  'algebra': number;
  'history': number;
  'physics': number;
  'geography': number;
  'chemistry': number;
}

type TestUnit = {
  objA: Diary;
  objB: Diary;
  objC: Diary;
  expectedStr: string;
};

export type TestData = {
  test1: TestUnit;
  test2: TestUnit;
  test3: TestUnit;
  test4: TestUnit;
}
