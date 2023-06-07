import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { COLORS, FONTS, ICONS, IMAGES, SIZES } from "../../constants";

const PROFILETABS = [
  {
    link: "PersonalInfo",
    label: "Personal Info",
  },
  {
    link: "ReferAndEarn",
    label: "Refer and Earn",
  },
  {
    link: "MyOrders",
    label: "My Orders",
  },
  {
    link: "Settings",
    label: "Settings",
  },
  {
    link: "MyProducts",
    label: "My Products",
  },
  {
    link: "RecentlyViewed",
    label: "Recently Viewed",
  },
  {
    link: "Help",
    label: "Help",
  },
  {
    link: "My Saved Carts",
    label: "MySavedCarts",
  },
];
const Profile = ({ navigation }: any) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}
    >
      <View
        style={{
          flex: 1,
          padding: SIZES.padding,
        }}
      >
        <FlatList
          ListHeaderComponent={() => (
            <View>
              <Text
                style={{
                  ...FONTS.text_600,
                  fontSize: 20,
                  marginBottom: SIZES.padding,
                }}
              >
                Profile
              </Text>

              <TouchableOpacity
                onPress={() => navigation.navigate("ProfileDetails")}
                style={{
                  backgroundColor: COLORS.primary_light,
                  flexDirection: "row",
                  padding: SIZES.padding,
                  borderRadius: 6,
                  marginBottom: SIZES.padding,
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Image
                    source={IMAGES.onboarding_1}
                    style={{
                      width: 70,
                      height: 70,
                      borderRadius: 50,
                    }}
                  />

                  <View style={{ marginLeft: SIZES.padding }}>
                    <Text
                      style={{
                        ...FONTS.text_600,
                        fontSize: 20,
                        color: COLORS.white,
                      }}
                    >
                      Tina Vargayee
                    </Text>
                    <Text
                      style={{
                        ...FONTS.text_400,
                        fontSize: 14,
                        marginVertical: 2,
                        color: COLORS.white,
                      }}
                    >
                      tinavar@vinho.com
                    </Text>
                    <Text
                      style={{
                        ...FONTS.text_400,
                        fontSize: 14,
                        color: COLORS.white,
                      }}
                    >
                      08101010101
                    </Text>
                  </View>
                </View>

                <Image
                  source={ICONS.arrow_right}
                  style={{
                    width: 24,
                    height: 24,
                    tintColor: COLORS.white,
                  }}
                />
              </TouchableOpacity>
            </View>
          )}
          data={PROFILETABS}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingVertical: SIZES.padding,
              }}
            >
              <Text style={{ ...FONTS.text_600, color: COLORS.primary }}>
                {item.label}
              </Text>

              <Image
                source={ICONS.arrow_right}
                style={{ width: 24, height: 24 }}
              />
            </TouchableOpacity>
          )}
          ListFooterComponent={() => (
            <TouchableOpacity
              style={{
                marginTop: SIZES.padding * 2,
                flexDirection: "row",
                justifyContent: "center",
                borderWidth: 1.4,
                borderColor: COLORS.primary,
                height: 44,
                alignItems: "center",
                borderRadius: 6,
              }}
            >
              <Image source={ICONS.logout} style={{ width: 24, height: 24 }} />
              <Text
                style={{
                  ...FONTS.text_600,
                  color: COLORS.primary,
                  marginLeft: 5,
                }}
              >
                Logout
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Profile;
