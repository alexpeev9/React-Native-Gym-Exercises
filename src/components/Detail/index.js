//import liraries
import React, { Component, useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import axios from 'axios';

import { DATABASE } from '../../utils/database.json';

const Detail = ({ route, navigation }) => {
  const { item } = route.params;
  const url = `${DATABASE}/exercises/${item.id}.json`
  const [exercise, setExercise] = useState({
    name: item.name,
    description: item.description,
    imageUrl: item.imageUrl
  });

  const goToUpdate = () => {
    navigation.navigate('Update', { item: item });
  };
  
  return (
    <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: '#ccc',
            padding: 5,
          }}>
          <Text style={{ fontWeight: 'bold' }}>{exercise.name}</Text>
          <Text>{exercise.description}</Text>
          <Image source={{uri: exercise.imageUrl}} style={{ width: 305, height: 159 }} /> 
          <TouchableOpacity onPress={goToUpdate}>
            <View style={{ backgroundColor: 'blue', padding: 10 }}>
              <Text style={{ color: 'white', textAlign: 'center' }}>Update {exercise.name}</Text>
            </View>
          </TouchableOpacity>
    </View>
  );
};

export default Detail;
