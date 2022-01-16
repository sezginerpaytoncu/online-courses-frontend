/**
 * Generates course item cards for reviewing courses on homepage
 * @param {*} createDate 
 * @param {*} description 
 * @param {*} id 
 * @param {*} image 
 * @param {*} courseName 
 * @param {*} rating 
 * @returns 
 */
export const courseCardGenerator = function(createDate, description, id, image, courseName, rating) {
    return `<div id="course-id-${id}" class="card my-3 mx-auto" style="height: 30rem;">
                <img src="${image}/${id}" class="card-img-top" alt="Course Image">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title"> ${courseName} </h5>
                    <div class="fs-6"> Rating: ${rating} / 100 </div>
                    <div class="fs-6"> ${createDate} </div>
                    <p class="card-text"> ${description} </p>
                    <button type="submit" class="mt-auto rounded">More Info</button>
                </div>
            </div>`;
}