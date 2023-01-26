import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import Icon from "react-native-vector-icons/FontAwesome";
import { Drawer, View } from 'native-base';
import { background } from 'native-base/lib/typescript/theme/styled-system';

const HeaderMenuButton = ()=>{ 
    const navigation = useNavigation();
    return (
        <View margin={2} height={30}>
        <TouchableOpacity
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        >
          <Icon name='fa-regular fa-bars' color='black' size={30} />
        </TouchableOpacity>
        </View>
      );
}

export default HeaderMenuButton;