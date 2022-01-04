//import liraries
import React, { Component, useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import axios from 'axios';

import { DATABASE } from '../../utils/database.json';

const Update = ({ route, navigation }) => {
  const { item } = route.params;
  const url = `${DATABASE}/exercises/${item.id}.json`
  const [exercise, setExercise] = useState({
    name: item.name,
    description: item.description,
    imageUrl: item.imageUrl
  });

  const onChangeName = (value) => {
    setExercise({ ...exercise, name: value });
  };

  const onChangeDescription = (value) => {
    setExercise({ ...exercise, description: value });
  };

  const onChangeImageUrl = (value) => {
    setExercise({ ...exercise, imageUrl: value });
  };

  const updateData = () => {
     let exercise_ = { "name": exercise.name, "description": exercise.description, "imageUrl": exercise.imageUrl };
     axios.put(url, exercise_)
            .then(() => setExercise({name:"",description:""}))   
            .then(()=> navigation.navigate('Home')).catch(error => console.log(error.message))
  }

  const deleteData = () => {
    axios.delete(url)
            .then(() => setExercise({name:"",description:""}))   
            .then(()=> navigation.navigate('Home')).catch(error => console.log(error.message))
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder={'Name'}
        onChangeText={(value) => onChangeName(value)}
        style={styles.input}
        value={exercise.name}
      />
      <TextInput
        placeholder={'Description'}
        onChangeText={(value) => onChangeDescription(value)}
        multiline={true}
        numberOfLines={4}
        style={styles.textArea}
        value={exercise.description}
      />

      <TextInput
        placeholder={'Image Url'}
        onChangeText={(value) => onChangeImageUrl(value)}
        style={styles.input}
        value={exercise.imageUrl}
      />
      <Image source={{uri: exercise.imageUrl}} style={{ width: 305, height: 159 }} /> 

      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={updateData}>
          <View style={{ backgroundColor: 'blue', padding: 10 }}>
            <Text style={{ color: 'white', textAlign: 'center' }}>Update</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={deleteData}>
          <View style={{ backgroundColor: 'red', padding: 10 }}>
            <Text style={{ color: 'white', textAlign: 'center' }}>Delete</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15,
    backgroundColor: '#fff',
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 5,
  },
  textArea: {
    height: 120,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 5,
  }
});

export default Update;
