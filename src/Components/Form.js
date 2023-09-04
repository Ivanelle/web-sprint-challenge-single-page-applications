import React, { useState, useEffect} from 'react';
import userSchema from '../Validation/userSchema';
import * as yup from 'yup';
import axios from 'axios';

const style = { margin: '1rem', padding: '1rem', border: '2px solid black' }

const initialValues = {
	name: '',
 	size: '',
    sauce:'',
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



export default function Form(props) {
const [values, setValues] = useState(initialValues);
const [errors, setErrors] = useState(initialErrors);



const onChange = evt => {
    let { type, name, value, checked } = evt.target
    const valueToUse = type === 'checkbox' ? checked : value;
    setValues({ ...values, [name]: valueToUse })
    yup.reach(userSchema, name).validate(value)
    .then(() => setErrors({...errors, [name]: ''}))
    .catch((err) => setErrors({...errors, [name]: err.errors[0]}))
    }
    
    const onSubmit = evt => {
    evt.preventDefault()
    axios.post('https://reqres.in/api/orders', values)
        .then(res => {
            setValues(res.data)
        })
        .catch((err) => {
            console.error(err)
        })
    }

    return (

    <div>

        <h2>Build Your Own Pizza</h2>
        <form onSubmit={onSubmit}>
            <div>
            <h3 htmlFor='name'>Insert Name:</h3>
            <input value={values.name} id='name-input' onChange={onChange} type='text' name='name' placeholder='Your Pizzas Name'/>
            { errors.name && <div className='validation'>{errors.name}</div> }
            </div>

            <div>
            <h3>Choose your Size</h3>
            <select value={values.size} id='size-dropdown' onChange={onChange} name='size'>
                <option value=''>--Choose Size--</option>
                <option value='small'>Small</option>
                <option value='medium'>Medium</option>
                <option value='large'>Large</option>
            </select>
            </div>

            <div>
                
                <h3>Saucey Boys</h3>
                <label>
                <input checked={values.sauce === 'patis'} onChange={onChange} type='radio' name='sauce' value='patis'/>
                Patis
                </label>
                <label>
                <input checked={values.sauce === 'spicy'} onChange={onChange} type='radio' name='sauce' value='spicy'/>
                Spicy Red Sauce
                </label>
                <label>
                <input checked={values.sauce === 'alfredo'} onChange={onChange} type='radio' name='sauce' value='alfredo'/>
                Alfredo
                </label>
                <label>
                <input checked={values.sauce === 'pesto'} onChange={onChange} type='radio' name='sauce' value='pesto'/>
                Pesto
                </label>
                
            </div>

            <div>
                <h3>Choose your Toppings</h3>
                <label>
                <input values={values.hasPineapple} onChange={onChange} type='checkbox' name='pineapple'/>
                Pineapple
                </label>

                <label>
                <input values={values.hasPulledPork} onChange={onChange} type='checkbox' name='pulledPork'/>
                Pulled Pork
                </label>

                <label>
                <input values={values.hasSpinach} onChange={onChange} type='checkbox' name='spinach'/>
                Spinach
                </label>

                <label>
                <input values={values.hasHam} onChange={onChange} type='checkbox' name='ham'/>
                Ham
                </label>

                <label>
                <input values={values.hasPepperoni} onChange={onChange} type='checkbox' name='pepperoni'/>
                Pepperoni
                </label>
            </div>

            <div>
                <h3>Special Instructions</h3>
                <textarea values={values.specialText} id='special-text' onChange={onChange} name='specialText' />
            </div>

            <div>
                <button id='order-button' type='submit' onSubmit={onSubmit}>
                    Gimme!
                </button>
            </div>
         </form>
    </div>
)}