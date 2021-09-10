import React from 'react';
import { StyleSheet, Text, View, Button, Image, ScrollView, TouchableOpacity } from 'react-native';
import { QuestoesContext } from './questoes.context';

class PrincipalScreen extends React.Component{
  render() {
    return(
      <ScrollView style={styles.ScrollView}>
        <View>
          <Text style={styles.text}>Escolha um assunto</Text>
            <View style={styles.botao}>
              <Button
                title='Coordenadas do plano'
                color='tansparent'
                onPress={() =>
                  this.props.navigation.navigate('Coordenadas')
                }
              />
            </View>
            <View style={styles.botao}>
              <Button
                title='Teorema de Tales'
                color='tansparent'
                onPress={() =>
                  this.props.navigation.navigate('TeoremaPrincipal')
                }
              />
            </View>
            <View style={styles.botao}>
              <Button
                title='Semelhança de triângulos'
                color='tansparent'
                onPress={() =>
                  this.props.navigation.navigate('SemelhancaPrincipal')
                }
              />
            </View>
            <View style={styles.botao}>
              <Button
                title='Razões trigonométricas'
                color='tansparent'
                onPress={() =>
                  this.props.navigation.navigate('RazoesPrincipal')
                }
              />
            </View>
            <View style={styles.botao}>
              <Button
                title='Amostras'
                color='tansparent'
                onPress={() =>
                  this.props.navigation.navigate('AmostraPrincipal')
                }
              />
            </View>
        </View>
      </ScrollView>
    )
  }
}
const styles = StyleSheet.create({
  ScrollView:{
    backgroundColor: 'white',
  },
  text:{
    marginVertical: 3,
    marginHorizontal: 16, 
  },
  botao: {
    color:'red',
    backgroundColor:'#635ED7',
    borderColor: '#F0EBF5',
    borderWidth: 1,
    fontSize: 15,
    fontWeight: 'rubik',
    alignItems: 'center',
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 16,
    borderRadius: 8,
  },
});
PrincipalScreen.contextType = QuestoesContext
export default PrincipalScreen;