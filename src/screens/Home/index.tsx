import React, { useEffect, useState, useRef, useMemo, useCallback } from 'react';
import styles from './styles';
import { View, Image } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import NavigationBar from '../../navigation/components/NavigationBar';
import { Colors } from '../../utils/colors';

export default function HomeScreen({navigation}:any) {

  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  // variables
  const snapPoints = useMemo(() => ['11%', '60%'], []);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);


  return (<View style={styles.container}>
    <NavigationBar navigation={navigation}/>
    <BottomSheet
        ref={bottomSheetRef}
        index={0}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        handleStyle={{display:'none'}}
      >
        <View style={styles.sheetContainer}>
          <View style={[styles.sheetHelper]}/>
          <View style={styles.sheetContent}>
          </View>
        </View>
    </BottomSheet>
    <View style={styles.bottomMenu}>
      <Image style={styles.icon} source={require('../../images/whiteHome.png')} />  
      <Image style={[styles.icon,{tintColor: Colors.White}]} source={require('../../images/blackMenu.png')} />
    </View>
  </View>)
}
