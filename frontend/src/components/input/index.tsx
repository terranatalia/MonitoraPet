import { StatusBar } from 'expo-status-bar';
import { Text, TextInput, View } from 'react-native';
import { styles } from './styles'

interface InputProps{
  labelProp: string;
  placeholderProp:string;
  keyboardTypeProp: any;
  isPassword: boolean;
}

export function Input({labelProp, placeholderProp, keyboardTypeProp, isPassword}:InputProps) {
  
  let secureTextProp:boolean = false
  if (isPassword) {
     secureTextProp = true
  }else{
    secureTextProp =false
  }
  
  return (
    <View style={styles.container}>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>{labelProp}:</Text>
        <TextInput
        placeholder= {placeholderProp}
        style ={styles.input}
        keyboardType={keyboardTypeProp}
        secureTextEntry = {secureTextProp} />

      </View>
     
      <StatusBar style="auto" />
    </View>
  );
}