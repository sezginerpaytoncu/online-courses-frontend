import { courseCardGenerator } from "./template";

/**
 * Renders course to DOM element
 * @param {*} renderElementClassName element that items will be rendered into it
 * @param {*} courses items that will be rendered
 * @param {*} wrapperClass class name that can be set to render element
 */
export const renderCourses = function (
  renderElementClassName,
  courses,
  wrapperClass = null
) {
  const targetElement = document.querySelector(renderElementClassName);

  if (!renderElementClassName || !targetElement) {
    throw new Error("Invalid target element id");
  }

  if (!Array.isArray(courses)) {
    throw new Error("Invalid type of courses");
  }

  courses.forEach((course) => {
    const { createdAt, courseName, image, description, rating, id } = course;

    const card = courseCardGenerator(
      createdAt,
      description,
      id,
      image,
      courseName,
      rating
    );

    const wrapperElement = document.createElement("div");
    wrapperElement.innerHTML = card;
    wrapperElement.className = wrapperClass;
    targetElement.appendChild(wrapperElement);
  });
};
