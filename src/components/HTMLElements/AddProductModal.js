import React, {Component} from "react";
import Modal from "react-modal";
import Button from "./Button";
import Form from "./Form";

class AddProductModal extends Component {

    constructor(props) {
        super(props);

        this.state = {
            error: '',
        }
    }

    render() {
        const {isOpen, toggleModal} = this.props;

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
                    <Form />
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
