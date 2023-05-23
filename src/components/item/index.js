import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import {LAYOUT} from '../../layout';
import Icon from 'react-native-vector-icons/MaterialIcons';
const Item = ({make, model, image, onDelete, price}) => {
  return (
    <View style={styles.itemStyle}>
      <View style={styles.itemImageView}>
        <Image
          source={{
            uri: image,
          }}
          style={styles.itemImage}
        />
      </View>
      <View style={styles.itemDetailsView}>
        <Text style={styles.detailHeading}>{`Make: ${make}`}</Text>
        <Text style={styles.detailHeading}>{`Model: ${model}`}</Text>
        <Text style={styles.detailHeading}>{`Price: ${price}`}</Text>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-evenly',
            marginTop:10
          }}>
          <Icon name={'edit'} size={20} color={LAYOUT.COLORS.P1} />
          <Icon name={'delete'} size={20} color={LAYOUT.COLORS.P1} onPress={onDelete}/>
        </View>
      </View>
    </View>
  );
};
export default Item;
