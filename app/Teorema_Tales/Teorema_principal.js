//Tela principal de Geometria - Teorema de Tales
import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView, TouchableOpacity, setCustomText} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { QuestoesContext } from '../questoes.context';

class TeoremaScreen extends React.Component{
  render() {
    return(
      <ScrollView style={styles.ScrollView}>
        <Text style={styles.titulo}>Geometria - Teorema de Tales</Text>
        <LinearGradient colors={['#AAE5FF', '#D4F2FF', '#F3FBFF']} start={[1,0]} end={[0,1]} style={styles.linearGradient}>
          <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('Teorema1')
              }
            >
            <Text style={styles.tema}>UEG - 2019</Text>
            <Text style={styles.text}>Três ruas paralelas são cortadas por duas ...</Text>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient colors={['#FFBD9A', '#FFCAAD', '#FFE7DB']} start={[1,0]} end={[0,1]} style={styles.linearGradient}>
          <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('Teorema2')
              }
            >
            <Text style={styles.tema}>CPS/UEPG 2012</Text>
            <Text style={styles.text}>Para melhorar a qualidade do solo ...</Text>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient colors={['#DAA9FB', '#EFDFFA']} start={[1,0]} end={[0,1]} style={styles.linearGradient}>
          <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('Teorema3')
              }
            >
            <Text style={styles.tema}>IFSUL 2017</Text>
            <Text style={styles.text}>Três lotes residenciais têm frente para a ...</Text>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient colors={['#8CFF8C', '#E7FFE7']} start={[1,0]} end={[0,1]} style={styles.linearGradient}>
          <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('Teorema4')
              }
            >
            <Text style={styles.tema}>IFBA 2018</Text>
            <Text style={styles.text}>Abaixo estão duas retas paralelas cortadas ...</Text>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient colors={['#FFE27A', '#FFF4CE']} start={[1,0]} end={[0,1]} style={styles.linearGradient}>
          <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('Teorema5')
              }
            >
            <Text style={styles.tema}>UFU - 2018</Text>
            <Text style={styles.text}>Uma área delimitada pelas Ruas 1 e 2 e pelas ...</Text>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient colors={['#AAE5FF', '#D4F2FF', '#F3FBFF']} start={[1,0]} end={[0,1]} style={styles.linearGradient}>
          <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('Teorema6')
              }
            >
            <Text style={styles.tema}>UNESP - 2013</Text>
            <Text style={styles.text}>Considere 3 retas coplanares paralelas, r, s e t ...</Text>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient colors={['#FFBD9A', '#FFCAAD', '#FFE7DB']} start={[1,0]} end={[0,1]} style={styles.linearGradient}>
          <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('Teorema7')
              }
            >
            <Text style={styles.tema}>USP - FUVEST - 1997</Text>
            <Text style={styles.text}>No papel quadriculado da figura abaixo ...</Text>
          </TouchableOpacity>
        </LinearGradient>
        <View style={styles.botao}>
          <Button
            title={'Voltar para o início'}
            color='transparent'
            onPress={()=>
               this.props.navigation.navigate('Principal')
            }
          />
        </View> 
      </ScrollView>
    )
  }
}
const styles = StyleSheet.create({
  ScrollView:{
    backgroundColor: 'white',
  },
  titulo:{
    marginVertical: 3,
    marginHorizontal: 16,
    textAlign: 'center',
    fontSize: 15,
  },
  tema:{
    fontSize: 14, 
    color: 'black',
    textAlign: 'justify',
    marginHorizontal: 6,
  },
  text:{
    fontSize: 12, 
    color: 'black',
    textAlign: 'justify',
    marginHorizontal: 6,
  },
  linearGradient:{
    flex: 2,
    paddingLeft: 5,
    paddingRight: 5,
    borderRadius: 5,
    padding: 14,
    marginVertical: 3,
    marginHorizontal: 16,
    borderColor: '#F0EBF5',
    borderWidth: 1,
    justifyContent: 'center',
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
    alignItems:'center',
    justifyContent:'center',
  },
});
TeoremaScreen.contextType = QuestoesContext
export default TeoremaScreen;