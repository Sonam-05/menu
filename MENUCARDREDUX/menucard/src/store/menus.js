import store from "./configStore";
import data from "../Data";

//ACTIONS
export const filterByCategory = (categoryType) => {
    store.dispatch({
        type : 'FILTER_BY_CATEGORY',
        payload : {
            categoryType : categoryType
        }
    })
}

//REDUCERS
const reducer = (state=data, action) => {
    console.log('okay')
    if(action.type === 'FILTER_BY_CATEGORY'){
        return state.filter((singleObj) => singleObj.category === action.payload.categoryType)
    }
}

export default reducer;