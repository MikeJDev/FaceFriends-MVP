import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { Icon, Container, Left, Right, Body, Content, Button } from 'native-base'

class ProfileTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0
    }
  }

  static navigationOptions = {
    headerLeft:
      <TouchableOpacity onPress={() => { }}>
        <Icon name='md-person-add' style={{ paddingLeft: 10 }} />
      </TouchableOpacity>,
    title: 'Mike Janes',
    headerRight: <Icon name="ios-menu" style={{ paddingRight: 10 }} />,
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
                    <Text>12</Text>
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
                  <Button bordered dark style={{ flex: 3, marginLeft: 10, justifyContent: 'center', height: 30 }}>
                    <Text>
                      Edit Profile
                  </Text>
                  </Button>
                  <Button bordered dark style={{ flex: 1, height: 30, marginLeft: 10, marginRight: 5, justifyContent: 'center' }}>
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

            {this.renderSection}

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
