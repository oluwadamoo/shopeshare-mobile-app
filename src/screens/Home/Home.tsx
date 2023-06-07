import {
  FlatList,
  Image,
  ImageSourcePropType,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { Component, useState } from "react";
import { COLORS, FONTS, ICONS, IMAGES, SIZES } from "../../constants";
import { IntermediaryModal } from "../../components";

const CATEGORIES = {
  popular: [
    {
      name: "Women",
      image: IMAGES.bag,
    },
    {
      name: "Men",
      image: IMAGES.shoe,
    },
    {
      name: "Laptop",
      image: IMAGES.laptop,
    },
    {
      name: "Baby",
      image: IMAGES.crib,
    },
    {
      name: "Electronics",
      image: IMAGES.tv,
    },
    {
      name: "Gadgets",
      image: IMAGES.wristwatch,
    },
  ],
  fairly_used: [
    {
      name: "Female Boot",
      image: IMAGES.bag,
    },
    {
      name: "Phone",
      image: IMAGES.phone,
    },
    {
      name: "Sandals",
      image: IMAGES.sandal,
    },
  ],
};
interface CategoryProps {
  title: string;
  data: {
    image: ImageSourcePropType;
    name: string;
  }[];
}
function Categories({ title, data }: CategoryProps) {
  return (
    <View
      style={{
        flex: 1,
        marginBottom: 34,
      }}
    >
      <Text style={[FONTS.text_700, { marginBottom: 24 }]}>{title}</Text>
      <FlatList
        contentContainerStyle={{
          flex: 1,
        }}
        showsVerticalScrollIndicator={false}
        data={data}
        numColumns={3}
        keyExtractor={(d, i) => `${i}`}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              alignItems: "center",
              justifyContent: "center",
              width: SIZES.width / 3 - SIZES.padding,
              marginBottom: 34,
            }}
          >
            <View>
              <Image
                source={item.image}
                style={{
                  resizeMode: "contain",
                  width: 84,
                  height: 84,
                  borderRadius: 80,
                }}
              />
            </View>
            <Text style={{ marginTop: 10, ...FONTS.text_400 }}>
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
export function Home({ navigation, route }: any) {
  const [showIntermediaryModal, setShowIntermediaryModal] = useState(false);

  const isLoggedIn = route.params?.isLoggedIn;

  console.log(isLoggedIn);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={ICONS.logo_sm} style={styles.header_icon} />

          <TouchableOpacity>
            <Image source={ICONS.cart_icon} style={styles.header_icon} />
          </TouchableOpacity>
        </View>

        <View
          style={{
            marginTop: SIZES.padding,
            flexDirection: "row",
            alignItems: "center",
            borderWidth: 1,
            borderColor: COLORS.border_color,
            paddingHorizontal: SIZES.padding,
            paddingVertical: SIZES.padding * 0.6,
            borderRadius: 10,
            marginBottom: SIZES.padding / 2,
          }}
        >
          <Image source={ICONS.search} style={styles.header_icon} />
          <TextInput
            style={{
              flex: 1,
              paddingHorizontal: SIZES.padding * 2,
            }}
          />
        </View>

        {!isLoggedIn && (
          <Text
            style={[
              FONTS.text_400,
              { marginBottom: 22, textAlign: "center", width: "95%" },
            ]}
          >
            Sign in so we can personalise your{" "}
            <Text style={{ color: COLORS.primary_light }}>ShopShare</Text>{" "}
            experience
          </Text>
        )}

        {!isLoggedIn && (
          <View
            style={{
              flexDirection: "row",
              width: "70%",
              alignSelf: "center",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 23,
            }}
          >
            <TouchableOpacity onPress={() => setShowIntermediaryModal(true)}>
              <Text style={[FONTS.text_700, { marginBottom: 22 }]}>
                Sign Up
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("Index", { screen: "Signin" })}
            >
              <Text
                style={[
                  FONTS.text_700,
                  { marginBottom: 22, color: COLORS.primary },
                ]}
              >
                Sign In
              </Text>
            </TouchableOpacity>
          </View>
        )}

        {isLoggedIn && <View style={{ marginTop: SIZES.padding }} />}
        {/* CATEGORIES */}
        {/* POPULAR */}
        <FlatList
          data={[]}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={() => (
            <View style={{ flex: 1 }}>
              <Categories
                title={"Explore Popular Categories"}
                data={CATEGORIES.popular}
              />
              {/* FAIRLY */}
              <Categories
                title={"Fairly Used Products"}
                data={CATEGORIES.fairly_used}
              />
            </View>
          )}
          renderItem={() => <></>}
        />
      </View>

      <IntermediaryModal
        onAccept={() => setShowIntermediaryModal(false)}
        onReject={() => {
          setShowIntermediaryModal(false);
          navigation.navigate("Index", { screen: "Signup" });
        }}
        openModal={showIntermediaryModal}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SIZES.padding * 2,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  header_icon: {
    width: 24,
    height: 24,
  },
});
export default Home;
