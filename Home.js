import React from 'react';
import { StyleSheet, Text, View, Button, Image, ScrollView } from 'react-native';
import { QuestoesContext } from './questoes.context';

class HomeScreen extends React.Component {
  render() {
    return (
      <ScrollView style={styles.ScrollView}>
        <View style={styles.container}>
          <View style={styles.logoajuste}>
            <Image style={styles.logo} source={require('./assets/logo.png')} />
          </View>
          <View style={styles.ajustetexto}>
            <Text style={styles.text}>Seja bem-vindo(a) ao aplicativo EducLiber</Text>
          </View>
            <View style={styles.botao}>
              <Button
                title="Ir aos assuntos"
                color="transparent"
                onPress={() =>
                  this.props.navigation.navigate('Principal')
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
  ajustetexto:{
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    marginVertical: 3,
    marginHorizontal: 16, 
  },
  container:{
    backgroundColor: 'white',
  },
  logo:{
    width: 210,
    height: 200,
    marginVertical: 70,
  },
  logoajuste:{
    alignItems: 'center',
    justifyContent: 'center',
  },
});

HomeScreen.contextType = QuestoesContext
export default HomeScreen;