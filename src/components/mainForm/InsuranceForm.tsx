import React from 'react';
import { Formik, Field, Form } from 'formik';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../../App.css';

interface FormValues {
  companyName: string;
  insuranceId: string;
  policyHolderFirstName: string;
  policyHolderLastName: string;
  dateOfBirth: string;
}

const InsuranceForm: React.FC = () => {
  const handleSubmit = (values: FormValues) => {
    console.log(values);
  };

  return (
    <Container className="mt-5">
      <h3 className='forms-title' style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300' }}>
        Insurance Information
      </h3>
      <Formik
        initialValues={{
          companyName: '',
          insuranceId: '',
          policyHolderFirstName: '',
          policyHolderLastName: '',
          dateOfBirth: '',
        }}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            <Row className="mb-3">
              <Col>
                <label htmlFor="companyName" className="form-label form-label-bold">
                  Insurance Company Name
                </label>
                <Field
                  type="text"
                  id="companyName"
                  name="companyName"
                  className="form-control"
                />
              </Col>
            </Row>
            <Row className="mb-3">
              <Col>
                <label htmlFor="insuranceId" className="form-label form-label-bold">
                  Insurance ID
                </label>
                <Field
                  type="text"
                  id="insuranceId"
                  name="insuranceId"
                  className="form-control"
                />
              </Col>
            </Row>
            <Row className="mb-3">
              <Col>
                <label htmlFor="policyHolderFirstName" className="form-label form-label-bold">
                  Policy Holder Full Name
                </label>
                <div className="d-flex">
                  <Field
                    type="text"
                    id="policyHolderFirstName"
                    name="policyHolderFirstName"
                    className="form-control me-2"
               
                  />
                  <Field
                    type="text"
                    id="policyHolderLastName"
                    name="policyHolderLastName"
                    className="form-control"
               
                  />
                </div>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col>
                <label htmlFor="dateOfBirth" className="form-label form-label-bold">
                  Date of Birth
                </label>
                <Field
                  type="date"
                  id="dateOfBirth"
                  name="dateOfBirth"
                  className="form-control"
                />
              </Col>
            </Row>
            {/* <Button variant="primary" type="submit">
              Submit
            </Button> */}
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default InsuranceForm;
