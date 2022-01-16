import { getCourses } from '../services/api';
import { renderCourses } from '../helpers';

/**
 * Initialzes products in order to render
 */
export const initializeCourses = async function() {
    try {
        const coursesResponse = await getCourses(1, 12);
        const courses = await coursesResponse.json();
        renderCourses('.js-courses-section', courses, 'col-xs-12 col-sm-6 col-md-4');
    } catch (error) {
        console.log(error);
    }
}