import { View, Text, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import validator from 'validator'

interface TextHyperLinkProps {
    text: string;
    textStyle?: object;
    linkCaptions: Array<string>;
    linkStyle: Array<object>;
}

const TextHyperLink = ({text, textStyle, linkCaptions, linkStyle} : TextHyperLinkProps) => {

  const isURL = (str: string) => {
    return validator.isURL(str)
  }

  const textAry = text.split(' ')

  var idx = 0

  return (
    <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
      {textAry.map((str, i) => {
        var renderStr = str
        var renderStyle = {}
        var onPress = () => {}

        if (isURL(renderStr) && idx < linkCaptions.length) {
            renderStr = linkCaptions[idx]
            renderStyle = linkStyle[idx]
            onPress = () => {console.log(str)}
            idx = idx + 1
        }

        return (
            <Pressable key={i} onPress={onPress}>
                <Text key={i} style={renderStyle}> {renderStr} </Text>
            </Pressable>
        )}
      )}
    </View>
  )
}

export default TextHyperLink