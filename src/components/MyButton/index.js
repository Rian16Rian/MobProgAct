import React from 'react'
import { View } from 'react-native'
import {Button} from 'react-native-paper'

const MyButton = ({text, action, mode, size,}) => {

    let style = null
    
    switch(size){
        case 'small':
            style = {...btnStyle.buttonSmall}
            break;
        case 'medium':
            style = {...btnStyle.buttonMedium}
            break;
        case 'large':
            style = {...btnStyle.buttonLarge}
            break;
        default:
            style = btnStyle.buttonMedium
            break;
    }

const buttonColor = '#0e62a3'; 
const textColor = '#FFFFFF';  

  return (
    <Button contentStyle={style} mode={mode} onPress={() => action()} style={{ backgroundColor: buttonColor }} labelStyle={{ color: textColor }}>
        {text}
    </Button>
  )
}


export default MyButton

const btnStyle = {
    buttonSmall: {
        height: 50,
    },
    buttonMedium: {
        height: 60,
    },
    buttonLarge: {
        height: 70,
    }
}