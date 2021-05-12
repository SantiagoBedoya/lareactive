import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AppLayout } from '../../../layouts/app-layout';
import { CarsTable } from '../../../components/cars/cars-table';
import { fetcher } from '../../../utils/helpers/fetcher';
import Swal from 'sweetalert2';
import './index.css';

export const CarsList = () => {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        let isSubscripted = true;
        (async () => {
            let response = await fetcher.get('/cars');
            if (isSubscripted) {
                setCars(response.data);
            }
        })();
        return () => {
            isSubscripted = false;
        }
    }, []);
    const getCars = async () => {
        let response = await fetcher.get('/cars');
        setCars(response.data);
    }
    const deleteCar = async (carId) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(async (result) => {
            if (result.isConfirmed) {
                const response = await fetcher.delete(`/cars/${carId}`)
                if (response.status === 200) {
                    getCars();
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    )
                }
            }
        })

    }
    return (
        <AppLayout>
            <div className="container my-5">
                <div className="row">
                    <div className="col">
                        <div className="d-flex justify-content-between">
                            <h4>Cars</h4>
                            <span>
                                <Link to="/cars/new" className="btn btn-primary">New Car</Link>
                            </span>
                        </div>
                        <hr />
                        <CarsTable cars={cars} onDelete={deleteCar} />
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}
