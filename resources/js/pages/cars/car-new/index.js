import React from 'react';
import { AppLayout } from '../../../layouts/app-layout';
import { CarsForm } from '../../../components/cars/cars-form';
import { GoBack } from '../../../components/shared/go-back';
import { fetcher } from '../../../utils/helpers/fetcher';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';

export const CarNew = () => {
    const history = useHistory();
    const saveCar = async (values) => {
        const response = await fetcher.post('/cars', values);
        if (response.status === 201) {
            Swal.fire('Success', 'Car is created successfully', 'success');
            history.push('/cars');
        }
    }
    return (
        <AppLayout>
            <div className="container my-5">
                <div className="row">
                    <div className="col">
                        <div className="d-flex">
                            <GoBack />
                            <h3>New Car</h3>
                        </div>
                        <hr />
                        <CarsForm action={saveCar} />
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}
