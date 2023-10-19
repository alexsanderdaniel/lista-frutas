import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const FruitsPage = () => {
  const [fruits, setFruits] = useState([]);

  useEffect(() => {
    // Carregar os dados do JSON
    const loadData = async () => {
      try {
        const response = await require('fruits.json');
        setFruits(response);
      } catch (error) {
        console.error('Erro ao carregar os dados:', error);
      }
    };

    loadData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Frutas</Text>
      <FlatList
        data={fruits}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.fruitItem}>
            <Text style={styles.fruitName}>{item.name}</Text>
            <Text style={styles.fruitColor}>{item.color}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  fruitItem: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
  },
  fruitName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  fruitColor: {
    fontSize: 14,
    color: '#555',
  },
});

export default FruitsPage;
