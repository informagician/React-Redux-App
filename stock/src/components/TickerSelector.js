import React from 'react';
import { connect } from 'react-redux';
import TickerData from './TickerData';
import { fetchActivity } from '../actions';

const TickerSelector = props => {
    let data = null;
    if (props.ticker) {
        data = props.ticker;
    }
    const handleChange = e => {
        console.log(e.target.value)
        fetchActivity(e.target.value);
    }
    //onClick={props.fetchActivity(value)}
    return(
        <main>
        <label>Pick a ticker: 
            <select onChange={handleChange}>
                <option>Choose a Ticker</option>
                <option value="aapl">AAPL</option>
                <option value="goog">GOOG</option>
                <option value="enph">ENPH</option>
                <option value="tsla">TSLA</option>
                <option value="pypl">PYPL</option>
            </select>      
        </label>
        {/* <button onClick={props.fetchActivity}>get</button> */}
        <p>{props.isLoading}</p>
        <TickerData data={data ? data : ''}/>
        </main>
    )
}

const mapStateToProps = state => {
    return {
        ticker: state.ticker,
        isLoading: state.isLoading,
        error: state.error,
    }
}

export default connect(mapStateToProps, {fetchActivity})(TickerSelector);