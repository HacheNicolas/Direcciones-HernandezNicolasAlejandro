import { SafeAreaView } from 'react-native';
import { styles } from './styles';
import EventItems from '../../components/items/event';
import { useDispatch, useSelector } from 'react-redux';
import { getEvents } from '../../store/events.slice';
import { useEffect } from 'react';

const Calendar = () => {
  const dispatch = useDispatch();
  const events = useSelector((state) => state.events.data);

  useEffect(() => {
    dispatch(getEvents());
  }, [dispatch]);

  return (
    <SafeAreaView style={styles.container}>
      <EventItems items={events} />
    </SafeAreaView>
  );
};

export default Calendar;
