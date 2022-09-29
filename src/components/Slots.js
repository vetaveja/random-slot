import React from 'react'
import slots from '../SlotsDB'

export default function RandomSlot(props) {

    const { slot, generateRandomSlot } = props;
    return (
        <div className="card text-center bg-warning bg-gradient" >

            <div className="card-body">
                <img className="card-img-top col-sm-6" src={slot.img}/>
                <h4 className="card-title">{slot.slot}</h4>
                <h5 className="card-title">{slot.provider}</h5>
                <button className="btn btn-dark btn-lg"
                    onClick={() => { generateRandomSlot(slots) }}
                    type="submit">
                    <i className="fas fa-mouse"></i> Get the Slot for today</button>
                <button className="btn btn-dark btn-lg m-1"
                    
                    onClick={() => {
                        generateRandomSlot(slots);
                        window.open('https://twitter.com/intent/tweet/?text=' + encodeURIComponent('My slot of the day is ' + slot.slot + ' -- ' + slot.provider))
                    }}
                    type="submit"><i className="fab fa-twitter"></i> Share My Fate</button>
            </div>
        </div>
    )
}