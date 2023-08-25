import React from 'react';
import { Formik, Form, Field, FormikHelpers } from 'formik';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Container, Form as BootstrapForm, Row, Col } from 'react-bootstrap';
import  "../../App.css"

interface Values {
  registrationDate: Date | null;
  registrationTime: string;
  heathCareNumber: string;
  firstName: string;
  lastName: string;
  sex: string;
  dateOfBirth: Date | null;
  phoneNumber: string;
  email: string;
  streetAddress: string;
  streetAddress2: string;
  city: string;
  state: string;
  postalCode: string;
  maritalStatus: string;
  isUnder18: boolean;
}

const RegistrationForm: React.FC = () => {
  const initialValues: Values = {
    registrationDate: null,
    registrationTime: '',
    heathCareNumber: '',
    firstName: '',
    lastName: '',
    sex: '',
    dateOfBirth: null,
    phoneNumber: '',
    email: '',
    streetAddress: '',
    streetAddress2: '',
    city: '',
    state: '',
    postalCode: '',
    maritalStatus: '',
    isUnder18: false,
  };

  const handleSubmit = (values: Values, { setSubmitting }: FormikHelpers<Values>) => {
    console.log('Form values:', values);
    setSubmitting(false);
  };

  return (
    <Container className="registration-form-container" >
      <h3 className='forms-title' style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', }}>Patient Application Form</h3>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <Row>
            <Col>
              <BootstrapForm.Group>
                <label className="form-label-bold" htmlFor="registrationDate">Registration Date:</label>
                <Field name="registrationDate">
                  {({ field, form }: any) => (
                    <DatePicker
                      selected={field.value}
                      onChange={(date: Date) => form.setFieldValue('registrationDate', date)}
                      dateFormat="yyyy-MM-dd"
                 
                      className="form-control"
                    />
                  )}
                </Field>
              </BootstrapForm.Group>
            </Col>
            <Col>
              <BootstrapForm.Group>
                <label className="form-label-bold" htmlFor="registrationTime" style={{ display: 'block' }}>Registration Time:</label>
                <Field type="time" id="registrationTime" name="registrationTime" className="form-control" />
              </BootstrapForm.Group>
            </Col>
          </Row>
          <BootstrapForm.Group style={{ marginTop: '20px' }}>
            <label className="form-label-bold" htmlFor="heathCareNumber">Heath Care Number:</label>
            <Field
              type="text"
              id="heathCareNumber"
              name="heathCareNumber"
              className="form-control"
            />
          </BootstrapForm.Group>
          <Row>
            <Col>
              <BootstrapForm.Group style={{ marginTop: '20px' }}>
                <label className="form-label-bold" htmlFor="firstName">First Name:</label>
                <Field
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="form-control"
                />
              </BootstrapForm.Group>
            </Col>
            <Col>
              <BootstrapForm.Group style={{ marginTop: '20px' }}>
                <label className="form-label-bold" htmlFor="lastName">Last Name:</label>
                <Field
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="form-control"
                />
              </BootstrapForm.Group>
            </Col>
          </Row>
          <BootstrapForm.Group style={{ marginTop: '20px' }}>
            <label className="form-label-bold" htmlFor="gender">Gender:</label>
            <Field
              as="select"
              id="gender"
              name="gender"
              className="form-control"
            >
              <option value=""></option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </Field>
          </BootstrapForm.Group>
          <BootstrapForm.Group style={{ marginTop: '20px' }}>
            <label className="form-label-bold" htmlFor="dateOfBirth">Date of Birth:</label>
            <Field name="dateOfBirth">
              {({ field, form }: any) => (
                <DatePicker
                  id="dateOfBirth"
                  selected={field.value}
                  onChange={(date: Date) => form.setFieldValue('dateOfBirth', date)}
                  dateFormat="yyyy-MM-dd"
            
                  className="form-control"
                />
              )}
            </Field>
          </BootstrapForm.Group>
          <BootstrapForm.Group style={{ marginTop: '20px' }}>
            <label className="form-label-bold" htmlFor="phoneNumber">Phone Number:</label>
            <Field
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              className="form-control"
            />
          </BootstrapForm.Group>
          <BootstrapForm.Group style={{ marginTop: '20px' }}>
            <label className="form-label-bold" htmlFor="email">Email:</label>
            <Field
              type="email"
              id="email"
              name="email"
              className="form-control"
            />
          </BootstrapForm.Group>
          <BootstrapForm.Group style={{ marginTop: '20px' }}>
            <label className="form-label-bold" htmlFor="streetAddress">Street Address:</label>
            <Field
              type="text"
              id="streetAddress"
              name="streetAddress"
              className="form-control"
            />
          </BootstrapForm.Group>
          <BootstrapForm.Group style={{ marginTop: '20px' }}>
            <label className="form-label-bold" htmlFor="streetAddress2">Street Address 2:</label>
            <Field
              type="text"
              id="streetAddress2"
              name="streetAddress2"
              className="form-control"
            />
          </BootstrapForm.Group>
          <Row>
            <Col>
              <BootstrapForm.Group style={{ marginTop: '20px' }}>
                <label className="form-label-bold" htmlFor="city">City:</label>
                <Field
                  type="text"
                  id="city"
                  name="city"
                  className="form-control"
                
                />
              </BootstrapForm.Group>
            </Col>
            <Col>
              <BootstrapForm.Group style={{ marginTop: '20px' }}>
                <label className="form-label-bold" htmlFor="state">State:</label>
                <Field
                  type="text"
                  id="state"
                  name="state"
                  className="form-control"
          
                />
              </BootstrapForm.Group>
            </Col>
            <Col>
              <BootstrapForm.Group style={{ marginTop: '20px' }}>
                <label className="form-label-bold" htmlFor="postalCode">Zip Code:</label>
                <Field
                  type="text"
                  id="postalCode"
                  name="postalCode"
                  className="form-control"
              
                />
              </BootstrapForm.Group>
            </Col>
          </Row>
          <BootstrapForm.Group style={{ marginTop: '20px' }}>
            <label className="form-label-bold" htmlFor="maritalStatus">Marital Status:</label>
            <Field
              as="select"
              id="maritalStatus"
              name="maritalStatus"
              className="form-control"
            >
              <option value=""></option>
              <option value="single">Single</option>
              <option value="married">Married</option>
              <option value="widow">Widow</option>
            </Field>
          </BootstrapForm.Group>
          <BootstrapForm.Group style={{ marginTop: '20px' }}>
            <div className="form-check">
              <Field
                type="checkbox"
                id="isUnder18"
                name="isUnder18"
                className="form-check-input"
              />
              <label  className="form-label-bold" htmlFor="isUnder18">Is this patient younger than 18?</label>
            </div>
          </BootstrapForm.Group>
        
        </Form>
      </Formik>
    </Container>
  );
};

export default RegistrationForm;
