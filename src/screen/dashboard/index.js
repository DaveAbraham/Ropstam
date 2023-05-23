import React from 'react';
import {FlatList, View} from 'react-native';
import Container from '../../components/container';
import {styles} from './styles';
import Item from '../../components/item';
import { useDispatch, useSelector } from "react-redux";
import { deleteItem } from "../../redux/reducers/carsReducer";



const DashBoard = () => {

  const {cars} = useSelector(state => state.carsReducer);
  const dispatch = useDispatch()

  const handleDeleteItem = (i)=>{
    dispatch(deleteItem(i))
  }
  const renderItem = obj => {
    const {image, make, model, price} = obj.item;
    return <Item image={image} make={make} model={model} price={price} onDelete={()=>handleDeleteItem(obj.index)}/>;
  };
  return (
    <>
      <Container
        title={'Dashboard'}
        heading={'Dashboard'}
        icon={'add-circle-outline'}
        LogoutIcon={'logout'}>
        <View style={{height: 30}} />
      </Container>
      <FlatList
        data={cars}
        renderItem={renderItem}
        style={{marginBottom: 10}}
      />
    </>
  );
};

export default DashBoard;
