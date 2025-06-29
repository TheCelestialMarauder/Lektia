import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: 220,
    height: 220,
    marginBottom: 24
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 12
  },
  description: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 32,
    paddingHorizontal: 10
  },
  buttonContainer: {
    flexDirection: 'column',
    gap: 12
  },
  storeButton: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    width: 240
  },
  iosButton: {
    backgroundColor: '#000'
  },
  androidButton: {
    backgroundColor: '#34A853'
  },
  storeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16
  }
});

export default styles;
