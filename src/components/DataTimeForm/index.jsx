import React, {useState} from 'react';
import { View, Text } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

import { style } from './style';
import { LinearGradient } from 'expo-linear-gradient';
import { theme } from '../../global/styles/theme';
import { BorderlessButton } from 'react-native-gesture-handler';

export function DataTimeForm({date, setDate, time, setTime}){

    const [mode, setMode] = useState('');
    const [show, setShow] = useState(false);
    const [initialDate, setInitialDate] = useState(new Date());

    function handleOnChange(event, selectedDateTime) {
        setShow(false);
        if (mode === 'date') {
            // for some reason date.toLocaleString('en-GB') is not working
            const localeDateString = selectedDateTime.toLocaleDateString();
            const day = localeDateString.split('/')[1]; 
            const month = localeDateString.split('/')[0]; 
            setDate(`${day}/${month}`);
        } else {
            // time.toLocaleTimeString also don't work very well
            const localeTimeString = selectedDateTime.toLocaleTimeString();
            const hour = localeTimeString.split(':')[0];
            const minutes = localeTimeString.split(':')[1];
            setTime(`${hour}:${minutes}`);
        }
    }

    function handleDataTimePicker(choosenMode) {
        setShow(true);
        setMode(choosenMode);
    }

    return (
        <View>
            <View style={style.formField}>
                <View style={style.column}>
                    <Text style={style.label}>
                        Dia e mês
                    </Text>
    
                    <LinearGradient
                    colors={[theme.color.secondary40, theme.color.secondary50]}
                    style={style.inputContainer}
                    >
                        <BorderlessButton
                        onPress={() => handleDataTimePicker('date')}
                        color="transparent"
                        style={style.inputContainer}
                        >
                            <Text
                            style={style.input}
                            >
                                {
                                    date ? date : 'dd/mm'
                                }
                            </Text>
                        </BorderlessButton>
                    </LinearGradient>
    
                </View>
    
                <View style={style.column}>
    
                    <Text style={style.label}>
                        Horário
                    </Text>
                            
                    <LinearGradient
                    colors={[theme.color.secondary40, theme.color.secondary50]}
                    style={style.inputContainer}
                    >
                        <BorderlessButton
                        onPress={() => handleDataTimePicker('time')}
                        color="transparent"
                        style={style.inputContainer}
                        >
                            <Text
                            style={style.input}
                            >
                                {
                                    time ? time : 'hh:mm'
                                }
                            </Text>
                        </BorderlessButton>
                    </LinearGradient>
        
                </View>
            </View>
    
            <View>
                {
                show && 
                <DateTimePicker
                mode={mode}
                display="default"
                value={initialDate}
                onChange={handleOnChange}    
                />}
            </View>
        </View>
    );
}