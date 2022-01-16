import { initializeCourses } from './pages';
import { Collapse, Dropdown } from 'bootstrap';
import '../css/main.scss'

/**
 * Loads functions if regarding class is exists
 */
window.onload = async function() {

    if (document.querySelector('.js-courses-section')) {
        initializeCourses();
    }
}