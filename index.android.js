'use strict';
 
var React = require('react');
var ReactNative = require('react-native');
 
var {
  Alert,
  AppRegistry,
  Text,
  TouchableHighlight,
  View,
  StyleSheet
} = ReactNative;

var region = {
  latitude: 0,
  longitude: 0
}

var rootUrl = 'http://api.openweathermap.org/data/2.5/weather?APPID=xxxx';

var url = `${rootUrl}&lat=${region.latitude}&lon=${region.longitude}`;
 
var sample = React.createClass({
  _onPressButtonGET: function() {
        fetch(url, {method: "GET"})
        .then((response) => response.json())
        .then((responseData) => {
            Alert.alert(
                "GET Response",
                "City/Nearest City -> " + JSON.stringify(responseData.name)
            )
        })
        .done();
    },
    render: function() {
        return (
            <View style={styles.container}>
                <TouchableHighlight onPress={this._onPressButtonGET} style={styles.button}>
                    <Text>GET City</Text>
                </TouchableHighlight>
            </View>
        );
    },  
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    button: {
        backgroundColor: '#eeeeee',
        padding: 10,
        marginRight: 5,
        marginLeft: 5,
    }
});
 
AppRegistry.registerComponent('sample', () => sample);