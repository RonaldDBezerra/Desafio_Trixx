import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Formik } from 'formik';
import { registerSchema } from '../../schemas/ResgisterSchema';
import {
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import { Button, Text } from 'react-native-paper';
import Styles from '../../styles/Styles';
import Icon from 'react-native-vector-icons/Ionicons';

export function Register() {
  const [passhide, setPasshide] = useState(true);
  const [confirmPasshide, setConfirmPasshide] = useState(true);

  const confirmAlert = () => {
    Alert.alert('Cadastro', 'Cadastro realizado com sucesso');
  };

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
      }}
      validateOnMount={true}
      onSubmit={values => console.log(values)}
      validationSchema={registerSchema}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        isValid,
        touched,
        errors,
      }) => (
        <ScrollView showsVerticalScrollIndicator={false}>
          <KeyboardAvoidingView behavior="height" style={Styles.container}>
            <View style={Styles.imageArea}>
              <Image source={require('../../asserts/Group101.png')} />
            </View>
            <View>
              <View>
                <Text style={Styles.text} variant="titleLarge">
                  Nome
                </Text>
              </View>
              <View style={Styles.inputArea}>
                <TextInput
                  onChangeText={handleChange('name')}
                  onKeyPress={handleBlur('name')}
                  value={values.name}
                  maxLength={10}
                  style={Styles.textInput}
                  placeholder="nome"
                />
              </View>
            </View>

            {errors.name && touched.name && (
              <Text style={Styles.erros} variant="labelSmall">
                {errors.name}
              </Text>
            )}

            <View>
              <View>
                <Text style={Styles.text} variant="titleLarge">
                  E-mail
                </Text>
              </View>
              <View style={Styles.inputArea}>
                <TextInput
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  style={Styles.textInput}
                  keyboardType="email-address"
                  placeholder="e-mail"
                />
              </View>
            </View>

            {errors.email && touched.email && (
              <Text style={Styles.erros} variant="labelSmall">
                {errors.email}
              </Text>
            )}

            <View>
              <View>
                <Text style={Styles.text} variant="titleLarge">
                  Telefone
                </Text>
              </View>
              <View style={Styles.inputArea}>
                <TextInput
                  onChangeText={handleChange('phone')}
                  onKeyPress={handleBlur('phone')}
                  value={values.phone}
                  maxLength={12}
                  style={Styles.textInput}
                  keyboardType="number-pad"
                  placeholder="telefone"
                />
              </View>
            </View>

            {errors.phone && touched.phone && (
              <Text style={Styles.erros} variant="labelSmall">
                {errors.phone}
              </Text>
            )}

            <View>
              <View>
                <Text style={Styles.text} variant="titleLarge">
                  Criar senha
                </Text>
              </View>
              <View style={Styles.inputAreaPassword}>
                <TextInput
                  onChangeText={handleChange('password')}
                  onKeyPress={handleBlur('password')}
                  value={values.password}
                  maxLength={8}
                  secureTextEntry={passhide}
                  style={Styles.passwordInput}
                  placeholder="senha"
                />

                <TouchableOpacity onPress={() => setPasshide(!passhide)}>
                  <Icon
                    name={passhide ? 'eye-outline' : 'eye-off-outline'}
                    size={24}
                  />
                </TouchableOpacity>
              </View>
            </View>

            {errors.password && touched.password && (
              <Text style={Styles.erros} variant="labelSmall">
                {errors.password}
              </Text>
            )}

            <View>
              <View>
                <Text style={Styles.text} variant="titleLarge">
                  Confirmar senha
                </Text>
              </View>
              <View style={Styles.inputAreaPassword}>
                <TextInput
                  onChangeText={handleChange('confirmPassword')}
                  onKeyPress={handleBlur('confirmPassword')}
                  value={values.confirmPassword}
                  maxLength={8}
                  secureTextEntry={confirmPasshide}
                  style={Styles.passwordInput}
                  placeholder="senha"
                />

                <TouchableOpacity
                  onPress={() => setConfirmPasshide(!confirmPasshide)}
                >
                  <Icon
                    name={confirmPasshide ? 'eye-outline' : 'eye-off-outline'}
                    size={24}
                  />
                </TouchableOpacity>
              </View>
            </View>

            {errors.confirmPassword && touched.confirmPassword && (
              <Text style={Styles.erros} variant="labelSmall">
                {errors.confirmPassword}
              </Text>
            )}

            <View style={Styles.buttonArea}>
              <Button
                onPress={() => {
                  handleSubmit();
                  confirmAlert();
                }}
                disabled={!isValid}
                labelStyle={Styles.textButton}
                style={Styles.button}
                mode="contained"
              >
                Criar conta
              </Button>
            </View>

            <StatusBar style="light" />
          </KeyboardAvoidingView>
        </ScrollView>
      )}
    </Formik>
  );
}