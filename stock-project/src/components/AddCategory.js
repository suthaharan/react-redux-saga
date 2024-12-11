
import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { addCategory } from '../store/actions';
const AddCategory = () => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({ name: "", id: "" });
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div className="container">
            <div className="cta-form">
            <h2>Fill out the form!</h2> 
            </div>
            <form action="" className="form">
        
            <input type="text" placeholder="ID" className="form__input" name="id" value={formData.id} onChange={handleInputChange}/>
            
            <input type="text" placeholder="Name" className="form__input" name="name" value={formData.name} onChange={handleInputChange} />
        
            <button onClick={()=>dispatch(addCategory(formData))}>Add Category</button>
            
            </form>
        </div>
    )
}

export default AddCategory;