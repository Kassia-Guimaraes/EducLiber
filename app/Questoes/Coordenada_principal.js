//Tela principal de Geometria - Coordenadas do Plano
import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView, TouchableOpacity, setCustomText} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { QuestoesContext } from '../questoes.context';

class CoordenadaScreen extends React.Component{
  render() {
    return(
      <ScrollView style={styles.ScrollView}>
        <Text style={styles.titulo}>Geometria - Coordenas do Plano</Text>
        <LinearGradient colors={['#AAE5FF', '#D4F2FF', '#F3FBFF']} start={[1,0]} end={[0,1]} style={styles.linearGradient}>
          <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('Question1')
              }
            >
            <Text style={styles.tema}>USP</Text>
            <Text style={styles.text}>Uma das diagonais de um quadrado ...</Text>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient colors={['#FFBD9A', '#FFCAAD', '#FFE7DB']} start={[1,0]} end={[0,1]} style={styles.linearGradient}>
          <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('Question2')
              }
            >
            <Text style={styles.tema}>Enem Digital 2020</Text>
            <Text style={styles.text}>O gráfico mostra o início da ...</Text>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient colors={['#DAA9FB', '#EFDFFA']} start={[1,0]} end={[0,1]} style={styles.linearGradient}>
          <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('Question3')
              }
            >
            <Text style={styles.tema}>FGV</Text>
            <Text style={styles.text}>Em um paralelogramo, as coordenadas de três ...</Text>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient colors={['#8CFF8C', '#E7FFE7']} start={[1,0]} end={[0,1]} style={styles.linearGradient}>
          <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('Question4')
              }
            >
            <Text style={styles.tema}>EPUSP</Text>
            <Text style={styles.text}>O ponto P (3, m) é interno a um dos lados do ...</Text>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient colors={['#FFE27A', '#FFF4CE']} start={[1,0]} end={[0,1]} style={styles.linearGradient}>
          <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('Question5')
              }
            >
            <Text style={styles.tema}>FUVEST</Text>
            <Text style={styles.text}>A equação x² + 2x + y² + my = n, em que m e ...</Text>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient colors={['#AAE5FF', '#D4F2FF', '#F3FBFF']} start={[1,0]} end={[0,1]} style={styles.linearGradient}>
          <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('Question6')
              }
            >
            <Text style={styles.tema}>UNICAMP 2014</Text>
            <Text style={styles.text}>No plano cartesiano, a reta de equação 2x – 3y ...</Text>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient colors={['#FFBD9A', '#FFCAAD', '#FFE7DB']} start={[1,0]} end={[0,1]} style={styles.linearGradient}>
          <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('Question7')
              }
            >
            <Text style={styles.tema}>PUC-SP</Text>
            <Text style={styles.text}>A circunferência λ: x2 + y2 – 4x...</Text>
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
CoordenadaScreen.contextType = QuestoesContext
export default CoordenadaScreen;