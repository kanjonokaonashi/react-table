import React, {Component} from "react";
import Modal from "react-modal";
import Button from "./Button";

class AddProductModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div className="form-style-2">
                <Button text='Add a new item' onClick={this.toggleModal} className='addButton'/>
                <Modal
                    isOpen={this.state.isOpen}
                    toggle={this.toggleModal}
                    onRequestClose={this.toggleModal}
                    className="mymodal"
                    overlayClassName="myoverlay"
                >
                    <h2>Add a new product</h2>

                    <div className="form-style-2">
                        <form action="" method="post">
                            <label htmlFor="field1"><span>Name</span>
                                <input type="text" className="input-field" name="field1" value=""/>
                            </label>
                            <label htmlFor="field4">
                                <span>Category</span>
                                <select name="field4" className="select-field">
                                    <option value="breakfast">Breakfast</option>
                                    <option value="appetizers">Appetizers</option>
                                    <option value="salads">Salads</option>
                                    <option value="soups">Audi</option>
                                    <option value="meat dishes">Breakfast</option>
                                    <option value="bowls">Appetizers</option>
                                    <option value="pasta">Salads</option>
                                    <option value="burger and sandwich">Burger and sandwich</option>
                                    <option value="garnish">Garnish</option>
                                    <option value="dessert">Dessert</option>
                                </select>
                            </label>
                            <label htmlFor="field5"><span>Description</span>
                                <textarea name="field5" className="textarea-field"/>
                            </label>
                            <label htmlFor="field1"><span>Weight</span>
                                <input type="number" className="input-field" name="field1" value=""/>
                            </label>
                            <label htmlFor="field4">
                                <span>Diet</span>
                                <select name="field4" className="select-field">
                                    <option value="breakfast">Non-vegetarian</option>
                                    <option value="appetizers">Vegetarian</option>
                                    <option value="salads">Vegan</option>
                                </select>
                            </label>
                        </form>
                    </div>
                    <div className="modal-buttons-container">
                        <Button text='Cancel' onClick={this.toggleModal} className='addButton'/>
                        <Button text='Save the item' onClick={this.props.onClick} className='addButton'/>
                    </div>
                </Modal>
            </div>
        )
    }
}

export default AddProductModal;
