import React ,{Component} from 'react';
import {View,StyleSheet, FlatList,Text, ScrollView} from 'react-native';
import Produto from './src/components/Produto';
import Logo from './src/components/logo'


class App extends Component{
  constructor(props){
    super(props);
    this.state={
      feed:[
        {id:'1',nome:'Arroz', valor:'R$ 20,00', marca:'Vasconcelos', quantidade:'12',referencia:'001', desconto:'10% de Desconto',promocao:'Leve 5 pague 4'},
        {id:'2',nome:'Feijão', valor:'R$ 10,00', marca:'Vasconcelos', quantidade:'15',referencia:'002', desconto:'5% de Desconto',promocao:'Leve 6 pague 5'},
        {id:'3',nome:'Detergente', valor:'R$ 1,99', marca:'Ypê', quantidade:'100',referencia:'405', desconto:'20% de Desconto',promocao:'Leve 10 pague 9'},
        {id:'4',nome:'Óleo', valor:'R$ 8,00', marca:'Sol', quantidade:'17',referencia:'123', desconto:'8% de Desconto',promocao:'Leve 3 pague 2'},
        {id:'5',nome:'Bombom', valor:'R$ 15,00', marca:'Nestlé', quantidade:'6',referencia:'715', desconto:'10% de Desconto',promocao:'Leve 5 pague 4'},
        {id:'6',nome:'Farinha de Trigo', valor:'R$ 7,00', marca:'Vilma', quantidade:'13',referencia:'058', desconto:'5% de Desconto',promocao:'Leve 5 pague 4'},
      ]
    }
  }
  render(){
    return(
      <ScrollView>
      <View style={styles.container}>
        
      <View style={styles.bloco1}>
        <Logo largura={50} altura={50}/>
      </View>
      <View style={styles.bloco2}>
        <Text style={styles.title}>Lista de Produtos</Text>
      <FlatList showsVerticalScrollIndicator={false}
          data={this.state.feed}
          keyExtractor={(item)=>item.id}
          renderItem={({item})=>
        <Produto
          nome={item.nome}
          valor={item.valor}
          marca={item.marca}
          quantidade={item.quantidade}
          referencia={item.referencia}
          desconto={item.desconto}
          promocao={item.promocao}
        />}
        />
      </View>
      <View style={styles.bloco3}>
        <Text style={styles.rodape}>Products Bela Vista-2021</Text>
      </View>
      </View>
      </ScrollView>
      
    )
  }
}

export default App;

const styles=StyleSheet.create({
  container:{
    flex:1,
    margin:10
  },
  bloco1:{
    backgroundColor:'#2696F7',
    height:70,
    padding:10
  },
  bloco2:{
    backgroundColor:'white',
    height:500
  },
  bloco3:{
    backgroundColor:"#515151",
    height:40
  },
  rodape:{
    textAlign:'center',
    color:'white'
  }, 
  title:{
    fontSize:30,
    padding:20,
    color:'#05C1FF'
  }
})






