import { View, Text } from 'react-native'

const Typography = ({text, size, isUpperCase, color}) => {
  return (
    <View>
      <Text style={{ 
        fontSize: size ?? 50,
        textTransform: isUpperCase ? 'uppercase' : 'none',
        color: color ?? '#0c62ab',
      }}>{text}</Text>
    </View>
  )
}

export default Typography