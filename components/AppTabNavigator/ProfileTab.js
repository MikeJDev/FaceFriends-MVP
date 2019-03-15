import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native'
import { Icon, Container, Left, Right, Body, Content, Button } from 'native-base'
import CardComponent from '../cardComponent';
import config from '../../config/config';


const images = [
  require('../../assets/drink1.jpg'),
  require('../../assets/beach1.jpg'),
  require('../../assets/drink2.jpg'),
  require('../../assets/drink3.jpg'),
  require('../../assets/drink4.jpg'),
  require('../../assets/drink5.jpg'),
  require('../../assets/drink6.jpg'),
  require('../../assets/drink7.jpg'),
  require('../../assets/drink8.jpg'),
  require('../../assets/drink9.jpg'),
  require('../../assets/drink10.jpeg'),
]

const { width, height } = Dimensions.get('window')
class ProfileTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0
    }
  }

  static navigationOptions = {
    headerLeft:
      <TouchableOpacity onPress={() => {
        alert("This will allow the user to add friends. (edit this button in ProfileTab.js line 34)")
      }}>
        <Icon name='md-person-add' style={{ paddingLeft: 10 }} />
      </TouchableOpacity>,
    title: 'Mike Janes',

    headerRight:
      <TouchableOpacity onPress={() => {
        alert("This is a menu! (edit this button in ProfileTab.js line 42)")
      }}>
        <Icon name="ios-menu" style={{ paddingRight: 10 }} />
      </TouchableOpacity >,

  }


  renderSectionOne = () => {
    return images.map((image, index) => {
      return (
        <View key={index} style={[{ width: (width) / 3, height: (width) / 3 }, index % 3 !== 0 ? { paddingLeft: 2 } : { paddingLeft: 0 }, { marginBottom: 2 }]}>
          <Image style={{ flex: 1, width: undefined, height: undefined }}
            source={image}
          />
        </View>
      )
    })
  }

  renderSection = () => {
    if (this.state.activeIndex === 0) {
      return (
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          {this.renderSectionOne()}
        </View>
      )
    } else if (this.state.activeIndex === 1) {
      return (
        <View>
          <CardComponent imageSource="0" pic='0' description={config.descriptions[1]} username={config.names[1]} pic='0' />

          <CardComponent imageSource="2" pic='0' description={config.descriptions[8]} username={config.names[1]} pic='0' />

          <CardComponent imageSource="4" pic='0' description={config.descriptions[5]} username={config.names[1]} pic='0' />

          <CardComponent imageSource="6" pic='0' description={config.descriptions[7]} username={config.names[1]} pic='0' />

          <CardComponent imageSource="8" pic='0' description={config.descriptions[9]} username={config.names[1]} pic='0' />

          <CardComponent imageSource="10" pic='0' description={config.descriptions[11]} username={config.names[1]} pic='0' />
        </View>
      )
    }
  }

  segment = (index) => {
    this.setState({
      activeIndex: index
    })
  }

  render() {
    return (
      <Container>
        <Content>
          <View style={{ paddingTop: 10 }}>

            <View style={{ flexDirection: 'row' }}>
              <View style={{ flex: 1, alignItems: 'center' }}>
                <Image source={require('../../assets/profpic.jpg')} style={{ width: 75, height: 75, borderRadius: 37.5 }} />
              </View>

              <View style={{ flex: 3 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>

                  <View style={{ alignItems: 'center' }}>
                    <Text>11</Text>
                    <Text style={{ fontSize: 10, color: 'grey' }}>Posts</Text>
                  </View>

                  <View style={{ alignItems: 'center' }}>
                    <Text>1043</Text>
                    <Text style={{ fontSize: 10, color: 'grey' }}>Followers</Text>
                  </View>

                  <View style={{ alignItems: 'center' }}>
                    <Text>3287</Text>
                    <Text style={{ fontSize: 10, color: 'grey' }}>Following</Text>
                  </View>
                </View>
                {/* buttons */}
                <View style={{ flexDirection: 'row', paddingTop: 10 }}>
                  <Button bordered dark style={{ flex: 3, marginLeft: 10, justifyContent: 'center', height: 30 }} onPress={() => {
                    alert("This will bring up a menu to allow profile editing. (edit this button in ProfileTab.js line 126)")
                  }}>
                    <Text>
                      Edit Profile
                  </Text>
                  </Button>
                  <Button bordered dark style={{ flex: 1, height: 30, marginLeft: 10, marginRight: 5, justifyContent: 'center' }} onPress={() => {
                    alert("This is the settings menu. (edit this button in ProfileTab.js line 133)")
                  }}>
                    <Icon name='settings' style={{ fontSize: 20, marginBottom: -10, marginTop: -10 }} />
                  </Button>
                </View>

              </View>

            </View>
            <View style={{ paddingVertical: 10, paddingHorizontal: 10 }}>
              <Text style={{ fontWeight: 'bold' }}>Mike Janes</Text>
              <Text>Software Engineer | Gym Bro | Dad</Text>
              <Text>www.MikeJanes.com</Text>
            </View>
          </View>

          <View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', borderTopWidth: 1, borderTopColor: '#eae5e5' }}>
              <Button transparent
                onPress={() => { this.segment(0) }}
                active={this.state.activeIndex === 0}
              >
                <Icon name='ios-apps' style={[this.state.activeIndex === 0 ? {} : { color: 'grey' }]} />
              </Button>

              <Button transparent
                onPress={() => { this.segment(1) }}
                active={this.state.activeIndex === 1}>
                <Icon name='ios-list' style={[this.state.activeIndex === 1 ? {} : { color: 'grey' }]} />
              </Button>

              <Button transparent
                onPress={() => { this.segment(2) }}
                active={this.state.activeIndex === 2}>
                <Icon name='ios-people' style={[this.state.activeIndex === 2 ? {} : { color: 'grey' }]} />
              </Button>

              <Button transparent
                onPress={() => { this.segment(3) }}
                active={this.state.activeIndex === 3}>
                <Icon name='ios-bookmark' style={[this.state.activeIndex === 3 ? {} : { color: 'grey' }]} />
              </Button>
            </View>

            {this.renderSection()}

          </View>

        </Content>
      </Container >
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default ProfileTab
