import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function ProfilePage() {
    const navigate = useNavigate();
    const [errorMsg, setErrorMsg] = useState("");
    const [profile, setProfile] = useState("");
    useEffect(() => {
        setTimeout(() => {
            getDetails()
        }, 700)
    }, [])
    async function getDetails() {
        const userObj = JSON.parse(localStorage.getItem("user_obj"));
        try {
            const response = await axios.get(`https://dummyjson.com/users/${userObj.id}`)
            // console.log(response.data);
            setProfile(response.data);
            localStorage.setItem("user_details", JSON.stringify(response.data));
        } catch (err) {
            console.log(err);
            setErrorMsg(err.response.data.message);
        }
    }

    return (
        <div className='profile-container'>
            {
                profile === "" ?
                    <div>
                        {
                            errorMsg === "" ?
                                <h1>Loading...</h1> :
                                <h1>{errorMsg}</h1>
                        }
                    </div> :
                    <div className='profile'>
                        <h1><center>{`${profile.firstName} ${profile.maidenName} ${profile.lastName}`}</center></h1>
                        <div><img src={profile.image} alt="avatar" /></div>
                        <div className='profile-details'>
                            <h4><center>Contact details</center></h4>
                            <p><b>email: </b> {profile.email}</p>
                            <p><b>phone: </b> {profile.phone}</p>
                            <p><b>address: </b> {profile.address.address},{profile.address.city}, {profile.address.state}, {profile.address.postalCode} </p>
                        </div>
                        <div className='profile-details'>
                            <h4><center>General details</center></h4>
                            <p><b>DOB: </b> {profile.birthDate}</p>
                            <p><b>age: </b>  {profile.age}</p>
                            <p><b>gender: </b> {profile.gender}</p>
                            <p><b>height: </b> {profile.height}</p>
                            <p><b>weight: </b> {profile.weight}</p>
                            <p><b>blood group: </b> {profile.bloodGroup}</p>
                            <p><b>eye color: </b> {profile.eyeColor}</p>
                        </div>
                        <div className='profile-details'>
                            <h4><center>Professional Details</center></h4>
                            <p><b>Company: </b>{profile.company.name}</p>
                            <p><b>Department: </b> {profile.company.department}</p>
                            <p><b>Job Title: </b> {profile.company.title}</p>
                        </div>
                    </div>
            }
            <button onClick={() => {
                localStorage.removeItem("user_obj");
                localStorage.removeItem("user_details");
                navigate("/");
            }}>Back to Login Page</button>
        </div>
    )
}

export default ProfilePage;