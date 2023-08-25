import React from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { Formik, Field } from 'formik';

interface ContactFormValues {
  firstName: string;
  lastName: string;
  relationship: string;
  contactNumber: string;
  doctorFirstName: string;
  doctorLastName: string;
  doctorPhoneNumber: string;
  preferredPharmacy: string;
  pharmacyPhoneNumber: string;
}

const initialValues: ContactFormValues = {
  firstName: '',
  lastName: '',
  relationship: '',
  contactNumber: '',
  doctorFirstName: '',
  doctorLastName: '',
  doctorPhoneNumber: '',
  preferredPharmacy: '',
  pharmacyPhoneNumber: '',
};

const Emergency: React.FC = () => {
  const handleSubmit = (values: ContactFormValues) => {
    console.log(values);
    // You can perform any further actions here, like sending the data to a server.
  };

  return (
    <Container className="registration-form-container">
      <h3 className='forms-title' style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300' }}>
        Emergency Contact Form
      </h3>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Col md={6}>
                <Form.Label className="form-label-bold">First Name</Form.Label>
                <Field
                  name="firstName"
                  type="text"
                  className="form-control"
                  style={{
                    fontFamily: 'Arial, sans-serif',
                    fontWeight: 'normal',
                    color: '#333',
                  }}
                />
              </Col>
              <Col md={6}>
                <Form.Label className="form-label-bold">Last Name</Form.Label>
                <Field
                  name="lastName"
                  type="text"
                  className="form-control"
                  style={{
                    fontFamily: 'Arial, sans-serif',
                    fontWeight: 'normal',
                    color: '#333',
                  }}
                />
              </Col>
            </Row>
            <Form.Group className="mb-3">
              <Form.Label className="form-label-bold">Relationship</Form.Label>
              <Field
                name="relationship"
                type="text"
                className="form-control"
                style={{
                  fontFamily: 'Arial, sans-serif',
                  fontWeight: 'normal',
                  color: '#333',
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="form-label-bold">Contact Number</Form.Label>
              <Field
                name="contactNumber"
                type="text"
                className="form-control"
                style={{
                  fontFamily: 'Arial, sans-serif',
                  fontWeight: 'normal',
                  color: '#333',
                }}
              />
            </Form.Group>
            <Row className="mb-3">
              <Col md={6}>
                <Form.Label className="form-label-bold">Family Doctor First Name</Form.Label>
                <Field
                  name="doctorFirstName"
                  type="text"
                  className="form-control"
                  style={{
                    fontFamily: 'Arial, sans-serif',
                    fontWeight: 'normal',
                    color: '#333',
                  }}
                />
              </Col>
              <Col md={6}>
                <Form.Label className="form-label-bold">Family Doctor Last Name</Form.Label>
                <Field
                  name="doctorLastName"
                  type="text"
                  className="form-control"
                  style={{
                    fontFamily: 'Arial, sans-serif',
                    fontWeight: 'normal',
                    color: '#333',
                  }}
                />
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md={6}>
                <Form.Label className="form-label-bold">Doctor Phone Number</Form.Label>
                <Field
                  name="doctorPhoneNumber"
                  type="text"
                  className="form-control"
                  style={{
                    fontFamily: 'Arial, sans-serif',
                    fontWeight: 'normal',
                    color: '#333',
                  }}
                />
              </Col>
              <Col md={6}>
                <Form.Label className="form-label-bold">Preferred Pharmacy</Form.Label>
                <Field
                  name="preferredPharmacy"
                  type="text"
                  className="form-control"
                  style={{
                    fontFamily: 'Arial, sans-serif',
                    fontWeight: 'normal',
                    color: '#333',
                  }}
                />
              </Col>
            </Row>
            <Form.Group className="mb-3">
              <Form.Label className="form-label-bold">Pharmacy Phone Number</Form.Label>
              <Field
                name="pharmacyPhoneNumber"
                type="text"
                className="form-control"
                style={{
                  fontFamily: 'Arial, sans-serif',
                  fontWeight: 'normal',
                  color: '#333',
                }}
              />
            </Form.Group>
          
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default Emergency;
