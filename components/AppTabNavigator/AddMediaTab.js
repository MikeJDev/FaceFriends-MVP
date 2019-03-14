import React, { Component } from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import Camera from 'react-native-camera';

class AddMediaTab extends Component {

  takePicture() {
    this.camera
      .capture()
      .then((data) => { })
      .catch(err => { });
  }

  render() {
    return (
      <Camera
        ref={cam => { this.camera = cam }}
        style={styles.preview}
        aspect={Camera.constants.Aspect.fill}>
        <Text style={styles.capture} onPress={this.takePicture.bind(this)}>
          [CAPTURE]
        </Text>
      </Camera>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  }
})

export default AddMediaTab