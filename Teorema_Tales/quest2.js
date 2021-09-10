// Geometria - Teorema de Tales
import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView, Image } from 'react-native';
import { QuestoesContext } from '../questoes.context';

class Teorema2Screen extends React.Component {
  render() {
    return(
      <ScrollView style={styles.ScrollView}>
        <View>
          <Text style={styles.mat}>Matemática</Text> 
          <Text style={styles.materia}>Geometria - Teorema de Tales</Text>
          <Text style={styles.titulo}>CPS/UEPG 2012</Text>
          <Text style={styles.questao}>Para melhorar a qualidade do solo, aumentando a produtividade do milho e da soja, em uma fazenda é feito o rodízio entre essas culturas e a área destinada ao pasto. Com essa finalidade, a área produtiva da fazenda foi dividida em três partes conforme a figura.</Text>
          <View style={styles.ajusteimg}>
            <Image style={styles.image} source={require('./imgs/img_quest2.png')} />
          </View>
          <Text style={styles.questao}> Considere que
            <ul>
              <li>os pontos A, B, C e D estão alinhados;</li>
              <li>os pontos H, G, F e E estão alinhados;</li>
              <li>os segmentos AH, BG, CF e DE são, dois a dois, pararelos entre si;</li>
              <li>AB = 500m, BC = 600m, CD = 700 e HE = 1.980m</li>
            </ul>
          </Text>   
          <Text style={styles.questao}>Nessas condições, a medida do segmento GF é, em metros:</Text>     
          <Text style={styles.ALT}>a) 665</Text> 
          <Text style={styles.correct}>b) 660</Text>
          <Text style={styles.ALT}>c) 655</Text> 
          <Text style={styles.ALT}>d) 650</Text> 
          <Text style={styles.ALT}>e) 645</Text> 

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
    height: 160, //altura
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
Teorema2Screen.contextType = QuestoesContext;

export default Teorema2Screen;