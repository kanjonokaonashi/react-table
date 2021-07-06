import React, {Component} from "react";
import Modal from "react-modal";
import Button from "./Button";
import Form from "./Form";

class FormModal extends Component {

    render() {
        const {isOpen, toggleModal, selectedRow} = this.props;
        const modalTitle = selectedRow ? "Edit the product" : "Add a new product";
        return (
            <Modal
                isOpen={isOpen}
                toggle={toggleModal}
                onRequestClose={toggleModal}
                className="mymodal"
                overlayClassName="myoverlay"
            >
                <h2>{modalTitle}</h2>
                <div className="form-style-2">
                    <Form submitData={this.props.submit} selectedRow={selectedRow}/>
                    <Button text='Cancel' onClick={toggleModal} className='addButton'/>
                </div>

            </Modal>
        )
    }
}

export default FormModal;
