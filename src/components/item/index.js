import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import {LAYOUT} from '../../layout';
const Item = ({make, model, image, onPress, price}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.itemStyle}>
        <View style={styles.itemImageView}>
          {image ? (
            <Image
              source={{
                uri: image,
              }}
              style={styles.itemImage}
            />
          ) : (
            <View
              style={[
                styles.itemImage,
                {alignItems: 'center', justifyContent: 'center'},
              ]}>
              <Text style={{color: LAYOUT.COLORS.S2}}>No Image preview</Text>
            </View>
          )}
        </View>
        <View style={styles.itemDetailsView}>
          <Text style={styles.detailHeading}>{`Make: ${make}`}</Text>
          <Text style={styles.detailHeading}>{`Model: ${model}`}</Text>
          <Text style={styles.detailHeading}>{`Price: ${price}`}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default Item;