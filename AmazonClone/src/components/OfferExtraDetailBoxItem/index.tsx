
import React, {useState} from 'react';
import { View, Text, FlatList, StyleSheet} from 'react-native';
import systemStyles from '../systemStyles';
import RenderSubItems from '../RenderSubItems';

const OfferExtraDetailBoxItem =()=>{   

    const extraDetails = [
        {
            id: 1,
            title: "About this item 1",
            sortIndex: 0,
            extraDetailSections: [
                {
                    id:1,
                    title: "Description",
                    description: "Boosts skin's radiance with light-bouncing mineral pigments and a wash of tone-evening color.",
                    sortIndex: 0
                },

                {
                    id:2,
                    title: "Benefits",
                    description: "Boosts skin's radiance with light-bouncing mineral pigments and a wash of tone-evening color.",
                    sortIndex: 2
                },
                {
                    id:3,
                    title: "Suggested Use",
                    description: "Boosts skin's radiance with light-bouncing mineral pigments and a wash of tone-evening color.",
                    sortIndex: 1
                },
            ]

        },
        {
            id: 2,
            title: "About this item 2",
            sortIndex: 2,
            extraDetailSections: [
                {
                    id:1,
                    title: "Description",
                    description: "Boosts skin's radiance with light-bouncing mineral pigments and a wash of tone-evening color.",
                    sortIndex: 0
                },

                {
                    id:2,
                    title: "Benefits",
                    description: "Boosts skin's radiance with light-bouncing mineral pigments and a wash of tone-evening color.",
                    sortIndex: 2
                },
                {
                    id:3,
                    title: "Suggested Use",
                    description: "Boosts skin's radiance with light-bouncing mineral pigments and a wash of tone-evening color.",
                    sortIndex: 1
                },
            ]

        },

        {
            id:3,
            title: "About this item 6",
            sortIndex: 1,
            extraDetailSections: [
                {
                    id:1,
                    title: "Description",
                    description: "Boosts skin's radiance with light-bouncing mineral pigments and a wash of tone-evening color.",
                    sortIndex: 0
                },

                {
                    id:2,
                    title: "Benefits",
                    description: "Boosts skin's radiance with light-bouncing mineral pigments and a wash of tone-evening color.",
                    sortIndex: 2
                },
                {
                    id:3,
                    title: "Suggested Use",
                    description: "Boosts skin's radiance with light-bouncing mineral pigments and a wash of tone-evening color.",
                    sortIndex: 1
                },
            ]

        },



    ];


   

    const renderItemFunction = ({item}) => (
        <View >
            <Text style={styles.title}>{item.title}</Text>
            <RenderSubItems data={item.extraDetailSections} />
        </View>
   )
    

    return (
        <View > 
            

            <FlatList data={extraDetails}
                    renderItem = {renderItemFunction}
                 />
            

        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        color: 'black'
      
    },
    title: {
        fontSize:25,
        fontWeight: 'bold',
        color: 'black',
        padding:10


    },
    childTitle: {
        fontSize:20,
        fontWeight: 'bold'
    },
    container: {
        borderColor: 'grey',
    }
   
})

export default OfferExtraDetailBoxItem;