// Geometria - Semelhança de triângulos
import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { QuestoesContext } from '../questoes.context';

class Semelhanca1Screen extends React.Component {
  render() {
    return(
      <ScrollView style={styles.ScrollView}>
        <View>
          <Text style={styles.mat}>Matemática</Text> 
          <Text style={styles.materia}>Geometria - Semelhança de triângulos</Text>
          <Text style={styles.titulo}>INSTITUTO MILITAR DE ENGENHARIA - IME - 2021</Text>
          <Text style={styles.questao}>Considere um trapézio de bases AB e CD, com o ponto I sendo a interseção de suas diagonais. Se as áreas dos triângulos AIB e CID formados pelas diagonais são 9 cm² e 16 cm², respectivamente, a área do trapézio, em cm², e:</Text>
          <Text style={styles.ALT}>a) Não é possível determinar por terem sido fornecidos dados insuficientes.</Text> 
          <Text style={styles.ALT}>b) 63</Text>
          <Text style={styles.ALT}>c) 50</Text> 
          <Text style={styles.correct}>d) 49</Text> 
          <Text style={styles.ALT}>e) 45</Text> 

          {
            this.context.home.map((next, index) => (
              <View style={styles.botao}>
                <Button 
                  key={ next }
                  title={'Próxima questão'}
                  color='transparent'
                  onPress={() =>
                    this.props.navigation.navigate('Semelhanca2')
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
Semelhanca1Screen.contextType = QuestoesContext;

export default Semelhanca1Screen;