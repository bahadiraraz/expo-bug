import { Text, View, ScrollView, Image, Button } from "react-native";
import React from "react";

const Page1 = () => {

  return (
      <ScrollView
          className="flex shrink-0 bg-gray-100"
      >
        <View className="py-6 flex-1 items-center px-4 md:px-6">
          <Text className="text-2xl font-bold text-gray-900 mb-4">Welcome to My App</Text>
          <Text className="text-gray-700 text-lg text-center mb-6">
            This is an example page filled with various UI elements. Enjoy exploring!
          </Text>
          <Image
              source={{ uri: 'https://via.placeholder.com/150' }}
              className="mb-6"
              style={{ width: 150, height: 150, borderRadius: 75 }}
          />
          <Button
              title="Click Me"
              onPress={() => alert('Button Pressed')}
              color="#841584"
          />
          <Text className="text-lg text-gray-700 text-left mt-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
          </Text>
          <Text className="text-lg text-gray-700 text-left mt-6">
            Another paragraph of text goes here. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor.
          </Text>
          <View className="py-6 flex-1 items-start px-4 md:px-6">
            <Text className={"text-center text-gray-700"}>
              © {new Date().getFullYear()} Me
            </Text>
          </View>
        </View>
      </ScrollView>
  );
}

export default Page1;
