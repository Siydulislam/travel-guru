import React from 'react';
import Header from '../Header/Header';
import ApartmentOne from '../../images/ApartmentOne.png';
import ApartmentTwo from '../../images/ApartmentTwo.png';
import Lounge from '../../images/Lounge.png';
import Star from '../../images/Star.png';
import './DetailsInfo.css';
import Map from '../Map/Map';


const DetailsInfo = () => {
    return (
        <div>
            <Header></Header>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-6">
                        <p><small>252 stays Apr 13-17 3 guests</small></p>
                        <h3 className="mb-4">Stay in Cox's Bazar</h3>
                        <div className="card mb-3 border border-white" style={{width: '540px'}}>
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                <img src={ApartmentOne} className="card-img" alt="..."/>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body mt-auto">
                                        <h6 className="card-title">Light bright airy stylish apt and safe peachful stay </h6>
                                        <p className="card-text"><small>4 Guests 2 bedrooms 2 beds 2 baths</small></p>
                                        <p className="card-text"><small>Wif Air Conditioning Kitchen</small></p>
                                        <p className="card-text"><small>Cancellation fexibility available</small></p>
                                    </div>
                                    <div className="container row">
                                        <div className="col-4">
                                            <div>
                                                <img src={Star} alt="" style={{width:'15px'}}/>
                                                <p className="star-rate"><small>4.8(10)</small></p>
                                            </div>
                                        </div>
                                        <div className="col-8">
                                            <p><small>$34/night $167 total</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card mb-3 border border-white" style={{width: '540px'}}>
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                <img src={ApartmentTwo} className="card-img" alt="..."/>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h6 className="card-title">Apartment in Lost Panorama</h6>
                                        <p className="card-text"><small>4 Guests 2 bedrooms 2 beds 2 baths</small></p>
                                        <p className="card-text"><small>Wif Air Conditioning Kitchen</small></p>
                                        <p className="card-text"><small>Cancellation fexibility available</small></p>
                                    </div>
                                    <div className="container row">
                                        <div className="col-4">
                                            <div>
                                                <img src={Star} alt="" style={{width:'15px'}}/>
                                                <p className="star-rate"><small>4.8(10)</small></p>
                                            </div>
                                        </div>
                                        <div className="col-8">
                                            <p><small>$34/night $167 total</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card mb-3 border border-white" style={{width: '540px'}}>
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                <img src={Lounge} className="card-img" alt="..."/>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h6 className="card-title">AR Lounge and Pool (r&r + b&b)</h6>
                                        <p className="card-text"><small>4 Guests 2 bedrooms 2 beds 2 baths</small></p>
                                        <p className="card-text"><small>Wif Air Conditioning Kitchen</small></p>
                                        <p className="card-text"><small>Cancellation fexibility available</small></p>
                                    </div>
                                    <div className="container row">
                                        <div className="col-4">
                                            <div>
                                                <img src={Star} alt="" style={{width:'15px'}}/>
                                                <p className="star-rate"><small>4.8(10)</small></p>
                                            </div>
                                        </div>
                                        <div className="col-8">
                                            <p><small>$34/night $167 total</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <Map></Map>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsInfo;