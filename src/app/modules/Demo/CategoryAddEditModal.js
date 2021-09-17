import React,{useState} from 'react'
import { Modal,InputGroup,Form,Col } from "react-bootstrap";
import { addCategories, updateCategories } from '../../../reduxs/actions';
import { useDispatch } from "react-redux";
// import { Formik,  Field } from 'formik';
// import * as Yup from 'yup';
// import { useFormik } from 'formik';

const AddEditCategoryModal=({isEdit, show, setModal,onHide, catgory }) => {
    
    const [category, setCategory] = useState(catgory);
    const dispatch = useDispatch();
    const onCategory = (e, name) => {
        let cat = category;
        cat[name] = e.target.value;       
        setCategory({...cat});
    }

    const onSubmit = () => {
        if (isEdit)
        {
            dispatch(updateCategories(category));
            
        }
        else {
            console.log("ADD EDIT object");
           dispatch(addCategories({ category: category.category, description: category.description }));
        }
        setModal(false);
    }


    // const formik = useFormik({
    //     initialValues: {
    //       firstName: '',
    //       lastName: '',
    //       email: '',
    //     },
    //     validate,
    //     onSubmit: values => {
    //       alert(JSON.stringify(values, null, 2));
    //     },
    // });
    
    // const validate = values => {
    //     const errors = {};
    //     if (!values.firstName) {
    //       errors.firstName = 'Required';
    //     } else if (values.firstName.length > 15) {
    //       errors.firstName = 'Must be 15 characters or less';
    //     }
      
    //     if (!values.lastName) {
    //       errors.lastName = 'Required';
    //     } else if (values.lastName.length > 20) {
    //       errors.lastName = 'Must be 20 characters or less';
    //     }
      
    //     if (!values.email) {
    //       errors.email = 'Required';
    //     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    //       errors.email = 'Invalid email address';
    //     }
      
    //     return errors;
    //   };

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
          
                <Form   >
                    <Form.Group className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label column sm="2">
                            Name
    </Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" name="name" onChange={(e) => { onCategory(e, "category") }} value={category.category || ''} defaultValue="email@example.com" />
                        </Col>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                            Description
    </Form.Label>
                        <Col sm="10">
                            <Form.Control as="textarea" name onChange={(e) => { onCategory(e, "description") }} rows={3} value={category.description || ''} placeholder="description" />
                        </Col>
                    </Form.Group>
                </Form>
                
            </Modal.Body>
            <Modal.Footer>
                <div>
                    <button
                        type="button"
                        onClick={onHide}
                        className="btn btn-light btn-elevate"
                    >
                        Cancel
            </button>
                    <> </>
                    <button
                        type="button"
                        onClick={onSubmit}
                        className="btn btn-primary btn-elevate"
                    >
                        {isEdit ? 'Edit' : 'Add'}
                    </button>
                </div>
            </Modal.Footer>
        </Modal>
    )
}

export default AddEditCategoryModal;