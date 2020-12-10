// import { SEARCH_BY_CATEGORY, SEARCH_BY_LOCATION, SEARCH_BY_TEXT,GET_ALL_CATEGORIES } from '../constants/actionTypes'
// import * as api from '../api/index'

// export const searchByCategory = (id) => async (dispatch) => {
//     try {
//         const { data } = await api.getSearchByCategory(id);
//         dispatch({ type: SEARCH_BY_CATEGORY, payload: data })
//     } catch (error) {
//         console.log(error.message);

//     }
// };
// export const serchByLocation = (location) => async (dispatch) => {
//     try {
//         const { data } = await api.getSearchByLocation(location);
//         dispatch({ type: SEARCH_BY_LOCATION, payload: data })
//     } catch (error) {
//         console.log(error.message);
//     }
// };
// export const searchByText = (text) => async (dispatch) => {
//     try {
//         const { data } = await api.getSearchByText(text);
//         dispatch({ type: SEARCH_BY_TEXT, payload: data })
//     } catch (error) {
//         console.log(error.message);
//     }
// }
// export const getCategory = () => async (dispatch) => {
//     try {
//         const { data } = await api.getCategories();
//         console.log("actions")
//         console.log(data)
//         dispatch({ type: GET_ALL_CATEGORIES, payload: data })
//     } catch (error) {
//         console.log(error.message);
//     }
// }
// export const setCurrentCategoryId = (id) => async (dispatch) => {
//     try {
//         const { data } = await api.getCategories();
//         console.log("actions")
//         console.log(data)
//         dispatch({ type: GET_ALL_CATEGORIES, payload: data })
//     } catch (error) {
//         console.log(error.message);
//     }
// }