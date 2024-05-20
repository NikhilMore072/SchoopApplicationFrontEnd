

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link component from react-router-dom
import axios from 'axios';
import '../componants/studentstyle.css';

function CreateStudent() {
    const [formData, setFormData] = useState({
        first_name: '',
        middle_name: '',
        last_name: '',
        house: '',
        admitted_in_class: '',
        gender: '',
        blood_group: '',
        nationality: '',
        birth_place: '',
        mother_tongue: '',
        emergency_name: '',
        date_of_birth: '',
        date_of_admission: '',
        grn_no: '',
        student_id_no: '',
        student_aadhaar_no: '',
        class: '',
        division: '',
        address: '',
        city: '',
        state: '',
        pincode: '',
        religion: '',
        caste: '',
        emergency_address: '',
        emergency_contact: '',
        transport_mode: '',
        vehicle_no: '',
        allergies: '',
        height: '',
        roll_no: '',
        category: '',
        weight: '',
        has_spectacles: '0',
    });

    const navigate = useNavigate();


    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`http://127.0.0.1:8000/api/students`, formData);
            alert(response.data.message);
            navigate('/student-list');


        } catch (error) {
            console.error('Error creating student:', error);
            alert('There was an error creating the student.');
        }
    };

    return (
        <div className='container-fluid mt-4'>
            <div className='row'>
                <div className="row justify-content-center">
                    <div className="col-md-11">
                        <div className='card'>
                            <div className='card-header'>
                                <h4 className="">Add Student</h4>
                                <p>In this page you can add student information</p>
                            </div>
                            <div className="card-body ">
                                {/* <form onSubmit={handleSubmit}>
                                    <h4>Personal Information</h4>
                                    <div className="form-group row">
                                        <div className="col-md-3 mb-2">
                                            <label htmlFor="first_name">First Name</label>
                                            <input type="text" id="first_name" name="first_name" placeholder="eg. John" className="form-control mob" required onChange={handleChange} value={formData.first_name} />
                                        </div>
                                        <div className="col-md-3 mb-2">
                                            <label htmlFor="middle_name">Middle Name</label>
                                            <input type="text" id="middle_name" name="middle_name" placeholder="eg. A." className="form-control" onChange={handleChange} value={formData.middle_name} />
                                        </div>
                                        <div className="col-md-3 mb-2">
                                            <label htmlFor="last_name">Last Name</label>
                                            <input type="text" id="last_name" name="last_name" placeholder="eg. Doe" className="form-control" required onChange={handleChange} value={formData.last_name} />
                                        </div>
                                        <div className="col-md-3 mb-2">
                                            <label htmlFor="gender">Gender</label>
                                            <input type="text" id="gender" name="gender" placeholder="eg. Male" className="form-control" required onChange={handleChange} value={formData.gender} />
                                        </div>

                                        <div className="col-md-3 mb-2">
                                            <label htmlFor="house">House</label>
                                            <input type="text" id="house" name="house" placeholder="eg. Green House" className="form-control" onChange={handleChange} value={formData.house} />
                                        </div>
                                        <div className="col-md-3 mb-2">
                                            <label htmlFor="nationality">Nationality</label>
                                            <input type="text" id="nationality" name="nationality" placeholder="eg. Indian" className="form-control" onChange={handleChange} value={formData.nationality} />
                                        </div>
                                        <div className="col-md-3 mb-2">
                                            <label htmlFor="birth_place">Birth Place</label>
                                            <input type="text" id="birth_place" name="birth_place" placeholder="eg. Mumbai" className="form-control" onChange={handleChange} value={formData.birth_place} />
                                        </div>

                                        <div className="col-md-3 mb-2">
                                            <label htmlFor="mother_tongue">Mother Tongue</label>
                                            <input type="text" id="mother_tongue" name="mother_tongue" placeholder="eg. Hindi" className="form-control" onChange={handleChange} value={formData.mother_tongue} />
                                        </div>

                                        <div className="col-md-3 mb-2">
                                            <label htmlFor="emergency_name">Emergency Name</label>
                                            <input type="text" id="emergency_name" name="emergency_name" placeholder="eg. Jane Doe" className="form-control" onChange={handleChange} value={formData.emergency_name} />
                                        </div>
                                        <div className="col-md-3 mb-2">
                                            <label htmlFor="date_of_birth">Date of Birth</label>
                                            <input type="date" id="date_of_birth" name="date_of_birth" className="form-control" required onChange={handleChange} value={formData.date_of_birth} />
                                        </div>
                                        <div className="col-md-3 mb-2">
                                            <label htmlFor="student_aadhaar_no">Student Aadhaar No</label>
                                            <input type="text" id="student_aadhaar_no" name="student_aadhaar_no" placeholder="eg. 9876-5432-1234" className="form-control" onChange={handleChange} value={formData.student_aadhaar_no} />
                                        </div>

                                        <div className="col-md-3 mb-2">
                                            <label htmlFor="religion">Religion</label>
                                            <input type="text" id="religion" name="religion" placeholder="eg. Hinduism" className="form-control" onChange={handleChange} value={formData.religion} />
                                        </div>
                                        <div className="col-md-3 mb-2">
                                            <label htmlFor="caste">Caste</label>
                                            <input type="text" id="caste" name="caste" placeholder="eg. Brahmin" className="form-control" onChange={handleChange} value={formData.caste} />
                                        </div>

                                        <div className="col-md-3 mb-2">
                                            <label htmlFor="category">Category</label>
                                            <input type="text" id="category" name="category" placeholder="eg. General" className="form-control" onChange={handleChange} value={formData.category} />
                                        </div>

                                        <h4>Address Information</h4>

                                        <div className="col-md-3 mb-2">
                                            <label htmlFor="address">Address</label>
                                            <input type="text" id="address" name="address" placeholder="eg. 123 Main St" className="form-control" onChange={handleChange} value={formData.address} />
                                        </div>
                                        <div className="col-md-3 mb-2">
                                            <label htmlFor="city">City</label>
                                            <input type="text" id="city" name="city" placeholder="eg. Mumbai" className="form-control" onChange={handleChange} value={formData.city} />
                                        </div>
                                        <div className="col-md-3 mb-2">
                                            <label htmlFor="state">State</label>
                                            <input type="text" id="state" name="state" placeholder="eg. Maharashtra" className="form-control" onChange={handleChange} value={formData.state} />
                                        </div>
                                        <div className="col-md-3 mb-2">
                                            <label htmlFor="pincode">Pincode</label>
                                            <input type="text" id="pincode" name="pincode" placeholder="eg. 400001" className="form-control" onChange={handleChange} value={formData.pincode} />
                                        </div>

                                        <h4>Other Information</h4>

                                        <div className="col-md-3 mb-2">
                                            <label htmlFor="allergies">Allergies</label>
                                            <input type="text" id="allergies" name="allergies" placeholder="eg. Peanuts" className="form-control" onChange={handleChange} value={formData.allergies} />
                                        </div>
                                        <div className="col-md-3 mb-2">
                                            <label htmlFor="has_spectacles">Has Spectacles?</label>
                                            <input type="checkbox" id="has_spectacles" name="has_spectacles" className="form-check-input" onChange={handleChange} checked={formData.has_spectacles} />
                                        </div>
                                    </div>

                                   
                                </form> */}
                                <form onSubmit={handleSubmit}>
                                    <h4>Personal Information</h4>
                                    <div className="form-group row">
                                        <div className="col-md-3 mb-2">
                                            <label htmlFor="first_name">First Name</label>
                                            <input type="text" id="first_name" name="first_name" placeholder="eg. John" className="form-control mob" required onChange={handleChange} value={formData.first_name} />
                                        </div>
                                        <div className="col-md-3 mb-2">
                                            <label htmlFor="middle_name">Middle Name</label>
                                            <input type="text" id="middle_name" name="middle_name" placeholder="eg. A." className="form-control" onChange={handleChange} value={formData.middle_name} />
                                        </div>
                                        <div className="col-md-3 mb-2">
                                            <label htmlFor="last_name">Last Name</label>
                                            <input type="text" id="last_name" name="last_name" placeholder="eg. Doe" className="form-control" required onChange={handleChange} value={formData.last_name} />
                                        </div>
                                        <div className="col-md-3 mb-2">
                                            <label htmlFor="gender">Gender</label>
                                            <input type="text" id="gender" name="gender" placeholder="eg. Male" className="form-control" required onChange={handleChange} value={formData.gender} />
                                        </div>

                                        <div className="col-md-3 mb-2">
                                            <label htmlFor="house">House</label>
                                            <input type="text" id="house" name="house" placeholder="eg. Green House" className="form-control" onChange={handleChange} value={formData.house} />
                                        </div>
                                        <div className="col-md-3 mb-2">
                                            <label htmlFor="nationality">Nationality</label>
                                            <input type="text" id="nationality" name="nationality" placeholder="eg. Indian" className="form-control" onChange={handleChange} value={formData.nationality} />
                                        </div>
                                        <div className="col-md-3 mb-2">
                                            <label htmlFor="birth_place">Birth Place</label>
                                            <input type="text" id="birth_place" name="birth_place" placeholder="eg. Mumbai" className="form-control" onChange={handleChange} value={formData.birth_place} />
                                        </div>

                                        <div className="col-md-3 mb-2">
                                            <label htmlFor="mother_tongue">Mother Tongue</label>
                                            <input type="text" id="mother_tongue" name="mother_tongue" placeholder="eg. Hindi" className="form-control" onChange={handleChange} value={formData.mother_tongue} />
                                        </div>

                                        <div className="col-md-3 mb-2">
                                            <label htmlFor="emergency_name">Emergency Name</label>
                                            <input type="text" id="emergency_name" name="emergency_name" placeholder="eg. Jane Doe" className="form-control" onChange={handleChange} value={formData.emergency_name} />
                                        </div>
                                        <div className="col-md-3 mb-2">
                                            <label htmlFor="date_of_birth">Date of Birth</label>
                                            <input type="date" id="date_of_birth" name="date_of_birth" className="form-control" required onChange={handleChange} value={formData.date_of_birth} />
                                        </div>
                                        <div className="col-md-3 mb-2">
                                            <label htmlFor="student_aadhaar_no">Student Aadhaar No</label>
                                            <input type="text" id="student_aadhaar_no" name="student_aadhaar_no" placeholder="eg. 9876-5432-1234" className="form-control" onChange={handleChange} value={formData.student_aadhaar_no} />
                                        </div>

                                        <div className="col-md-3 mb-2">
                                            <label htmlFor="religion">Religion</label>
                                            <input type="text" id="religion" name="religion" placeholder="eg. Hinduism" className="form-control" onChange={handleChange} value={formData.religion} />
                                        </div>
                                        <div className="col-md-3 mb-2">
                                            <label htmlFor="caste">Caste</label>
                                            <input type="text" id="caste" name="caste" placeholder="eg. Brahmin" className="form-control" onChange={handleChange} value={formData.caste} />
                                        </div>

                                        <div className="col-md-3 mb-2">
                                            <label htmlFor="category">Category</label>
                                            <input type="text" id="category" name="category" placeholder="eg. General" className="form-control" onChange={handleChange} value={formData.category} />
                                        </div>

                                        <h4>Address Information</h4>

                                        <div className="col-md-3 mb-2">
                                            <label htmlFor="address">Address</label>
                                            <input type="text" id="address" name="address" placeholder="eg. 123 Main St" className="form-control" onChange={handleChange} value={formData.address} />
                                        </div>
                                        <div className="col-md-3 mb-2">
                                            <label htmlFor="city">City</label>
                                            <input type="text" id="city" name="city" placeholder="eg. Mumbai" className="form-control" onChange={handleChange} value={formData.city} />
                                        </div>
                                        <div className="col-md-3 mb-2">
                                            <label htmlFor="state">State</label>
                                            <input type="text" id="state" name="state" placeholder="eg. Maharashtra" className="form-control" onChange={handleChange} value={formData.state} />
                                        </div>
                                        <div className="col-md-3 mb-2">
                                            <label htmlFor="pincode">Pincode</label>
                                            <input type="text" id="pincode" name="pincode" placeholder="eg. 400001" className="form-control" onChange={handleChange} value={formData.pincode} />
                                        </div>

                                        <div className="col-md-3 mb-2">
                                            <label htmlFor="emergency_address">Emergency Address</label>
                                            <input type="text" id="emergency_address" name="emergency_address" placeholder="eg. 123 Emergency Street" className="form-control" onChange={handleChange} value={formData.emergency_address} />
                                        </div>
                                        <div className="col-md-3 mb-2">
                                            <label htmlFor="emergency_contact">Emergency Contact</label>
                                            <input type="text" id="emergency_contact" name="emergency_contact" placeholder="eg. +1234567890" className="form-control" onChange={handleChange} value={formData.emergency_contact} />
                                        </div>
                                        <div className="col-md-3 mb-2">
                                            <label htmlFor="transport_mode">Transport Mode</label>
                                            <input type="text" id="transport_mode" name="transport_mode" placeholder="eg. Bus" className="form-control" onChange={handleChange} value={formData.transport_mode} />
                                        </div>
                                        <div className="col-md-3 mb-2">
                                            <label htmlFor="vehicle_no">Vehicle No</label>
                                            <input type="text" id="vehicle_no" name="vehicle_no" placeholder="eg. MH-01-AB-1234" className="form-control" onChange={handleChange} value={formData.vehicle_no} />
                                        </div>

                                        <h4>Medical Information</h4>


                                        <div className="col-md-3 mb-2">
                                            <label htmlFor="weight">Weight</label>
                                            <input type="text" id="weight" name="weight" placeholder="eg. 70" className="form-control" onChange={handleChange} value={formData.weight} />
                                        </div>

                                        <div className="col-md-3 mb-2">
                                            <label htmlFor="blood_group">Blood Group</label>
                                            <input type="text" id="blood_group" name="blood_group" placeholder="eg. A+" className="form-control" onChange={handleChange} value={formData.blood_group} />
                                        </div>
                                        <div className="col-md-3 mb-2">
                                            <label htmlFor="allergies">Allergies</label>
                                            <input type="text" id="allergies" name="allergies" placeholder="eg. Pollen, Dust" className="form-control" onChange={handleChange} value={formData.allergies} />
                                        </div>

                                        <div className="col-md-3 mb-2">
                                            <label>Has Spectacles</label>
                                            <div className="row">
                                                <div className="form-check mr-6">
                                                    <input type="radio" id="has_spectacles_yes" name="has_spectacles" className="form-check-input" value="0" onChange={handleChange} checked={formData.has_spectacles == true} />
                                                    <label htmlFor="has_spectacles_yes" className="form-check-label">Yes</label>
                                                </div>
                                                <div className="form-check">
                                                    <input type="radio" id="has_spectacles_no" name="has_spectacles" className="form-check-input" value="1" onChange={handleChange} checked={formData.has_spectacles == false} />
                                                    <label htmlFor="has_spectacles_no" className="form-check-label">No</label>
                                                </div>
                                            </div>
                                        </div>



                                        <h4>School Information</h4>


                                        <div className="col-md-3 mb-2">
                                            <label htmlFor="admitted_in_class">Admitted in Class</label>
                                            <input type="text" id="admitted_in_class" name="admitted_in_class" placeholder="eg. 5th" className="form-control" onChange={handleChange} value={formData.admitted_in_class} />
                                        </div>




                                        <div className="col-md-3 mb-2">
                                            <label htmlFor="date_of_admission">Date of Admission</label>
                                            <input type="date" id="date_of_admission" name="date_of_admission" className="form-control" required onChange={handleChange} value={formData.date_of_admission} />
                                        </div>
                                        <div className="col-md-3 mb-2">
                                            <label htmlFor="grn_no">GRN No</label>
                                            <input type="text" id="grn_no" name="grn_no" placeholder="eg. 12345" className="form-control" onChange={handleChange} value={formData.grn_no} />
                                        </div>
                                        <div className="col-md-3 mb-2">
                                            <label htmlFor="student_id_no">Student ID No</label>
                                            <input type="text" id="student_id_no" name="student_id_no" placeholder="eg. 67890" className="form-control" onChange={handleChange} value={formData.student_id_no} />
                                        </div>

                                        <div className="col-md-3 mb-2">
                                            <label htmlFor="class">Class</label>
                                            <input type="text" id="class" name="class" placeholder="eg. 5th" className="form-control" onChange={handleChange} value={formData.class} />
                                        </div>
                                        <div className="col-md-3 mb-2">
                                            <label htmlFor="division">Division</label>
                                            <input type="text" id="division" name="division" placeholder="eg. A" className="form-control" onChange={handleChange} value={formData.division} />
                                        </div>




                                        <div className="col-md-3 mb-2">
                                            <label htmlFor="height">Height</label>
                                            <input type="text" id="height" name="height" placeholder="eg. 175" className="form-control" onChange={handleChange} value={formData.height} />
                                        </div>
                                        <div className="col-md-3 mb-2">
                                            <label htmlFor="roll_no">Roll No</label>
                                            <input type="text" id="roll_no" name="roll_no" placeholder="eg. 101" className="form-control" onChange={handleChange} value={formData.roll_no} />
                                        </div>


                                        <div className="col-3 mb-2">
                                        </div>
                                        <div className="col-3 mb-2">
                                        </div>
                                        <div className="col-3 mb-2">
                                        </div>
                                        <div className="col-3 mb-2">
                                        </div>
                                        <div className="col-3 mb-2">
                                        </div>
                                        <div className="col-2 mb-2">
                                        </div>


                                        <div className="col-md-3 mb-2">
                                            <button type='submit' className='btn btn-primary ml-2'>Save Student</button>&nbsp;&nbsp;&nbsp;
                                            <Link to="/student-list">  <button className='btn btn-danger ml-2'>Back</button> </Link>
                                        </div>
                                    </div>


                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateStudent;
