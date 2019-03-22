import React, { Component } from 'react';

import { getLecture } from '../../api';

import Header from '../../components/header/Header';
import Item from '../../components/item/Item';

export default class Home extends Component {

  state = {
    lecture: getLecture(this.props.match.params.slug),
  }

  render() {
    const { lecture } = this.state;

    console.log(lecture);

    const { content } = lecture;

    return (
      <React.Fragment>
        <Header category = { lecture.category } title = { lecture.title } image = { lecture.image } />
        <div className = "lecture__col">
          { content.map((item, i) =>
            <Item key = { i } item = { item } />
          ) }
        </div>
      </React.Fragment>
    );
  }
}
