import { CarEdit } from "../pages/cars/car-edit";
import { CarsList } from "../pages/cars/car-list";
import { CarNew } from "../pages/cars/car-new";
import { HomePage } from "../pages/home";

export const routes = [
    {
        path: '/',
        exact: true,
        component: HomePage,
        requireLogin: false
    },
    {
        path: '/cars',
        exact: true,
        component: CarsList,
        requireLogin: true
    },
    {
        path: '/cars/new',
        exact: true,
        component: CarNew,
        requireLogin: true
    },
    {
        path: '/cars/:carId/edit',
        exact: true,
        component: CarEdit,
        requireLogin: true
    }
]