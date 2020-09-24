import React from 'react';
import Background from '../../images/Background.png';
import Sundorbon from '../../images/Sundorbon.png';
import Sreemongol from '../../images/Sreemongol.png';
import Sajek from '../../images/Sajek.png';
import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';

const Home = () => {

    const backgroundImage = {
        background: `url(${Background})`,
        backgroundSize: '100% 100%',
        width: '100%',
        height: '100vh'
    }
    return (
        <div style={backgroundImage}>
            <Navbar></Navbar>
            <div className="container mt-5 text-white">
                <div className="row">
                    <div className="col-4 mt-5">
                        <h1 className="mt-5" style={{filter:'brightness(100%)'}}><strong>Cox's Bazar</strong></h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, placeat modi facilis animi cupiditate corporis deserunt ea tempora, labore nobis quam sit pariatur. Nihil illo recusandae iure, in dolorem vel magni suscipit! Eligendi exercitationem incidunt id iure vitae, enim quam cumque sequi! Iusto expedita adipisci aliquam in. Aut, laudantium nesciunt.</p>
                        <Link to="/booking"><button className="btn btn-outline-success text-white">Booking</button></Link>
                    </div>
                    <div className="col-8 mt-5">
                        <div className="row">
                            <div className="col-4 mt-5">
                                <img src={Sundorbon} alt="" style={{ width: '100%' }}/>
                            </div>
                            <div className="col-4 mt-5">
                                <img src={Sreemongol} alt="" style={{ width: '100%' }}/>
                            </div>
                            <div className="col-4 mt-5">
                                <img src={Sajek} alt="" style={{ width: '100%' }}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Home;