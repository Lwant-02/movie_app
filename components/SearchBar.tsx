import { icons } from "@/constants/icons";
import { View, Text, Image, TextInput } from "react-native";

interface Prop {
  placeholder: string;
  onPress?: () => void;
  value?: string;
  onChangeText?: (text: string) => void;
}

const SearchBar = ({ onPress, placeholder, value, onChangeText }: Prop) => {
  return (
    <View className="flex-row flex items-center bg-dark-200 rounded-full px-5 py-4">
      <Image
        source={icons.search}
        className="size-5 "
        resizeMode="contain"
        tintColor="#ab8bff"
      />
      <TextInput
        onPress={onPress}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor="#a8b5db"
        className="flex-1 ml-2 text-white"
      />
    </View>
  );
};

export default SearchBar;

// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZDg3NDk2NDNiZTNjMzI4MjFkYWM4ZTEzYjYxMDdjZiIsIm5iZiI6MTczNzM1OTIyMy4xMzEsInN1YiI6IjY3OGRmZjc3ODgwZjZiZDM4NDZlMjA1OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.maCu_mf8fC2Orug2Pn6QPFlD6a5wYoktoPdjub0J-0w
// Key-9d8749643be3c32821dac8e13b6107cf
