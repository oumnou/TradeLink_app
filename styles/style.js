import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    marginEnd: "5%",
    marginStart: "5%",

  },

itemsContainer: {
    height:"auto",
    justifyContent:"center",
    alignItems: 'center',
    margin: 2, 
    marginBottom:30,

},
item: {
    fontSize: 12,
    padding: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#BCC1CA',
    justifyContent: 'center',
    alignItems: 'center',
},
title:{
  fontFamily: 'Archivo', // Font family
    fontSize: 20, // Font size
    lineHeight: 30, // Line height
    fontWeight: '700', // Font weight
    color: '#000000FF', // Text color
    marginBottom:19
}


});


export const name_acc = StyleSheet.create({
  container: {

    height: "7%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
  },

  text: {
    fontFamily: 'Archivo',
    fontSize: 20,
    fontWeight: '700', // Bold
    color: 'black',
  },
});


export const search_bar = StyleSheet.create({
  textbox: {

    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#BCC1CA',
    borderRadius: 6,
    paddingHorizontal: 16,
    height: 44,
    backgroundColor: '#FFFFFF',
    marginBottom: 15,
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




export const line = StyleSheet.create({
  line:{
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginTop:30,
    marginLeft:100,
    marginRight:100,
    marginBottom:20,


    }
})
