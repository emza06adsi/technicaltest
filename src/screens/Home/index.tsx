import React, { useEffect, useState, useRef, useMemo, useCallback } from 'react';
import styles from './styles';
import { View, Image } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import NavigationBar from '../../navigation/components/NavigationBar';
import { Colors } from '../../utils/colors';
import { useAppSelector } from '../../redux/hooks';
import { getParkUsers, useUsersActions } from '../../data/users';
import { useAppActions } from '../../data/app';

export default function HomeScreen({navigation}:any) {

  const UsersActions = useUsersActions();
  const AppActions = useAppActions();
  const { loading } = useAppSelector(state => state.app)
  const { parkUsers } = useAppSelector(state => state.users)
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['11%', '60%'], []);


  useEffect(()=>{
    AppActions.setLoading(true)
    getParkUsers().then((foundUsers)=>{
      UsersActions.setParkUsers(foundUsers);
      AppActions.setLoading(false)
    }).catch((e)=>{
      AppActions.setError(`${e}`)
    })
  },[])


  return (<View style={styles.container}>
    <NavigationBar navigation={navigation}/>
    <BottomSheet
        ref={bottomSheetRef}
        index={0}
        snapPoints={snapPoints}
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
