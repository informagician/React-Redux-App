import React from 'react';
import { connect } from 'react-redux';
import TickerData from './TickerData';

const TickerSelector = props => {

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
        <TickerData data={props.ticker}/>
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

export default connect(mapStateToProps, {})(TickerSelector);