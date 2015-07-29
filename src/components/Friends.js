import React, { Component, PropTypes } from 'react';


export default class Friends extends Component {
    static propTypes = {
        getFriends: PropTypes.func.isRequired,
        friends: PropTypes.array.isRequired
    };

    render() {
        const { getFriends, friends } = this.props;

        var friendNodes = this.props.friends.map(function (friend) {
            return (
                <div key={friend.rank}>
                    <p>{friend.name}</p>
                    <p>{friend.likes}</p>
                </div>
            );
        });

        return (
            <div>
                { friendNodes }
                <button onClick={getFriends}>Load Friends list</button>
            </div>
        );
    }
}