import React, {Component} from 'react'
import {Platform, StyleSheet, Text, View, ScrollView} from 'react-native'
import moment from 'moment'


const DATA = {
  timer : 1234567,
  laps  : [1234, 2345, 3456, 4567],
}

function Timer ({interval}) {
  const duration = moment.duration(interval)
  const centiseconds = Math.floor(duration.milliseconds() / 10)
  return (
    <Text style = {styles.timer}>
      {duration.minutes()}:{duration.seconds()},{centiseconds}
    </Text>
  )
}

function RoundButton ({title, color, backgroundColor}) {
  return (
    <View style = {[ styles.button, {backgroundColor : backgroundColor}]}>
      <View style = {styles.buttonBorder}>
        <Text style={[styles.buttonTitle, {color}]}> {title} </Text>
      </View>
    </View>
  )
}

function Lap ({number, interval}) {
  return (
    <View style={styles.lap}>
      <Text style = {styles.lapText}> Lap {number} </Text>
      <Text style = {styles.lapText}> {interval} </Text>
    </View>
  )
}

function LapsTable ({laps}) {
  return (
    <ScrollView style = {styles.scrollView}>
      {laps.map((lap, index) => (
        <Lap number={laps.length - index} key = {laps.length - index} interval={lap} />
      ))}
    </ScrollView>
  )
}

export default class App extends Component{
  render() {
    return (
      <View style={styles.container}>

        <Timer interval={DATA.timer}/>
      
        <View style={styles.buttonsRow}>
          <RoundButton title='Reset' color='#ffffff' backgroundColor='#3D3D3D' />
          <RoundButton title='Start' color='#50D167' backgroundColor='#1B361F' />
        </View>
      
        <LapsTable laps = {DATA.laps} />
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#0D0D0D',
    paddingTop : 130,
    paddingHorizontal : 25,
  },
  timer : {
    color : '#ffffff',
    fontSize : 76,
    fontWeight : '100',
  },
  button : {
    width : 80,
    height : 80,
    borderRadius : 40,
    justifyContent : 'center',
    alignItems : 'center',
  },
  buttonTitle : {
    fontSize : 18,
  },
  buttonBorder : {
    width : 76,
    height : 76,
    borderRadius : 38,
    borderWidth : 2,
    justifyContent : 'center',
    alignItems : 'center',
  },
  buttonsRow : {
    flexDirection : 'row',
    alignSelf : 'stretch',
    justifyContent : 'space-between',
    marginTop : 18,
    marginBottom : 30,
  },
  lapText : {
    color : '#ffffff',
    fontSize : 18,
  },
  lap : {
    flexDirection : 'row',
    justifyContent : 'space-between',
    borderColor : '#151515',
    borderTopWidth : 1,
    paddingVertical : 10,
  },
  scrollView : {
    alignSelf: 'stretch',
  }
})
