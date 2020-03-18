import 'react-native-gesture-handler';
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeMap from './screens/HomeMap';
import Profile from './screens/Profile';
import AddTree from './screens/AddTree';
import Welcome from './screens/Welcome';

const Stack = createStackNavigator();

function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen initialRouteName="Welcome" name="WelcomeRoutes" component={Welcome} options={{ headerShown: false }} />
            <Stack.Screen name="HomeMap" component={HomeMap} options={{ headerTransparent: true, title: false }} />
            <Stack.Screen
                name="AddTree"
                component={AddTree}
                options={{
                    title: 'Cadastrar árvore',
                    headerStyle: { backgroundColor: '#87BC41' },
                    headerTintColor: '#FFF',
                    headerTransparent: true,
                }}
            />
            <Stack.Screen name="Profile" component={Profile} options={{ headerTransparent: true, title:'Informações' }} />
        </Stack.Navigator>
    );
}

export default Routes;