import React from 'react';
import {FlatList} from 'react-native';
import Container from '../../components/container';
import {styles} from './styles';
import Item from '../../components/item';

const DashBoard = () => {
  return (
    <Container title={'Dashboard'} heading={"Dashboard"} icon={"add-circle-outline"}>
      <Item />
    </Container>
  );
};

export default DashBoard;
