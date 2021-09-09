// Geometria - Razês Trigonométricas
import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView, Image } from 'react-native';
import { QuestoesContext } from '../questoes.context';

class Razoes4Screen extends React.Component {
  render() {
    return(
      <ScrollView style={styles.ScrollView}>
        <View>
          <Text style={styles.mat}>Matemática</Text> 
          <Text style={styles.materia}>Geometria - Razês Trigonométricas</Text> 
          <Text style={styles.titulo}>GUALIMP</Text>
          <Text style={styles.questao}>Observe as dimensões do triângulo retângulo abaixo:</Text>
          <View style={styles.ajusteimg}>
            <Image style={styles.image} source={require('./imagens/img_quest4.png')} />
          </View>
          <Text style={styles.questao}>Qual a área desse triângulo retângulo?</Text>
          <Text style={styles.ALT}>a) 400 cm2</Text> 
          <Text style={styles.ALT}>b) 120 cm2</Text>
          <Text style={styles.correct}>c) 600 cm2</Text> 
          <Text style={styles.ALT}>d) 40 cm2</Text> 
          

          {
            this.context.home.map((next, index) => (
              <View style={styles.botao}>
                <Button 
                  key={ next }
                  title={'Próxima questão'}
                  color='transparent'
                  onPress={() =>
                    this.props.navigation.navigate(index)
                  }
                />
              </View>
            ))
          }
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
    width: 130, //largura
    height: 215, //altura
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
Razoes4Screen.contextType = QuestoesContext;

export default Razoes4Screen;