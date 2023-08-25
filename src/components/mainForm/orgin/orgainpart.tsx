import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Formik, Field, FormikProps } from 'formik';
import "../../../App.css"

interface FormValues {
  hospitalName: string;
  street: string;
  locality: string;
  landmark: string;
  country: string;
  state: string;
  district: string;
  zipcode: string;
  timeZone: string;
  website: string;
}

const HospitalForm: React.FC = () => {
  const initialValues: FormValues = {
    hospitalName: '',
    street: '',
    locality: '',
    landmark: '',
    country: '',
    state: '',
    district: '',
    zipcode: '',
    timeZone: '',
    website: '',
  };

  const handleSubmit = (values: FormValues) => {
   
    console.log(values);
  };

  return (
    <Container className="registration-form-container">
           <h3 className='forms-title' style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300' }}>
           Organisation address
      </h3>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {(formikProps: FormikProps<FormValues>) => (
          <Form onSubmit={formikProps.handleSubmit}>
            <Row>
              <Col controlId="hospitalName">
                <Form.Group>
                  <Form.Label className='form-label-bold '>Name of Hospital</Form.Label>
                  <Field
                    type="text"
                    name="hospitalName"
                    className="mb-3" 
                    as={Form.Control}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col controlId="street">
                <Form.Group>
                  <Form.Label className='form-label-bold '>Street</Form.Label>
                  <Field
                    type="text"
                    name="street"
                    className="mb-3" 
                    as={Form.Control}
                  />
                </Form.Group>
              </Col>

              <Col controlId="locality">
                <Form.Group>
                  <Form.Label className='form-label-bold '>Locality</Form.Label>
                  <Field
                    type="text"
                    name="locality"
                    className="mb-3" 
                    as={Form.Control}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col controlId="landmark">
                <Form.Group>
                  <Form.Label className='form-label-bold '>Landmark</Form.Label>
                  <Field
                    type="text"
                    name="landmark"
                    className="mb-3" 
                    as={Form.Control}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col controlId="country">
                <Form.Group >
                  <Form.Label className='form-label-bold '>Country</Form.Label>
                  <Field
                    type="text"
                    name="country"
                    className="mb-3" 
                    as={Form.Control}
                  />
                </Form.Group>
              </Col>

              <Col controlId="state">
                <Form.Group>
                  <Form.Label className='form-label-bold '>State</Form.Label>
                  <Field
                    type="text"
                    name="state"
                    className="mb-3" 
                    as={Form.Control}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col controlId="district">
                <Form.Group>
                  <Form.Label className='form-label-bold '>District</Form.Label>
                  <Field
                    type="text"
                    name="district"
                    className="mb-3" 
                    as={Form.Control}
                  />
                </Form.Group>
              </Col>

              <Col controlId="zipcode">
                <Form.Group>
                  <Form.Label className='form-label-bold '>Zipcode</Form.Label>
                  <Field
                    type="text"
                    name="zipcode"
                    className="mb-3" 
                    as={Form.Control}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col controlId="timeZone">
                <Form.Group>
                  <Form.Label className='form-label-bold '>Time Zone</Form.Label>
                  <Field
                    type="text"
                    name="timeZone"
                    className="mb-3" 
                    as={Form.Control}
                  />
                </Form.Group>
              </Col>

              <Col controlId="website">
                <Form.Group>
                  <Form.Label className='form-label-bold '>Website</Form.Label>
                  <Field
                    type="text"
                    name="website"
                    className="mb-3" 
                    as={Form.Control}
                  />
                </Form.Group>
              </Col>
            </Row>

            {/* <Button type="submit">Submit</Button> */}
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default HospitalForm;
