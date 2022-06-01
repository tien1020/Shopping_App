
import React, {useState} from 'react';
import { View, Text, ScrollView, FlatList, StyleSheet} from 'react-native';
import { DataTable } from 'react-native-paper';
import RenderSubTableItems from '../RenderSubTableItems';
import { getStyle } from '../systemStylesUse';



const OfferExtraDetailTableItem =()=>{   

    const extraDetailTables =[
        {
            id:1,
            title: "Product Information",
            extraDetailTableContents: [
                {   
                    id:1,
                    label: "Brand",
                    value: "Braun",
                    sortIndex: 0
                },
                {
                    id:2,
                    label: "Special Feature",
                    value: "Waterproof",
                    sortIndex: 1
                },
                {
                    id:3,
                    label: "Blade Material",
                    value: "Stainless Steel",
                    sortIndex: 2
                },
                {
                    id:4,
                    label: "Item Weight",
                    value: "1.2 Kilograms",
                    sortIndex: 3
                },
                {
                    id:5,
                    label: "Head Type",
                    value: "Foil",
                    sortIndex: 4
                },
                {
                    id:6,
                    label: "Number of Blades",
                    value: "1",
                    sortIndex: 5
                },
                {
                    id:7,
                    label: "Product Dimension",
                    value: "2.76 x 1.97 x 5.91",
                    sortIndex: 6
                },
                {
                    id:8,
                    label: "Item Weight",
                    value: "2.64 pounds",
                    sortIndex: 7
                },
                {
                    id:9,
                    label: "Manufacturer",
                    value: "Braun",
                    sortIndex: 8
                },
                {
                    id:10,
                    label: "ASIN",
                    value: "B07DTHJ8X9",
                    sortIndex: 9
                },
                
            ]
        },
        {
            id:2,
            title: "Product Information",
            extraDetailTableContents: [
                {   
                    id:1,
                    label: "Brand",
                    value: "Braun",
                    sortIndex: 0
                },
                {
                    id:2,
                    label: "Special Feature",
                    value: "Waterproof",
                    sortIndex: 1
                },
                {
                    id:3,
                    label: "Blade Material",
                    value: "Stainless Steel",
                    sortIndex: 2
                },
                {
                    id:4,
                    label: "Item Weight",
                    value: "1.2 Kilograms",
                    sortIndex: 3
                },
                {
                    id:5,
                    label: "Head Type",
                    value: "Foil",
                    sortIndex: 4
                },
                {
                    id:6,
                    label: "Number of Blades",
                    value: "1",
                    sortIndex: 5
                },
                {
                    id:7,
                    label: "Product Dimension",
                    value: "2.76 x 1.97 x 5.91",
                    sortIndex: 6
                },
                {
                    id:8,
                    label: "Item Weight",
                    value: "2.64 pounds",
                    sortIndex: 7
                },
                {
                    id:9,
                    label: "Manufacturer",
                    value: "Braun",
                    sortIndex: 8
                },
                {
                    id:10,
                    label: "ASIN",
                    value: "B07DTHJ8X9",
                    sortIndex: 9
                },
                
            ]
        },
        {
            id:3,
            title: "Product Information",
            extraDetailTableContents: [
                {   
                    id:1,
                    label: "Brand",
                    value: "Braun",
                    sortIndex: 0
                },
                {
                    id:2,
                    label: "Special Feature",
                    value: "Waterproof",
                    sortIndex: 1
                },
                {
                    id:3,
                    label: "Blade Material",
                    value: "Stainless Steel",
                    sortIndex: 2
                },
                {
                    id:4,
                    label: "Item Weight",
                    value: "1.2 Kilograms",
                    sortIndex: 3
                },
                {
                    id:5,
                    label: "Head Type",
                    value: "Foil",
                    sortIndex: 4
                },
                {
                    id:6,
                    label: "Number of Blades",
                    value: "1",
                    sortIndex: 5
                },
                {
                    id:7,
                    label: "Product Dimension",
                    value: "2.76 x 1.97 x 5.91",
                    sortIndex: 6
                },
                {
                    id:8,
                    label: "Item Weight",
                    value: "2.64 pounds",
                    sortIndex: 7
                },
                {
                    id:9,
                    label: "Manufacturer",
                    value: "Braun",
                    sortIndex: 8
                },
                {
                    id:10,
                    label: "ASIN",
                    value: "B07DTHJ8X9",
                    sortIndex: 9
                },
                
            ]
        },


    ];

    const titleStyle = getStyle(1, 6)

    const renderItemTableFunction = ({item}) => (
        <View >
            <Text style={[titleStyle, styles.title]}>{item.title}</Text>
            <RenderSubTableItems data={item.extraDetailTableContents} />
        </View>
   )

    return (
        <View>     
            <FlatList data={extraDetailTables}
                    renderItem = {renderItemTableFunction}
                 />

      </View>
    )
  
}

const styles = StyleSheet.create({	
    title: {
       padding:10

    },
	
				
})		

export default OfferExtraDetailTableItem;

