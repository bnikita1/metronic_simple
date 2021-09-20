import React, { useState, useEffect } from 'react';
import { Modal,InputGroup,Form,Col } from "react-bootstrap";
import { addCategories, updateCategories } from '../../../reduxs/actions';
import { useDispatch } from "react-redux";

const AddEditCategoryModal = ({ isEdit, show, setModal, onHide, catgory }) => {
    
    const [formErrors, setFormErrors] = useState({category:'',description:''});
    const [category, setCategory] = useState(catgory);
    const dispatch = useDispatch();
   
   
    const onCategory = (e, name) => {
        onCategoryBlur(e.target.value, name);
        
        let cat = category;
        cat[name] = e.target.value;       
        setCategory({...cat});
    }

    const onSubmit = (values) => {

        if ((formErrors.category.trim().length > 0 || formErrors.description.trim().length > 0) || (category.description.length <= 0 || category.category.length <= 0)) {
            
            if (category.description.length <= 0) {
                onCategoryBlur('', "description");
            } if (category.category.length <= 0) {
                onCategoryBlur('', "category");
            }
            console.log("ERROR IN SUBM<T", values);
            return;
        }
        else {
            if (isEdit) {
                dispatch(updateCategories(category));
            
            }
            else {
                console.log("ADD EDIT object");
                dispatch(addCategories({ category: category.category, description: category.description }));
            }
        }
            setModal(false);
    }


    const onCategoryBlur = (value, name) => {

        let regxs = {"category":3,"description":3}

        let errors = formErrors;
        errors[name] = "";
        const regex = /^[A-Za-z]+$/;
        if (value.trim().length <=0) {
            errors[name] = "Cannot be blank";
        } else if (!regex.test(value)) {
            errors[name]
                = "Invalid characters";
        }
       else if (value.length < regxs[name])
        {
            errors[name] = "Minimum "+ regxs[name] + "characters are required"
        }
        // console.log("BLURED", errors);
        setFormErrors({...errors});
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            aria-labelledby="example-modal-sizes-title-lg"
        >
            <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-lg">
                    Customer Delete
          </Modal.Title>
            </Modal.Header>
            <Modal.Body>
          
                <Form  >
                    <Form.Group className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label column sm="2">
                            Name
    </Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" name="name" onBlur={(e) => { onCategoryBlur(e.target.value, "category") }} onChange={(e) => { onCategory(e, "category") }} value={category.category || ''} defaultValue="email@example.com" />
                        </Col>
                        {formErrors.category && formErrors.category.trim().length > 0 && (
                            <span className="text-danger">{formErrors.category}</span>
                        )}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                            Description
    </Form.Label>
                        <Col sm="10">
                            <Form.Control as="textarea" name="" onBlur={(e) => { onCategoryBlur(e.target.value, "description") }} onChange={(e) => { onCategory(e, "description") }} rows={3} value={category.description || ''} placeholder="description" />
                        </Col>
                        {formErrors.description && formErrors.description.trim().length > 0 && (
                            <span className="text-danger">{formErrors.description}</span>
                        )}
                    </Form.Group>


                    <button
                        type="button"
                        onClick={onSubmit}
                        className="btn btn-primary btn-elevate"
                    >
                        {isEdit ? 'Edit' : 'Add'}
                    </button>

                    <button
                        type="button"
                        onClick={onHide}
                        className="btn btn-light btn-elevate"
                    >
                        Cancel
            </button>
                </Form>
                
            </Modal.Body>
            <Modal.Footer>
            </Modal.Footer>
        </Modal>
    );
}

export default AddEditCategoryModal;