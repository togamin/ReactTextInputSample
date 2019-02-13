import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

class TextInputSample extends React.Component{
  state = {
    text:'',
  }
  changeText(text){
    this.setState({text:text});
  }
  render(){
    return(
      <View style={styles.container}>
        <Text>{this.props.title}</Text>
        <TextInput
          style={styles.textinput}
          value={this.state.text}
          onChangeText={this.changeText.bind(this)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    width:'100%',
    padding:9,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textinput:{
    width:'100%',
    height:48,
    margin:9,
    padding:9,
    backgroundColor:'#eee',
    borderWidth:1,
    borderColor:'#ddd',
  },
});

export default TextInputSample;