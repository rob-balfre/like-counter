import React, { Component, PropTypes } from 'react';


export default class Friends extends Component {
    static propTypes = {
        getFriends: PropTypes.func.isRequired,
        friends: PropTypes.array.isRequired
    };

    render() {
        const { getFriends, friends } = this.props;
        return (
            <div>
                <p>{ friends }</p>
                <button onClick={getFriends}>Load Friends list</button>
            </div>
        );
    }
}