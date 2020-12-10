import CategoryService from '../../services/category.service';

export const SET_CATEGORY = "[category] SET_CATEGORY";
export const SET_SELECTED_CATEGORY_ID="[category] SET_SELECTED_CATEGORY_ID"
export const SET_RESULT_OF_SEARCH_BY_CATEROTY="[category] SET_RESULT_OF_SEARCH_BY_CATEROTY"

export function setCategory(category) {
    return {
        type: SET_CATEGORY,
        payload: category
    }
}

export function setSelectedCategoryId(id) {
    return {
        type: SET_SELECTED_CATEGORY_ID,
        payload: id
    }
}

// export function selectedCategoryId(id){

// }
export function getAllCategories() {
    return async (dispatch) => {
        const categories = await CategoryService.getAllCategories();
        dispatch(setCategory(categories))
    }
}
export function setResultOfSearchByCategory(text) {
    return {
        type: SET_RESULT_OF_SEARCH_BY_CATEROTY,
        payload: text
    }
}
export function getResultOfSearchByCategory(text) {
    return async (dispatch) => {
        const categories = await CategoryService.getResultOfSearchByCategory(text);
        dispatch(setResultOfSearchByCategory(categories))
    }
}
