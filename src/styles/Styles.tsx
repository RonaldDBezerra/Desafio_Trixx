'use strict';
import { StyleSheet, Dimensions, Platform, I18nManager } from 'react-native';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageArea: {
    top: 62,
    marginBottom: 84,
    width: 83,
    height: 81.98,
  },
  textInput: {
    width: 328,
    height: 48,
    paddingLeft: 18,
  },
  text: {
    marginBottom: 12,
    color: '#666666',
  },
  inputArea: {
    width: 328,
    height: 48,
    borderColor: '#666666',
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 12,
  },
  inputAreaPassword: {
    width: 328,
    height: 48,
    borderColor: '#666666',
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  passwordInput: {
    width: '80%',
  },
  buttonArea: {
    width: 328,
    height: 120,
    marginTop: 50,
    paddingTop: 25
  },
  button: {
    backgroundColor: '#E1B12C',
    borderRadius: 8,
    height: 48,
    justifyContent: 'center',
  },
  textButton: {
    fontSize: 16,
    color: '#F8F8F8',
    lineHeight: 24,
    fontWeight: '400',
  },
  erros: {
    color: 'red',
    alignSelf: 'flex-start',
    marginLeft: 35,
    marginBottom: 12,
  },
});
