import React from 'react';
import { FlatList } from 'react-native';

import { styles } from './styles';
import EventItem from './item';
import Card from '../../card';

const EventItems = ({ items }) => {
  const onSelectItem = (id) => {
    console.warn(id);
  };
  const keyExtractor = (item) => item.id.toString();
  const renderItem = ({ item }) => <EventItem item={item} onSelectItem={onSelectItem} />;

  return (
    <Card cardStyle={styles.listContainer}>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        alwaysBounceVertical={false}
      />
    </Card>
  );
};

export default EventItems;
