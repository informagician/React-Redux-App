import React from 'react';
import { connect } from 'react-redux';
import TickerData from './TickerData';
import { fetchActivity } from '../actions';

const TickerSelector = props => {
    let data = null;
    if (props.ticker) {
        data = props.ticker;
    }
    return(
        <main>
        <label>Pick a ticker: 
            <select>
            <option>AAPL</option>
            <option>GOOG</option>
            <option>ENPH</option>
            <option>TSLA</option>
            <option>PYPL</option>
            </select>      
        </label>
        <button onClick={props.fetchActivity}>get</button>
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