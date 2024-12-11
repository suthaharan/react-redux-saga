
import { useDispatch, useSelector } from 'react-redux';
import {
    GET_CATEGORIES
} from "../store/actionTypes";

const GetCategories = () => {

    const dispatch = useDispatch();
    // console.log("Getting dispatched: ", dispatch);
    // const result = useSelector((state) => state.categoryReducer);

    const { items, loading, error } = useSelector((state) => state.categoryReducer);
    console.warn("In GetCategories", items);
    
    return (
        <div className="container">
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            <button onClick={()=>dispatch({ type: GET_CATEGORIES })}>Get Categories</button> 
            <h2>{ items && items.length > 0 ? items.length:0 }</h2>
        </div>
    )
}

export default GetCategories;