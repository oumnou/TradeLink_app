import { StyleSheet } from 'react-native';



export const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    marginEnd: "5%",
    marginStart: "5%",

  },

itemsContainer: {
    height:"9%",
    justifyContent:"center",
    alignItems: 'center',
    margin: 2, 
},
item: {
    fontSize: 12,
    padding: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
},


});


export const name_acc = StyleSheet.create({
  container: {

    marginBottom: "5%",
    height: "7%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
  },

  text: {
    fontFamily: 'Archivo',
    fontSize: 28,
    fontWeight: '700', // Bold
    color: 'black',
  },
});


export const search_bar = StyleSheet.create({
  textbox: {

    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 6,
    paddingHorizontal: 16,
    height: 44,
    backgroundColor: '#FFFFFF',
    marginBottom: 5,
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
