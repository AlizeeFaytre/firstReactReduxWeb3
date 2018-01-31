import React from 'react';
import PropTypes from 'prop-types';
import {Card} from 'semantic-ui-react';
import {connect} from 'react-redux';
import { requestBlocknumber,
    requestCoinnumber
} from './action';



const DataBlockchain = ({state, requestBlocknumber, requestCoinnumber}) => {

    console.log("je suis dans dataBlockchain");

    function defineColor() {
        if (state.name == "Number of Blocks") {
            return "teal";
        }
        else {
            return "purple";
        }
    }
    
    const color = defineColor();
    
    console.log(color);
    return (
        <Card centered={true} color={color}>
            <Card.Header as="h1" textAlign="center" >
                {state.name}
            </Card.Header>
            <Card.Content textAlign="center">
                <h2>{state.dataBlockchain}</h2>
            </Card.Content>
        </Card>
    );
};

DataBlockchain.PropTypes = {
    name: PropTypes.string.isRequired,
    dataBlockchain: PropTypes.number.isRequired
}

const mapActionToProps = {
    requestBlocknumber,
    requestCoinnumber
}

const mapStateToProps = (state) => {
    return {state: state};
}

export default connect(mapStateToProps, mapActionToProps)(DataBlockchain);