import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import GridItem from '../components/GridItem';

const categories = [{id: 1, name: 'c1', color: 'red'}, {id: 2, name: 'c2', color: '#ff9900'}, {id: 3, name: 'c3', color: '#ff6666'}, {id: 4, name: 'c4', color: '#66ff33'}];

export default function Categories({navigation}) {

  const renderCategoryItem = (itemData) => {
    const onPressHandler = () => {
      navigation.navigate('meals', {categoryId: itemData.item.id});
    }
    return <GridItem category={itemData.item} onpress={onPressHandler} />
  }
  return (
      <View style={styles.container}>
        <StatusBar style="light" />
        <FlatList data={categories} keyExtractor={item => item.id} renderItem={(itemData) => {
          return renderCategoryItem(itemData)
        }} numColumns={2} />
      </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
})