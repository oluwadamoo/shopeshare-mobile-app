import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TextInput,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import { ColorModal, CustomButton, CustomHeader } from "../../components";
import { COLORS, FONTS, ICONS, SIZES } from "../../constants";
import * as ImagePicker from "expo-image-picker";
import CartIcon from "../../components/CartIcon";

const Sell = ({ navigation }: any) => {
  const [productName, setProductName] = useState("");
  const [productColors, setProductColors] = useState([""]);
  const [productSize, setProductSize] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productImage, setProductImage] = useState("");
  const [productVideo, setProductVideo] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [openColorModal, setOpenColorModal] = useState(false);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);

  const pickImages = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
        base64: true,
        allowsMultipleSelection: true,
      });
    } catch (error) {
      console.log(error);
    }
  };
  const pickVideo = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Videos,
        allowsEditing: true,
        quality: 1,
        base64: true,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.primary,
      }}
    >
      <CustomHeader title="Sell" headerRight={<CartIcon />} />

      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.white,
          padding: SIZES.padding,
        }}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <KeyboardAvoidingView
            keyboardVerticalOffset={Platform.OS === "android" ? 60 : 80}
            behavior={Platform.OS === "android" ? "height" : "padding"}
          >
            <Text style={[FONTS.text_600, { marginBottom: SIZES.padding * 2 }]}>
              Enter your product information
            </Text>

            {/* COUNTRY */}
            <TextInput
              value={productName}
              onChangeText={setProductName}
              placeholder="Product Name"
              style={styles.textInput}
            />
            {/* STATE */}
            <TouchableOpacity
              onPress={() => setOpenColorModal(true)}
              style={{
                ...styles.textInput,
                justifyContent: "center",
                height: 54,
              }}
            >
              {!productColors.length && (
                <Text style={{ ...FONTS.text_400, color: COLORS.placeholder }}>
                  Product Colors
                </Text>
              )}

              <ScrollView horizontal>
                {selectedColors.map((c, i) => (
                  <View
                    style={{
                      backgroundColor: c,
                      height: 20,
                      width: 20,
                      borderRadius: 15,
                      marginRight: 5,
                    }}
                    key={i}
                  />
                ))}
              </ScrollView>
            </TouchableOpacity>

            {/* SIZES */}
            <TextInput
              value={productSize}
              onChangeText={setProductSize}
              placeholder="Sizes of the items (e.g 10, 11)"
              style={styles.textInput}
            />

            {/* DESCRIPTION */}
            <TextInput
              value={productDescription}
              onChangeText={setProductDescription}
              placeholder="Product Description"
              multiline
              style={{
                ...styles.textInput,
                height: 100,
                paddingTop: SIZES.padding * 2,
              }}
            />

            {/* UPLOAD IMAGES */}
            <TouchableOpacity
              onPress={() => pickImages()}
              style={{
                ...styles.textInput,
                justifyContent: "center",
                height: 54,
              }}
            >
              <Text style={{ ...FONTS.text_400, color: COLORS.placeholder }}>
                Upload product images
              </Text>
            </TouchableOpacity>

            {/* UPLOAD VIDEO */}
            <TouchableOpacity
              onPress={() => pickVideo()}
              style={{
                ...styles.textInput,
                justifyContent: "center",
                height: 54,
              }}
            >
              <Text style={{ ...FONTS.text_400, color: COLORS.placeholder }}>
                Upload video (max: 14mb)
              </Text>
            </TouchableOpacity>

            {/* Price */}
            <TextInput
              value={productPrice}
              onChangeText={setProductPrice}
              placeholder="Price (N)"
              style={styles.textInput}
            />

            <CustomButton
              containerStyles={{
                backgroundColor: COLORS.primary,
                marginTop: SIZES.padding * 2,
              }}
              labelStyles={{
                color: COLORS.white,
              }}
              label="Upload"
              onPress={() => {
                console.warn("Upload");
              }}
            />
          </KeyboardAvoidingView>
        </ScrollView>
      </View>

      <ColorModal
        close={() => setOpenColorModal(false)}
        selectedColors={selectedColors}
        setSelectedColors={setSelectedColors}
        openModal={openColorModal}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: COLORS.border_color,
    height: 48,
    padding: SIZES.padding,
    borderRadius: 5,
    marginBottom: SIZES.padding * 1.4,
    ...FONTS.text_400,
  },
  btnIcon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },
  socialBtn: {
    flex: 1,
    borderColor: COLORS.border_color,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: SIZES.padding,
    borderRadius: 6,
  },
});
export default Sell;
