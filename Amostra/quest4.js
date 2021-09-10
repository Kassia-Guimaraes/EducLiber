// Estatística e Probabilidade - Amostras
import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView, Image } from 'react-native';
import { QuestoesContext } from '../questoes.context';

class Amostra4Screen extends React.Component {
  render() {
    return(
      <ScrollView style={styles.ScrollView}>
        <View>
          <Text style={styles.mat}>Matemática</Text> 
          <Text style={styles.materia}>Estatística e Probabilidade - Amostras</Text>
          <Text style={styles.titulo}>TJ-PA CESPE - 2020</Text>
          <Text style={styles.questao}>A tabela a seguir apresenta dados referentes às idades dos funcionários de determinada empresa. Nessa tabela, a população da empresa está dividida em 8 estratos, conforme determinados intervalos de idade.</Text> 
          <View style={styles.ajusteimg}>
            <Image style={styles.image} source={require('./imagens/img_quest4.png')} />
          </View>
          <Text style={styles.questao}>A partir dessas informações, assinale a opção correta.</Text> 
          <Text style={styles.ALT}>a) A Uma amostra estratificada de 100 elementos que seja selecionada com base na alocação proporcional será composta por menos de 15 homens com idade entre 20 e 30 anos.</Text>
          <Text style={styles.ALT}>b) Considerando-se um erro amostral tolerável de 4%, o tamanho mínimo de uma amostra aleatória simples deve ser inferior a 162.</Text>
          <Text style={styles.ALT}>c) Se uma amostra estratificada de 120 elementos for selecionada com base na alocação proporcional, então mais da metade dos elementos dessa amostra serão homens.</Text>
          <Text style={styles.ALT}>d) Uma amostra estratificada de 112 elementos que seja selecionada com base na alocação uniforme será composta por 55 homens e 57 mulheres.</Text>
          <Text style={styles.correct}>e) Considerando-se um erro amostral tolerável de 5%, o tamanho mínimo de uma amostra aleatória simples deve ser igual a 142.</Text>
          
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
    width: 292, //largura
    height: 149, //altura
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
Amostra4Screen.contextType = QuestoesContext;

export default Amostra4Screen;