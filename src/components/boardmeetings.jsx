import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const ListPosts = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://www.nseindia.com/api/home-board-meetings?index=equities", {
        headers: {
          "User-Agent": "Your Custom User-Agent String",
        },
      })
      .then((response) => {
        setData(response.data.data); // Assuming 'corporateAnnouncementList' contains the array of data
        setLoading(false);
        // console.log(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  const handleFileDownload = (url) => {
    Linking.openURL(url);
  };

  return (
    <View style={[styles.container, { backgroundColor: "#1B2732" }]}>
      {!loading ? (
        <FlatList
          style={styles.tasks}
          columnWrapperStyle={styles.listContainer}
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity style={[styles.card, { borderColor: "#000" }]}>
              <View style={styles.cardContent}>
                <Text style={styles.description1}>{item.bm_symbol}</Text>

                <Text style={styles.description}>{item.sm_name}</Text>
                <Text style={styles.description1}>{item.bm_purpose}</Text>
                <Text style={styles.date}>{item.bm_desc}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      ) : (
        <Image
          source={require("./1480.gif")}
          style={styles.loadingImage}
          resizeMode="stretch"
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  tasks: {
    flex: 1,
    marginTop: 50,
  },
  cardContent: {
    marginLeft: 10,
    marginTop: 10,
  },
  card: {
    shadowColor: "#00000021",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
    marginVertical: 10,
    marginHorizontal: 20,
    backgroundColor: "white",
    flexBasis: "46%",
    padding: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    borderLeftWidth: 6,
  },
  description: {
    fontSize: 18,
    flex: 1,
    color: "#008080",
    fontWeight: "bold",
  },
  date: {
    fontSize: 14,
    flex: 1,
    color: "#696969",
    marginTop: 5,
  },
  loadingImage: {
    width: 200,
    height: 200,
  },
});

export default ListPosts;
