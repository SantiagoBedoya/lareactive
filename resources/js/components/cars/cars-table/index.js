import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const CarsTable = ({ cars = [], onDelete }) => {
    return (
        <table className="table table-sm table-striped">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Model</th>
                    <th>Company</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    (cars.length === 0)
                        ? (<tr className="text-muted"><td colSpan="4">Cars not registered</td></tr>)
                        : cars.map((car, i) => (
                            <tr key={car.id}>
                                <td>{i + 1}</td>
                                <td>{car.model}</td>
                                <td>{car.company}</td>
                                <td>
                                    <Link to={`/cars/${car.id}/edit`} className="btn btn-sm btn-primary me-2">Editar</Link>
                                    <button onClick={() => onDelete(car.id)} className="btn btn-sm btn-danger">Eliminar</button>
                                </td>
                            </tr>
                        ))
                }
            </tbody>
        </table>
    )
}

CarsTable.propTypes = {
    cars: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired
}
