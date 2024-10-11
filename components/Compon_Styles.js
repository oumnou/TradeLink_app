import { StyleSheet } from 'react-native';

export const card_Style = StyleSheet.create({
    
    container: {
        backgroundColor: "white",
        flexDirection: "column", // Stack rows vertically
        overflow: "visible",
        width: "100%",
        marginBottom:112
    },
    row: {
        flexDirection: 'row', // Arrange items in a row
        justifyContent: 'space-between', // Space items evenly
    },
    card: {
        marginBottom: 17, // Space between rows
        backgroundColor: "white",
        shadowColor: "#000", 
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
        width: "48%", // Each card takes slightly less than 50% of the screen width
        margin: "1%", 
    },
    actions: {
        justifyContent: 'center', 
        flexDirection: 'row',
        width: '100%',
    },
    fullButton: {
        flex: 1, 
        justifyContent: 'center', 
        borderColor: "#2C35E0FF", 
    },
    buttonText: {
        color: '#2C35E0FF', 
    },
    title: {
        fontWeight: "bold",
    },
    paragraph: {
        color: 'grey',
        marginBottom: 15,
    },
});

export const wishList_Style = StyleSheet.create({
    itemContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
      marginVertical: 5,
      backgroundColor: '#fff',
      borderRadius: 5,
      
    },
    textContainer: {
      justifyContent: 'space-between',
      flex: 1,
      marginRight: 10,
    },
    title: {
        color:"grey",
      fontSize: 12,
      marginBottom: 10, // Add space between title and button
    },
    image: {
      width: 100, // Adjust width to match the design
      height: 80, 
      borderRadius: 5,
    },
    button:{
    marginTop:10,
    width:104,
    alignContent:"center",
    alignItems:"center",
    borderRadius:10,
    

    }
  });
  
export const AccountDetails_Styles = StyleSheet.create({
    container: {
        flexDirection: 'row', 
        justifyContent: 'space-between', // Space between the details and button
        alignItems: 'center', 
        padding: 20, 
        backgroundColor: '#fff', 
       
    },
    detailsContainer: {
        //flex: 1, // Takes up available space on the left
    },
    title: {
        fontSize: 18, 
        fontWeight: 'bold',
        marginBottom: 8, // Space between title and the details
    },
    editButton: {
        backgroundColor: '#6E44FF', // Color for the button
        borderRadius: 10,
    },
    detailItem: {
        marginBottom: 5, // Adds space between each line of text (Email, Phone, etc.)
    },
});

export const profile_Style = StyleSheet.create({
    container: {
      flexDirection: 'row',
      //alignItems: "center",
      justifyContent: "center",
      width: '100%', 
      height: "auto",
    },
  
    button: {
      backgroundColor: '#6E44FF', // Color for the button
      borderRadius: 10,
      alignContent:'center',
      //borderRadius: 40,
      borderWidth: 1,
      //borderColor: '#2C35E0FF',
      height:40,
      alignItems:"center"
      
    },
  
    tinyProfile: {
      width: 60,
      height: 60,
      borderRadius: 80 / 2,
      overflow: 'hidden',
      borderWidth: 1,
      borderColor: 'grey',
    },
  
    textContainer: {
      paddingleft:12,
      flex:1, // Allow text to grow and take available space
      marginRight: 30, // Add space between text and button
      marginleft: 10, // Add space between text and button
    },
  
    name:{
      fontWeight:"bold",
      marginBottom: 5,
  
    },
    text: {
      fontSize: 14,
      color: 'black',
      flexShrink: 1, // Allow text to shrink if necessary
      overflow: 'hidden', // Prevent text from overflowing the container
      textOverflow: 'ellipsis',
      paddingLeft:12, // Add ellipsis if text overflows
    },
  });