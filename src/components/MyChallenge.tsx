import React from "react";
interface Challenge {
  [key: string]: number;
}
const MyChallenge: React.FC = () => {
  const object: any = {
    "Learner-0001": ["Course-0001", "Course-0002", "Course-0003"],
    "Learner-0002": ["Course-0002", "Course-0003", "Course-0004"],
  };
  let courses: string[] = [];

  Object.keys(object).forEach((val) => {
    courses = courses.concat(object[val]);
  });

  const challenge1 = (): string[] => {
   
    let duplicateCourses: string[] = [];
    let result = [];
    
    duplicateCourses = courses.filter((item, index) => {
      return courses.indexOf(item) !== index;
    });
    result = courses.filter((item) => !duplicateCourses.includes(item));
    return result;
  };

  const challenge2 = ()  => {
    return courses.reduce((acc: Challenge, curr) => {
      // eslint-disable-next-line no-sequences
      return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
    }, {});
  }

  const listCourses1 = challenge1();
  const listCourses2 = JSON.stringify(challenge2());

  return (
    <>
      <h2>Challenge 1</h2>
      <ul>
        {listCourses1.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
      <h2>Challenge 2</h2>
        <pre>{listCourses2}</pre>
    </>
  );
};
export default MyChallenge;
