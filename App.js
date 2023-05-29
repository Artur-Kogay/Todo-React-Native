import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, View, Text } from "react-native";
import Header from "./components/Header";
import React, { useState } from "react";
import ListItem from "./components/ListItem";
import Form from "./components/Form";

export default function App() {
  const [listOfItems, setListOfItems] = useState([
    {text: 'Купить молоко', key: '1'},
    {text: 'Купить хлеб', key: '2'},
    {text: 'Помыть машину', key: '3'},
    {text: 'Купить зубную пасту', key: '4'},
  ]) 

  const addHandler = (text) => {
    setListOfItems((list) => {
      return[
        {text: text, key: Math.random().toString(36).substring(7)},
        ...list
      ]
    })
  }

  const deleteHandler = (key) => {
    setListOfItems((list) => {
      return list.filter(listOfItems => listOfItems.key !== key)
    })
  }
  return (
    <View style={styles.container}>
      <Header />
      <Form addHandler={addHandler}/>
      <View>
        <FlatList data={listOfItems} renderItem={({item}) => (
          <ListItem deleteHandler={deleteHandler} el={item}/>
        )}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
