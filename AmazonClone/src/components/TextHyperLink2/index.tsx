import React, {useState} from 'react';
import { View, Text, StyleSheet, Pressable, FlatList, SafeAreaView, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { block } from 'react-native-reanimated';

interface SiteProps{
    site: {
        text: string;
        textStyle: {};
        linkCaptions: [string];
        linkStyle: [{}];
    };
};

const TextHyperLink2 = () => {   
    const siteList = [
    {
        text: "website", 
        textStyle: {color:"black"},
        linkCaptions: "http://www.google.com",
        linkStyle: {color:"blue"},
    },
    {
        text: "click", 
        textStyle: {color:"black"},
        linkCaptions: "httpL//www.yahoo.com",
        linkStyle: {color:"red"},
    }
]



    const onPress = (text)=>{
        console.log(text);
    }

    return (
      
        <SafeAreaView style={styles.root}>
                        <Text>Hello this is my </Text>
                        <Pressable onPress= {onPress}>
                            <Text style={siteList[0].linkStyle}>{siteList[1].text}</Text>
                        </Pressable> 
                        <Text> please </Text>
                        <Pressable onPress= {onPress}>
                            <Text style={siteList[1].linkStyle} >{siteList[1].text}</Text>
                        </Pressable> 
                        <Text> to follow </Text>
          
                
           
        </SafeAreaView>
    )
        }


const styles = StyleSheet.create({
    root: {    
        marginVertical: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'           
    },
    textStyle: {
        fontSize: 16,
        color: 'black',
    },

})


export default TextHyperLink2