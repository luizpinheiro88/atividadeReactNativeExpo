import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Sobre from './components/Sobre';
import Informacoes from './components/Informacoes';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: {
            fontSize: 16, // Define o tamanho da fonte dos nomes das abas
            fontWeight: 'bold' // Define o peso da fonte dos nomes das abas
          },
          tabBarStyle: {
            justifyContent: 'center', // Alinha o texto das abas ao centro verticalmente
          },
          tabBarShowLabel: true, // Mostra os nomes das abas
          tabBarShowIcon: false, // Oculta os ícones das abas
          tabBarInactiveTintColor: 'gray', // Define a cor dos textos das abas inativas
          tabBarActiveTintColor: 'black', // Define a cor do texto da aba ativa
          tabBarInactiveBackgroundColor: 'white', // Define a cor de fundo das abas inativas
          tabBarActiveBackgroundColor: 'white', // Define a cor de fundo da aba ativa
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{ tabBarLabel: 'Home' }} // Apenas o nome, sem ícone
        />
        <Tab.Screen
          name="Sobre"
          component={Sobre}
          options={{ tabBarLabel: 'Sobre' }} // Apenas o nome, sem ícone
        />
        <Tab.Screen
          name="Informações"
          component={Informacoes}
          options={{ tabBarLabel: 'Informações' }} // Apenas o nome, sem ícone
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Seja bem-vindo à página do meu currículo!</Text>
      <Image
        source={require('./img/foto.jpg')} // Substitua pelo caminho da sua imagem
        style={styles.imagem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagem: {
    width: 300, // Defina a largura da imagem conforme necessário
    height: 300, // Defina a altura da imagem conforme necessário
    marginTop: 20, // Ajuste conforme necessário para posicionar a imagem
    borderRadius: 100,
  },
});
