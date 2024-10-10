import { StyleSheet, TextInput, Text, View, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Using Material Icons as an example


export default function App() {

  return (

    <SafeAreaView style={styles.container}>
    
    {/* App name / Account Icone */}

      <View style={name_acc.container}>
        <Text style={name_acc.text}>TradeLink</Text>
        <Icon name="account-circle" size={38} color="grey"  />
      </View>

    {/* Search Bar */}
    
      <View style={search_bar.textbox}>
      <Icon name="search" size={20} color="grey" style={search_bar.leftIcon} />
      <TextInput
        style={search_bar.input}
        placeholder="Search for Items ..."
        placeholderTextColor="grey"
      />
    </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
 
  container: {
    paddingTop:50,
    flex:1,
    alignContent:"center",
  },
});

const name_acc = StyleSheet.create({
 
  container:{ 
      marginEnd:"5%",
      marginStart:"5%",
      marginBottom:"5%",
      height:"7%",
      flexDirection:"row",
      justifyContent:"space-between",        
      alignContent:"center",
  },
  
  text: {
    fontFamily: 'Archivo',
    fontSize: 28,
    fontWeight: '700', // Bold
    color: 'black',
  },
})

const search_bar = StyleSheet.create({
   
  textbox: {
      marginEnd:"5%",
      marginStart:"5%",
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: '#BCC1CA',
      borderRadius: 6,
      paddingHorizontal: 16,
      height: 44,
      backgroundColor: '#FFFFFF',
      marginBottom: 20,
    },
  
  input: {
      flex: 1,
      height: '100%',
      paddingLeft: 10,
      fontSize: 16,
      color: '#000000',
    },
    
  leftIcon: {
      marginRight: 10,
    },
    
});
  
