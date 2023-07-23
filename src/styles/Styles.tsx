'use strict';
import { StyleSheet, Dimensions, Platform, I18nManager } from 'react-native';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

export default StyleSheet.create({
  //////////// Divider //////////

  divider: {
    borderWidth: 0.8,
    opacity: 0.1,
    marginTop: 28,
  },

  //////////// Footer ///////////

  footer: {
    backgroundColor: '#E1B12C',
    width: '100%',
    height: 40,
    marginTop: 35,
    borderTopLeftRadius: 13,
    borderTopRightRadius: 13,
  },

  ///////////  Resgister //////////

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
    fontFamily: 'Poppins_400Regular'
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
    paddingTop: 25,
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
    fontFamily: 'Poppins_400Regular'
  },
  erros: {
    color: 'red',
    alignSelf: 'flex-start',
    marginLeft: 35,
    marginBottom: 12,
  },

  //////////// Home ////////////

  /////// Header ////////////

  headerContainer: {
    width: '100%',
    height: 102,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#E1B12C',
  },
  iconMenuArea: {
    marginLeft: 16,
  },
  imageHeaderArea: {
    marginTop: 5,
  },
  imageHeader: {
    width: 60,
    height: 60,
  },
  iconTuneVariantArea: {
    marginRight: 16,
  },

  //////////// Titles sections ///////////
  contentTitle: {
    marginLeft: 20,
    marginTop: 25,
  },

  Title: {
    fontSize: 22,
    fontWeight: '600',
    color: '#222D5B',
    fontFamily: 'Poppins_600SemiBold'
  },

  //////////// Localization //////////

  localizationImage: {
    width: '100%',
    marginTop: 15,
  },
  buttonLocalizationArea: {
    width: '32%',
    alignSelf: 'center',
    marginTop: 25,
  },
  localizationButton: {
    backgroundColor: '#E1B12C',
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
  },
  localizationButtonText: {
    color: '#F8F8F8',
    fontWeight: '500',
    fontSize: 16,
    fontFamily: 'Poppins_400Regular'
  },

  /////////// Services ///////

  servicesContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
    marginTop: 16,
  },
  servicesTitle: {
    fontSize: 14,
    color: '#222D5B',
    marginLeft: 2,
  },

  /////////// Explore //////////

  contentExploreImage: {
    backgroundColor: '#E1B12C',
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    width: 150,
    marginLeft: 12,
  },
  exploreImages: {
    width: 50,
    height: 50,
  },
  contentExploreTitle: {
    marginTop: 5,
    marginBottom: 12,
  },
  exploreTitle: {
    color: '#222D5B',
    alignSelf: 'center',
    fontFamily: 'Poppins_500Medium'
  },
});
