import React, {Component} from "react";
import Button from "./Button";

class Form extends Component {

    constructor(props) {
        super(props);

        this.state = {
            errors: {
                name: "",
                description: "",
                weight: "",
                price: "",
            },
        }

        this.newItem = {
            name: null,
            category: "breakfast",
            description: null,
            weight: null,
            diet: "non-vegetarian",
            price: null,
        }

        if(this.props.selectedRow) {
            Object.keys(this.props.selectedRow).forEach((field) => {
                this.newItem[field] = this.props.selectedRow[field];
            })
        }

        this.handleChange = this.handleChange.bind(this);
        this.validateForm =  this.validateForm.bind(this);
        this.submitData =  this.submitData.bind(this);
    }

    handleChange(e) {
        const {name, value} = e.target;
        this.newItem[name] = value.trim();
    }

    validateForm() {

        const errors = this.state.errors;
        const newItem = this.newItem;
        let valid = true;

        Object.keys(errors).forEach((field) => {

            if(field === 'name' || field === 'description') {
                if(!newItem[field] || newItem[field].length === 0) {
                    errors[field] = (field + ' is not valid');
                    valid = false;
                }
            } else {
                if(!newItem[field] || newItem[field] <= 0) {
                    errors[field] = (field + ' is not valid');
                    valid = false;
                }
            }

        });

        this.setState({errors});
        return valid;
    }

    submitData(e) {
        e.preventDefault();
        if(this.validateForm()) {
            this.props.submitData(this.newItem);
        }
    }

    render() {
        const errors = this.state.errors;
        const newItem = this.newItem;
        return (
            <form onSubmit={this.submitData}>
                <label htmlFor="name">
                    <span>Name</span>
                    <input type="text" className="input-field" defaultValue={newItem.name} name="name" onChange={this.handleChange}/>
                </label>
                <div>
                    <span className='error'>{errors.name}</span>
                </div>
                <label htmlFor="category">
                    <span>Category</span>
                    <select name="category" className="select-field" defaultValue={newItem.category} onChange={this.handleChange}>
                        <option value="breakfast">Breakfast</option>
                        <option value="appetizers">Appetizers</option>
                        <option value="salads">Salads</option>q
                        <option value="soups">Soups</option>
                        <option value="meat dishes">Meat Dishes</option>
                        <option value="bowls">Bowls</option>
                        <option value="pasta">Salads</option>
                        <option value="burger and sandwich">Burger and sandwich</option>
                        <option value="garnish">Garnish</option>
                        <option value="dessert">Dessert</option>
                    </select>
                </label>
                <label htmlFor="description">
                    <span>Description</span>
                    <textarea name="description" className="textarea-field" defaultValue={newItem.description} onChange={this.handleChange} />
                </label>
                <div>
                    <span className='error'>{errors.description}</span>
                </div>
                <label htmlFor="weight">
                    <span>Weight</span>
                    <input type="number" className="input-field" name="weight" defaultValue={newItem.weight} onChange={this.handleChange}/>
                </label>
                <div>
                    <span className='error'>{errors.weight}</span>
                </div>
                <label htmlFor="diet">
                    <span>Diet</span>
                    <select name="diet" className="select-field" defaultValue={newItem.diet} onChange={this.handleChange}>
                        <option value="non-vegetarian">Non-vegetarian</option>
                        <option value="vegetarian">Vegetarian</option>
                        <option value="vegan">Vegan</option>
                    </select>
                </label>
                <label htmlFor="price">
                    <span>Price</span>
                    <input type="number" className="input-field" name="price" defaultValue={newItem.price} onChange={this.handleChange}/>
                </label>
                <div>
                    <span className="error">{errors.price}</span>
                </div>
                <br/>
                <Button text="Save"  className="addButton"/>
            </form>
        )
    }
}

export default Form;