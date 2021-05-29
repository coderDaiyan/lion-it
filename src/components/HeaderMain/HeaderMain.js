import React from 'react';
import './HeaderMain.css';
import idea from '../../images/idea.gif';

const HeaderMain = () => {
    return (
        <div>

            <main style={{ height: '600px', marginTop: '200px', position: 'absolute' }} className="row d-flex align-items-center w-100">
                <div className="col-md-1"></div>
                <div className="col-md-8 col-sm-8 col-8 ">
                    {/* <div className="logo-container"><img src={logo} alt="" /></div> */}
                    <h1 className="text-white header-heading">Help Challenge <br /> Critical Activities</h1>
                    <p className="text-white" >We are experienced professionals who understand that IT services are changing, and are true partners who care about your success and security.</p>
                    <button className="btn  header-button" style={{color:'white', backgroundColor: '#0092FF'}}>More About Us</button>
                    <button className="btn  ml-md-5 header-button" style={{color:'dark', backgroundColor: 'white'}}>Our Services</button>
                </div>
                <div className="col-md-3 d-md-block d-none">
                    <div className="card header-tips">
                        <img src={idea} alt="" />
                        <h3><strong>Today's Tips</strong></h3>
                        <p>Keep your password strong.</p>
                    </div>
                </div>
            </main>
           

        </div>
    );
};

export default HeaderMain;