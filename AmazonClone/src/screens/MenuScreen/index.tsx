import React, {useEffect, useState} from 'react';
import {SafeAreaView, View, Pressable } from 'react-native';
import Button from '../../components/Button';
import TextHyperLink from '../../components/TextHyperLink';
import {Auth} from 'aws-amplify';
import { Link } from '@react-navigation/native';
 
const MenuScreen = () => {
    const onLogout = () => {Auth.signOut()};
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
 
    return (
        
        <SafeAreaView>
            {/* <Pressable onPress = {onPress}>
            <TextHyperLink />
            </Pressable> */}
            {/* <TextHyperLink /> */}

      
            <Button text="Sign out" onPress = {onLogout} />            
        </SafeAreaView>
        
    );
};
 
export default MenuScreen;

