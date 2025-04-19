import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#3DF293',
    alignItems: 'center',
    paddingVertical: 20,
  },
  logo: {
    width: 60, /* 80*/
    height: 60, /* 80*/
    borderRadius: 30, /* 40*/
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 10,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  formContainer: {
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#3DF293',
    borderRadius: 5,
    padding: 15,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#333',
    fontSize: 16,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    lineHeight: 22,
    color: '#666',
    textAlign: 'center',
  },
  quizContainer: {
    flex: 1,
    padding: 20,
  },
  progressContainer: {
    marginBottom: 20,
  },
  progressText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  progressBar: {
    height: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#3DF293',
  },
  questionContainer: {
    flex: 1,
  },
  questionText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  optionButton: {
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    padding: 15,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  optionText: {
    fontSize: 16,
    color: '#333',
  },
  resultContainer: {
    padding: 20,
    alignItems: 'center',
  },
  resultImage: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  resultTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  resultCard: {
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 20,
    width: '100%',
    marginBottom: 20,
  },
  resultName: {
    fontSize: 16,
    marginBottom: 5,
  },
  resultEmail: {
    fontSize: 16,
    marginBottom: 15,
    color: '#666',
  },
  scoreContainer: {
    alignItems: 'center',
    marginVertical: 15,
  },
  scoreText: {
    fontSize: 16,
    marginBottom: 5,
  },
  scoreValue: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#3DF293',
  },
  scorePercentage: {
    fontSize: 18,
    color: '#666',
  },
  resultMessage: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 15,
    fontStyle: 'italic',
    color: '#333',
  },
  resultFooter: {
    fontSize: 14,
    textAlign: 'center',
    color: '#666',
    lineHeight: 22,
  },
});