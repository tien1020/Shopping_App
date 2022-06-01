import React from 'react'
import { Text, View, FlatList, StyleSheet } from 'react-native'
import { getStyle } from '../systemStylesUse'
import OfferExtraDetailBoxItem from '../OfferExtraDetailBoxItem'

const RenderSubItems = ({data}) => {
    const titleStyle = getStyle(1, 6)
    const descriptionStyle = getStyle(1, 9)

    const renderItemFunction = ({item, index}) => (
        <View >
        <Text style={[titleStyle, styles.root]}>{item.title}</Text>
        <Text style={[descriptionStyle, styles.root]}>{item.description}</Text>
        {index == data.length-1 ? null : <View style={styles.item}></View>}

        </View>
        )
    

    return (
       <FlatList style={styles.list} data={data} renderItem={renderItemFunction} />
    )
}



const styles = StyleSheet.create({	
    root:{
        padding:10
    }	,
	list: {	
		borderWidth:1,
        borderColor:'#d5d8d8', 
        borderRadius: 10,
       
        
	},
    item: {
        
        height: 0.5, 
        borderColor: '#d5d8d8', 
        borderWidth: 0.5,
        marginTop:10,
        marginBottom:10,
    }		
		
})		

export default RenderSubItems