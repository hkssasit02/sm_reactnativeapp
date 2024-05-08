import { useNavigation } from "@react-navigation/native"; // Import useNavigation hook
import React, { useState } from "react";
import {
  Alert,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
// import {
//   check,
//   request,
//   PERMISSIONS,
//   PermissionStatus,
// } from "react-native-permissions";

export default Home = () => {
  const navigation = useNavigation(); // Initialize navigation

  // const requestInternetPermission = async () => {
  //   try {
  //     const granted = await request(PERMISSIONS.ANDROID.INTERNET);
  //     if (granted === PermissionStatus.GRANTED) {
  //       // Internet permission granted, you can proceed with your network requests
  //       console.log("Internet permission granted");
  //     } else {
  //       // Internet permission denied
  //       console.log("Internet permission denied");
  //     }
  //   } catch (err) {
  //     console.warn(err);
  //   }
  // };

  // useEffect(() => {
  //   requestInternetPermission();
  // }, []);

  const data = [
    {
      id: 1,
      title: "Ipo",
      image:
        "https://cdn4.iconfinder.com/data/icons/business-finance-line-art-1/128/ipo-initial-public-offering-ol-512.png",
      navigator: "ipo",
    },
    {
      id: 2,
      title: "Stock Market",
      image: "https://cdn-icons-png.flaticon.com/512/3843/3843966.png",
      navigator: "ipo",
    },
    {
      id: 4,
      title: "Announcements",
      image: "https://static.thenounproject.com/png/4868354-200.png",
      navigator: "Announcements",
    },
    {
      id: 4,
      title: "board-meetings",
      image: "https://cdn-icons-png.flaticon.com/512/2680/2680422.png",
      navigator: "Boardmeetings",
    },
    {
      id: 3,
      title: "News",
      image:
        "https://cdn4.iconfinder.com/data/icons/business-and-finance-monochrome-hand-drawn-free-se/100/newspaper-512.png",
      navigator: "ipo",
    },
    {
      id: 4,
      title: "Market Holiday",
      image: "https://static.thenounproject.com/png/4657695-200.png",
      navigator: "Holiday",
    },
    {
      id: 4,
      title: "Company Result",
      image:
        "https://icons.iconarchive.com/icons/praveen/minimal-outline/512/file-icon.png",
      navigator: "ipo",
    },

    // Add other data items
  ];

  const [options, setOptions] = useState(data);

  const showAlert = () => {
    Alert.alert("Option selected");
  };

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        contentContainerStyle={styles.listContainer}
        data={options}
        horizontal={false}
        numColumns={2}
        keyExtractor={(item) => {
          return item.id.toString();
        }}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={styles.card}
              onPress={() => navigation.navigate(item.navigator)} // Use navigation here
            >
              <View style={styles.cardFooter}></View>
              <Image style={styles.cardImage} source={{ uri: item.image }} />
              <View style={styles.cardHeader}>
                <View
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  <Text style={styles.title}>{item.title}</Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    backgroundColor: "#1B2732",
  },
  list: {
    paddingHorizontal: 5,
    marginTop: 50,
  },
  listContainer: {
    alignItems: "center",
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
    backgroundColor: "white",
    flexBasis: "42%",
    marginHorizontal: 10,
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  cardImage: {
    height: 70,
    width: 70,
    alignSelf: "center",
  },
  title: {
    fontSize: 18,
    flex: 1,
    alignSelf: "center",
    color: "#696969",
  },
});
