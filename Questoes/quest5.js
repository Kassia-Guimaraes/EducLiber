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
          <Text style={styles.titulo}>FUVEST</Text>
          <Text style={styles.questao}>A equação x² + 2x + y² + my = n, em que m e n são constantes, representa uma circunferência no plano cartesiano. Sabe-se que a reta y = -x + 1 contém o centro da circunferência e a intersecta no ponto (-3, 4). Os valores de m e n são, respectivamente:</Text>
          <Text style={styles.correct}>a) -4 e 3</Text>
          <Text style={styles.ALT}>b) 4 e 5</Text>
          <Text style={styles.ALT}>c) -4 e 2</Text>
          <Text style={styles.ALT}>d) -2 e 4</Text>
          <Text style={styles.ALT}>e) 2 e 3</Text>
          
          <View style={styles.botao}>
            <Button 
              title={'Próxima questão'}
              color='transparent'
              onPress={() =>
               this.props.navigation.navigate('Question6')
              }
            />
          </View>
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
