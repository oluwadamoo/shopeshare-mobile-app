import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, FONTS, ICONS, SIZES } from "../../constants";
import { CustomButton, CustomHeader, GoBack } from "../../components";
import * as ImagePicker from "expo-image-picker";

const ProfileDetails = ({ navigation }: any) => {
  const [currentTab, setCurrentTab] = useState("contact");
  const [profileImage, setProfileImage] = useState("");
  const [status, requestPermission] = ImagePicker.useMediaLibraryPermissions();
  const [firstName, setFirstName] = useState("Abdul");
  const [lastName, setLastName] = useState("Mashir");
  const [email, setEmail] = useState("adedamolamoses@gmail.com");
  const [phoneNumber, setPhoneNumber] = useState("81035674006");
  const pickDp = async () => {
    try {
      const permission = await ImagePicker.getMediaLibraryPermissionsAsync();
      if (!permission.granted) {
        requestPermission();
      }
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
        base64: true,
      });
      if (result.assets) {
        console.log(result.assets[0].uri, "RESULTS");
      }
      setProfileImage(result.assets ? result.assets[0].uri : "");
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
      <CustomHeader
        headerLeft={<GoBack navigation={navigation} />}
        title="Profile Details"
      />
      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.white,
          minHeight: SIZES.height - 40,
        }}
      >
        <CustomButton
          onPress={() => navigation.goBack()}
          label="Finish"
          labelStyles={{
            color: COLORS.primary,
          }}
          containerStyles={{
            width: 80,
            alignSelf: "flex-end",
          }}
        />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: SIZES.padding,
          }}
        >
          <CustomButton
            onPress={() => setCurrentTab("contact")}
            label="Contact"
            labelStyles={{
              color: currentTab === "contact" ? COLORS.white : COLORS.gray,
            }}
            containerStyles={{
              width: 120,
              backgroundColor:
                currentTab === "contact" ? COLORS.primary : COLORS.white,
            }}
          />
          <CustomButton
            onPress={() => setCurrentTab("customize-profile")}
            label="Customize Profile"
            labelStyles={{
              color:
                currentTab === "customize-profile" ? COLORS.white : COLORS.gray,
            }}
            containerStyles={{
              width: 180,
              marginLeft: 10,
              backgroundColor:
                currentTab === "customize-profile"
                  ? COLORS.primary
                  : COLORS.white,
            }}
          />
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <KeyboardAvoidingView
            keyboardVerticalOffset={Platform.OS === "android" ? 60 : 80}
            behavior={Platform.OS === "android" ? "height" : "padding"}
          >
            {currentTab === "contact" ? (
              <View style={{ paddingHorizontal: SIZES.padding }}>
                <View
                  style={{
                    alignItems: "center",
                    paddingVertical: SIZES.padding * 1.5,
                  }}
                >
                  {profileImage ? (
                    <Image
                      source={{ uri: profileImage }}
                      style={{
                        height: 83,
                        width: 83,
                        borderRadius: 80,
                      }}
                    />
                  ) : (
                    <View
                      style={{
                        height: 83,
                        width: 83,
                        borderRadius: 80,
                        backgroundColor: COLORS.primary_lighter,
                      }}
                    />
                  )}

                  <Text
                    onPress={pickDp}
                    style={{
                      ...FONTS.text_600,
                      fontSize: 12,
                      marginTop: 7,
                      color: COLORS.primary,
                      textAlign: "center",
                    }}
                  >
                    Upload new photo
                  </Text>
                </View>

                <Text
                  style={{
                    ...FONTS.text_700,
                    fontSize: 13,
                  }}
                >
                  Contact Details
                </Text>

                <TextInput
                  placeholder="Your First Name"
                  style={styles.input}
                  value={firstName}
                  onChangeText={setFirstName}
                />
                <TextInput
                  placeholder="Your Last Name"
                  style={styles.input}
                  value={lastName}
                  onChangeText={setLastName}
                />
                <View
                  style={{
                    position: "relative",
                  }}
                >
                  <TextInput
                    placeholder="Your Email"
                    style={{ ...styles.input, paddingRight: 70 }}
                    keyboardType="email-address"
                    value={email}
                    onChangeText={setEmail}
                  />
                  <Text
                    style={{
                      ...FONTS.small_text,
                      color: COLORS.green,
                      position: "absolute",
                      top: "50%",
                      right: SIZES.padding,
                    }}
                  >
                    Verified
                  </Text>
                </View>

                <View
                  style={{
                    position: "relative",
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      position: "absolute",
                      top: "47%",
                      left: SIZES.padding,
                    }}
                  >
                    <Image
                      source={ICONS.nigeria_flag}
                      style={{
                        height: 19,
                        width: 25,
                        resizeMode: "contain",
                      }}
                    />
                    <Text style={{ ...FONTS.small_text, marginLeft: 4 }}>
                      +234
                    </Text>
                  </View>
                  <TextInput
                    placeholder="Your Phone Number"
                    style={{
                      ...styles.input,
                      paddingRight: 70,
                      paddingLeft: 80,
                    }}
                    keyboardType="phone-pad"
                    value={phoneNumber}
                    onChangeText={setPhoneNumber}
                  />
                  <Text
                    style={{
                      ...FONTS.small_text,
                      color: COLORS.red,
                      position: "absolute",
                      top: "47%",
                      right: SIZES.padding,
                    }}
                  >
                    Verify Now!
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    marginTop: SIZES.padding * 1.2,
                  }}
                >
                  <Image
                    source={ICONS.alert_circle}
                    style={{ width: 16, height: 16 }}
                  />
                  <Text
                    style={{
                      ...FONTS.small_text,
                      marginLeft: 5,
                      marginRight: SIZES.padding,
                      color: COLORS.primary_light,
                    }}
                  >
                    Type in your correct name and use a good photo, make sure it
                    is clear so that it will increases your chance of
                    selling,buying or being an intermidiary:)
                  </Text>
                </View>
              </View>
            ) : (
              <View
                style={{
                  paddingVertical: 10,
                }}
              >
                <View
                  style={{
                    backgroundColor: "#000",
                    height: 152,
                    width: SIZES.width,
                    position: "relative",
                  }}
                >
                  <View
                    style={{
                      position: "absolute",
                      borderWidth: 5,
                      borderColor: "#C2E0FF",
                      height: 177,
                      width: 177,
                      top: 14,
                      left: 36,
                      borderRadius: 100,
                    }}
                  >
                    <Image source={{ uri: "rrit" }} />
                  </View>
                </View>

                <View
                  style={{
                    padding: SIZES.padding,
                    marginTop: SIZES.padding * 1.5,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <View>
                      <Text
                        style={{
                          ...FONTS.text_700,
                          fontSize: 22,
                          color: COLORS.primary,
                          marginBottom: 2,
                        }}
                      >
                        Abdul Mashir
                      </Text>
                      <Text
                        style={{
                          ...FONTS.text_400,
                          fontSize: 12,
                          color: "#929AA7",
                          marginBottom: 6,
                        }}
                      >
                        @abudulmashiirr
                      </Text>
                    </View>

                    <View>
                      <View
                        style={{
                          ...styles.tag,
                          backgroundColor: COLORS.primary_light_9,
                        }}
                      >
                        <Text
                          style={{
                            ...FONTS.small_text,
                            color: COLORS.primary,
                            fontSize: 8,
                          }}
                        >
                          4,766 items sold
                        </Text>
                      </View>
                      <View
                        style={{
                          ...styles.tag,
                          backgroundColor: COLORS.yellow_15,
                        }}
                      >
                        <Text
                          style={{
                            ...FONTS.small_text,
                            color: COLORS.yellow,
                            fontSize: 8,
                          }}
                        >
                          4,766 items sold
                        </Text>
                      </View>
                      <View
                        style={{
                          ...styles.tag,
                          backgroundColor: "#39b54a20",
                        }}
                      >
                        <Image source={ICONS.share} style={styles.tag_icon} />
                        <Text
                          style={{
                            ...FONTS.small_text,
                            color: COLORS.green,
                            fontSize: 8,
                            marginLeft: 5,
                          }}
                        >
                          Share Profile
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            )}
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    marginTop: SIZES.padding,
    height: 40,
    width: "100%",
    paddingHorizontal: SIZES.padding,
    backgroundColor: COLORS.gray_51,
    borderRadius: 5,
    ...FONTS.small_text,
    color: COLORS.dark_light,
  },
  tag: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 23,
    width: 83,
    borderRadius: 3,
    marginBottom: 3,
  },
  tag_icon: {
    width: 12,
    height: 12,
    resizeMode: "contain",
  },
});

export default ProfileDetails;
