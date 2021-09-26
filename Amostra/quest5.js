// Estatística e Probabilidade - Amostras
import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView, Image } from 'react-native';
import { QuestoesContext } from '../questoes.context';

class Amostra5Screen extends React.Component {
  render() {
    return(
      <ScrollView style={styles.ScrollView}>
        <View>
          <Text style={styles.mat}>Matemática</Text> 
          <Text style={styles.materia}>Estatística e Probabilidade - Amostras</Text>
          <Text style={styles.titulo}>TJ-PA CESPE - 2020</Text>
          <Text style={styles.questao}>Uma amostra aleatória simples de tamanho 5 foi retirada de uma distribuição de Poisson com média igual a 5. Essa amostra é representada por X1, X2, X3, X4, X5, em que cada variável Xk denota o total de erros processuais registrados em certo cartório judicial no dia k, com k 0 {1, 2, 3, 4, 5}. A respeito da quantidade semanal de erros processuais registrados nesse cartório Y = X1 + X2 + X3 + X4 +X5, assinale a opção correta.
</Text> 
          <Text style={styles.ALT}>a) O coeficiente de variação de Y é igual a 1</Text>
          <Text style={styles.ALT}>b)  E(Y) 20</Text>
          <Text style={styles.correct}>c) O desvio padrão de Y é igual a 5.</Text>
          <Text style={styles.ALT}>d) Para k = 1, 2, 3, 4, 5, tem-se que P(Y = 0) $ P(Xk = 0).</Text>
          <Text style={styles.ALT}>e) A média semanal de erros processuais, denotada por Y/5, segue uma distribuição normal.</Text>
          
          <View style={styles.botao}>
            <Button 
              title={'Próxima questão'}
              color='transparent'
              onPress={() =>
               this.props.navigation.navigate('Amostra6')
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
Amostra5Screen.contextType = QuestoesContext;

export default Amostra5Screen;