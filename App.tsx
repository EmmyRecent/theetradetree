import "./global.css";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text } from "react-native";

export default function App() {
  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 items-center justify-center">
        <Text className="m-5 pb-8 text-blue-500">Hello World</Text>
      </View>
    </SafeAreaView>
  );
}
