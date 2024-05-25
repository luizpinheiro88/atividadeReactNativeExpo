import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Informacoes = () => {
  const data = [
    { id: '1', item: 'Formação: ' },
    { id: '2', item: 'Bacharel em Publicidade e Propaganda - Uninassau' },
    { id: '3', item: 'Técnico em Mecatrônica - SENAI' },
    { id: '4', item: 'Experiências:' },
    { id: '5', item: 'Design gráfico (2012 - 2013) - Unipress Gráfica e Editora' },
    { id: '6', item: 'Auxiliar Adminstrativo (2013 - 2015) - Unipress Gráfica e Editora do NE' },
    { id: '7', item: 'Diretor Financeiro (2015 - 2016) - Unipress Gráfica e Editora do NE' },
    { id: '8', item: 'Diretor (2016 - atual) - Pinheiro Gráfica e Editora Eireli' },
  ];

  return (
    <View style={[styles.container, { backgroundColor: 'transparent' }]}>
      <Text style={styles.titulo}>Informações</Text>
      <Text style={styles.texto}>
        Aqui estão algumas informações sobre minhas formações e experiências:
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

export default Informacoes;
