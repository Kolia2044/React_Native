import { createSettingsStyles } from "@/assets/styles/settings.styles";
import { api } from "@/convex/_generated/api";
import useTheme from "@/hooks/useTheme";
import { Ionicons } from "@expo/vector-icons";
import { useMutation } from "convex/react";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import ConfirmModal from "./ModalWindow";

const DangerZone = () => {
  const { colors } = useTheme();
  const [modalVisible, setModalVisible] = useState(false);

  const settingsStyles = createSettingsStyles(colors);
  const delete_todo = useMutation(api.notes.clearAllNotes);

  const handleResetApp = async () => {
    setModalVisible(true);
  };

  const handleConfirm = async () => {
    await delete_todo();
    setModalVisible(false);
  };

  return (
    <>
      <ConfirmModal
        visible={modalVisible}
        onDismiss={() => setModalVisible(false)}
        onConfirm={handleConfirm}
      />

      <LinearGradient
        colors={colors.gradients.surface}
        style={settingsStyles.section}
      >
        <Text style={settingsStyles.sectionTitleDanger}>Danger Zone</Text>

        <TouchableOpacity
          style={[settingsStyles.actionButton, { borderBottomWidth: 0 }]}
          onPress={handleResetApp}
          activeOpacity={0.7}
        >
          <View style={settingsStyles.actionLeft}>
            <LinearGradient
              colors={colors.gradients.danger}
              style={settingsStyles.actionIcon}
            >
              <Ionicons name="trash" size={18} color="#ffffff" />
            </LinearGradient>
            <Text style={settingsStyles.actionTextDanger}>Reset App</Text>
          </View>
          <Ionicons name="chevron-forward" size={18} color={colors.textMuted} />
        </TouchableOpacity>
      </LinearGradient>
    </>
  );
};

export default DangerZone;
