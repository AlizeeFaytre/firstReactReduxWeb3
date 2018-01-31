import React from 'react';
import PropTypes from 'prop-types';
import { Menu } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Link } from 'react-router-redux';
import {
    requestBlocknumber,
    requestCoinnumber,
    REQUEST_BLOCKNUMBER,
    REQUEST_COINNUMBER
} from './action';



const Header = ({ state, requestBlocknumber, requestCoinnumber }) => {
    const onClick = (e) => {
        if (e.target.id == 0) {
            console.log("requestCoinnumber j'ai été cliqué");
            return requestCoinnumber();
        }
        else {
            console.log("requestBlocknumber j'ai été cliqué");
            return requestBlocknumber();
        }
    };

    return (
        <Menu inverted={true} defaultActiveIndex={0} className="segment" >
            <Menu.Header className="inverted">
                <strong>My First Blockchain</strong>
            </Menu.Header>
            <Menu.Item as="div" className="link" id={0} index={0} onClick={onClick}>
                Number of coin for reward
            </Menu.Item>
            <Menu.Item as="div" className="link" id={1} index={1} onClick={onClick}>
                Number of blocks
            </Menu.Item>
        </Menu>
    );

};

Header.propTypes = {
    onClick: PropTypes.func
}

const mapActionToProps = {
    requestBlocknumber,
    requestCoinnumber
}

const mapStateToProps = (state) => {
    console.log(state);
    return { state: state };
}

const mapDispatchToProps = (dispatch) => {
    console.log('mapDispatchToProps')
    return {
        requestBlocknumber: () => dispatch({ type: REQUEST_BLOCKNUMBER }),
        requestCoinnumber: () => dispatch({ type: REQUEST_COINNUMBER })
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Header);