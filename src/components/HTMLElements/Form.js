import React, {Component} from "react";
import propTypes from "prop-types";
import Button from "./Button";
import Input from "./Input";
import Select from "./Select";

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
            this.newItem = this.props.selectedRow;
        }

        this.handleChange = this.handleChange.bind(this);
        this.validateForm =  this.validateForm.bind(this);
        this.submitData =  this.submitData.bind(this);
    }

    handleChange(e) {
        const {name, value} = e.target;
        this.newItem[name] = value.trim();
    }

    submitData(e) {
        e.preventDefault();
        if(this.validateForm()) {
            this.props.submit(this.newItem);
        }
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

    render() {
        const errors = this.state.errors;
        const newItem = this.newItem;
        return (
            <form onSubmit={this.submitData}>
                <label htmlFor="name">
                    <span>Name</span>
                    <Input
                        className="input-field"
                        type="text"
                        name="name"
                        defaultValue={newItem.name}
                        onChange={this.handleChange}
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
                        onChange={this.handleChange}
                        optionsList={['Breakfast', 'Appetizers', 'Salads', 'Soups', 'Meat Dishes', 'Bowls', 'Salads', 'Burger and sandwich', 'Garnish', 'Dessert']}
                    />
                </label>
                <label htmlFor="description">
                    <span>Description</span>
                    <textarea className="textarea-field" name="description" defaultValue={newItem.description} onChange={this.handleChange} />
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
                        onChange={this.handleChange}
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
                        onChange={this.handleChange}
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
                        onChange={this.handleChange}
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
}

Form.propTypes = {
    submit: propTypes.func.isRequired,
    selectedRow: propTypes.object,
}

export default Form;