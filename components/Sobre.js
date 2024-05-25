import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Sobre = () => {
  
  const data = [
    { id: '1', item: 'Nome completo: Luiz Felipe Florencio Pinheiro ' },
    { id: '2', item: 'Idade: 35 anos' },
    { id: '3', item: 'Cidade natal: Recife-PE' },
    { id: '4', item: 'Residência: Recife-PE' },
    { id: '5', item: 'Hobbies: Aprender a tocar instrumetentos, Carros Classicos, Motos e Aviação' },
    

  ];

  return (
    <View style={[styles.container, { backgroundColor: 'transparent' }]}>
      <Text style={styles.titulo}>Sobre Mim</Text>
      <Text style={styles.texto}>
        Olá, me chamo Luiz Felipe, abaixo colocarei um pouco de informações a meu respeito:
      </Text>
      
      <View style={styles.listaContainer}>
        {data.map(item => (
          <Text key={item.id} style={styles.item}>{item.item}</Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  texto: {
    fontSize: 18,
    textAlign: 'center',
  },
  listaContainer: {
    alignSelf: 'flex-start',
    marginTop: 10,
  },
  item: {
    fontSize: 16,
    marginVertical: 5,
    textAlign: 'left',
  },
});

export default Sobre;
