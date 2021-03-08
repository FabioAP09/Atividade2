import React,{Component} from 'react';
import {View,Image} from 'react-native';

class Logo extends Component{
    render(){
     let imagem='https://graduacao.unipam.edu.br/img/evento01.png'
      return(
          <View>
       <Image
       source={{uri:imagem}}
       style={{width: this.props.largura ,height:this.props.altura}}
       
       />
       
       </View>
      )
    }
}

export default Logo;