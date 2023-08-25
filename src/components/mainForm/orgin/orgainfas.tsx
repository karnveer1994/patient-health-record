import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Formik, Field, FormikProps } from 'formik';

interface FormValues {
  hospitalType: string ;
  numberOfBeds: string;
  numberOfICU: string;
  numberOfStaff: string;
  numberOfDoctors: string;     // New field
  numberOfOperationTheatres: string; // New field
}

const HospitalForm: React.FC = () => {
  const initialValues: FormValues = {
    hospitalType: '',
    numberOfBeds: "",
    numberOfICU: "",
    numberOfStaff: "",
    numberOfDoctors: "",         
    numberOfOperationTheatres: "", 
  };

  const handleSubmit = (values: FormValues) => {
    // Handle form submission here
    console.log(values);
  };


  return (
    <Container className="registration-form-container">
        <h3 className='forms-title' style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300' }}>
           Organisation Facilities
      </h3>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {(formikProps: FormikProps<FormValues>) => (
          <Form onSubmit={formikProps.handleSubmit}>
            <Row>
              <Col controlId="hospitalType">
                <Form.Group>
                  <Form.Label  className='form-label-bold '>Hospital Type</Form.Label>
                  <Field
                    type="text"
                    name="hospitalType"
                  
                    as={Form.Control}
                    className="mb-3"
                  />
                </Form.Group>
              </Col>

              <Col controlId="numberOfBeds">
                <Form.Group>
                  <Form.Label  className='form-label-bold '>Number of Beds</Form.Label>
                  <Field
                    type="number"
                    name="numberOfBeds"
                    as={Form.Control}
                    className="mb-3"
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col controlId="numberOfICU">
                <Form.Group>
                  <Form.Label  className='form-label-bold '>Number of ICU</Form.Label>
                  <Field
                    type="number"
                    name="numberOfICU"
                    as={Form.Control}
                    className="mb-3"
                  />
                </Form.Group>
              </Col>

              <Col controlId="numberOfStaff">
                <Form.Group>
                  <Form.Label  className='form-label-bold '>Number of Staff</Form.Label>
                  <Field
                    type="number"
                    name="numberOfStaff"
                    as={Form.Control}
                    className="mb-3"
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col controlId="numberOfDoctors">
                <Form.Group>
                  <Form.Label  className='form-label-bold '>Number of Doctors</Form.Label>
                  <Field
                    type="number"
                    name="numberOfDoctors"
                    as={Form.Control}
                    className="mb-3"
                  />
                </Form.Group>
              </Col>

              <Col controlId="numberOfOperationTheatres">
                <Form.Group>
                  <Form.Label  className='form-label-bold '>Number of Operation Theatres</Form.Label>
                  <Field
                    type="number"
                    name="numberOfOperationTheatres"
                    as={Form.Control}
                    className="mb-3"
                  />
                </Form.Group>
              </Col>
            </Row> <Row>
              <Col controlId="cghs">
                <Form.Group>
                  <Form.Check>
                    <Field
                      type="checkbox"
                      name="cghs"
                      as={Form.Check.Input}
                      className="mr-2"
                    />
                    <Form.Check.Label  className='form-label-bold '>CGHS</Form.Check.Label>
                  </Form.Check>
                </Form.Group>
              </Col>

              <Col controlId="insurance">
                <Form.Group>
                  <Form.Check>
                    <Field
                      type="checkbox"
                      name="insurance"
                      as={Form.Check.Input}
                      className="mr-2"
                    />
                    <Form.Check.Label  className='form-label-bold '>Insurance</Form.Check.Label>
                  </Form.Check>
                </Form.Group>
              </Col>

              <Col controlId="otherGovt">
                <Form.Group>
                  <Form.Check>
                    <Field
                      type="checkbox"
                      name="otherGovt"
                      as={Form.Check.Input}
                      className="mr-2"
                    />
                    <Form.Check.Label  className='form-label-bold '>Other Government Schemes</Form.Check.Label>
                  </Form.Check>
                </Form.Group>
              </Col>
            </Row>
            <Button type="submit">Submit</Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default HospitalForm;
