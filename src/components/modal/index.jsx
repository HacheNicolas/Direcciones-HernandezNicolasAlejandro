import React from 'react';
import { Modal, View, Text, Button } from 'react-native';
import { styles } from './styles';
import { theme } from '../../constants';

const CustomModal = ({ isVisible, animationType, selectedItem, onCancel, onDelete }) => {
  return (
    <Modal visible={isVisible} animationType={animationType}>
      <View style={styles.modalContainer}>
        <Text style={styles.modalTitle}>Detalle del Alimento</Text>
        <View style={styles.detailContainer}>
          <Text style={styles.detailMessage}>¿Desea eliminar este alimento?</Text>
          <Text style={styles.selectedItem}>{selectedItem?.name}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Cancelar" color={theme.colors.primary} onPress={onCancel} />
          <Button
            title="Eliminar"
            color={theme.colors.red}
            onPress={() => onDelete(selectedItem.id)}
          />
        </View>
      </View>
    </Modal>
  );
};

export default CustomModal;
