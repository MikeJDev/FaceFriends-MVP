import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Icon, Container, Content, Card } from 'native-base'
import CardComponent from '../cardComponent'


class HomeTab extends React.Component {
  static navigationOptions = {
    headerLeft: <Icon name='ios-camera' style={{ paddingLeft: 10 }} />,
    title: 'FaceFriends',
    headerRight: <Icon name="ios-send" style={{ paddingRight: 10 }} />,
  }

  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <CardComponent imageSource='1' likes='431' />
          <CardComponent imageSource='2' likes='431' />
          <CardComponent imageSource='3' likes='431' />
          <CardComponent imageSource='4' likes='431' />
          <CardComponent imageSource='5' likes='431' />
          <CardComponent imageSource='5' likes='431' />
          <CardComponent imageSource='5' likes='431' />
          <CardComponent imageSource='5' likes='431' />
          <CardComponent imageSource='5' likes='431' />
          <CardComponent imageSource='5' likes='431' />
          <CardComponent imageSource='5' likes='431' />
          <CardComponent imageSource='5' likes='431' />
          <CardComponent imageSource='5' likes='431' />
          <CardComponent imageSource='5' likes='431' />
          <CardComponent imageSource='5' likes='431' />
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
})

export default HomeTab