import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { Icon, Container, Content, Card } from 'native-base'
import CardComponent from '../cardComponent'
import config from '../../config/config'
import { TouchableOpacity } from 'react-native-gesture-handler';
import axios from 'axios'


class HomeTab extends React.Component {

  static navigationOptions = {
    headerLeft:
      <TouchableOpacity onPress={() => { }}>
        <Icon name='ios-camera' style={{ paddingLeft: 10 }} />
      </TouchableOpacity>,
    title: 'FaceFriends',
    headerRight: <Icon name="ios-send" style={{ paddingRight: 10 }} />,
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container style={styles.container}>
        <Content>
          <CardComponent imageSource='0' description={config.descriptions[1]} username={config.names[1]} pic='0' />
          <CardComponent imageSource='1' description={config.descriptions[2]} username={config.names[2]} pic='1' />
          <CardComponent imageSource='2' description={config.descriptions[3]} username={config.names[1]} pic='0' />
          <CardComponent imageSource='3' description={config.descriptions[4]} username={config.names[2]} pic='1' />
          <CardComponent imageSource='4' description={config.descriptions[5]} username={config.names[1]} pic='0' />
          <CardComponent imageSource='5' description={config.descriptions[6]} username={config.names[2]} pic='1' />
          <CardComponent imageSource='6' description={config.descriptions[7]} username={config.names[1]} pic='0' />
          <CardComponent imageSource='7' description={config.descriptions[8]} username={config.names[2]} pic='1' />
          <CardComponent imageSource='8' description={config.descriptions[9]} username={config.names[1]} pic='0' />
          <CardComponent imageSource='9' description={config.descriptions[10]} username={config.names[2]} pic='1' />
          <CardComponent imageSource='10' description={config.descriptions[11]} username={config.names[1]} pic='0' />
          <CardComponent imageSource='0' description={config.descriptions[1]} username={config.names[1]} pic='0' />
          <CardComponent imageSource='1' description={config.descriptions[2]} username={config.names[2]} pic='1' />
          <CardComponent imageSource='2' description={config.descriptions[3]} username={config.names[1]} pic='0' />
          <CardComponent imageSource='3' description={config.descriptions[4]} username={config.names[2]} pic='1' />
          <CardComponent imageSource='4' description={config.descriptions[5]} username={config.names[1]} pic='0' />
          <CardComponent imageSource='5' description={config.descriptions[6]} username={config.names[2]} pic='1' />
          <CardComponent imageSource='6' description={config.descriptions[7]} username={config.names[1]} pic='0' />
          <CardComponent imageSource='7' description={config.descriptions[8]} username={config.names[2]} pic='1' />
          <CardComponent imageSource='8' description={config.descriptions[9]} username={config.names[1]} pic='0' />
          <CardComponent imageSource='9' description={config.descriptions[10]} username={config.names[2]} pic='1' />
          <CardComponent imageSource='10' description={config.descriptions[11]} username={config.names[1]} pic='0' />
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