import React from 'react';
import pic from '../../images/header-bg.jpg';

const Schedule = () => {
    return (
        <div className="mt-5 mb-5">
            <div className="row w-100">
                <div className="col-md-6 d-flex justify-content-center">
                    <img src={pic} style={{height: '550px', width: '90%'}} alt="" />
                </div>
                <div className="col-md-6">
                    <p>Improve Efficiency And Provide Better Experiences!</p>
                    <h1>Keep Your Business Safe & Ensure High Availability.</h1>
                    <div className="" style={{ width: '90%', marginLeft: '5%', borderLeft: '1px solid #0092FF', padding: '5px', paddingLeft: '5%'}}>
                        <h5>As one of the world's largest ITService Providers, our deep pool of over 130 certified engineers and IT support staff are ready to help.</h5>
                        <br />
                        <p>Provide users with appropriate view and access permissions to requests, problems, changes, contracts, assets, solutions, and reports with our experienced professionals.</p>
                    </div>
                    <br />
                    <div style={{marginLeft: '5%'}} className="btn btn-primary">Schedule An Appointment</div>
                    <div  style={{marginLeft: '5%'}} className="mt-3">
                        <p className="text-secondary">Delivered in more than 450,000 client’s interactions</p>
                        <p className="text-secondary">Provided by experts to help challenge critical activities</p>
                        <p className="text-secondary">Complemented with peer perspectives and advice</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Schedule;