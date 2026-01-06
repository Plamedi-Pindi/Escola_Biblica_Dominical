import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

const LayoutPage = lazy(() => import('../../views/admin/layouts/Layout'));
const HomePage = lazy(() => import('../../views/admin/home/Home'));
const RegisterUserPage = lazy(() => import('../../views/admin/users/register/NewUser'));
const UserPage = lazy(() => import('../../views/admin/users/Index'));
const ProfessorPage = lazy(()=> import('../../views/admin/professor/Index'))
const NewProfessorPage = lazy(()=> import('../../views/admin/professor/register/NewProfessor'));
const AlunosPage = lazy(()=>import('../../views/admin/alunos/index'));
const NewAlunoPage = lazy(()=> import('../../views/admin/alunos/register/RegisterAluno'));
const NewYearPage = lazy(()=> import('../../views/admin/anoLectivo/register/NewYear'));
const AnoLectivoPage = lazy(()=> import('../../views/admin/anoLectivo/index'));
const TurmasPage = lazy(()=> import('../../views/admin/turmas/index'));

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

                    {/* Alunos Routes */}
                    <Route path='/alunos' element={<AlunosPage />} />
                    <Route path='/alunos/novoaluno' element={<NewAlunoPage />} />

                    {/* Ano Lectivo */}
                    <Route path='/anolectivo' element={<AnoLectivoPage />} />
                    <Route path='/anolectivo/novoanolectivo' element={<NewYearPage />} />

                    {/* Turmas Routes */}
                    <Route path='/turmas' element={<TurmasPage />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default AdminRoutes