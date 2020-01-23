import React from 'react';
import { connect } from 'react-redux';
import { fetchActivity } from '../actions'

const Top = props => {

    // const handleChange = e => {
    //     console.log(e.target.value)
    //     fetchActivity(e.target.value);
    // }
    //console.log(props.ticker)
    return(
        <div className="navbar">
            <h1>Ticker</h1>
            <button onClick={props.fetchActivity}>Get Apple Stock Info</button>
            {/* <label>Pick a ticker: 
                <select onChange={handleChange}>
                    <option>Choose a Ticker</option>
                    <option value="aapl">AAPL</option>
                    <option value="goog">GOOG</option>
                    <option value="enph">ENPH</option>
                    <option value="tsla">TSLA</option>
                    <option value="pypl">PYPL</option>
                </select>      
            </label> */}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        ...state,
    }
}

export default connect(mapStateToProps,{fetchActivity})(Top);