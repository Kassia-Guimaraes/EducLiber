// Estatística e Probabilidade - Amostras
import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView, Image } from 'react-native';
import { QuestoesContext } from '../questoes.context';

class Amostra6 extends React.Component {
  render() {
    return(
      <ScrollView style={styles.ScrollView}>
        <View>
          <Text style={styles.mat}>Matemática</Text> 
          <Text style={styles.materia}>Estatística e Probabilidade - Amostras</Text>
          <Text style={styles.titulo}>FUNDATEC-2021</Text>
          <Text style={styles.questao}>Assumindo que todas as outras variáveis permaneçam inalteradas, para diminuir a amplitude do intervalo de confiança de uma amostra, o que deve acontecer com o tamanho dessa amostra?
</Text>   
          <Text style={styles.correct}>a)Aumentar. </Text>
          <Text style={styles.ALT}>b)Permanecer igual </Text>
          <Text style={styles.ALT}>c)Diminuir. </Text>
          <Text style={styles.ALT}>d) Nada se pode afirmar. </Text>
          <Text style={styles.ALT}>e)Aumentar ou diminuir. </Text>
          
          <View style={styles.botao}>
            <Button 
              title={'Próxima questão'}
              color='transparent'
              onPress={() =>
               this.props.navigation.navigate('Amostra7')
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
Amostra6.contextType = QuestoesContext;

export default Amostra6;