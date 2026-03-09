import * as React from 'react';
import { Modal, Portal, Text, Button } from 'react-native-paper';
import useTheme from '@/hooks/useTheme';

interface ConfirmModalProps {
  visible: boolean;
  onDismiss: () => void;
  onConfirm: () => void;
  title?: string;
  message?: string;
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({
  visible,
  onDismiss,
  onConfirm,
  title = 'Скинути додаток?',
  message = 'Це незворотна дія. Всі дані будуть видалені.',
}) => {
  const { colors, isDarkMode } = useTheme();

  const containerStyle = {
    backgroundColor: colors.surface,
    padding: 20,
    borderRadius: 12,
    margin: 20,
    borderWidth: 1,
    borderColor: colors.border,
  };

  return (
    <Portal>
      <Modal visible={visible} onDismiss={onDismiss} contentContainerStyle={containerStyle}>
        <Text 
          style={{ 
            fontSize: 18, 
            fontWeight: 'bold', 
            marginBottom: 10,
            color: colors.text,
          }}
        >
          {title}
        </Text>
        <Text 
          style={{ 
            marginBottom: 20,
            color: colors.textMuted,
            lineHeight: 22,
          }}
        >
          {message}
        </Text>
        <Button 
          mode="contained" 
          onPress={onConfirm} 
          style={{ 
            backgroundColor: colors.danger, 
            marginBottom: 10,
          }}
          labelStyle={{ color: '#ffffff', fontWeight: '600' }}
        >
          Підтвердити
        </Button>
        <Button 
          onPress={onDismiss}
          labelStyle={{ color: colors.textMuted, fontWeight: '500' }}
        >
          Скасувати
        </Button>
      </Modal>
    </Portal>
  );
};

export default ConfirmModal;
