// Estatística e Probabilidade - Amostras
import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView, Image } from 'react-native';
import { QuestoesContext } from '../questoes.context';

class Amostra3Screen extends React.Component {
  render() {
    return(
      <ScrollView style={styles.ScrollView}>
        <View>
          <Text style={styles.mat}>Matemática</Text> 
          <Text style={styles.materia}>Estatística e Probabilidade - Amostras</Text>
          <Text style={styles.titulo}>TJ-PA CESPE - 2020</Text>
          <Text style={styles.questao}>Uma pesquisa foi realizada em uma população dividida em dois estratos, A e B. Uma amostra da população foi selecionada utilizando-se a técnica de amostragem estratificada proporcional, em que cada estrato possui um sistema de referências ordenadas. A seguir, são apresentadas as formas como as unidades populacionais de A e de B foram selecionadas, respectivamente.</Text> 
          <Text style={styles.questao}>• A primeira unidade populacional selecionada do estrato A foi a terceira. Em seguida, cada unidade populacional foi selecionada a partir da primeira, adicionando-se 5 unidades. Dessa forma, a segunda unidade selecionada foi a oitava, e assim por diante, até a obtenção de 10 unidades populacionais.</Text>  
          <Text style={styles.questao}>• A primeira unidade populacional selecionada do estrato B foi a quarta. Após, cada unidade populacional foi selecionada a partir da primeira, adicionando-se 6 unidades. Dessa forma, a segunda unidade selecionada foi a décima, e assim por diante, até a obtenção de 7 unidades populacionais.</Text> 
          <Text style={styles.questao}>A partir dessas informações, é correto afirmar que</Text> 
          <Text style={styles.correct}>a) A população possui, no mínimo, 88 elementos.</Text>
          <Text style={styles.ALT}>b) A técnica de amostragem aleatória simples foi utilizada para selecionar a amostra de cada estrato.</Text>
          <Text style={styles.ALT}>c) A amostra possui, no mínimo, 92 unidades populacionais.</Text>
          <Text style={styles.ALT}>d) O estrato B possui mais unidades populacionais que o estrato A. </Text>
          <Text style={styles.ALT}>e) O intervalo de amostragem no estrato A possui amplitude maior que o intervalo de amostragem no estrato B. </Text>
          
          {
            this.context.home.map((next, index) => (
              <View style={styles.botao}>
                <Button 
                  key={ next }
                  title={'Próxima questão'}
                  color='transparent'
                  onPress={() =>
                    this.props.navigation.navigate('Amostra4')
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
    textAlign: 'justify',
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
Amostra3Screen.contextType = QuestoesContext;

export default Amostra3Screen;