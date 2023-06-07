import {
  View,
  Text,
  Modal,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React from "react";
import { PRODUCTCOLORS } from "../constants/data";
import { COLORS, ICONS, SIZES } from "../constants";
import { Image } from "react-native";

interface ModalProps {
  openModal: boolean;
  close: () => void;
  setSelectedColors: (code?: any) => any;
  selectedColors: string[];
}
const ColorModal = ({
  openModal,
  close,
  setSelectedColors,
  selectedColors,
}: ModalProps) => {
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
            padding: SIZES.padding,
            paddingVertical: SIZES.padding * 4,

            maxHeight: SIZES.height / 3,
            position: "relative",
          }}
        >
          <TouchableOpacity
            onPress={close}
            style={{
              position: "absolute",
              top: SIZES.padding,
              right: SIZES.padding,
              borderRadius: 100,
              borderWidth: 1,
              borderColor: COLORS.primary,
            }}
          >
            <Image
              source={ICONS.close_icon}
              style={{
                width: 20,
                height: 20,
                tintColor: COLORS.primary,
              }}
            />
          </TouchableOpacity>
          <FlatList
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            data={PRODUCTCOLORS}
            numColumns={10}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => {
                  if (!selectedColors.includes(item)) {
                    setSelectedColors((prev: any) => [...prev, item]);
                  } else {
                    setSelectedColors((prev: any) =>
                      prev.filter((i: any) => i !== item)
                    );
                  }
                }}
                style={{
                  backgroundColor: item,
                  height: 30,
                  width: 30,
                  borderRadius: 5,
                  marginLeft: 5,
                  marginBottom: 5,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {selectedColors.includes(item) && (
                  <Image
                    source={ICONS.check}
                    style={{ width: 15, height: 15, resizeMode: "contain" }}
                  />
                )}
              </TouchableOpacity>
            )}
          />
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

export default ColorModal;
