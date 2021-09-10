// Geometria - Teorema de Tales
import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView, Image } from 'react-native';
import { QuestoesContext } from '../questoes.context';

class Teorema7Screen extends React.Component {
  render() {
    return(
      <ScrollView style={styles.ScrollView}>
        <View>
          <Text style={styles.mat}>Matemática</Text> 
          <Text style={styles.materia}>Geometria - Teorema de Tales</Text>
          <Text style={styles.titulo}>UNIVERSIDADE DE SÃO PAULO - USP - FUVEST - 1997</Text>
          <Text style={styles.questao}>No papel quadriculado da figura abaixo, adota-se como unidade de comprimento o lado do quadrado hachurado. DE é paralelo a BC. Para que a área do triângulo ADE seja a metade da área do triângulo ADE seja a metade da área do triângulo ABC, medida de AD, na unidade adotada, é</Text>
          <View style={styles.ajusteimg}>
            <Image style={styles.image} source={require('./imgs/img_quest7.png')} />
          </View>
          <Text style={styles.correct}>a) 4√2</Text> 
          <Text style={styles.ALT}>b) 4</Text>
          <Text style={styles.ALT}>c) 3√3</Text> 
          <Text style={styles.ALT}>d) (8√3) / 3</Text> 
          <Text style={styles.ALT}>e) (7√3) / 2</Text> 

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
    fontSize: 11,
  },
  ajusteimg:{
    alignItems: 'center',
    justifyContent: 'center',
  },
  image:{
    width: 242, //largura
    height: 196, //altura
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
Teorema7Screen.contextType = QuestoesContext;

export default Teorema7Screen;