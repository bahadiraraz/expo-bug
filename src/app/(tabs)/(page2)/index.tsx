import { Text, View, ScrollView, Image, FlatList, Button } from "react-native";
import React from "react";

const largeImageUri = 'https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png'; // Büyük boyutlu resim

const Page2 = () => {

  return (
      <ScrollView
          className="flex shrink-0 bg-gray-100"
      >
        <View className="py-6 flex-1 items-center px-4 md:px-6">
          <Text className="text-2xl font-bold text-gray-900 mb-4">Heavy Content on Page 2</Text>
          <Text className="text-gray-700 text-lg text-center mb-6">
            This page contains heavy components to test the performance.
          </Text>

          {/* 10 tane büyük boyutlu resim */}
          {Array.from({ length: 10 }).map((_, index) => (
              <Image
                  key={index}
                  source={{ uri: largeImageUri }}
                  className="mb-6"
                  style={{ width: 400, height: 400 }}
              />
          ))}

          <Button
              title="Trigger Heavy Action"
              onPress={() => alert('This action is intentionally slow!')}
              color="#FF6347"
          />

          <View className="py-6 flex-1 items-start px-4 md:px-6">
            <Text className={"text-center text-gray-700"}>
              © {new Date().getFullYear()} Me
            </Text>
          </View>
        </View>
      </ScrollView>
  );
}

export default Page2;
