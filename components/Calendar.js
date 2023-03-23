import React, { useState } from 'react';
import { Calendar } from 'react-native-calendars';
import {View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native';

export function MyCalendar() {
    const [events, setEvents] = useState({
        '2023-03-26': [{time: '19:30', event: 'The Shawshank Redemption'}],
        '2023-03-27': [{time: '20:00', event: 'The Godfather'}, {time: '21:00', event: 'The Godfather2'}],
        '2023-03-28': [{time: '21:00', event: 'The Godfather'}],
    });
    const [selectedDate, setSelectedDate] = useState('');
    const [newTime, setNewTime] = useState('');
    const [newEvent, setNewEvent] = useState('');

    const addEvent = (date, time, event) => {
        const existingEvents = events[date] || [];
        setEvents({
            ...events,
            [date]: [...existingEvents, {time, event}],
        });
    };

    const formatDate = (dateString) => {
        const dateObj = new Date(dateString);
        const day = dateObj.getDate();
        const month = dateObj.getMonth() + 1;
        const year = dateObj.getFullYear();
        return `${day}/${month}/${year}`;
    };

    const onDayPress = (day) => {
        const date = day.dateString;
        setSelectedDate(date);
    };

    const handleAddEvent = () => {
        addEvent(selectedDate, newTime, newEvent);
        setNewTime('');
        setNewEvent('');
    };

    return (
        <View>
            <Calendar
                markedDates={events}
                onDayPress={onDayPress}
                maxDate={new Date(2023, 2, 31).toISOString()}
            />
            {selectedDate && (
                <View style={styles.eventsContainer}>
                    <Text style={styles.selectedDate}>{formatDate(selectedDate)}</Text>
                    {events[selectedDate]?.map((event, index) => (
                        <Text style={styles.eventText} key={index}>
                            {event.time} - {event.event}
                        </Text>
                    ))}
                    <TextInput
                        style={styles.textInput}
                        placeholder="Time"
                        value={newTime}
                        onChangeText={setNewTime}
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Event"
                        value={newEvent}
                        onChangeText={setNewEvent}
                    />
                    <TouchableOpacity style={styles.addButton} onPress={handleAddEvent}>
                        <Text style={styles.addButtonText}>Add Event</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    eventsContainer: {
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginTop: 10,
    },
    selectedDate: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    eventText: {
        fontSize: 16,
        marginBottom: 5,
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
    },
    addButton: {
        backgroundColor: '#1e90ff',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    addButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
});
