import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import CreateStudent from '../componants/CreateStudent'
import StudentList from '../componants/StudentList'
import DemoTable from '../componants/DemoTable'

function Index() {
    return (

        <Routes>
            <Route path='/student-create' element={<CreateStudent />} />
            <Route path='/student-list' element={<StudentList />} />
            <Route path='/student-demo-table' element={<DemoTable />} />



        </Routes>
    )
}

export default Index