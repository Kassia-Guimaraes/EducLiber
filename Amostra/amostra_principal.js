//Tela principal de Estatística e Probabilidade - Amostras
import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView, TouchableOpacity, setCustomText} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { QuestoesContext } from '../questoes.context';

class AmostraPrincial extends React.Component{
  render() {
    return(
      <ScrollView style={styles.ScrollView}>
        <Text style={styles.titulo}>Estatística e Probabilidade - Amostras</Text>
        <LinearGradient colors={['#AAE5FF', '#D4F2FF', '#F3FBFF']} start={[1,0]} end={[0,1]} style={styles.linearGradient}>
          <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('Amostra1')
              }
            >
            <Text style={styles.tema}>EBSERH</Text>
            <Text style={styles.text}>A tabela indica o total de pessoas numa ...</Text>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient colors={['#FFBD9A', '#FFCAAD', '#FFE7DB']} start={[1,0]} end={[0,1]} style={styles.linearGradient}>
          <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('Amostra2')
              }
            >
            <Text style={styles.tema}>CESPE - 2020</Text>
            <Text style={styles.text}>Ao analisar uma amostra aleatória ...</Text>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient colors={['#DAA9FB', '#EFDFFA']} start={[1,0]} end={[0,1]} style={styles.linearGradient}>
          <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('Amostra3')
              }
            >
            <Text style={styles.tema}>CESPE - 2020</Text>
            <Text style={styles.text}>Uma pesquisa foi realizada em uma ...</Text>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient colors={['#8CFF8C', '#E7FFE7']} start={[1,0]} end={[0,1]} style={styles.linearGradient}>
          <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('Amostra4')
              }
            >
            <Text style={styles.tema}>TJ-PA CESPE - 2020</Text>
            <Text style={styles.text}>A tabela a seguir apresenta dados ...</Text>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient colors={['#FFE27A', '#FFF4CE']} start={[1,0]} end={[0,1]} style={styles.linearGradient}>
          <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('Amostra5')
              }
            >
            <Text style={styles.tema}>CESPE - 2020</Text>
            <Text style={styles.text}>Uma amostra aleatória simples ...</Text>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient colors={['#AAE5FF', '#D4F2FF', '#F3FBFF']} start={[1,0]} end={[0,1]} style={styles.linearGradient}>
          <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('Amostra6')
              }
            >
            <Text style={styles.tema}>FUNDATEC - 2021</Text>
            <Text style={styles.text}>Assumindo que todas as outras variáveis ...</Text>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient colors={['#FFBD9A', '#FFCAAD', '#FFE7DB']} start={[1,0]} end={[0,1]} style={styles.linearGradient}>
          <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('Amostra7')
              }
            >
            <Text style={styles.tema}>EBSERH</Text>
            <Text style={styles.text}>Um modelo de regressão linear...</Text>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient colors={['#DAA9FB', '#EFDFFA']} start={[1,0]} end={[0,1]} style={styles.linearGradient}>
          <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('Amostra8')
              }
            >
            <Text style={styles.tema}>EBSERH</Text>
            <Text style={styles.text}>Considere que um estudo será ...</Text>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient colors={['#8CFF8C', '#E7FFE7']} start={[1,0]} end={[0,1]} style={styles.linearGradient}>
          <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('Amostra9')
              }
            >
            <Text style={styles.tema}>CESPE</Text>
            <Text style={styles.text}>Em uma amostra aleatória de 20 ...</Text>
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
AmostraPrincial.contextType = QuestoesContext
export default AmostraPrincial;