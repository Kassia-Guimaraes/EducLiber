// Geometria - Semelhança de triângulos
import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { QuestoesContext } from '../questoes.context';

class Semelhanca2Screen extends React.Component {
  render() {
    return(
      <ScrollView style={styles.ScrollView}>
        <View>
          <Text style={styles.mat}>Matemática</Text> 
          <Text style={styles.materia}>Geometria - Semelhança de triângulos</Text>
          <Text style={styles.titulo}>UNIVERSIDADE DE SÃO PAULO - USP - FUVEST - 2021</Text>
          <Text style={styles.questao}>Um marceneiro possui um pedaço de madeira no formato de um triângulo retângulo, cujos catetos medem 12 cm e 35 cm. A partir desta peça, ele precisa extrair o maior quadrado possível, de tal forma que um dos ângulos retos do quadrado coincida com o ângulo reto do triângulo. A medida do lado do quadrado desejado pelo marceneiro mais próxima de</Text>
          <Text style={styles.ALT}>a) 8,0 cm.</Text> 
          <Text style={styles.ALT}>b) 8,5 cm.</Text>
          <Text style={styles.correct}>c) 9,0 cm.</Text> 
          <Text style={styles.ALT}>d) 9,5 cm.</Text> 
          <Text style={styles.ALT}>e) 10,0 cm.</Text> 

          <View style={styles.botao}>
            <Button 
              title={'Próxima questão'}
              color='transparent'
              onPress={() =>
               this.props.navigation.navigate('Semelhanca3')
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
Semelhanca2Screen.contextType = QuestoesContext;

export default Semelhanca2Screen;