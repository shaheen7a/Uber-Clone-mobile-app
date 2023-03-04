import { View, Text, SafeAreaView, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { Button, Icon } from '@rneui/base'
import { useNavigation } from '@react-navigation/native';

const NavigateCard = () => {

  const navigation = useNavigation();


  return (
    <SafeAreaView className="bg-white flex-1">
      <Text className="text-center py-5 text-xl">Good Morning</Text>
      <View className="border-t border-gray-200 flex-shrink">
        <View>
          <TextInput
            style={{
              flex: 0,
              backgroundColor: "white",
              paddingTop: 20,
              margin: 2,
            }}
            placeholder="Where To ?"
          />

          <Button
            onPress={() => navigation.navigate("RideOptionsCard")}
            title="Go"
            color="White"
            backgroundColor="black"
          />
        </View>

        <View
          className="flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100"
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("RideOptionsCard")}
            className="flex flex-row justify-between bg-black w-24 px-4 py-3 rounded-full"
          >
            <Icon name="car" type="font-awesome" color="white" size={16} />
            <Text className="text-white text-center">Rides</Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="flex flex-row justify-between w-24 px-4 py-3 rounded-full"
          >
            <Icon
              name="fast-food-outline"
              type="ionicon"
              color="black"
              size={16}
            />
            <Text className="text-center">Eats</Text>
          </TouchableOpacity>
        </View>

      </View>
    </SafeAreaView>
  )
}

export default NavigateCard