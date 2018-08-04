import React, {Component} from 'react';
import {
  FormattedMessage,
  FormattedHTMLMessage,
  FormattedDate,
  FormattedTime,
  FormattedRelative,
  FormattedNumber,
  FormattedPlural,
  defineMessages
} from 'react-intl';
import keyIndex from 'react-key-index';

import Introduction from '../components/Introduction';
import SkillList from '../components/SkillList';
import ImageItem from '../components/common/ImageItem';


let dataArray = [
  {
    id: 1,
    thumbnail: 'https://zos.alipayobjects.com/rmsportal/BXJNKCeUSkhQoSS.png',
    image: 'https://zos.alipayobjects.com/rmsportal/DGOtoWASeguMJgV.png',
    title: 'Motorcycle',
    time: '',
    content: 'Taiwan called motorcycle, motor bike [1] or a motorcycle,'
    + ' the motorcycle referred to in the mainland, Hong Kong and Southeast'
    + ' Asia known as motorcycles.',
    link: '',
    skill: '',
    team: '',
    selfTask: ''
  }
];

dataArray = keyIndex(dataArray, 1);

class Top extends Component {
  state = {
    projects: dataArray
  };

  onItemClick = (id) => {
    this.props.history.push('/projects/1')
  };

  render() {
    const {
      projects,
    } = this.state;

    console.log(this.props.defaultData)

    return (
      <div>
        <Introduction/>
        <SkillList/>
        <FormattedMessage
          id ='button.back'/>
        <section className="image-list">
          {projects.map(val => <ImageItem key={val._idId} val={val} onClick={this.onItemClick.bind(this, val.id)}/>)}
        </section>
      </div>
    )
  }
}

export default Top