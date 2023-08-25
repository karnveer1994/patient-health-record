import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Formik, Field, useFormikContext } from 'formik';
import  "../../App.css"


interface HealthHistoryFormValues {
  reasonForRegistration: string;
  additionalNote: string;
  takingMedicine: string;
  medicineList: string;
}

const initialValues: HealthHistoryFormValues = {
  reasonForRegistration: '',
  additionalNote: '',
  takingMedicine: 'no',
  medicineList: '',
};

const HealthHistoryForm: React.FC = () => {
  const handleSubmit = (values: HealthHistoryFormValues) => {
    console.log(values);
    // You can perform any further actions here, like sending the data to a server.
  };

  const ShowMedicineListField: React.FC = () => {
    const { values } = useFormikContext<HealthHistoryFormValues>();

    return values.takingMedicine === 'yes' ? (
      <Form.Group className="mb-3">
        <Form.Label className="form-label-bold">Please List Them Here</Form.Label>
        <Field
          name="medicineList"
          as="textarea"
          className="form-control"
        />
      </Form.Group>
    ) : null;
  };

  return (
    <Container className="registration-form-container" >
      <h2  className='forms-title' style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', }}>
        Health History
      </h2>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label className="form-label-bold">Reason for Registration</Form.Label>
              <Field
                name="reasonForRegistration"
                type="text"
                className="form-control"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="form-label-bold">Additional Note</Form.Label>
              <Field
                name="additionalNote"
                as="textarea"
                className="form-control"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="form-label-bold">Taking Any Medicine?</Form.Label>
              <div>
                <Field
                  type="radio"
                  name="takingMedicine"
                  value="yes"
                />{' '}
                Yes
                <Field
                  type="radio"
                  name="takingMedicine"
                  value="no"
                  className="ms-3"
                />{' '}
                No
              </div>
            </Form.Group>
            <ShowMedicineListField />
            
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default HealthHistoryForm;
