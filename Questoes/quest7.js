// Geometria - Coordenadas do Plano
import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { QuestoesContext } from '../questoes.context';

class Questao5Screen extends React.Component {
  render() {
    return (
      <ScrollView style={styles.ScrollView}>
        <View>
          <Text style={styles.mat}>Matemática</Text>
          <Text style={styles.materia}>Geometria - Coordenadas do Plano</Text>
          <Text style={styles.titulo}>PUC-SP 2017/1</Text>
          <Text style={styles.questao}>A circunferência λ: x2 + y2 – 4x – 10y + 13 = 0, de centro C, e a reta r : x + y – 11 = 0 se interceptam nos pontos P e Q. A área do triângulo PCQ , em unidades de área, é:</Text>
          <Text style={styles.ALT}>a) 4</Text>
          <Text style={styles.ALT}>b) 6</Text>
          <Text style={styles.ALT}>c) 7</Text>
          <Text style={styles.correct}>d) 8</Text>
          <Text style={styles.ALT}>e) 9</Text>
          
          <View style={styles.botao}>
            <Button
              title={'Voltar para o início'}
              color="transparent"
              onPress={() => this.props.navigation.navigate('Principal')}
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
    fontWeight: 'nunito',
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
  ALT: {
    color: '#180033',
    borderColor: '#F0EBF5',
    borderWidth: 1,
    fontSize: 15,
    fontWeight: 'rubik',
    padding: 17,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
  },
  correct: {
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
Questao5Screen.contextType = QuestoesContext;

export default Questao5Screen;
