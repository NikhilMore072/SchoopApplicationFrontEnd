import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import CreateStudent from '../componants/CreateStudent'
import StudentList from '../componants/StudentList'
import DemoTable from '../componants/DemoTable'
import StudentEdit from '../componants/StudentEdit'
import LandingPage from '../componants/LandingPage';
function Index() {
    return (

        <Routes>
             <Route path='/' element={<LandingPage />} />
            <Route path='/student-create' element={<CreateStudent />} />
            <Route path='/student-list' element={<StudentList />} />
            <Route path='/student/:id/edit' element={<StudentEdit />} />
            <Route path='/student-demo-table' element={<DemoTable />} />



        </Routes>
    )
}

export default Index
