import { combineReducers } from 'react-redux';
import { ETHEREUM_CLIENT } from '../Ethereum/eth';
import {
    REQUEST_BLOCKNUMBER,
    REQUEST_COINNUMBER
} from './action';

const initialState = {
    name: "data",
    dataBlockchain: 0
}

 export default function fetchData (state=initialState, action) {
     console.log("je suis dans le reducer");
    switch (action.type) {
        case REQUEST_BLOCKNUMBER: {
            var blocknumber = ETHEREUM_CLIENT.eth.blockNumber;
            return {...state, dataBlockchain: blocknumber, name: "Number of Blocks" };
            //break;
        }

        case REQUEST_COINNUMBER: {
            if (ETHEREUM_CLIENT.eth.getBlock("latest", true).transactions[0] != null){
                var coinnumber = ETHEREUM_CLIENT.eth.getBlock("latest", true).transactions[0].value ;
            }
            else {
                var coinnumber = 0;
            }
            console.log(coinnumber);
            return {...state, dataBlockchain: coinnumber, name: "Number of coins for reward"};
            //break;
        }
        default: {
            console.log(action)
            return state;
        }
    }
}