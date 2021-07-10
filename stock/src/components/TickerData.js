import React from 'react';
import { connect } from 'react-redux';

const TickerData = props => {
    let data = null;
    let err = null;
    let sign = 0;
    if (props.ticker) {
        data = props.ticker;
        if (props.ticker.change > 0) {
            sign = 'green';
        } else {
            sign = 'red';
        }
    } else if (props.ticker === null && props.isLoading === false) {
        err = props.error;
    }
    console.log(data)
    return (
        data ? (
            <main>
                <div className="ticker">
                    <h2>{data.companyName}</h2><span>({data.symbol})</span>
                </div>
                <div className="detail"><span className="price">{data.previousClose}</span><span className={sign}>{data.change}</span><i className={sign}></i></div>
            </main>
        ) : (
            <main>
            <p>{err ? 'Some Error Happened' : 'Pick a Stock'}</p>
            </main>
        )
    )
}

const mapStateToProps = state => {
    return {
        ticker: state.ticker,
        isLoading: state.isLoading,
        error: state.error,
    }
}

export default connect(mapStateToProps,{})(TickerData);