import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import CreateStudent from '../componants/CreateStudent'
import StudentList from '../componants/StudentList'
import DemoTable from '../componants/DemoTable'
import StudentEdit from '../componants/StudentEdit'
import Login from '../componants/LoginForm'
import NavBar from '../Header/NavBar'
import UserProfile from '../componants/UserProfile'
import LandingPage from '../componants/LandingPage'
import authManage from '../utils/auth';


function Index() {
    return (

        <Routes>
            <Route path='/student-create' element={<CreateStudent />} />
            <Route path='/student-list' element={<StudentList />} />
            <Route path='/student/:id/edit' element={<StudentEdit />} />
            <Route path='/student-demo-table' element={<DemoTable />} />
            <Route path='/login' element={<Login />} />
            <Route path='/Dashboard' element={<NavBar />} />
            <Route path='/myprofile' element={<UserProfile />} />
            <Route path='/' element={<LandingPage />} />
            {/* <Route path='/logout' element={<Login />} /> */}
        </Routes>

    )


}

export default Index
