import React, { Component, useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
import { DATABASE } from '../../utils/database.json';
import axios from 'axios';
import { useIsFocused } from '@react-navigation/native'

const Main = ({ navigation }) => {
  const isFocused = useIsFocused();
  const [exercises, setExercises] = useState([]);
  useEffect(() => {
    const getExercisesData = () => {
        let url = `${DATABASE}/exercises.json`;
        axios.get(url).then(res => {
          const exercisesArray = [];
          for (const key in res.data) {
          exercisesArray.push({
            ...res.data[key],
            id: key
            });
          }
          setExercises(exercisesArray);
        });
    };
    getExercisesData();
  },[isFocused])

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={()=>navigation.navigate('Detail', {
        item: item
      })}>
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: '#ccc',
            padding: 5,
          }}>
          <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
          <Image source={{uri: item.imageUrl}} style={{ width: 305, height: 159 }} /> 
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={exercises}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default Main;
