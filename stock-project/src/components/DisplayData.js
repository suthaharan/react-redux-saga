import { useDispatch, useSelector } from 'react-redux';
import { deleteCategory, getCategories } from '../store/actions';

import { useEffect } from 'react';

function DisplayData() {

    const dispatch = useDispatch();
    const { items, loading, error } = useSelector((state) => state.categoryReducer);
    console.warn("In Display Data", items);

    useEffect(()=>{
        dispatch(getCategories())
      },[dispatch])

    return (
        <div className='list-data'>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {items && items.length > 0 ? (
            <table className="table delete-row-example">
            <thead>
                <tr>
                <th>ID</th>
                <th>Category</th>
                <th>Action</th>
                </tr>
            </thead>
            <tbody>
            {items.map((item) => (
                <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td><button className="btn danger" onClick={()=>dispatch(deleteCategory(item.id))}>Delete</button></td>
                </tr>
            ))}
            </tbody>
             </table>
        ) : (
          <p>No data available.</p>
        )}
       
      </div>
    );
  }
  
  export default DisplayData;