import React, {Component} from "react";
import Modal from "react-modal";
import Button from "./Button";

class AddProductModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            error: '',
        }

        this.newItem = {
            fields: {
                name: "",
                category: "breakfast",
                description: "",
                weight: 0,
                diet: "non-vegetarian",
                price: 0,
            },

            handleNameChange: (e) => {
                this.newItem.fields.name = e.target.value.trim();
                },

            handleCategoryChange: (e) => {
                this.newItem.fields.category = e.target.value;
                },

            handleDescriptionChange: (e) => {
                this.newItem.fields.description = e.target.value.trim();
                },

            handleWeightChange: (e) => {
                this.newItem.fields.weight = e.target.value;
                },

            handleDietChange: (e) => {
                this.newItem.fields.diet = e.target.value;
                },

            handlePriceChange: (e) => {
                this.newItem.fields.price = e.target.value;
                },
        }
        this.submitData =  this.submitData.bind(this);
        this.isFormValid =  this.isFormValid.bind(this);
    }

    handleChange(fieldName, value) {
        this.newItem[fieldName] = value
    }

    submitData() {
        if(this.props.oldItem) {
            console.log("in submit ")
            this.newItem.fields = this.props.oldItem;
            this.props.submit(this.newItem.fields);
            this.props.toggleModal();
            this.newItem.fields = {
                name: "",
                category: "breakfast",
                description: "",
                weight: 0,
                diet: "non-vegetarian",
                price: 0,
            };
        } else {
            if(this.isFormValid()) {
                this.props.submit(this.newItem.fields);
                this.newItem.fields = {
                    name: "",
                    category: "breakfast",
                    description: "",
                    weight: 0,
                    diet: "non-vegetarian",
                    price: 0,
                };
                this.props.toggleModal();
                if(this.state.error) {
                    console.log("there was an error");
                    this.setState({error: ""});
                }
            } else {
                if(!this.state.error) {
                    this.setState({error: "Please fill in all the information correctly"});
                }
            }
        }
    }

    isFormValid() {
        return !(this.newItem.fields.name.trim().length === 0 ||
            this.newItem.fields.description.trim().length === 0 ||
            this.newItem.fields.weight <= 0 || this.newItem.fields.price <= 0);
    }

    render() {
        const {isOpen, toggleModal} = this.props;
        const error = this.state.error;
        const newItem = this.newItem;
        return (
            <Modal
                isOpen={isOpen}
                toggle={toggleModal}
                onRequestClose={toggleModal}
                className="mymodal"
                overlayClassName="myoverlay"
            >
                <h2>Add a new product</h2>

                <div className="form-style-2">
                    <form action="" method="post">
                        <label htmlFor="field1"><span>Name</span>
                            <input type="text" className="input-field" name="field1" onChange={newItem.handleNameChange}/>
                        </label>
                        <label htmlFor="field2">
                            <span>Category</span>
                            <select name="field2" className="select-field" onChange={newItem.handleCategoryChange}>
                                <option value="breakfast">Breakfast</option>
                                <option value="appetizers">Appetizers</option>
                                <option value="salads">Salads</option>q
                                <option value="soups">Soups</option>
                                <option value="meat dishes">Breakfast</option>
                                <option value="bowls">Appetizers</option>
                                <option value="pasta">Salads</option>
                                <option value="burger and sandwich">Burger and sandwich</option>
                                <option value="garnish">Garnish</option>
                                <option value="dessert">Dessert</option>
                            </select>
                        </label>
                        <label htmlFor="field3"><span>Description</span>
                            <textarea name="field3" className="textarea-field" onChange={newItem.handleDescriptionChange}/>
                        </label>
                        <label htmlFor="field4"><span>Weight</span>
                            <input type="number" className="input-field" name="field4" onChange={newItem.handleWeightChange}/>
                        </label>
                        <label htmlFor="field5">
                            <span>Diet</span>
                            <select name="field5" className="select-field" onChange={newItem.handleDietChange}>
                                <option value="non-vegetarian">Non-vegetarian</option>
                                <option value="vegetarian">Vegetarian</option>
                                <option value="vegan">Vegan</option>
                            </select>
                        </label>
                        <label htmlFor="field6"><span>Price</span>
                            <input type="number" className="input-field" name="field6" onChange={newItem.handlePriceChange}/>
                        </label>
                        <div>
                            <span className='error'>{error}</span>
                        </div>
                    </form>
                </div>
                <div className="modal-buttons-container">
                    <Button text='Cancel' onClick={toggleModal} className='addButton'/>
                    <Button text='Save the item' onClick={this.submitData} className='addButton'/>
                </div>
            </Modal>
        )
    }
}

export default AddProductModal;
