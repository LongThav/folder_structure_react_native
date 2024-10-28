import React from "react";
import { StyleSheet, Text, View, TextInput, Button, Image, SafeAreaView } from 'react-native';
import { makerStyle } from "../../styles";
import { Formik } from 'formik';
import * as Yup from 'yup';
import defaultColor from "../../them/colors";
import RoundedButton from "../../component/Button";

// Validation schema using Yup
const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Email required')
    .required('Email required'),
  password: Yup.string()
    .min(6, 'Password too short!')
    .required('Password required'),
});


const LoginScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={LoginSchema}
        onSubmit={(values) => {
          // Handle form submission
          console.log(values);
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <View style={styles.container}>
            <Image style={styles.logo} source={require('../../assets/logo.png')} />

            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor={'grey'}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            {touched.email && errors.email && (
              <Text style={styles.errorText}>{errors.email}</Text>
            )}

            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor={'grey'}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              secureTextEntry
            />
            {touched.password && errors.password && (
              <Text style={styles.errorText}>{errors.password}</Text>
            )}
            <RoundedButton
              title="Login"
              onPress={() => {
                handleSubmit()
              }}
              style={{ backgroundColor: defaultColor.BTN_Color }} // Custom button style
              textStyle={{ fontWeight: 'bold' }} // Custom text style
              disabled={false} // Optional disabled state
            />
          </View>
        )}
      </Formik>
    </SafeAreaView >
  );
}


const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  logo: {
    width: '70%',
    height: '30%',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 20
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'grey',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius: 6,
    color: 'grey'
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },

});


export default LoginScreen;