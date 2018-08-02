 import React, {Component} from 'react';
 import { StyleSheet, Text, View, StatusBar, ListView} from 'react-native';
 import { Container, Content, Header, Form, Input, Item, Button, Label, Icon, List, ListItem} from 'native-base';
 import * as firebase from 'firebase';

// Initialize Firebase
var firebaseConfig = {
  apiKey: "AIzaSyAVswdNWbDmRe9q1TFSX-R330dEc-4BqJ0",
  authDomain: "fomo-35a17.firebaseapp.com",
  databaseURL: "https://fomo-35a17.firebaseio.com",
  projectId: "fomo-35a17",
  storageBucket: "fomo-35a17.appspot.com",
  messagingSenderId: "120959306656"
};
firebase.initializeApp(firebaseConfig);

export default class mobilefomoapp extends React.Component {
  constructor(props){
    super(props);
    var ref = firebase.database().ref('opportunities');
    this.state = {
      jobs : [],
      events : [],
    };
  }

  SetJobs(){
    var ref = firebase.database().ref('opportunities');
    ref.orderByChild("Type").equalTo('job').once('value').then(
      snapshot => {
        console.log(snapshot.val())
        this.setState({
          jobs: snapshot.val(),
        });
      }
    )
  }


    render() {
        return (
        <Container>
        {this.state.jobs}
        </Container>
      );
    }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});
