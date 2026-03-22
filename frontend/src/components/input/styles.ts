import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer:{
    width:400,
    alignItems:'center',
    flexDirection: 'column',
    gap: 8,
  },
  label:{
    width: '80%',
    alignItems:'flex-start',
    paddingLeft:6,
    fontSize: 20
  },
  input:{ 
    width:'80%',
    borderRadius: 18,
    borderWidth:2,
    borderColor:'Black',
    alignSelf: 'center',
    fontSize: 20,
    paddingLeft: 16,
    marginBottom:10,
  }
});