import React, { useContext } from "react";
import CourseCard from "./CourseCard";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/AddContext";

const CoursesSection = () => {
  const {allCourses} = useContext(AppContext)
  //console.log(allCourses);
  return (
    <div className="py-16 md:px-40 px-8">
      <h2 className="text-3xl font-medium text-gray-800">Learn from the best </h2>
      <p className="text-sm md:text-base text-gray-500 mt-3">
        Discover our top-rated courses across various categories. From Coding
        and design <br/> to business and wellness, our course are crafted to deliver
        results
      </p>
      
      <div className="grid grid-cols-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 md:px-0 my-10 md:my-16">
  {allCourses.slice(0, 4).map((course, index) => (
    <CourseCard key={index} course={course} />
  ))}
</div>

      <Link
        to={"/course-list"}
        onClick={() => scrollTo(0, 0)}
        className="text-gray-500 border border-gray-500/30 px-10 py-2 rounded "
      >
        Show All Courses
      </Link>
    </div>
  );
};

export default CoursesSection;
