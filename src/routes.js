import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

const Stack = createStackNavigator();

import Home from './components/Home';
import Create from './components/Create';
import Detail from './components/Detail';
import Update from './components/Update';

const Routes = () => {
  return (
    <Stack.Navigator
        screenOptions={{
            headerStyle: {
              backgroundColor: 'blue',
            },
            headerTintColor: 'white',
          }}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={({ navigation, route }) => ({
          title: 'Gym Exercises',
          headerRight: () => (
            <Ionicons
              name={'ios-add-circle'}
              size={25}
              color={'white'}
              style={{ marginRight: 15 }}
              onPress={() => navigation.navigate('Create')}
            />
          ),
        })}
      />
      <Stack.Screen name="Create" component={Create} />
      <Stack.Screen name="Detail" component={Detail} />
      <Stack.Screen name="Update" component={Update} />
    </Stack.Navigator>
  );
}

export default Routes;