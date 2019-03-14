import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { Icon, Container, Content, Card } from 'native-base'
import CardComponent from '../cardComponent'
import config from '../../config/config'
import { TouchableOpacity } from 'react-native-gesture-handler';
import AddMediaTab from './AddMediaTab';
import { navigate, navigation } from 'react-navigation'


class HomeTab extends React.Component {
  static navigationOptions = {
    headerLeft:
      <TouchableOpacity onPress={() => {
        // <AddMediaTab navigation={this.props.navigation} />
        // this.props.navigation.navigate('AddMediaTab')
      }}>
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
          <CardComponent imageSource='1' description={config.descriptions[1]} />
          <CardComponent imageSource='2' description={config.descriptions[2]} />
          <CardComponent imageSource='3' description={config.descriptions[3]} />
          <CardComponent imageSource='4' description={config.descriptions[4]} />
          <CardComponent imageSource='5' description={config.descriptions[5]} />
          <CardComponent imageSource='6' description={config.descriptions[6]} />
          <CardComponent imageSource='1' description={config.descriptions[1]} />
          <CardComponent imageSource='2' description={config.descriptions[2]} />
          <CardComponent imageSource='3' description={config.descriptions[3]} />
          <CardComponent imageSource='4' description={config.descriptions[4]} />
          <CardComponent imageSource='5' description={config.descriptions[5]} />
          <CardComponent imageSource='6' description={config.descriptions[6]} />
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