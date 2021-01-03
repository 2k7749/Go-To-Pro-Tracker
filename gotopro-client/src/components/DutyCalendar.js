import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Calendar } from 'react-native-calendars';
import moment from 'moment'; // parse DATE
import Icon from 'react-native-vector-icons/Ionicons'; // MENU

const { width, height } = Dimensions.get('screen');
const DutyCalendar = ({ duty, hismarked }) => {

    const dutyHistoryRender = hismarked;

    

    const handleArrowDirection = ( direct )  => {
        if( direct === 'right' ){
            return <Text> <Icon name="caret-forward-outline" style={styles.actionButtonIcon} /> </Text>;
        }else if ( direct === 'left' ){
            return <Text> <Icon name="caret-back-outline" style={styles.actionButtonIcon} /> </Text>;
        }
    };

    const showMonthName = ( date ) => {
        const timestamp = date.valueOf();
        return (
            <Text style={ StyleSheet.showMonth }> { moment(timestamp).format('MMMM') }</Text>
        );
    };

    return (
        <View style={ styles.container }>
            <Calendar
                style={ styles.calendar }
                current={ Date() }
                minDate={ '2021-01-01' }
                maxDate={ '2021-12-31' }
                monthFormat={ 'MM yyyy' }
                renderArrow={ ( direct ) => handleArrowDirection( direct ) }
                hideArrows={ false }
                firstDay={ 1 }
                hideExtraDays={false}
                disableMonthChange={false}
                onPressArrowLeft={ (subtractMonth) => subtractMonth() }
                onPressArrowRight={ (addMonth) => addMonth() }
                disableArrowLeft={false}
                disableArrowRight={false}
                renderHeader={ (date) => showMonthName(date) }
                markedDates= { dutyHistoryRender }
                hideDayNames={false}
                showWeekNumbers={false}
                enableSwipeMonths={true}
                disableAllTouchEventsForDisabledDays={true}
           />
        </View>
    )

}

const styles = StyleSheet.create({
    showMonth:{
        fontWeight: 'bold'
    },
    calendar: {
    maxHeight: 400,
    width: width - 20,
    },
    container:{
        marginVertical: 5,
    },
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: '#FE0000',
    },
});

export default DutyCalendar;