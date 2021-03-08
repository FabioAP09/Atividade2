import React,{Component} from 'react';
import {View, StyleSheet,Text} from 'react-native';


class Produto extends Component{
    render(){
        return(
            
            
            <View style={styles.item}>
                <Text style={styles.title}>{this.props.nome}</Text>
                <Text>Valor:{this.props.valor}           Marca:{this.props.marca}</Text>
                <Text>Quantidade:{this.props.quantidade}          Ref:{this.props.referencia}</Text>
                <Text><Text style={styles.desconto}>{this.props.desconto}      <Text style={styles.promocao}> {this.props.promocao}</Text></Text> </Text>
                
            </View>
            
    
        )
    }
}

export default Produto;

const styles=StyleSheet.create({
    item:{
        backgroundColor:'#AAA7A7',
        padding:20,
        marginVertical:8,
        marginHorizontal:12
    },
    title:{
        fontSize:20
    },
    desconto:{
        backgroundColor:'green',
        
        
    },
    promocao:{
        backgroundColor:'orange'
    }
})
