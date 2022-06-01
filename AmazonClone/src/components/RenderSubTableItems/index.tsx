import React from 'react'
import { Text, View, FlatList, StyleSheet } from 'react-native'
import { getStyle } from '../systemStylesUse'


const RenderSubTableItems = ({data}) => {
    const labelStyle = getStyle(1, 9)
    const valueStyle = getStyle(1, 9)
    const lineColor = getStyle(38, 0)
    const renderItemTableFunction = ({item}) => (
        <View style={styles.root}>
        <Text style= {[labelStyle, styles.label]}>{item.label}</Text>
        <Text style={[styles.value, valueStyle]}>{item.value}</Text>
        </View>
        )
    

    return (
       <FlatList data={data} renderItem={renderItemTableFunction} />
    )
}

const styles = StyleSheet.create({	
    root: {
        borderTopWidth: 1,
        borderColor:'#d5d8d8', 
        flexDirection:'row',
        flexWrap: 'wrap',

    },
	label: {	
         width: 150, 
         backgroundColor: '#f3f3f3',
         padding:10
	},
    value: {
        paddingLeft: 10,
        marginVertical: 10,
    }
				
})		

export default RenderSubTableItems
