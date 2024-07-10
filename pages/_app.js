import { StyleSheet } from "react-native"
import { useFonts } from "expo-font";
import Head from "next/head";
import '../styles/global.css'
import Urbanist_Blod from "../assets/font/static/Urbanist-Italic.ttf"

const [fontsLoaded] = useFonts({
  'UrbanistBlod': Urbanist_Blod,
});

if (!fontsLoaded) {
  return (
    <View>
      <Text>Loading</Text>
    </View>
  )
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <View style={styles.container}>
        <Component {...pageProps} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    fontFamily: "UrbanistBlod"
  },
});
