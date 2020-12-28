import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';
import moment from 'moment'; // parse DATE

const DutyCalendar = ({ duty }) => {
    const dutyHistoryRender = duty.history;

    const handleArrowDirection = ( direct )  => {
        if( direct === 'right' ){
            return <Text> Sau </Text>;
        }else if ( direct === 'left' ){
            return <Text> Trước </Text>;
        }
    };

    const showMonthName = ( date ) => {
        const timestamp = date.valueOf();
        return (
            <Text style={ StyleSheet.showMonth }> { moment(timestamp).format('MMMM') }</Text>
        );
    };

    return (
        <View>
            <Calendar
                current={ Date() }
                minDate={ '2020-01-01' }
                maxDate={ '2020-12-31' }
                monthFormat={ 'MMM yyyy' }
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
                disableAllTouchEventsForDisabledDays={true}
           />
        </View>
    )

}

const styles = StyleSheet.create({
    showMonth:{
        fontWeight: 'bold'
    }
});

export default DutyCalendar;