import { NavigationContainer } from "@react-navigation/native";
import { EntryStack } from "./stacks/entry.stacks";
import React from "react";

export const NavigationHandler: React.FC<{ onReady: any }> = ({ onReady }) => {
  return (
    <NavigationContainer onReady={onReady}>
      <EntryStack />
    </NavigationContainer>
  );
};
