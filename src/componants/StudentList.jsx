import axios from 'axios';
import React, { useEffect, useState } from 'react';

function StudentList() {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/students`)
            .then(res => {
                console.log(res);
                setStudents(res.data);
            })
            .catch(error => {
                console.error('Error fetching students:', error);
            });
    }, []);


    const studentDetails = students.map((student, index) => (
        <tr key={index}>
            <td>{student.id}</td>
            <td>{`${student.first_name} ${student.middle_name} ${student.last_name}`}</td>
            <td>{student.student_aadhaar_no}</td>
            <td>{student.class}</td>
            <td>{student.state}</td>
            <td>{student.city}</td>
            <td>{student.pincode}</td>
            <td>{student.religion}</td>
            <td>{student.caste}</td>
            <td>{student.emergency_address}</td>
            <td>
                <button className='btn btn-primary'>Edit</button>
            </td>
            <td>
                <button className='btn btn-danger'>Delete</button>
            </td>
        </tr>
    ));


    return (
        <div className='container mt-5'>
            <div className='row'>

                <div className='card'>
                    <div className='card-header bg-dark'>
                        <h4 style={{ color: 'white' }}>
                            Students List
                        </h4>
                        <p style={{ color: 'white' }}>Here you see all the student list</p>
                    </div>
                    <div className="card-body">
                        <table className='table table-striped'>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Phone</th>
                                    <th>Class</th>
                                    <th>State</th>
                                    <th>City</th>
                                    <th>Pin Code</th>
                                    <th>Relagion</th>
                                    <th>Caste</th>
                                    <th>emergency_address</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {studentDetails}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default StudentList;

