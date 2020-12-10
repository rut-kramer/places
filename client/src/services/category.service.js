
import axios from 'axios';


class CategoryService {


    getAllCategories() {
        let url = 'http://localhost:3002/api';

        return axios.get(url + '/getAllCategories').then(response => {
            console.log(response)
            return response.data
        }).catch(o => { console.log(o); });
    }
    getResultOfSearchByCategory(text) {
        let url = 'http://localhost:3002/api';

        return axios.get(url + `/getBuisnessByCategory/id=${text}`).then(response => {
            console.log(response)
            return response.data
        }).catch(o => { console.log(o); });
    }


}

export default new CategoryService()