// components/RoundedButton.tsx
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle, GestureResponderEvent } from 'react-native';

interface RoundedButtonProps {
    title: string;
    onPress: (event: GestureResponderEvent) => void;
    style?: ViewStyle;
    textStyle?: TextStyle;
    disabled?: boolean;
}

const RoundedButton: React.FC<RoundedButtonProps> = ({ title, onPress, style, textStyle, disabled }) => {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={disabled ? undefined : onPress}
            style={[styles.button, style, disabled && styles.disabled]}
            disabled={disabled}
        >
            <Text style={[styles.text, textStyle]}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#007bff',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
    },
    text: {
        color: '#fff',
        fontSize: 12,
        fontWeight: '400',
    },
    disabled: {
        backgroundColor: '#d3d3d3',
    },
});

export default RoundedButton;
