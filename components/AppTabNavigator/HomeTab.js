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
          <CardComponent imageSource='2' likes='8453' />
          <CardComponent imageSource='3' likes='12' />
          <CardComponent imageSource='4' likes='947' />
          <CardComponent imageSource='5' likes='381' />
          <CardComponent imageSource='6' likes='674' />
          <CardComponent imageSource='1' likes='565' />
          <CardComponent imageSource='2' likes='32' />
          <CardComponent imageSource='3' likes='98' />
          <CardComponent imageSource='4' likes='576' />
          <CardComponent imageSource='5' likes='83' />
          <CardComponent imageSource='6' likes='2' />
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