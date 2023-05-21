import React from 'react';
import {FlatList, View} from 'react-native';
import Container from '../../components/container';
import {styles} from './styles';
import Item from '../../components/item';

const data = [
  {
    image:
      'https://w7.pngwing.com/pngs/414/106/png-transparent-enzo-ferrari-sports-car-luxury-vehicle-ferrari-compact-car-car-performance-car.png',
    make: 'Ferrari1',
    model: '2020',
    price: '25000000',
  },
  {
    image:
      'https://w7.pngwing.com/pngs/414/106/png-transparent-enzo-ferrari-sports-car-luxury-vehicle-ferrari-compact-car-car-performance-car.png',
    make: 'Ferrari2',
    model: '2020',
    price: '25000000',
  },
  {
    image:
      'https://w7.pngwing.com/pngs/414/106/png-transparent-enzo-ferrari-sports-car-luxury-vehicle-ferrari-compact-car-car-performance-car.png',
    make: 'Ferrari3',
    model: '2020',
    price: '25000000',
  },
  {
    image:
      'https://w7.pngwing.com/pngs/414/106/png-transparent-enzo-ferrari-sports-car-luxury-vehicle-ferrari-compact-car-car-performance-car.png',
    make: 'Ferrari4',
    model: '2020',
    price: '25000000',
  },
  {
    image:
      'https://w7.pngwing.com/pngs/414/106/png-transparent-enzo-ferrari-sports-car-luxury-vehicle-ferrari-compact-car-car-performance-car.png',
    make: 'Ferrari5',
    model: '2020',
    price: '25000000',
  },
  {
    image:
      'https://w7.pngwing.com/pngs/414/106/png-transparent-enzo-ferrari-sports-car-luxury-vehicle-ferrari-compact-car-car-performance-car.png',
    make: 'Ferrari6',
    model: '2020',
    price: '25000000',
  },
];

const DashBoard = () => {
  const renderItem = obj => {
    const {image, make, model, price} = obj.item;
    return <Item image={image} make={make} model={model} price={price} />;
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
        data={data}
        renderItem={renderItem}
        style={{marginBottom: 10}}
      />
    </>
  );
};

export default DashBoard;
