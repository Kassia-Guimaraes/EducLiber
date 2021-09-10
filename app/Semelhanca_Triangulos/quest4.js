// Geometria - Semelhança de triângulos
import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { QuestoesContext } from '../questoes.context';

class Semelhanca4Screen extends React.Component {
  render() {
    return(
      <ScrollView style={styles.ScrollView}>
        <View>
          <Text style={styles.mat}>Matemática</Text> 
          <Text style={styles.materia}>Geometria - Semelhança de triângulos</Text>
          <Text style={styles.titulo}>IME - 2017</Text>
          <Text style={styles.questao}>Dado um quadrado ABCD, de lado a, marcam-se os pontos E sobre o lado AB, F sobre o lado BC, G sobre o lado CD e H sobre o lado AD, de modo que os segmentos formados AE, BF, CG e DH tenham comprimento igual a 3a/4. A área do novo quadrilátero formado pelas interseções dos segmentos AF, BG, CH, e DE mede:</Text>
          <Text style={styles.correct}>a) a²/25.</Text> 
          <Text style={styles.ALT}>b) a²/18</Text>
          <Text style={styles.ALT}>c) a²/16</Text> 
          <Text style={styles.ALT}>d) a²/9</Text> 
          <Text style={styles.ALT}>e) 2a²/9</Text> 

          {
            this.context.home.map((next, index) => (
              <View style={styles.botao}>
                <Button 
                  key={ next }
                  title={'Próxima questão'}
                  color='transparent'
                  onPress={() =>
                    this.props.navigation.navigate('Semelhanca5')
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
});
Semelhanca4Screen.contextType = QuestoesContext;

export default Semelhanca4Screen;