import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'native-base'



class cardComponent extends React.Component {

  render() {
    const imageUri = "https://lh3.googleusercontent.com/KJeCE4WgynNio0Y6E2q1lNpXlQI-Tk5RWT_uqz1w2P8l2QcjTzFFC6h8zmr7Bdbrw20QADBD6ysjbLGEG0g9G9YFeA"
    return (
      <Card style={{ marginLeft: 0, marginRight: 0, marginTop: 0 }}>
        <CardItem style={{ height: 64, marginLeft: -10, marginTop: 3, marginBottom: 3 }}>
          <Left>
            <Thumbnail source={require('../assets/profpic.jpg')} style={{ resizeMode: 'contain' }} />
            <Body>
              <Text>Mike Janes</Text>
            </Body>
          </Left>
          <Right>
            <Icon name='ios-menu' />
          </Right>
        </CardItem>

        <View>
          <Image source={{ uri: imageUri }} style={{ height: 300, flex: 1, marginBottom: 10 }} />
        </View>

        <CardItem style={{ height: 0 }}>
          <Left>
            <Button transparent>
              <Icon name='ios-heart' style={{ color: '#d1cece', fontSize: 27 }} />
            </Button>
            <Button transparent>
              <Icon name='ios-chatbubbles' style={{ color: '#d1cece', fontSize: 27 }} />
            </Button>
            <Button transparent>
              <Icon name='ios-send' style={{ color: '#d1cece', fontSize: 27 }} />
            </Button>
          </Left>
        </CardItem>

        <CardItem style={{ marginBottom: -12 }}>
          <Text style={{ height: 15, fontSize: 11 }}>
            101 Likes
          </Text>
        </CardItem>
        <CardItem>
          <Body>
            <Text>
              <Text style={{ fontWeight: '700', fontSize: 15 }}> Mike Janes </Text>
              Crashing against the shore, small waves wash the night's debris onto the land.
              The untouched golden sand covers the floor as far as your eyes can see. Soothing, a gentle sea breeze rustles through your hair.
              Beach shops prepare for their day of excited costumers bustling in and out of their small seafront shops.
            </Text>
            <Text style={{ fontSize: 9, marginTop: 10 }} note>March 12, 2019</Text>
          </Body>
        </CardItem>

      </Card >
    )
  }
}

export default cardComponent