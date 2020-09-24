import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
// import { Link } from 'react-router-dom';
import Background from '../../images/Background.png';
import Navbar from '../Navbar/Navbar';
import './Booking.css';
import 'react-datepicker/dist/react-datepicker.css';
import { useHistory } from 'react-router-dom';

const Booking = () => {

    const [selectedDate, setSelectedDate] = useState(null);
    const history = useHistory();

    const handleProceedBooking = () => {
        history.push('/details');
    }

    const backgroundImage = {
        background: `url(${Background})`,
        backgroundSize: '100% 100%',
        width: '100%',
        height: '100vh'
    }

    return (
        <div style={backgroundImage}>
            <Navbar></Navbar>
            <div className="container mt-5">
                <div className="row mt-5">
                    <div className="col-6 mt-5 text-white">
                        <h1><strong>Sundorbon</strong></h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ex praesentium expedita alias, ad eum tempora quisquam possimus, aliquam corrupti mollitia impedit quo, dolorem nostrum et. Odio voluptatum incidunt non nam excepturi est totam accusantium distinctio maiores nisi debitis illo vero, mollitia soluta iure saepe! Quas odio vero sed consequuntur, aspernatur et eum at repellat accusamus? Accusamus, deleniti, dolore quos quidem at non nemo debitis velit ullam atque placeat ut reiciendis. Sed, quis accusamus laboriosam nemo et explicabo quas perferendis adipisci nihil molestiae ducimus aliquid velit illo ipsam sint dicta suscipit vero alias voluptatum quaerat reprehenderit aut excepturi unde fuga?</p>
                    </div>
                    <div className="col-6 mt-5">
                        <form className="form-details">
                            <label>Origin</label>
                            <input type="text" placeholder="Dhaka"/>

                            <label>Destination</label>
                            <input type="text" placeholder="Sundorbon"/>

                            <div className="row">
                                <div className="col-6">
                                    <label>From</label>
                                    <DatePicker
                                        placeholderText={'Select date'}
                                        selected = {selectedDate}
                                        onChange = {date => setSelectedDate(date)}
                                        dateFormat='dd/MM/yyyy'
                                        minDate={new Date()}
                                    />
                                </div>
                                <div className="col-6">
                                    <label className="ml-2">To</label>
                                    <DatePicker
                                        placeholderText={'Select date'}
                                        selected = {selectedDate}
                                        onChange = {date => setSelectedDate(date)}
                                        dateFormat='dd/MM/yyyy'
                                    />
                                </div>
                            </div>
                        
                            <input type="submit" value="Start Booking" onClick={handleProceedBooking}/>
                        </form>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Booking;