import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'native-base'
import config from '../config/config.js'
import { TouchableOpacity } from 'react-native-gesture-handler';



class cardComponent extends React.Component {

  constructor() {
    super();
    this.state = {
      liked: false,
      likeCount: 10
    }
  }

  componentDidMount = () => {
    return fetch('/databaseRetrievalOnLoad')
      .then((response) => {
        alert(response.json())
      })
      .catch((error) => {
        console.debug(error);
      });
  }

  likeToggle = () => {
    this.setState({
      liked: !this.state.liked
    })
    if (!this.state.liked) {
      this.setState({
        likeCount: this.state.likeCount + 1
      })
    } else {
      this.setState({
        likeCount: this.state.likeCount - 1
      })
    }
  }

  handleDoubleTap = () => {
    const now = Date.now();
    const DOUBLE_PRESS_DELAY = 300;
    if (this.lastTap && (now - this.lastTap) < DOUBLE_PRESS_DELAY) {
      this.likeToggle();
    } else {
      this.lastTap = now;
    }
  }

  render() {
    const heartIconColor = (this.state.liked) ? 'rgb(229, 76, 71)' : '#d1cece'
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
          {/* this is the touchable picture */}
          <TouchableOpacity activeOpacity={0.9}
            onPress={() => {
              this.handleDoubleTap()
            }}>
            <Image source={{ uri: config.images[this.props.imageSource] }} style={{ height: 300, flex: 1, marginBottom: 10 }} />
          </TouchableOpacity>
        </View>

        <CardItem style={{ height: 0 }}>
          {/* these are the buttons under the picture */}
          <Left>
            <Button transparent onPress={() => {
              this.likeToggle()
            }}>
              <Icon name='ios-heart' style={{ color: heartIconColor, fontSize: 27 }} />
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
          {/* this is the number of likes */}
          <Text style={{ height: 15, fontSize: 11 }}>
            {this.state.likeCount} Likes
          </Text>
        </CardItem>
        <CardItem>
          {/* this is the description */}
          <Body>
            <Text >
              <Text style={{ fontWeight: '700', fontSize: 15 }}> Mike Janes </Text>
              {this.props.description}
            </Text>
            <Text style={{ fontSize: 9, marginTop: 10 }} note>March 12, 2019</Text>
          </Body>
        </CardItem>

      </Card >
    )
  }
}

export default cardComponent