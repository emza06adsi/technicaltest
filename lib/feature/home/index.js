import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {SafeAreaView, Text, View, FlatList} from 'react-native';

const HomeView = ({navigation}) => {
  return (
    <SafeAreaView>
      <FlatList
        data={[{}]}
        renderItem={}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default HomeView;
