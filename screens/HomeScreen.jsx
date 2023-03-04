import { SafeAreaView, Image, Text, View } from 'react-native'
import React from 'react'
import NavOptions from '../components/NavOptions'
import { InputAutoSuggest } from 'react-native-autocomplete-search';
import NavFavorites from '../components/NavFavorites';

const HomeScreen = () => {
  return (
    <SafeAreaView className="bg-white h-full">
      <View className="p-5">
        <Image
          style={{
            width: 100,
            height: 100,
            resizeMode: "contain",
          }}
          source={{
            uri: "https://links.papareact.com/gzs",
          }}
        />

        <InputAutoSuggest
          placeholder="Enter the film title"
          staticData={[
            { id: '1', name: 'Paris' },
            { id: '2', name: 'London' },
            { id: '3', name: 'Ottawa' },
            { id: '4', name: 'Damascus' },
            { id: '5', name: 'New York' },
            { id: '6', name: 'Berlin' }]}
        />

        <NavOptions />
        <NavFavorites />
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen