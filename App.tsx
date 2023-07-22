import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Formik } from 'formik';
import {
  StyleSheet,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import { Button, Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import * as yup from 'yup';

const registerSchema = yup.object().shape({
  name: yup.string().required('Nome obrigatório'),
  email: yup
    .string()
    .email('Informe um email valido')
    .required('E-mail obrigatório'),
  phone: yup.number().required('Telefone obrigatório'),
  password: yup
    .string()
    .min(6, 'Sua senha deve conter no minino 6 caracteres')
    .required('Senha obrigatória'),
  confirmPassword: yup
    .string()
    .min(6, 'Sua senha deve conter no minino 6 caracteres')
    .required('Senha obrigatória')
    .oneOf([yup.ref('password')], 'Senhas diferentes'),
});

export default function App() {
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
          <KeyboardAvoidingView behavior="height" style={styles.container}>
            <View style={styles.imageArea}>
              <Image source={require('./src/asserts/Group101.png')} />
            </View>
            <View>
              <View>
                <Text style={styles.text} variant="titleLarge">
                  Nome
                </Text>
              </View>
              <View style={styles.inputArea}>
                <TextInput
                  onChangeText={handleChange('name')}
                  onKeyPress={handleBlur('name')}
                  value={values.name}
                  maxLength={10}
                  style={styles.textInput}
                  placeholder="nome"
                />
              </View>
            </View>

            {errors.name && touched.name && (
              <Text style={styles.erros} variant="labelSmall">
                {errors.name}
              </Text>
            )}

            <View>
              <View>
                <Text style={styles.text} variant="titleLarge">
                  E-mail
                </Text>
              </View>
              <View style={styles.inputArea}>
                <TextInput
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  style={styles.textInput}
                  keyboardType="email-address"
                  placeholder="e-mail"
                />
              </View>
            </View>

            {errors.email && touched.email && (
              <Text style={styles.erros} variant="labelSmall">
                {errors.email}
              </Text>
            )}

            <View>
              <View>
                <Text style={styles.text} variant="titleLarge">
                  Telefone
                </Text>
              </View>
              <View style={styles.inputArea}>
                <TextInput
                  onChangeText={handleChange('phone')}
                  onKeyPress={handleBlur('phone')}
                  value={values.phone}
                  maxLength={12}
                  style={styles.textInput}
                  keyboardType="number-pad"
                  placeholder="telefone"
                />
              </View>
            </View>

            {errors.phone && touched.phone && (
              <Text style={styles.erros} variant="labelSmall">
                {errors.phone}
              </Text>
            )}

            <View>
              <View>
                <Text style={styles.text} variant="titleLarge">
                  Criar senha
                </Text>
              </View>
              <View style={styles.inputAreaPassword}>
                <TextInput
                  onChangeText={handleChange('password')}
                  onKeyPress={handleBlur('password')}
                  value={values.password}
                  maxLength={8}
                  secureTextEntry={passhide}
                  style={styles.passwordInput}
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
              <Text style={styles.erros} variant="labelSmall">
                {errors.password}
              </Text>
            )}

            <View>
              <View>
                <Text style={styles.text} variant="titleLarge">
                  Confirmar senha
                </Text>
              </View>
              <View style={styles.inputAreaPassword}>
                <TextInput
                  onChangeText={handleChange('confirmPassword')}
                  onKeyPress={handleBlur('confirmPassword')}
                  value={values.confirmPassword}
                  maxLength={8}
                  secureTextEntry={confirmPasshide}
                  style={styles.passwordInput}
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
              <Text style={styles.erros} variant="labelSmall">
                {errors.confirmPassword}
              </Text>
            )}

            <View style={styles.buttonArea}>
              <Button
                onPress={() => {
                  handleSubmit();
                  confirmAlert();
                }}
                disabled={!isValid}
                labelStyle={styles.textButton}
                style={styles.button}
                mode="contained"
              >
                Criar conta
              </Button>
            </View>

            <StatusBar style="light" backgroundColor="black" />
          </KeyboardAvoidingView>
        </ScrollView>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({
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
    height: 48,
    marginTop: 50,
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
