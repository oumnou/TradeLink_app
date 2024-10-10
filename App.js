import { TextInput, Text,FlatList, View, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Using Material Icons as an example
import { styles, name_acc, search_bar } from './styles';


export default function App() {
  
  const ITEM_CATEGORIES = [
    { id: '1', title: 'Clothing' },
    { id: '2', title: 'Electronics' },
    { id: '3', title: 'Furniture' },
    { id: '4', title: 'Books'},
    { id: '5', title: 'Toys' },
  
  ];
  const renderItem = ({ item }) => (
    <View style={styles.itemsContainer}>
      <Text style={styles.item}>{item.title}</Text>
    </View>
  );

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
    

  {/* Item Categories */}

   

  <FlatList
  horizontal={true}
        data={ITEM_CATEGORIES}
       // keyExtractor={item => item.id}
        renderItem={renderItem}
      />


    </SafeAreaView>
  );
}


