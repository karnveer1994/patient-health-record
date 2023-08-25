import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Container, Row, Col, Button, Form as BootstrapForm } from 'react-bootstrap';

interface HospitalFormValues {
  hospitalName: string;
  hospitalOwnerName: string;
  designation: string;
  contactNumber: string;
  landlineNumber: string;
  emailAddress: string;
  idProof: string;
  gstNumber: string;
}

const validationSchema = Yup.object().shape({
  hospitalName: Yup.string().required('Required'),
  hospitalOwnerName: Yup.string().required('Required'),
  designation: Yup.string().required('Required'),
  contactNumber: Yup.string().required('Required'),
  landlineNumber: Yup.string(),
  emailAddress: Yup.string().email('Invalid email').required('Required'),
  idProof: Yup.string().required('Required'),
  gstNumber: Yup.string().required('Required'),
});

const initialValues: HospitalFormValues = {
  hospitalName: '',
  hospitalOwnerName: '',
  designation: '',
  contactNumber: '',
  landlineNumber: '',
  emailAddress: '',
  idProof: '',
  gstNumber: '',
};

const HospitalForm: React.FC = () => {
  const handleSubmit = (values: HospitalFormValues) => {
    // Handle form submission here
    console.log(values);
  };

  return (
    <Container className="registration-form-container" >
       <h3 className='forms-title' style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', }}>Organisation Detail</h3>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <BootstrapForm.Group className="mb-3">
            <BootstrapForm.Label className="form-label-bold">Name of Hospital</BootstrapForm.Label>
            <Field
              type="text"
              id="hospitalName"
              name="hospitalName"
              className="form-control"
            />
            <ErrorMessage name="hospitalName" component="div" className="text-danger" />
          </BootstrapForm.Group>

          <BootstrapForm.Group className="mb-3">
            <BootstrapForm.Label className="form-label-bold">Hospital Owner Name</BootstrapForm.Label>
            <Field
              type="text"
              id="hospitalOwnerName"
              name="hospitalOwnerName"
              className="form-control"
            />
            <ErrorMessage name="hospitalOwnerName" component="div" className="text-danger" />
          </BootstrapForm.Group>

          <BootstrapForm.Group className="mb-3">
            <BootstrapForm.Label className="form-label-bold">Designation</BootstrapForm.Label>
            <Field
              type="text"
              id="designation"
              name="designation"
              className="form-control"
            />
            <ErrorMessage name="designation" component="div" className="text-danger" />
          </BootstrapForm.Group>

          <BootstrapForm.Group className="mb-3">
            <BootstrapForm.Label className="form-label-bold">Contact Number</BootstrapForm.Label>
            <Field
              type="text"
              id="contactNumber"
              name="contactNumber"
              className="form-control"
            />
            <ErrorMessage name="contactNumber" component="div" className="text-danger" />
          </BootstrapForm.Group>

          <BootstrapForm.Group className="mb-3">
            <BootstrapForm.Label className="form-label-bold">Landline Number</BootstrapForm.Label>
            <Field
              type="text"
              id="landlineNumber"
              name="landlineNumber"
              className="form-control"
            />
          </BootstrapForm.Group>

          <BootstrapForm.Group className="mb-3">
            <BootstrapForm.Label className="form-label-bold">Email Address</BootstrapForm.Label>
            <Field
              type="email"
              id="emailAddress"
              name="emailAddress"
              className="form-control"
            />
            <ErrorMessage name="emailAddress" component="div" className="text-danger" />
          </BootstrapForm.Group>

          <BootstrapForm.Group className="mb-3">
            <BootstrapForm.Label className="form-label-bold">Id Proof for Verification</BootstrapForm.Label>
            <Field
              type="text"
              id="idProof"
              name="idProof"
              className="form-control"
            />
            <ErrorMessage name="idProof" component="div" className="text-danger" />
          </BootstrapForm.Group>

          <BootstrapForm.Group className="mb-3">
            <BootstrapForm.Label className="form-label-bold">GST Number</BootstrapForm.Label>
            <Field
              type="text"
              id="gstNumber"
              name="gstNumber"
              className="form-control"
            />
            <ErrorMessage name="gstNumber" component="div" className="text-danger" />
          </BootstrapForm.Group>

          {/* <Button type="submit">Submit</Button> */}
        </Form>
      </Formik>
    </Container>
  );
};

export default HospitalForm;
