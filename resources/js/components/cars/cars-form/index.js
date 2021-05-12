import React from 'react';
import { useForm } from '../../../hooks/use-form';
import PropTypes from 'prop-types';


const initialState = {
    model: '',
    company: ''
}
export const CarsForm = ({ car, action }) => {
    const [values, handleInputChange, reset] = useForm(car ?? initialState);
    const onSubmit = (e) => {
        e.preventDefault();
        action(values);
    }
    return (
        <form onSubmit={onSubmit}>
            <div className="row">
                <div className="col">
                    <div className="form-group">
                        <label>Model</label>
                        <input type="text" name="model" onChange={handleInputChange} className="form-control" value={values.model} />
                    </div>
                </div>
                <div className="col">
                    <div className="form-group">
                        <label>Company</label>
                        <input type="text" name="company" onChange={handleInputChange} className="form-control" value={values.company} />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <button type="submit" className="btn btn-primary">Save</button>
                    <button type="button" onClick={reset} className="btn btn-default">Reset</button>
                </div>
            </div>
        </form>
    )
}

CarsForm.propTypes = {
    action: PropTypes.func.isRequired
}