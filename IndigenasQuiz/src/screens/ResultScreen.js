import React from 'react';
import { 
  Text, 
  View, 
  SafeAreaView, 
  Image,
  ScrollView 
} from 'react-native';
import { styles } from '../styles/styles';

function ResultScreen({ route }) {
  const { name, email, score, total } = route.params;
  
  // Debug: verifique os valores recebidos
  console.log(`[DEBUG] Score: ${score}, Total: ${total}`);

  if (total === 0) {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.resultContainer}>
          <Text style={styles.resultTitle}>Nenhuma pergunta respondida!</Text>
          <Text style={styles.resultMessage}>
            Parece que você não respondeu a nenhuma pergunta. Tente novamente!
          </Text>
        </ScrollView>
      </SafeAreaView>
    );
  }

  const percentage = Math.round((score / total) * 100);
  
  let message = "";
  if (score === total) {
    message = "Excelente! Você é um verdadeiro conhecedor das lendas indígenas!";
  } else if (percentage >= 80) {
    message = "Muito bom! Você conhece bastante sobre as histórias dos povos originários!";
  } else if (percentage >= 60) {
    message = "Bom trabalho! Você tem um bom conhecimento sobre as lendas indígenas.";
  } else if (percentage >= 40) {
    message = "Continue aprendendo sobre a rica cultura dos povos indígenas do Brasil!";
  } else {
    message = "Que tal explorar mais sobre as histórias e tradições indígenas?";
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.resultContainer}>
        <Image 
          source={require('../../assets/trophy.png')} 
          style={styles.resultImage} 
        />
        
        <Text style={styles.resultTitle}>Quiz Concluído!</Text>
        
        <View style={styles.resultCard}>
          <Text style={styles.resultName}>Nome: {name}</Text>
          <Text style={styles.resultEmail}>Email: {email}</Text>
          
          <View style={styles.scoreContainer}>
            <Text style={styles.scoreText}>Sua pontuação:</Text>
            <Text style={styles.scoreValue}>{score}/{total}</Text>
            <Text style={styles.scorePercentage}>({percentage}%)</Text>
          </View>
          
          <Text style={styles.resultMessage}>{message}</Text>
        </View>
       
        <Text style={styles.resultFooter}>
          Obrigado por participar do nosso quiz sobre as lendas indígenas brasileiras.
          Compartilhe seus conhecimentos e ajude a preservar esse rico patrimônio cultural!
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

function testarPontuacoes() {
  const testes = [
    {score: 5, total: 5}, // 100%
    {score: 4, total: 5}, // 80%
    {score: 3, total: 5}, // 60%
    {score: 2, total: 5}, // 40%
    {score: 0, total: 5}  // 0%
  ];

  testes.forEach((teste, index) => {
    const percent = Math.round((teste.score / teste.total) * 100);
    console.log(`[TESTE ${index + 1}] Score: ${teste.score}/${teste.total} = ${percent}%`);
  });
}

// Chame a função no início do seu componente:
testarPontuacoes();

export default ResultScreen;
