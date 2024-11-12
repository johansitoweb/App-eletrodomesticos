import { Text, SafeAreaView, StyleSheet, FlatList, View, TouchableOpacity, Alert } from 'react-native';  
import { Card, IconButton } from 'react-native-paper';  
import React, { useState } from 'react';  

const productos = [  
  { id: '1', nombre: 'Refrigerador', precio: '$800', imagen: 'https://cdn.pixabay.com/photo/2017/09/04/16/25/refrigerator-2712874_960_720.png' },  
  { id: '2', nombre: 'Lavadora', precio: '$600', imagen: 'https://cdn.pixabay.com/photo/2017/10/05/13/54/laundry-2826411_960_720.png' },  
  { id: '3', nombre: 'Microondas', precio: '$200', imagen: 'https://cdn.pixabay.com/photo/2016/10/25/12/23/microwave-987295_960_720.png' },  
  { id: '4', nombre: 'Horno Eléctrico', precio: '$300', imagen: 'https://cdn.pixabay.com/photo/2015/09/16/14/05/oven-957952_960_720.jpg' },  
  { id: '5', nombre: 'Juguera', precio: '$150', imagen: 'https://cdn.pixabay.com/photo/2017/07/29/04/56/blender-2466784_960_720.png' },  
  { id: '6', nombre: 'Freidora', precio: '$120', imagen: 'https://cdn.pixabay.com/photo/2020/05/11/19/35/deep-fryer-5163428_960_720.jpg' },  
  { id: '7', nombre: 'Cafetera', precio: '$90', imagen: 'https://cdn.pixabay.com/photo/2016/11/10/06/20/coffee-maker-1810978_960_720.jpg' },  
  { id: '8', nombre: 'Tostadora', precio: '$50', imagen: 'https://cdn.pixabay.com/photo/2017/05/08/17/16/toaster-2294978_960_720.jpg' },  
  { id: '9', nombre: 'Extractor de Jugo', precio: '$130', imagen: 'https://cdn.pixabay.com/photo/2016/11/29/00/07/juice-extractor-1864333_960_720.jpg' },  
  { id: '10', nombre: 'Plancha', precio: '$60', imagen: 'https://cdn.pixabay.com/photo/2016/10/18/12/26/iron-1758143_960_720.png' },  
];  

export default function App() {  
  const [likes, setLikes] = useState({}); // Estado para manejar los "me gusta"  

  const toggleLike = (id) => {  
    setLikes(prev => {  
      const newLikes = {  
        ...prev,  
        [id]: !prev[id],  
      };  
      
      // Mostrar alerta cuando se añade a favoritos  
      if (newLikes[id]) {  
        Alert.alert("Agregado exitosamente ");  
      }else{
        Alert.alert("Producto retirado");
      }  
      
      return newLikes;  
    });  
  };  

  const renderItem = ({ item }) => (  
    <Card style={styles.card}>  
      <Card.Cover source={{ uri: item.imagen }} />  
      <Card.Title title={item.nombre} subtitle={item.precio} />  
      <View style={styles.buttonContainer}>  
        <TouchableOpacity onPress={() => toggleLike(item.id)}>  
          <IconButton   
            icon={likes[item.id] ? 'heart' : 'heart-outline'}   
            color={likes[item.id] ? 'green' : 'black'} // Cambiando a verde si está "me gusta"  
            size={20}   
          />  
        </TouchableOpacity>  
      </View>  
    </Card>  
  );  

  return (  
    <SafeAreaView style={styles.container}>  
      <Text style={styles.title}>Tienda de Electrodomésticos</Text>  
      <FlatList  
        data={productos}  
        renderItem={renderItem}  
        keyExtractor={item => item.id}  
        contentContainerStyle={styles.list}  
      />  
    </SafeAreaView>  
  );  
}  

const styles = StyleSheet.create({  
  container: {  
    flex: 1,  
    justifyContent: 'flex-start',  
    backgroundColor: '#f0f0f0',  
    padding: 10,  
  },  
  title: {  
    marginVertical: 20,  
    fontSize: 24,  
    fontWeight: 'bold',  
    textAlign: 'center',  
  },  
  list: {  
    paddingBottom: 20,  
  },  
  card: {  
    marginVertical: 10,  
    borderRadius: 8,  
  },  
  buttonContainer: {  
    alignItems: 'flex-end',   
    padding: 10,  
  },  
});