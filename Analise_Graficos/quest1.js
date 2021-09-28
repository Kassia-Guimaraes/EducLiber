// Álgebra e funções - Análise de gráficos
import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView, Image } from 'react-native';
import { QuestoesContext } from '../questoes.context';

class Grafico1 extends React.Component {
  render() {
    return(
      <ScrollView style={styles.ScrollView}>
        <View>
          <Text style={styles.mat}>Matemática</Text> 
          <Text style={styles.materia}>Álgebra e funções - Análise de gráficos</Text>
          <Text style={styles.titulo}>ENEM 2015</Text>
          <Text style={styles.questao}>Uma pesquisa de mercado foi realizada entre os consumidores das classes sociais A, B, C e D que costumam participar de promoções tipo sorteio ou concurso. Os dados comparativos, expressos no gráfico, revelam a participação desses consumidores em cinco categorias: via Correios (juntando embalagens ou recortando códigos de barra), via internet (cadastrando-se no site da empresa/marca promotora), via mídias sociais (redes sociais), via SMS (mensagem por celular) ou via rádio/TV.</Text>
          <View style={styles.ajusteimg}>
            <Image style={styles.image} source={require('./img/img_quest1.png')} />
          </View>
          <Text style={styles.questao}>Uma empresa vai lançar uma promoção utilizando apenas uma categoria nas classes A e B (A/B) e uma categoria nas classes C e D (C/D).</Text>
          <Text style={styles.questao}>De acordo com o resultado da pesquisa, para atingir o maior número de consumidores das classes A/B e C/D, a empresa deve realizar a promoção, respectivamente, via</Text>    
          <Text style={styles.ALT}>a) Correios e SMS</Text> 
          <Text style={styles.correct}>b) Internet e Correios</Text>
          <Text style={styles.ALT}>c) Internet e Internet</Text> 
          <Text style={styles.ALT}>d) Internet e mídias sociais</Text> 
          <Text style={styles.ALT}>e) rádio/TV e rádio/TV</Text> 

          <View style={styles.botao}>
            <Button 
              title={'Próxima questão'}
              color='transparent'
              onPress={() =>
               this.props.navigation.navigate('Teorema3')
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
  ajusteimg:{
    alignItems: 'center',
    justifyContent: 'center',
  },
  image:{
    width: 300, //largura
    height: 140, //altura
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
Grafico1.contextType = QuestoesContext;

export default Grafico1;