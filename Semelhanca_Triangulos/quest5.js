// Geometria - Semelhança de triângulos
import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView, Image} from 'react-native';
import { QuestoesContext } from '../questoes.context';

class Semelhanca5Screen extends React.Component {
  render() {
    return(
      <ScrollView style={styles.ScrollView}>
        <View>
          <Text style={styles.mat}>Matemática</Text> 
          <Text style={styles.materia}>Geometria - Semelhança de triângulos</Text>
          <Text style={styles.titulo}>UNIVERSIDADE FEDERAL DE UBERL NDIA - UFU - 2018</Text>
          <Text style={styles.questao}>Uma área delimitada pelas Ruas 1 e 2 e pelas Avenidas A e B tem a forma de um trapézio ADD'A como AD = 90m e A' D' = 135m , mostra o esquema da figura abaixo. </Text>
          <View style={styles.ajusteimg}>
            <Image style={styles.image} source={require('./imagens/img_quest5.png')} />
        <Text style={styles.questao}>Tal área foi dividida em terrenos ABB'A', BCC'B' e CDD'C, todos na forma trapezoidal, com bases paralelas às avenidas tais que AB = 40m , BC = 30m e CD = 20m.</Text>
      <Text style={styles.questao}>De acordo com essas informações, a diferença, em metros, A'B' - C'D' é igual a </Text>
      
      
          </View>
          <Text style={styles.correct}>a) 20</Text> 
          <Text style={styles.ALT}>b) 30</Text>
          <Text style={styles.ALT}>c) 15</Text> 
          <Text style={styles.ALT}>d) 45</Text> 
          <Text style={styles.ALT}>e) nenhuma das alternativas</Text> 

          <View style={styles.botao}>
            <Button 
              title={'Próxima questão'}
              color='transparent'
              onPress={() =>
               this.props.navigation.navigate('Semelhanca6')
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
    fontSize: 12,
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
  ajusteimg:{
    alignItems: 'center',
    justifyContent: 'center',
  },
  image:{
    width: 260, //largura
    height: 165, //altura
  },
});
Semelhanca5Screen.contextType = QuestoesContext;

export default Semelhanca5Screen;