import {
    REQUEST_BLOCKNUMBER,
    REQUEST_COINNUMBER
} from './action';
import { createStore } from "react-redux";

const initialState = {
    name: "data",
    dataBlockchain: 0
}