import React, { useState } from 'react';
import { 
  Text, 
  View, 
  TouchableOpacity, 
  SafeAreaView 
} from 'react-native';
import { styles } from '../styles/styles';

function QuizScreen({ route, navigation }) {
  const { name, email } = route.params;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  // Lista de perguntas e respostas
  const questions = [
    {
      question: "Qual característica marcante do Curupira?",
      options: [
        "Suas asas vermelhas",
        "Seus pés virados para trás",
        "Sua cauda longa",
        "Seus olhos amarelos"
      ],
      correctAnswer: 1
    },
    {
      question: "Qual das lendas fala sobre uma sereia de água doce?",
      options: [
        "Lenda da Iara",
        "Lenda do Guaraná",
        "Lenda do Boitatá",
        "Lenda da Vitória-Régia"
      ],
      correctAnswer: 0
    },
    {
      question: "Segundo a lenda, em que o Boto Cor-de-Rosa se transforma durante a noite?",
      options: [
        "Uma estrela brilhante",
        "Um pássaro vermelho",
        "Um homem elegante",
        "Uma árvore colorida"
      ],
      correctAnswer: 2
    },
    {
      question: "Qual lenda explica a origem da mandioca, alimento básico de muitas comunidades indígenas?",
      options: [
        "Lenda do Guaraná",
        "Lenda da Mandioca",
        "Lenda do Pirarucu",
        "Lenda da Matinta Pereira"
      ],
      correctAnswer: 1
    },
    {
      question: "Qual ser mítico é conhecido como protetor das florestas e dos animais?",
      options: [
        "Iara",
        "Saci-Pererê",
        "Curupira",
        "Caipora"
      ],
      correctAnswer: 2
    }
  ];

  // Função para lidar com a resposta do usuário 
  const handleAnswer = (selectedOptionIndex) => {
    // Calcula a nova pontuação
    const newScore = selectedOptionIndex === questions[currentQuestion].correctAnswer 
      ? score + 1 
      : score;
  
    // Debug: verifica os valores
    console.log('[QUIZ DEBUG] Acertos:', newScore, 'Total:', questions.length);
  
    if (currentQuestion < questions.length - 1) {
      // Se não for a última pergunta, atualiza a pontuação e avança para a próxima pergunta
      setScore(newScore);
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Se for a última pergunta, navega para a tela de resultado
      // e passa os parâmetros necessários
      navigation.navigate('Result', { 
        name, 
        email, 
        score: newScore, 
        total: questions.length 
      });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.quizContainer}>
        <View style={styles.progressContainer}>
          <Text style={styles.progressText}>
            Pergunta {currentQuestion + 1} de {questions.length}
          </Text>
          <View style={styles.progressBar}>
            <View 
              style={[
                styles.progressFill, 
                { width: `${((currentQuestion + 1) / questions.length) * 100}%` }
              ]} 
            />
          </View>
        </View>
        
        <View style={styles.questionContainer}>
          <Text style={styles.questionText}>
            {questions[currentQuestion].question}
          </Text>
          
          {questions[currentQuestion].options.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={styles.optionButton}
              onPress={() => handleAnswer(index)}
            >
              <Text style={styles.optionText}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}

export default QuizScreen;