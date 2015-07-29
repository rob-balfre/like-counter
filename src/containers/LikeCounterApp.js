import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Friends from '../components/Friends';
import * as FriendsActions from '../actions/FriendsActions';

@connect(state => ({
    friends: state.friends
}))
export default class LikeCounterApp extends Component {
  render() {
    const { friends, dispatch } = this.props;
    return (
      <Friends friends={friends}
               {...bindActionCreators(FriendsActions, dispatch)} />
    );
  }
}