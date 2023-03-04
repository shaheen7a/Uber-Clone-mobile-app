import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/base'

const data = [
  {
    id: '123',
    icon: 'home',
    location: 'Home',
    destination: 'San Francisco, CA, USA'

  },
  {
    id: '456',
    icon: 'briefcase',
    location: 'Work',
    destination: 'San Ramon, CA, USA'

  },
]


const NavFavorites = () => {
  return (
    <FlatList
      style={{ backgroundColor: "white" }}
      data={data}
      keyExtractor={(item) => item.id}
      itemSeparatorComponent={() => {
        <View
          style={{ height: 0.5, backgroundColor: "black" }}
        />
      }}
      renderItem={({ item: { location, destination, icon } }) =>
        <TouchableOpacity className="flex-row items-center p-2">
          <Icon
            style={{
              margin: 10,
              borderRadius: 9999,
              backgroundColor: 'black',
              padding: 6,
            }}
            name={icon}
            type='ionicon'
            color='white'
            size={18}
          />
          <View>
            <Text className="font-semibold text-lg">{location}</Text>
            <Text className="text-gray-500">{destination}</Text>
          </View>
        </TouchableOpacity>
      }
    />
  )
}

export default NavFavorites