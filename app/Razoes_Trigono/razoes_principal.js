//Tela principal de Geometria - Razões Trigonométricas
import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView, TouchableOpacity, setCustomText} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { QuestoesContext } from '../questoes.context';

class RazoesScreen extends React.Component{
  render() {
    return(
      <ScrollView style={styles.ScrollView}>
        <Text style={styles.titulo}>Geometria - Razões Trigonométricas</Text>
        <LinearGradient colors={['#AAE5FF', '#D4F2FF', '#F3FBFF']} start={[1,0]} end={[0,1]} style={styles.linearGradient}>
          <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('Razoes1')
              }
            >
            <Text style={styles.tema}>Cesgranrio</Text>
            <Text style={styles.text}>Uma rampa plana, de 36 m de comprimento ...</Text>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient colors={['#FFBD9A', '#FFCAAD', '#FFE7DB']} start={[1,0]} end={[0,1]} style={styles.linearGradient}>
          <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('Razoes2')
              }
            >
            <Text style={styles.tema}>ENEM - 2009</Text>
            <Text style={styles.text}>Ao morrer, o pai de João, Pedro e José deixou ...</Text>
            </TouchableOpacity>
        </LinearGradient>
        <LinearGradient colors={['#DAA9FB', '#EFDFFA']} start={[1,0]} end={[0,1]} style={styles.linearGradient}>
          <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('Razoes4')
              }
            >
            <Text style={styles.tema}>GUALIMP</Text>
            <Text style={styles.text}>Observe as dimensões do triângulo retângulo ...</Text>
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
RazoesScreen.contextType = QuestoesContext
export default RazoesScreen;