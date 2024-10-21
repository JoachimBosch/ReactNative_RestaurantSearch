import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, FlatList } from "react-native";
import yelp from "../api/yelp";

const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null); // if obj is expected, default value is set to null. If arr is expected, default value is empty arr
  const id = navigation.getParam("id");

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  console.log(result);

  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }

  return (
    <View>
      <Text style={styles.titleStyle}>{result.name}</Text>
      <Text style={styles.textStyle}>{result.location.address1}</Text>
      <Text style={styles.textStyle}>
        {result.location.zip_code} &nbsp;
        {result.location.city}
      </Text>
      <Text style={styles.phoneStyle}>{result.display_phone}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15,
    marginTop: 5,
    marginBottom: 5,
  },
  textStyle: {
    marginLeft: 15,
  },
  phoneStyle: {
    marginTop: 5,
    marginLeft: 15,
  },
  image: {
    height: 200,
    width: 300,
    margin: 15,
  },
});

export default ResultsShowScreen;
