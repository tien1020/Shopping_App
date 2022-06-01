import {StyleSheet} from 'react-native';


const styles = StyleSheet.create({
    root: {
        padding: 10,
        backgroundColor: 'white',
        paddingBottom:20
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000'
    },
    oldPrice: {
        fontSize: 12,
        fontWeight: 'normal',
        textDecorationLine: 'line-through',
        
    },
    description: {
        marginVertical: 10,
        lineHeight: 20,
    }

});
export default styles;