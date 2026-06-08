import { Tabs } from "expo-router";
import { tabs } from "../../constants/data";

const TabLayout = () => {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      {tabs.map((tab) => (
        <Tabs.Screen
          key={tab.name}
          name={tab.name}
          options={{ title: tab.title }}
        />
      ))}
    </Tabs>
  );
};

export default TabLayout;
