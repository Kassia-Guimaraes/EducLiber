// Geometria - Semelhança de triângulos
import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView, Image } from 'react-native';
import { QuestoesContext } from '../questoes.context';

class Semelhanca3Screen extends React.Component {
  render() {
    return(
      <ScrollView style={styles.ScrollView}>
        <View>
          <Text style={styles.mat}>Matemática</Text> 
          <Text style={styles.materia}>Geometria - Teorema de Tales</Text>
          <Text style={styles.titulo}>ENEM-2018</Text>
          <Text style={styles.questao}>Um quebra-cabeça consiste em recobrir um quadrado com triângulos retângulos isósceles, como ilustra a figura.</Text>
          <View style={styles.ajusteimg}>
            <Image style={styles.image} source={require('./imagens/img_quest3.png')} />
          </View>
          <Text style={styles.questao}>Uma artesã confecciona um quebra-cabeça como o descrito, de tal modo que a menor das peças é um triângulo retângulo isósceles cujos catetos medem 2 cm.</Text>   
          <Text style={styles.questao}>O quebra-cabeça quando montado, resultará em um quadrado cuja medida do lado, em centímetro, é</Text>     
          <Text style={styles.correct}>a) 14</Text> 
          <Text style={styles.ALT}>b) 12</Text>
          <Text style={styles.ALT}>c) 7√2</Text> 
          <Text style={styles.ALT}>d) 6+4√2</Text> 
          <Text style={styles.ALT}>e) 6+2√2</Text> 

          <View style={styles.botao}>
            <Button 
              title={'Próxima questão'}
              color='transparent'
              onPress={() =>
               this.props.navigation.navigate('Semelhanca4')
              }
            />
          </View>
          <View style={styles.botao}>
            <Button
              title={'Voltar para o início'}
              color='transparent'
              onPress={()=>
                this.props.navigation.navigate('Principal')
              }
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  ScrollView: {
    marginTop: 5,
    backgroundColor: 'white',
    fontWeight: "nunito",
  },
  mat:{
    color: 'black',
    marginVertical: 3,
    marginHorizontal: 16,
    fontWeight: 'bold',
  },
  materia:{
    color: '#89838F',
    marginHorizontal: 16,
    marginVertical: -5,
  },
  titulo: {
    color: '#180033',
    fontWeight: 'nunito',
    marginVertical: 10,
    marginHorizontal: 16,
    fontSize: 12,
  },
  ajusteimg:{
    alignItems: 'center',
    justifyContent: 'center',
  },
  image:{
    width: 171, //largura
    height: 165, //altura
  },
  questao: {
    color: '#180033',
    fontWeight: 'nunito',
    fontSize: 15,
    textAlign: 'justify',
    marginVertical: 8,
    marginHorizontal: 16,
  },
  ALT:{
    color:'#180033',
    borderColor: '#F0EBF5',
    borderWidth: 1,
    fontSize: 15,
    fontWeight: 'rubik',
    padding: 17,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
    textAlign: 'justify',
  },
  correct:{
    borderColor: '#F0EBF5',
    borderWidth: 1,
    fontSize: 15,
    fontWeight: 'rubik',
    backgroundColor: '#261FCC',
    color: 'white',
    padding: 17,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
  },
  botao: {
    borderColor: '#F0EBF5',
    borderWidth: 1,
    borderRadius: 16,
    fontSize: 15,
    fontWeight: 'rubik',
    backgroundColor: '#FFC700',
    color: 'white',
    padding: 0.1,
    marginVertical: 3,
    marginHorizontal: 16,
  },
});
Semelhanca3Screen.contextType = QuestoesContext;

export default Semelhanca3Screen;