import React, { Component } from 'react';
import * as actionTypes from '../../store/actions/results';

import * as actionCreators from '../../store/actions/index';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import { connect } from 'react-redux';

class Counter extends Component {
    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={ this.props.onIncrementCounter } />
                <CounterControl label="Decrement" clicked={ this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={ this.props.onAdd }  />
                <CounterControl label="Subtract 5" clicked={() => this.counterChangedHandler( 'sub', 5 )}  />
                <hr />
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                    {this.props.storedResults.map(result => 
                        <li key={result.id} onClick={() => this.props.onDeleteResult(result.id)}>{result.val}</li>
                    )}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        storedResults: state.res.results
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch(actionCreators.increment()),
        onDecrementCounter: () => dispatch(actionCreators.decrement()),
        onAdd: () => dispatch(actionCreators.add(5)),
        onStoreResult: (value) => dispatch(actionCreators.storeResult(value)),
        onDeleteResult: (id) => dispatch(actionCreators.deleteResult(id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);