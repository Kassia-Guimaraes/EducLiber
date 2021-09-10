// Geometria - Coordenadas do Plano
import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { QuestoesContext } from '../questoes.context';

class Questao4Screen extends React.Component {
  render() {
    return (
      <ScrollView style={styles.ScrollView}>
        <View>
          <Text style={styles.mat}>Matemática</Text>
          <Text style={styles.materia}>Geometria - Coordenadas do Plano</Text>
          <Text style={styles.titulo}>EPUSP</Text>
          <Text style={styles.questao}>O ponto P (3, m) é interno a um dos lados do triângulo A(1,2),B(3,1) e C (5,-4). Então:</Text>
          <Text style={styles.correct}>a) m = -1</Text>
          <Text style={styles.ALT}>b) m = 0</Text>
          <Text style={styles.ALT}>c) m = ½ </Text>
          <Text style={styles.ALT}>d) m = 1</Text>
          <Text style={styles.ALT}>e) Nenhuma das respostas anteriores</Text>
          
          {
            this.context.home.map((next, index) => (
            <View style={styles.botao}>
              <Button
                key={next}
                title={'Próxima questão'}
                color="transparent"
                onPress={() => 
                  this.props.navigation.navigate('Question5')
                }
              />
            </View>
          ))}
          
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
Questao4Screen.contextType = QuestoesContext;

export default Questao4Screen;
