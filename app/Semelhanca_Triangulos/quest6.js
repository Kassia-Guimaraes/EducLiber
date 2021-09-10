// Geometria - Semelhança de triângulos
import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView, Image} from 'react-native';
import { QuestoesContext } from '../questoes.context';

class Semelhanca6Screen extends React.Component {
  render() {
    return(
      <ScrollView style={styles.ScrollView}>
        <View>
          <Text style={styles.mat}>Matemática</Text> 
          <Text style={styles.materia}>Geometria - Semelhança de triângulos</Text>
          <Text style={styles.titulo}>UNIVERSIDADE DO ESTADO DO RIO DE JANEIRO - UERJ - 2019</Text>
          <Text style={styles.questao}>No plano cartesiano, está representada a circunferência de centro P e raio 2. </Text>
          <View style={styles.ajusteimg}>
            <Image style={styles.image} source={require('./imagens/img_quest6.png')} />
        <Text style={styles.questao}>Tal área foi dividida em terrenos ABB'A', BCC'B' e CDD'C, todos na forma trapezoidal, com bases paralelas às avenidas tais que AB = 40m , BC = 30m e CD = 20m.</Text>
      <Text style={styles.questao}>O ponto Q da circunferência, que é o mais distante da origem, tem coordenadas iguais a:</Text>
          </View>
          <Text style={styles.correct}>a) (28/5,21/5)</Text> 
          <Text style={styles.ALT}>b) (31/5,26/5)</Text>
          <Text style={styles.ALT}>c) (33/5,29/5)</Text> 
          <Text style={styles.ALT}>d) (36/5,37/5)</Text> 
          {
            this.context.home.map((next, index) => (
              <View style={styles.botao}>
                <Button 
                  key={ next }
                  title={'Próxima questão'}
                  color='transparent'
                  onPress={() =>
                    this.props.navigation.navigate(index)
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
  ajusteimg:{
    alignItems: 'center',
    justifyContent: 'center',
  },
  image:{
    width: 251, //largura
    height: 152, //altura
  },
});
Semelhanca6Screen.contextType = QuestoesContext;

export default Semelhanca6Screen;