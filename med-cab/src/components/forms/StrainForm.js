import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const StrainForm = ({ values, errors, touched }) => {
    return (
        <Form>
            <h2>Strain Search Form</h2>
            <Field type='text' name='search' placeholder='Search' />
            <Field component='select' name='family'>
                <option value='select' disabled>Select Type:</option>
                <option value='sativa'>Sativa</option>
                <option value='indica'>Indica</option>
                <option value='hybrid'>Hybrid</option>
            </Field>
            <Field component='select' name='effects'>
                <option value='select' disabled>Select desired effect:</option>
                <option value='euphoric'>Euphoric</option>
                <option value='relaxing'>Relaxing</option>
                <option value='arousing'>Arousing</option>
                <option value='energizing'>Energizing</option>
                <option value='sleepy'>Sleepy</option>
                <option value='sleepy'>Sleepy</option>
            </Field>
            <Field component='select' name='flavors'>
                <option value='select' disabled>Select desired terpene/flavor:</option>
                <option value='lemon'>Myrcene (herbal)</option>
                <option value='peppery'>Caryophyllene (peppery)</option>
                <option value='citrus'>Limonene (citrus)</option>
                <option value='pine'>Terpinolene (pine)</option>
                <option value='peppery'>Pinene (peppery)</option>
                <option value='hoppy'>Humulene (hoppy)</option>
                <option value='minty'>Ocimene (minty)</option>
                <option value='floral'>Linalool (floral)</option>
            </Field>
            <button type='submit'>Submit</button>
        </Form>
    )
};

const FormikStrainForm = withFormik({
    mapPropsToValues({ search, type, benefit }){
        return {
            search: search || '',
            type: type || 'select',
            benefit: benefit || 'select'
        }
    },
    validationSchema: Yup.object().shape({
        // validation might not be needed?
    }),
    handleSubmit(values, { setStatus }){
        axios
        .post('https://reqres.in/api/form', values)
        .then(res => {
            setStatus(res.data);
            console.log(res);
        })
        .catch(err => console.log(err.message));
    }
})(StrainForm);

export default FormikStrainForm;