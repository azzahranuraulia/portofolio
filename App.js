//NAVIGASI= mengarahkan antar halaman
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import home from './halaman/home';
import tentangsaya from './halaman/tentangsaya';
import kontak from './halaman/kontak';
import Sertifikat from './halaman/Sertifikat';
import Skills from './halaman/Skills';


const Stack = createNativeStackNavigator();

export default App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={home}
          options={{title: 'Halaman Utama'}}
        />
        <Stack.Screen
          name="TentangSaya"
          component={tentangsaya}
          options={{title: 'Halaman Tentang Saya'}}
        />
        <Stack.Screen
          name="Kontak"
          component={kontak}
          options={{title: 'Halaman Kontak'}}
        />
        <Stack.Screen
          name="Sertifikat"
          component={Sertifikat}
          options={{title: 'Halaman Sertifikat'}}
        />
        <Stack.Screen
          name="Skills"
          component={Skills}
          options={{title: 'Halaman Skills '}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};