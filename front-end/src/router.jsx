import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import { HomePage } from './pages/HomePage'
import { SubjectsPage } from './pages/SubjectsPage'
import { StudentsPage } from './pages/StudentsPage'
import { AStudentPage } from './pages/AStudentPage'
import { ASubjectPage } from './pages/ASubjectPage'

const router = createBrowserRouter([
    {
        path:'/',
        element: <App/>,
        children: [
            {
                index: true,
                element: <HomePage/>
            },
            {
                path: 'subjects',
                element: <SubjectsPage/>
            },
            {
                path: 'students',
                element: <StudentsPage/>
            },
            {
                path: 'students/:id',
                element: <AStudentPage/>
            },
            {
                path: 'subjects/:name',
                element: <ASubjectPage/>
            }
            
        ]
    }
])

export default router;