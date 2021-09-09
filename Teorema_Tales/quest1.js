// Geometria - Teorema de Tales
import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { QuestoesContext } from '../questoes.context';

class Teorema1Screen extends React.Component {
  render() {
    return(
      <ScrollView style={styles.ScrollView}>
        <View>
          <Text style={styles.mat}>Matemática</Text> 
          <Text style={styles.materia}>Geometria - Teorema de Tales</Text>
          <Text style={styles.titulo}>UNIVERSIDADE ESTADUAL DE GOIÁS - UEG - 2019</Text>
          <Text style={styles.questao}>Três ruas paralelas são cortadas por duas avenidas transversais nos pontos A, B e C da Avenida 1 e nos pontos D, E e F da Avenida 2, de tal forma que AB = 90 m, BC = 100 m, DE = x e EF = 80 m. Nessas condições, o valor de x é</Text>
          <Text style={styles.ALT}>a) 62 m </Text> 
          <Text style={styles.ALT}>b) 60 m</Text>
          <Text style={styles.correct}>c) 72 m</Text> 
          <Text style={styles.ALT}>d) 74 m</Text> 
          <Text style={styles.ALT}>e) 68 m</Text> 

          {
            this.context.home.map((next, index) => (
              <View style={styles.botao}>
                <Button 
                  key={ next }
                  title={'Próxima questão'}
                  color='transparent'
                  onPress={() =>
                    this.props.navigation.navigate('Teorema2')
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
Teorema1Screen.contextType = QuestoesContext;

export default Teorema1Screen;