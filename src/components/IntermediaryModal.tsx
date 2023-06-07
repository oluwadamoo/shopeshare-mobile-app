import { View, Text, Modal, StyleSheet } from "react-native";
import React from "react";
import { COLORS, FONTS, SIZES } from "../constants";
import CustomButton from "./CustomButton";

interface ModalProps {
  openModal: boolean;
  onAccept: () => void;
  onReject: () => void;
}
const IntermediaryModal = ({ openModal, onAccept, onReject }: ModalProps) => {
  return (
    <Modal
      visible={openModal}
      animationType="fade"
      transparent={true}
      statusBarTranslucent={true}
    >
      <View style={styles.container}>
        <View
          style={{
            borderRadius: 16,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: COLORS.white,
            padding: SIZES.padding * 2,
            paddingVertical: SIZES.padding * 4,
          }}
        >
          <Text
            style={{
              ...FONTS.text_600,
              textAlign: "center",
              marginBottom: 32,
            }}
          >
            Will you like to make money as an intermediary
          </Text>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <CustomButton
              label="Yes"
              onPress={onAccept}
              containerStyles={{
                backgroundColor: COLORS.primary,
                borderRadius: 4,
                marginRight: 24,
                width: "45%",
              }}
              labelStyles={{
                color: COLORS.white,
              }}
            />
            <CustomButton
              label="No"
              onPress={onReject}
              containerStyles={{
                borderRadius: 4,
                borderWidth: 1,
                borderColor: COLORS.border_color,
                width: "45%",
              }}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#22222232",
    alignItems: "center",
    justifyContent: "center",
    padding: SIZES.padding * 2,
  },
});
export default IntermediaryModal;
