import React, {Component} from "react";
import propTypes from "prop-types";
import Modal from "react-modal";
import Button from "./Button";
import Form from "./Form";

class FormModal extends Component {

    render() {
        const {isOpen, toggleModal, submit, selectedRow} = this.props;
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
                    <Form submit={submit} selectedRow={selectedRow}/>
                    <Button className="addButton" text="Cancel" onClick={toggleModal} />
                </div>
            </Modal>
        )
    }
}

FormModal.propTypes = {
    isOpen: propTypes.bool.isRequired,
    toggleModal: propTypes.func.isRequired,
    submit: propTypes.func.isRequired,
    selectedRow: propTypes.object,
}

export default FormModal;
