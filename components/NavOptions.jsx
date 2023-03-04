import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';

const data = [
  {
    id: "123",
    title: "Get a Ride",
    image:
      "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_485,h_385/f_auto,q_auto/products/carousel/UberX.png",
    screen: "MapScreen",
  },
  {
    id: "456",
    title: "Order Food",
    image:
      "https://i.pinimg.com/originals/4f/eb/74/4feb745209cf7aba57463b20d27b61e3.png",
    screen: "EatsScreen",
  },
];


const NavOptions = () => {
  const navigation = useNavigation();

  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => navigation.navigate(item.screen)}
          className="p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40"
          // disabled={!origin}

        >
          <View>
            <Image
              style={{ width: 120, height: 120, resizeMode: "contain" }}
              source={{ uri: item.image }}
            />
            <Text className="mt-2 text-lg font-semibold">{item.title}</Text>
            <Icon
              style={{
                padding: 2,
                backgroundColor: 'black',
                borderRadius: 999,
                width: 30,
                marginTop: 4,
              }}
              name="arrowright"
              type="antdesign"
              color="white"
            />
          </View>
        </TouchableOpacity>
      )}
    />
  )
}

export default NavOptions