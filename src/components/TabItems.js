import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import { Icon } from 'react-native-elements'; 

const TabItems = ({label, isFocused, onPress, onLongPress}) => {
  
    const IconCustom = () => {
        if(label === "Home") {
            return isFocused ? <Icon name='rowing' color="#517fa4"/> : <Icon name='rowing'/>
        }
        if(label === "Fav") {
            return isFocused ? <Icon raised name='heartbeat' type='font-awesome' color='#f50'/> : <Icon raised name='heartbeat' type='font-awesome' color='#fff'/>
        }
    }

    return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={isFocused ? styles.containerfocus : styles.container}>
          <IconCustom/>
      {isFocused && <Text style={styles.text}>{label.toUpperCase()}</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        alignItems: 'center',
        marginTop: '5%',
        opacity: .33,
        marginLeft: '20%'
    },
    containerfocus: {
        alignContent: 'center',
        marginTop: "5%",
        padding: 10,
        borderRadius: 14,
        //backgroundColor: WARNA_UTAMA,
        width: 86,
        height: 54,
        marginLeft: '20%'
    },
    text: {
        //color: WARNA_UTAMA,
        fontSize: 12,
        //fontFamily: 'Montserrat-Bold',
        fontWeight: '800',
        left: -2,
    }
});

export default TabItems;