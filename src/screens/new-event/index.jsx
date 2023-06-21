import { SafeAreaView, ScrollView, Text, TextInput } from 'react-native';
import { styles } from './styles';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { LocationSelector } from '../../components/';
import { saveEvent } from '../../store/events.slice';
import { theme } from '../../constants';
import { Button } from 'react-native';

const NewEvent = ({ navigation }) => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [coords, setCoords] = useState(null);

  const enableButton = text && description && coords;

  const onHandlerChangeText = (text) => {
    setText(text);
  };

  const onHandlerChangeDescription = (description) => {
    setDescription(description);
  };

  const onHandlerChangeDate = (date) => {
    setDate(date);
  };

  const onLocation = (location) => {
    setCoords(location);
  };

  const onHandlerSubmit = () => {
    dispatch(saveEvent({ name: text, description, date, coords })).unwrap();
    navigation.navigate('Calendar');
  };

  return (
    <ScrollView style={styles.container}>
      <SafeAreaView style={styles.content}>
        <Text style={styles.title}>Nombre</Text>
        <TextInput
          style={styles.input}
          placeholder="Nombre del evento..."
          onChangeText={onHandlerChangeText}
          value={text}
        />
        <Text style={styles.title}>Descripción</Text>
        <TextInput
          style={styles.input}
          placeholder="Detalle del evento..."
          onChangeText={onHandlerChangeDescription}
          value={description}
        />
        <Text style={styles.title}>Fecha</Text>
        <TextInput
          style={styles.input}
          placeholder="Fecha del evento..."
          onChangeText={onHandlerChangeDate}
          value={date}
        />
        <Text style={styles.title}>Ubicación</Text>
        <LocationSelector onLocation={onLocation} />
        <Button
          disabled={!enableButton}
          title="Crear evento"
          color={theme.colors.primary}
          onPress={onHandlerSubmit}
        />
      </SafeAreaView>
    </ScrollView>
  );
};

export default NewEvent;
