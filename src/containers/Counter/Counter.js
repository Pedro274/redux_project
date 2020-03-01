import React from 'react';
import {connect} from 'react-redux';
import * as actionCreator from '../../store/Actions/actionIndex'


import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

const Counter = (props) => {

        const listItem = props.record.map((item) => {
            return <li key={item.id} onClick={() => props.deleteListItem(item.id)}>{item.value}</li>
        }) 

        console.log(props.record)
        
        return (
            <div>
                <CounterOutput value={props.ctr} />
                <CounterControl label="Increment" clicked={props.incrementCounter} />
                <CounterControl label="Decrement" clicked={props.decrementCounter} />
                <CounterControl label="Add 5" clicked={props.incrementByFive} />
                <CounterControl label="Subtract 5" clicked={props.decrementByFive} />
                <hr/>
                <button onClick={() => props.addItemToList(props.ctr)}>Log Result</button>
                <ul>
                    {listItem}
                </ul> 
            </div>
        );
}


const mapStateProps = state => {
    return {
        ctr: state.ctr.counter,
        record: state.record.recordCounter };
};

const mapDispatchToProps = dispatch => {
    return {
        incrementCounter: () => dispatch(actionCreator.increment()),
        decrementCounter: () => dispatch(actionCreator.decrement()),
        incrementByFive: () => dispatch(actionCreator.increment_5()),
        decrementByFive: () => dispatch(actionCreator.decrement_5()),
        addItemToList: (number) => dispatch(actionCreator.asynchronousFunctionAddition(number)),
        deleteListItem: (id) => dispatch(actionCreator.deleteItemList(id)) };
}

export default connect(mapStateProps,mapDispatchToProps)(Counter);