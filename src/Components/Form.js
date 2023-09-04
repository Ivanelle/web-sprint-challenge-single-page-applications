import React, { useState, useEffect} from 'react';

const style = { margin: '1rem', padding: '1rem', border: '2px solid black' }

const initialValues = {
	name: '',
 	size: '',
 	hasPineapple: false,
 	hasPulledPork: false,
 	hasSpinach: false,
 	hasHam: false,
    hasPepperoni: false,
 	specialText: ''
 }

const initialErrors = {
	name: ''
}

const onChange = () => {
    
}

const onSubmit = () => {

}

export default function Form(props) {
const [values, setValues] = useState(initialValues);
const [errors, setErrors] = useState(initialErrors);

    return (
    <div style={style}>
        <h2>Build Your Own Pizza</h2>
        <label htmlFor='name'>Insert Name:</label>
        <input value={values.name} id ='name-input' onChange={onChange}type='text' name='name' placeholder='Your Pizzas Name'/>
    </div>
)}