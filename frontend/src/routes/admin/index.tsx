import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

const LayoutPage = lazy(() => import('../../views/admin/layouts/Layout'));
const HomePage = lazy(() => import('../../views/admin/home/Home'));
const RegisterUserPage = lazy(() => import('../../views/admin/users/register/NewUser'));
const UserPage = lazy(() => import('../../views/admin/users/Index'));
const ProfessorPage = lazy(()=> import('../../views/admin/professor/Index'))
const NewProfessorPage = lazy(()=> import('../../views/admin/professor/register/NewProfessor'));

const AdminRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<LayoutPage />} >
                    <Route index element={<HomePage />} />
                    {/* User Reoutes */}
                    <Route path='/newuser' element={<RegisterUserPage />} />
                    <Route path='/allusers' element={<UserPage />} />

                    {/* Professores Routes */}
                    <Route path='/professores' element={<ProfessorPage />} />
                    <Route path='/newProfesser' element={<NewProfessorPage />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default AdminRoutes