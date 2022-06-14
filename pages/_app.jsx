import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import { FirebaseProvider } from "../context/firebaseContext";
// import { ChakraProvider } from "@chakra-ui/react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { StepsStyleConfig as Steps } from "chakra-ui-steps";

import TimeAgo from 'javascript-time-ago'

import en from 'javascript-time-ago/locale/en.json'
import ru from 'javascript-time-ago/locale/ru.json'

TimeAgo.addDefaultLocale(en)
TimeAgo.addLocale(ru)



const theme = extendTheme({
  components: {
    Steps,
  },
});


function MyApp({ Component, pageProps }) {
  return (
    <FirebaseProvider>
      <ChakraProvider theme={theme} >
      <NavBar />
      <Component {...pageProps} />
      <Footer />
      </ChakraProvider>
      </FirebaseProvider>
  );
}

export default MyApp;
