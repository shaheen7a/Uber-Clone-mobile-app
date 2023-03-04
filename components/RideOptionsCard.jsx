import { View, Text, Image, SafeAreaView, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import { Icon } from '@rneui/base';
import { useNavigation } from '@react-navigation/native';

const data = [
  {
    id: "Uber-X-123",
    title: "UberX",
    multiplier: 1,
    image:
      "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_485,h_385/f_auto,q_auto/products/carousel/UberX.png",
  },
  {
    id: "Uber-XL-456",
    title: "UberXL",
    multiplier: 1.2,
    image:
      "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_485,h_385/f_auto,q_auto/products/carousel/UberXL.png",
  },
  {
    id: "Uber-LUX-789",
    title: "UberLUX",
    multiplier: 1.75,
    image:
      "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_485,h_385/f_auto,q_auto/products/carousel/Lux.png",
  },
];

const SURGE_CHARGE_RATE = 1.5;


const RideOptionsCard = () => {

  const navigation = useNavigation();
  const [selected, setSelected] = useState(null);

  return (
    <SafeAreaView className="bg-white flex-1">
      <View>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="absolute top-3 left-5 p-3 rounded-full"
        >
          <Icon name="chevron-left" type="fontawesome" />
        </TouchableOpacity>
        <Text className="text-center py-5 text-xl">
          Select a Ride - 30 min
        </Text>
      </View>

      <View style={{ flex: 1 }}>
        <FlatList

          style={{ flex: 1 }}
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item: { id, title, image, multiplier }, item }) => {

            return (
              <TouchableOpacity
                onPress={() => setSelected(item)}
                className={`flex-row justify-between items-center px-10
                                ${id === selected?.id && "bg-gray-200"}`}
              >
                <Image
                  style={{
                    width: 100,
                    height: 100,
                    resizeMode: "contain",
                  }}
                  source={{ uri: image }}
                />
                <View className="-ml-6">
                  <Text className="text-xl font-semibold">{title}</Text>
                  <Text>{ 3 + multiplier * 10 } minutes travel time</Text>
                </View>
                <Text className="text-xl">
                  {new Intl.NumberFormat("en-IN", {
                    style: "currency",
                    currency: "USD",
                  }).format(
                    (500 * SURGE_CHARGE_RATE * multiplier) / 10
                  )}
                </Text>
              </TouchableOpacity>
            )
          }}
        />
      </View>

      <View className="mt-auto border-t border-gray-200">
        <TouchableOpacity
          disabled={!selected}
          className={`bg-black py-3 m-3 ${!selected && "bg-gray-300"}`}
        >
          <Text className="text-center text-white text-xl">
            Choose {selected?.title}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default RideOptionsCard