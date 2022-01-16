const API_URL = 'https://61af63543e2aba0017c49295.mockapi.io/api'

/**
 * Get All Courses with given parameters
 * @param {*} page indicates page of results
 * @param {*} size indicates size of items in page
 * @returns object that contains Courses
 */
export const getCourses = (page = 1, size = 12) => {
    const MUTATED_URL = `${API_URL}/courses?page=${page}&limit=${size}`;

    return fetch(MUTATED_URL, {
        method: "GET"
    })
}

/**
 * Get course by given id
 * @param {*} courseId determines course id that will be get
 * @returns Object that obtained from API
 */
export const getProductById = (productId) => {
    const MUTATED_URL = `${API_URL}/courses/${courseId}`;

    return fetch(MUTATED_URL, {
        method: "GET"
    })
}
