import React, { useEffect, useState } from 'react';
import { AppLayout } from '../../../layouts/app-layout';
import { CarsForm } from '../../../components/cars/cars-form'
import { useHistory, useParams } from 'react-router-dom';
import { fetcher } from '../../../utils/helpers/fetcher';
import { LoaderPage } from '../../../components/shared/loader-page';
import { GoBack } from '../../../components/shared/go-back';
import Swal from 'sweetalert2';


export const CarEdit = () => {
    const history = useHistory();
    const [car, setCar] = useState(null);
    const { carId } = useParams();
    useEffect(() => {
        let isSubscripted = true;
        (async () => {
            let response = await fetcher.get(`/cars/${carId}`);
            if (isSubscripted) {
                setCar(response.data);
            }
        })();
        return () => {
            isSubscripted = false;
        }
    }, []);
    const updateCar = async (values) => {
        let response = await fetcher.put(`/cars/${carId}`, values);
        if(response.status === 200){
            Swal.fire('Success', 'Car updated successfully', 'success');
            history.push('/cars');
        }
    }
    if (!car) {
        return <LoaderPage />
    }
    return (
        <AppLayout>
            <div className="container my-5">
                <div className="row">
                    <div className="col">
                        <div className="d-flex">
                            <GoBack />
                            <h3>Edit Car</h3>
                        </div>
                        <hr />
                        <CarsForm car={car} action={updateCar} />
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}
