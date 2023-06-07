import { useEffect, useRef, useState } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { COLORS, SIZES } from "../constants";

interface OtpProps {
  setOtp: (value: any) => void;
  error: boolean;
}
const OtpInput = ({ setOtp, error }: OtpProps) => {
  const input1 = useRef<TextInput>(null);
  const input2 = useRef<TextInput>(null);
  const input3 = useRef<TextInput>(null);
  const input4 = useRef<TextInput>(null);
  const input5 = useRef<TextInput>(null);
  const input6 = useRef<TextInput>(null);

  const [i1, setI1] = useState("");
  const [i2, setI2] = useState("");
  const [i3, setI3] = useState("");
  const [i4, setI4] = useState("");
  const [i5, setI5] = useState("");
  const [i6, setI6] = useState("");

  useEffect(() => {
    input1.current?.focus();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <TextInput
          style={[
            styles.input,
            { borderColor: error ? COLORS.red : COLORS.border_color },
          ]}
          maxLength={1}
          keyboardType={"numeric"}
          placeholder="-"
          ref={input1}
          value={i1}
          onChangeText={(text) => {
            setI1(text);
            if (text) {
              setOtp(text);
              input2.current?.focus();
            }
          }}
        />
        <TextInput
          style={[
            styles.input,
            { borderColor: error ? COLORS.red : COLORS.border_color },
          ]}
          maxLength={1}
          keyboardType={"numeric"}
          placeholder="-"
          ref={input2}
          value={i2}
          onFocus={() => {
            if (!i1.trim()) {
              input1.current?.focus();
            }
          }}
          onChangeText={(text) => {
            setI2(text);
            if (text) {
              setOtp((prev: string) => prev + text);
              input3.current?.focus();
            } else {
              setOtp((prev: string) => prev.slice(0, -1));
              input1.current?.focus();
            }
          }}
        />
        <TextInput
          style={[
            styles.input,
            { borderColor: error ? COLORS.red : COLORS.border_color },
          ]}
          maxLength={1}
          keyboardType={"numeric"}
          placeholder="-"
          ref={input3}
          value={i3}
          onFocus={() => {
            if (!i2.trim()) {
              input2.current?.focus();
            }
          }}
          onChangeText={(text) => {
            setI3(text);
            if (text) {
              setOtp((prev: string) => prev + text);
              input4.current?.focus();
            } else {
              setOtp((prev: string) => prev.slice(0, -1));
              input2.current?.focus();
            }
          }}
        />
        <TextInput
          style={[
            styles.input,
            { borderColor: error ? COLORS.red : COLORS.border_color },
          ]}
          maxLength={1}
          keyboardType={"numeric"}
          placeholder="-"
          ref={input4}
          value={i4}
          onFocus={() => {
            if (!i3.trim()) {
              input3.current?.focus();
            }
          }}
          onChangeText={(text) => {
            setI4(text);
            if (text) {
              setOtp((prev: string) => prev + text);
              input5.current?.focus();
            } else {
              setOtp((prev: string) => prev.slice(0, -1));
              input3.current?.focus();
            }
          }}
        />
        <TextInput
          style={[
            styles.input,
            { borderColor: error ? COLORS.red : COLORS.border_color },
          ]}
          maxLength={1}
          keyboardType={"numeric"}
          placeholder="-"
          ref={input5}
          value={i5}
          onFocus={() => {
            if (!i4.trim()) {
              input4.current?.focus();
            }
          }}
          onChangeText={(text) => {
            setI5(text);
            if (text) {
              setOtp((prev: string) => prev + text);
              input6.current?.focus();
            } else {
              setOtp((prev: string) => prev.slice(0, -1));
              input4.current?.focus();
            }
          }}
        />
        <TextInput
          style={[
            styles.input,
            { borderColor: error ? COLORS.red : COLORS.border_color },
          ]}
          maxLength={1}
          keyboardType={"numeric"}
          placeholder="-"
          ref={input6}
          value={i6}
          onFocus={() => {
            if (!i5.trim()) {
              input5.current?.focus();
            }
          }}
          onChangeText={(text) => {
            setI6(text);
            if (text) {
              setOtp((prev: string) => prev + text);
              input6.current?.focus();
            } else {
              setOtp((prev: string) => prev.slice(0, -1));
              input5.current?.focus();
            }
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: COLORS.white,
    textAlign: "center",

    width: "15%",
    aspectRatio: 1.1 / 1,
    borderColor: COLORS.border_color,
    borderWidth: 1,
    borderRadius: 4,
  },
});
export default OtpInput;
