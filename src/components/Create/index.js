import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import axios from 'axios';
import { DATABASE } from '../../utils/database.json';

const Create = ({ navigation }) => {
  const [exercise, setExercise] = useState({
    name: '',
    description: '',
    imageUrl: ''
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
  const saveData = () => {
    let exercise_ = { "name": exercise.name, "description": exercise.description, "imageUrl": exercise.imageUrl };
    let url = `${DATABASE}/exercises.json`;
    axios.post(url, exercise_)
            .then(() => setExercise({name:"",description:""}))   
            .then(()=> navigation.navigate('Home')).catch(error => console.log(error.message))
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder={'Name'}
        onChangeText={(value) => onChangeName(value)}
        style={styles.input}
      />
      <TextInput
        placeholder={'Description'}
        onChangeText={(value) => onChangeDescription(value)}
        style={styles.input}
      />
      <TextInput
        placeholder={'Image Url'}
        onChangeText={(value) => onChangeImageUrl(value)}
        style={styles.input}
      />
      <TouchableOpacity onPress={saveData}>
        <View style={{ backgroundColor: 'blue', padding: 10 }}>
          <Text style={{ color: 'white', textAlign: 'center' }}>
            Create Exercise
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    padding: 8,
    margin: 15,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 5,
  },
});

export default Create;

