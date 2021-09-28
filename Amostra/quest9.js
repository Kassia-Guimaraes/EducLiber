// Estatística e Probabilidade - Amostras
import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView, Image } from 'react-native';
import { QuestoesContext } from '../questoes.context';

class Amostra9 extends React.Component {
  render() {
    return(
      <ScrollView style={styles.ScrollView}>
        <View>
          <Text style={styles.mat}>Matemática</Text> 
          <Text style={styles.materia}>Estatística e Probabilidade - Amostras</Text>
          <Text style={styles.titulo}>CESPE</Text>
          <Text style={styles.questao}>Em uma amostra aleatória de 20 municípios Paraenses, considerando-se os dados da Secretaria de Estado de Segurança Pública e Defesa Social relativos ao crime de lesão corporal, a média é igual a 87 e o desvio padrão igual a 101,9419.</Text>
           <Text style={styles.questao}>Considerando-se, para 19 graus de liberdade, o coeficiente a = 2,093 e utilizando-se o valor aproximado 4,4721 para a raiz quadrada de 20, com o auxílio da distribuição t, um intervalo de 95% de confiança para a média deverá ter</Text>
          <Text style={styles.ALT}>a) limite inferior de, aproximadamente, 38,78.</Text>
          <Text style={styles.ALT}>b) limite superior de, aproximadamente, 143,12.</Text>
          <Text style={styles.ALT}>c) amplitude 2c = 93,45.</Text>
          <Text style={styles.ALT}>d) limite inferior de 39,29 e limite superior de 142,18.</Text>
          <Text style={styles.correct}>e) limite superior de, aproximadamente, 134,71.</Text>
          
          <View style={styles.botao}>
            <Button 
              title={'Próxima questão'}
              color='transparent'
              onPress={() =>
               this.props.navigation.navigate('index')
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
  ajusteimg:{
    alignItems: 'center',
    justifyContent: 'center',
  },
  image:{
    width: 290, //largura
    height: 148, //altura
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
Amostra9.contextType = QuestoesContext;

export default Amostra9;