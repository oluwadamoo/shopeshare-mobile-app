import { RefObject, useRef } from "react";
import {
  StyleSheet,
  View,
  Text,
  ImageSourcePropType,
  Image,
} from "react-native";
import PagerView from "react-native-pager-view";
import { COLORS, FONTS, ICONS, IMAGES, SIZES } from "../../constants";
import { SafeAreaView } from "react-native-safe-area-context";
import { CustomButton } from "../../components";

const WELCOMEDATA = [
  {
    title: "Shopshare",
    text: "Your No 1 Online Market Place where you can buy and sell at Amazing Prices",
    image: IMAGES.onboarding_1,
    logo: ICONS.logo_sm,
  },
  {
    text: "Make Quick Money as an Intermediary when you connect Buyers to Sellers",
    image: IMAGES.onboarding_2,
    logo: ICONS.logo_sm,
  },
];
interface WelcomeScreenProps {
  title?: string;
  text: string;
  index: number;
  image: ImageSourcePropType;
  logo: ImageSourcePropType;
  pagerRef: RefObject<PagerView>;
  navigation: any;
}

const WelcomeScreen = ({
  title,
  text,
  index,
  image,
  logo,
  pagerRef,
  navigation,
}: WelcomeScreenProps) => {
  return (
    <View style={styles.welcome_wrapper}>
      <Image source={logo} style={styles.logo} />
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          paddingHorizontal: SIZES.padding * 4,
        }}
      >
        <Image
          source={image}
          style={{
            width: SIZES.width - SIZES.padding * 4,
            maxHeight: 400,
            borderRadius: 300,
          }}
        />

        <Text
          style={[
            FONTS.title,
            {
              marginTop: SIZES.padding,
              color: COLORS.white,
              textAlign: "center",
            },
          ]}
        >
          {title}
        </Text>
        <Text
          style={[FONTS.text_700, { color: COLORS.white, textAlign: "center" }]}
        >
          {text}
        </Text>

        {/* dot indicator */}
        <View style={styles.dot_container}>
          {[0, 0].map((dot, i) => (
            <View
              style={[
                styles.dots,
                {
                  backgroundColor:
                    index == i ? COLORS.white : COLORS.primary_light_9,
                },
              ]}
              key={i}
            />
          ))}
        </View>
      </View>

      <CustomButton
        label={index < 1 ? "Continue" : "Get Started"}
        onPress={() => {
          pagerRef &&
            (index < 1
              ? pagerRef.current?.setPage(index + 1)
              : navigation.replace("BottomTabs"));
        }}
        containerStyles={{
          marginBottom: 50,
        }}
      />
    </View>
  );
};

const WelcomeScreens = ({ navigation }: any) => {
  const pagerRef = useRef<PagerView>(null);

  return (
    <SafeAreaView style={styles.container}>
      <PagerView style={styles.container} initialPage={0} ref={pagerRef}>
        {WELCOMEDATA.map((welcome, index) => (
          <WelcomeScreen
            key={index}
            index={index}
            title={welcome.title}
            text={welcome.text}
            image={welcome.image}
            pagerRef={pagerRef}
            navigation={navigation}
            logo={welcome.logo}
          />
        ))}
      </PagerView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  welcome_wrapper: {
    flex: 1,
    padding: SIZES.padding,
    paddingVertical: SIZES.padding * 1.5,
  },
  logo: {
    width: 24,
    height: 24,
  },

  dot_container: {
    flexDirection: "row",
    alignItems: "center",
    width: 30,
    justifyContent: "space-between",
    marginTop: 15,
    marginBottom: SIZES.padding,
  },
  dots: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
});

export default WelcomeScreens;
