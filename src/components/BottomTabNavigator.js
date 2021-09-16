import React from 'react';
import {StyleSheet, View} from 'react-native';
import TabItems from './TabItems';

const BottomTabNavigator = ({ state, descriptors, navigation }) => {
    const focusedOptions = descriptors[state.routes[state.index].key].options;

    if (focusedOptions.tabBarVisible === false) {
        return null;
    }
    
    return(
        <View style={{ flexDirection: 'row' }}>
        {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TabItems 
          key={index}
            isFocused={isFocused}
            label={label}
            onPress={onPress}
            onLongPress={onLongPress}/>
        );
      })}
    </View>
    );
};

const styles = StyleSheet.create({
    container: {
        //flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        justifyContent: 'space-between',
        //paddingHorizontal: 28,
        //paddingVertical: 12,
        borderTopStartRadius: 18,
        borderTopEndRadius: 18,
        elevation: 33
      }
});

export default BottomTabNavigator;