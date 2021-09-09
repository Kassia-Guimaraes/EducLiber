// Geometria - Razês Trigonométricas
import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView, Image } from 'react-native';
import { QuestoesContext } from '../questoes.context';

class Razoes2Screen extends React.Component {
  render() {
    return(
      <ScrollView style={styles.ScrollView}>
        <View>
          <Text style={styles.mat}>Matemática</Text> 
          <Text style={styles.materia}>Geometria - Razês Trigonométricas</Text> 
          <Text style={styles.titulo}>ENEM - 2013</Text>
          <Text style={styles.questao}>As torres Puerta de Europa são duas torres inclinadas uma contra a outra, construídas numa avenida de Madri, na Espanha. A inclinação das torres é de 15° com a vertical e elas têm, cada uma, uma altura de 114 m (a altura é indicada na figura como o segmento AB). Estas torres são um bom exemplo de um prisma oblíquo de base quadrada e uma delas pode ser observada na imagem.</Text>
          <View style={styles.ajusteimg}>
            <Image style={styles.image} source={require('./imagens/img_quest2.png')} />
          </View>
          <Text style={styles.questao}>Utilizando 0,26 como valor aproximado para a tangente de 15° e duas casas decimais nas operações, descobre-se que a área da base desse prédio ocupa na avenida um espaço:</Text>
          <Text style={styles.ALT}>a) menor que 100 m²</Text> 
          <Text style={styles.ALT}>b) entre 100 m² e 300 m².</Text>
          <Text style={styles.ALT}>c) entre 300 m² e 500 m².</Text> 
          <Text style={styles.ALT}>d) entre 500 m² e 700 m².</Text> 
          <Text style={styles.correct}>e) maior que 700 m²</Text> 

          {
            this.context.home.map((next, index) => (
              <View style={styles.botao}>
                <Button 
                  key={ next }
                  title={'Próxima questão'}
                  color='transparent'
                  onPress={() =>
                    this.props.navigation.navigate('Razoes3')
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
  ajusteimg:{
    alignItems: 'center',
    justifyContent: 'center',
  },
  image:{
    width: 153, //largura
    height: 240, //altura
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
Razoes2Screen.contextType = QuestoesContext;

export default Razoes2Screen;