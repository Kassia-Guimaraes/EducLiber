//Tela principal de Geometria - Semelhança de triângulos 
import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView, TouchableOpacity, setCustomText} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { QuestoesContext } from '../questoes.context';

class SemelhancaScreen extends React.Component{
  render() {
    return(
      <ScrollView style={styles.ScrollView}>
        <Text style={styles.titulo}>Geometria - Semelhança de Triângulos</Text>
        <LinearGradient colors={['#AAE5FF', '#D4F2FF', '#F3FBFF']} start={[1,0]} end={[0,1]} style={styles.linearGradient}>
          <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('Semelhanca1')
              }
            >
            <Text style={styles.tema}>IME - 2021</Text>
            <Text style={styles.text}>Considere um trapézio de bases AB e CD ...</Text>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient colors={['#FFBD9A', '#FFCAAD', '#FFE7DB']} start={[1,0]} end={[0,1]} style={styles.linearGradient}>
          <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('Semelhanca2')
              }
            >
            <Text style={styles.tema}>USP - FUVEST - 2021</Text>
            <Text style={styles.text}>Um marceneiro possui um pedaço ...</Text>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient colors={['#DAA9FB', '#EFDFFA']} start={[1,0]} end={[0,1]} style={styles.linearGradient}>
          <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('Semelhanca3')
              }
            >
            <Text style={styles.tema}>ENEM - 2018</Text>
            <Text style={styles.text}>Um quebra-cabeça consiste em recobrir ...</Text>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient colors={['#8CFF8C', '#E7FFE7']} start={[1,0]} end={[0,1]} style={styles.linearGradient}>
          <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('Semelhanca4')
              }
            >
            <Text style={styles.tema}>IME - 2017</Text>
            <Text style={styles.text}>Dado um quadrado ABCD, de lado  a ...</Text>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient colors={['#FFE27A', '#FFF4CE']} start={[1,0]} end={[0,1]} style={styles.linearGradient}>
          <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('Semelhanca5')
              }
            >
            <Text style={styles.tema}>UFU - 2018</Text>
            <Text style={styles.text}>Uma área delimitada pelas Ruas 1 e 2 e pelas ...</Text>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient colors={['#AAE5FF', '#D4F2FF', '#F3FBFF']} start={[1,0]} end={[0,1]} style={styles.linearGradient}>
          <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('Semelhanca6')
              }
            >
            <Text style={styles.tema}>UERJ - 2019</Text>
            <Text style={styles.text}>No plano cartesiano, está apresentada a ...</Text>
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
SemelhancaScreen.contextType = QuestoesContext
export default SemelhancaScreen;