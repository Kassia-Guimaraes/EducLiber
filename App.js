import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Home';
import PrincipalScreen from './Principal';

import CoordenadaScreen from './Questoes/Coordenada_principal'; //Coordenas do plano
import Questao1Screen from './Questoes/quest1';
import Questao2Screen from './Questoes/quest2';
import Questao3Screen from './Questoes/quest3';
import Questao4Screen from './Questoes/quest4';
import Questao5Screen from './Questoes/quest5';
import Questao6Screen from './Questoes/quest6';
import Questao7Screen from './Questoes/quest7';

import TeoremaScreen from './Teorema_Tales/Teorema_principal'; //Teorema de tales
import Teorema1Screen from './Teorema_Tales/quest1';
import Teorema2Screen from './Teorema_Tales/quest2';
import Teorema3Screen from './Teorema_Tales/quest3';
import Teorema4Screen from './Teorema_Tales/quest4';
import Teorema5Screen from './Teorema_Tales/quest5';
import Teorema6Screen from './Teorema_Tales/quest6';
import Teorema7Screen from './Teorema_Tales/quest7';

import SemelhancaScreen from './Semelhanca_Triangulos/semelhanca_principal'; //Semelhanca de triangulos
import Semelhanca1Screen from './Semelhanca_Triangulos/quest1'; 
import Semelhanca2Screen from './Semelhanca_Triangulos/quest2';
import Semelhanca3Screen from './Semelhanca_Triangulos/quest3';
import Semelhanca4Screen from './Semelhanca_Triangulos/quest4';
import Semelhanca5Screen from './Semelhanca_Triangulos/quest5';
import Semelhanca6Screen from './Semelhanca_Triangulos/quest6';

import RazoesScreen from './Razoes_Trigono/razoes_principal'; //Razoes trigonometricas
import Razoes1Screen from './Razoes_Trigono/quest1'; 
import Razoes2Screen from './Razoes_Trigono/quest2';
import Razoes3Screen from './Razoes_Trigono/quest3';
import Razoes4Screen from './Razoes_Trigono/quest4';
import Razoes5Screen from './Razoes_Trigono/quest5';
import Razoes6Screen from './Razoes_Trigono/quest6';
import Razoes7Screen from './Razoes_Trigono/quest7';

import AmostraScreen from './Amostra/amostra_principal'; // Amostras
import Amostra1Screen from './Amostra/quest1';
import Amostra2Screen from './Amostra/quest2';
import Amostra3Screen from './Amostra/quest3';
import Amostra4Screen from './Amostra/quest4';

import { QuestoesContext } from './questoes.context';

const Stack = createStackNavigator();

export default class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      home: [],
    }
  }
    render() {
    return(
      <QuestoesContext.Provider
        value= {
          {
            home: this.state.home,
            alternative: this.state.alternative,
            proximo: this.state.proximo
          }
        }    
      >
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
            />
            <Stack.Screen
              name='Principal'
              component={PrincipalScreen}
            />

           <Stack.Screen
              name='Coordenadas'
              component={CoordenadaScreen}
            />
            <Stack.Screen
              name="Question1" 
              component={Questao1Screen}
            />
            <Stack.Screen
              name="Question2" 
              component={Questao2Screen}
            />
            <Stack.Screen
              name="Question3" 
              component={Questao3Screen}
            />
            <Stack.Screen
              name="Question4"
              component={Questao4Screen}
            />
            <Stack.Screen
              name='Question5'
              component={Questao5Screen}
            />
            <Stack.Screen
              name='Question6'
              component={Questao6Screen}
            />
            <Stack.Screen
              name='Question7'
              component={Questao7Screen}
            />

            <Stack.Screen //Teorema de Tales
              name='TeoremaPrincipal'
              component={TeoremaScreen}
            />
            <Stack.Screen
              name='Teorema1'
              component={Teorema1Screen}
            />
            <Stack.Screen
              name='Teorema2'
              component={Teorema2Screen}
            />
            <Stack.Screen
              name='Teorema3'
              component={Teorema3Screen}
            />
            <Stack.Screen
              name='Teorema4'
              component={Teorema4Screen}
            />
            <Stack.Screen
              name='Teorema5'
              component={Teorema5Screen}
            />
            <Stack.Screen
              name='Teorema6'
              component={Teorema6Screen}
            />
            <Stack.Screen
              name='Teorema7'
              component={Teorema7Screen}
            />

            <Stack.Screen //Semelhança de triângulos
              name='SemelhancaPrincipal'
              component={SemelhancaScreen}
            />
            <Stack.Screen
              name='Semelhanca1'
              component={Semelhanca1Screen}
            />
            <Stack.Screen
              name='Semelhanca2'
              component={Semelhanca2Screen}
            />
            <Stack.Screen
              name='Semelhanca3'
              component={Semelhanca3Screen}
            />
            <Stack.Screen
              name='Semelhanca4'
              component={Semelhanca4Screen}
            />
            <Stack.Screen
              name='Semelhanca5'
              component={Semelhanca5Screen}
            />
            <Stack.Screen
              name='Semelhanca6'
              component={Semelhanca6Screen}
            />
            
            <Stack.Screen //Razões trigonométricas
              name='RazoesPrincipal'
              component={RazoesScreen}
            />
            <Stack.Screen 
              name='Razoes1'
              component={Razoes1Screen}
            />
            <Stack.Screen
              name='Razoes2'
              component={Razoes2Screen}
            />
            <Stack.Screen
              name='Razoes3'
              component={Razoes3Screen}
            />
            <Stack.Screen
              name='Razoes4'
              component={Razoes4Screen}
            />
            <Stack.Screen
              name='Razoes5'
              component={Razoes5Screen}
            />
            <Stack.Screen
              name='Razoes6'
              component={Razoes6Screen}
            />
            <Stack.Screen
              name='Razoes7'
              component={Razoes7Screen}
            />

            <Stack.Screen //Amostras
              name='AmostraPrincipal'
              component={AmostraScreen}
            />
            <Stack.Screen
              name='Amostra1'
              component={Amostra1Screen}
            />
            <Stack.Screen
              name='Amostra2'
              component={Amostra2Screen}
            />
            <Stack.Screen
              name='Amostra3'
              component={Amostra3Screen}
            />
            <Stack.Screen
              name='Amostra4'
              component={Amostra4Screen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </QuestoesContext.Provider>
    )
  }
}