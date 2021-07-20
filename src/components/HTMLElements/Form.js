import React, {useState} from "react";
import propTypes from "prop-types";
import Button from "./Button";
import Input from "./Input";
import Select from "./Select";

const Form = (props) => {

    const [errors,setErrors] = useState({
        name: "",
        description: "",
        weight: "",
        price: "",
    });

    let newItem = props.selectedRow ? JSON.parse(JSON.stringify(props.selectedRow)) : {  //useRef
        name: null,
        category: "breakfast",
        description: null,
        weight: null,
        diet: "non-vegetarian",
        price: null,
    };

    function handleChange(e) {
        const {name, value} = e.target;
        newItem[name] = value.trim();
    }

    function submitData(e) {
        e.preventDefault();
        if(validateForm()) {
            props.submit(newItem);
        }
    }

    function validateForm() { //lodash

        let errorsCopy = JSON.parse(JSON.stringify(errors));
        let valid = true;

        Object.keys(errorsCopy).forEach((field) => {

            if(field === 'name' || field === 'description') {
                if(!newItem[field] || newItem[field].length === 0) {
                    errorsCopy[field] = (field + ' is not valid');
                    valid = false;
                }
            } else {
                if(!newItem[field] || newItem[field] <= 0) {
                    errorsCopy[field] = (field + ' is not valid');
                    valid = false;
                }
            }
        });

        setErrors({...errorsCopy});

        return valid;
    }

    return (
        <form onSubmit={submitData}>
            <label htmlFor="name">
                <span>Name</span>
                <Input
                    className="input-field"
                    type="text"
                    name="name"
                    defaultValue={newItem.name}
                    onChange={handleChange}
                />
            </label>
            <div>
                <span className='error'>{errors.name}</span>
            </div>
            <label htmlFor="category">
                <span>Category</span>
                <Select
                    className="select-field"
                    name="category"
                    defaultValue={newItem.category}
                    onChange={handleChange}
                    optionsList={['Breakfast', 'Appetizers', 'Salads', 'Soups', 'Meat Dishes', 'Bowls', 'Salads', 'Burger and sandwich', 'Garnish', 'Dessert']}
                />
            </label>
            <label htmlFor="description">
                <span>Description</span>
                <textarea className="textarea-field" name="description" defaultValue={newItem.description} onChange={handleChange} />
            </label>
            <div>
                <span className='error'>{errors.description}</span>
            </div>
            <label htmlFor="weight">
                <span>Weight</span>
                <Input
                    className="input-field"
                    name="weight"
                    type="number"
                    defaultValue={newItem.weight}
                    onChange={handleChange}
                />
            </label>
            <div>
                <span className='error'>{errors.weight}</span>
            </div>
            <label htmlFor="diet">
                <span>Diet</span>
                <Select
                    className="select-field"
                    name="diet"
                    defaultValue={newItem.diet}
                    onChange={handleChange}
                    optionsList={['Non-vegetarian', 'Vegetarian', 'Vegan']}
                />
            </label>
            <label htmlFor="price">
                <span>Price</span>
                <Input
                    className="input-field"
                    name="price"
                    type="number"
                    defaultValue={newItem.price}
                    onChange={handleChange}
                />
            </label>
            <div>
                <span className="error">{errors.price}</span>
            </div>
            <br/>
            <Button className="addButton" text="Save" type="submit" />
        </form>
    )
}

Form.propTypes = {
    submit: propTypes.func.isRequired,
    selectedRow: propTypes.object,
}

export default Form;