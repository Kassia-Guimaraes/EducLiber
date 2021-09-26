// Estatística e Probabilidade - Amostras
import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView, Image } from 'react-native';
import { QuestoesContext } from '../questoes.context';

class Amostra7Screen extends React.Component {
  render() {
    return(
      <ScrollView style={styles.ScrollView}>
        <View>
          <Text style={styles.mat}>Matemática</Text> 
          <Text style={styles.materia}>Estatística e Probabilidade - Amostras</Text>
          <Text style={styles.titulo}>EBSERH 2020 - Analista Administrativo - Estatística</Text>
          <Text style={styles.questao}>Um modelo de regressão linear simples foi gerado para explicar vendas (Y, em milhares de reais) a partir de propaganda (X, em centenas de reais). Algumas informações do modelo são apresentadas:
Equação de regressão estimada: Y=12 + 1,8X Tamanho da amostra: 17 observações. Soma de quadrados da regressão: 225,00. Soma de quadrados dos resíduos: 75,00. Sb1= 0,27.
Considere as seguintes afirmações: I. De acordo com a equação de regressão estimada, um gasto de R$ 1.000,00 em propaganda resulta em vendas estimadas de R$ 40.000,00. II. O coeficiente de determinação do modelo (R²) é de 75%. III. A cada incremento unitário em X, espera-se que Y aumente 1,8.
Estão corretas as afirmativas:
</Text> 
          <Text style={styles.ALT}>a)I apenas </Text>
          <Text style={styles.ALT}>b) I e II, apenas</Text>
          <Text style={styles.ALT}>c) I e III, apenas</Text>
          <Text style={styles.correct}>d) II e III, apenas</Text>
          <Text style={styles.ALT}>e) I, II e III</Text>
          
          <View style={styles.botao}>
            <Button 
              title={'Próxima questão'}
              color='transparent'
              onPress={() =>
               this.props.navigation.navigate('Amostra8')
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
  questao: {
    color: '#180033',
    fontWeight: 'nunito',
    fontSize: 15,
    textAlign: 'justify',
    marginVertical: 8,
    marginHorizontal: 16,
  },
  ajusteimg:{
    alignItems: 'center',
    justifyContent: 'center',
  },
  image:{
    width: 290, //largura
    height: 148, //altura
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
    textAlign: 'justify',
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
Amostra7Screen.contextType = QuestoesContext;

export default Amostra7Screen;