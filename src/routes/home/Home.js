import React, { Component } from 'react';

import { getLectureList } from '../../api';

import Header from '../../components/header/Header';
import Lectures from '../../components/lectures/Lectures';
import Filter from '../../components/filter/Filter';

export default class Home extends Component {

  state = {
    lectures: getLectureList(),
  }

  onFilter = (active) => {
    this.setState({ lectures: getLectureList(active) });
  }

  render() {
    const { lectures } = this.state;

    // console.log(lectures);

    return (
      <React.Fragment>
        <Header category = "Vefforritun" title = "Fyrirlestrar" />
        <Filter onFilter = { this.onFilter } />
        <Lectures lectures = { lectures } />
      </React.Fragment>
    );
  }
}
