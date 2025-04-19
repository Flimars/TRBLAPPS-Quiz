import React, { useState } from 'react';
import { 
  Text, 
  View, 
  TextInput, 
  TouchableOpacity, 
  SafeAreaView, 
  Image 
} from 'react-native';
import { styles } from '../styles/styles';

function WelcomeScreen({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');

  const validateForm = () => {
    let isValid = true;
    
    if (!name.trim()) {
      setNameError('Por favor, digite seu nome');
      isValid = false;
    } else {
      setNameError('');
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email)) {
      setEmailError('Por favor, digite um email válido');
      isValid = false;
    } else {
      setEmailError('');
    }
    
    return isValid;
  };

  const handleStart = () => {
    if (validateForm()) {
      navigation.navigate('Quiz', { name, email });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image 
          source={require('../../assets/logo.png')} 
          style={styles.logo}
          resizeMode='contain' //cover, stretch, repeat, center, contain 
        />
        <Text style={styles.title}>Histórias Indígenas</Text>
      </View>
      
      <View style={styles.content}>
        <Text style={styles.subtitle}>
          Teste seu conhecimento sobre as lendas e mitos dos povos originários do Brasil
        </Text>
        
        <View style={styles.formContainer}>
          <Text style={styles.label}>Nome:</Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
            placeholder="Digite seu nome"
          />
          {nameError ? <Text style={styles.errorText}>{nameError}</Text> : null}
          
          <Text style={styles.label}>Email:</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder="Digite seu email"
            keyboardType="email-address"
          />
          {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
          
          <TouchableOpacity 
            style={styles.button}
            onPress={handleStart}
          >
            <Text style={styles.buttonText}>INICIAR QUIZ</Text>
          </TouchableOpacity>
        </View>
        
        <Text style={styles.description}>
          Conectando culturas, preservando histórias! 
        </Text>
      </View>
    </SafeAreaView>
  );
}

export default WelcomeScreen;