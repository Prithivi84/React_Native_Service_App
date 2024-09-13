import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import React, { useEffect, useState } from "react";
import GlobalApi from "../../Utils/GlobalApi";
import { useNavigation } from "@react-navigation/native";
import Colors from "../../Utils/Colors";

export default function Category() {
  const [category, setCategory] = useState();
  const navigation = useNavigation();

  useEffect(() => {
    getCategorys();
  }, []);
  const getCategorys = () => {
    GlobalApi.GetCategorys().then((res) => {
      console.log("res", res.categories);
      setCategory(res?.categories);
    });
  };
  return (
    <View style={{ marginTop: 10 }}>
      <Text style={styles.heading}>Category</Text>
      <FlatList
        data={category}
        numColumns={4}
        renderItem={({ item, index }) =>
          index <= 3 && (
            <TouchableOpacity
              style={styles.container}
              onPress={() =>
                navigation.push("business-list", { category: item?.name })
              } // homenavigation -> businesslistcategory
            >
              <View style={styles.iconContainer}>
                <Image
                  source={{ uri: item?.icons?.url }}
                  style={{ width: 30, height: 30 }}
                />
              </View>
              <Text style={{ fontFamily: "outfit", marginTop: 5 }}>
                {item?.name}
              </Text>
            </TouchableOpacity>
          )
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontFamily: "outfit-medium",
    marginBottom: 10,
  },
  container: {
    flex: 1,
    alignItems: "center",
  },
  iconContainer: {
    backgroundColor: Colors.LightBackground,
    padding: 17,
    borderRadius: 99,
  },
});
