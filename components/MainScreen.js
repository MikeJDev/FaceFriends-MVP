import React from 'react'
import { View, Text, StyleSheet, Platform, Button } from 'react-native'
import { Icon } from 'native-base'
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation'
import ProfileTab from './AppTabNavigator/ProfileTab'
import LikesTab from './AppTabNavigator/LikesTab'
import SearchTab from './AppTabNavigator/SearchTab'
import AddMediaTab from './AppTabNavigator/AddMediaTab'
import HomeTab from './AppTabNavigator/HomeTab'

class MainScreen extends React.Component {

  render() {
    return (
      <AppTabNavigator />
    )
  }
}

const AppTabNavigator = createBottomTabNavigator({
  HomeTab: {
    screen: createStackNavigator(
      { screen: HomeTab },
      {
        navigationOptions: {
          tabBarIcon: ({ tintColor }) => (< Icon name='ios-home' style={{ color: tintColor }} />)
        }
      }
    )
  },
  SearchTab: {
    screen: createStackNavigator(
      { screen: SearchTab },
      {
        navigationOptions: {
          tabBarIcon: ({ tintColor }) => (< Icon name='ios-search' style={{ color: tintColor }} />)
        }
      }

    )
  },
  AddMediaTab: {
    screen: createStackNavigator(
      { screen: AddMediaTab },
      {
        navigationOptions: {
          tabBarIcon: ({ tintColor }) => (< Icon name='ios-add-circle' style={{ color: tintColor }} />)
        }
      }
    )
  },
  LikesTab: {
    screen: createStackNavigator(
      { screen: LikesTab },
      {
        navigationOptions: {
          tabBarIcon: ({ tintColor }) => (< Icon name='ios-heart' style={{ color: tintColor }} />)
        }
      }
    )
  },
  ProfileTab: {
    screen: createStackNavigator(
      { screen: ProfileTab },
      {
        navigationOptions: {
          tabBarIcon: ({ tintColor }) => (< Icon name='person' style={{ color: tintColor }} />)
        }
      }
    )
  }
},
  {
    tabBarPosition: 'bottom',
    tabBarOptions: {
      style: {
        ...Platform.select({
          android: {
            backgroundColor: 'white'
          }
        })
      },
      inactiveTintColor: '#d1cece',
      showLabel: false,
      showIcon: true
    }
  })




export default createAppContainer(AppTabNavigator)
// export default MainScreen



