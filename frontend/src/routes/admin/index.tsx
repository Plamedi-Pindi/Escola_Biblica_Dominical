import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

const LayoutPage = lazy(() => import('../../views/admin/layouts/Layout'));
const HomePage = lazy(() => import('../../views/admin/home/Home'));
const RegisterUserPage = lazy(() => import('../../views/admin/users/register/register'));
const UserPage = lazy(() => import('../../views/admin/users/index'));

const AdminRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<LayoutPage />} >
                    <Route element={<HomePage />} />
                    <Route path='/newuser' element={<RegisterUserPage />} />
                    <Route path='/allusers' element={<UserPage />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default AdminRoutes