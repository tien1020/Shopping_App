import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    root:{
        padding:10,
    },
    row:{
        marginVertical: 5,
    },
    label:{
        fontWeight: 'bold',
    },
    input:{
        backgroundColor: 'white',
        marginVertical: 5,
        padding: 5,
        borderWidth: 1,
        borderColor: 'lightgray',
        height: 40,
        borderRadius: 2
    },
    errorLabel:{
        color: 'red',
    }
});

export default styles;