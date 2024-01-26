import "../styles/globals.css";
import { HomePage } from "./HomePage";

export default function App({ Component, pageProps }) {
  return <HomePage {...pageProps} />;
}
