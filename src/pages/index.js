import Map from "@/components/map/Map";
import styles from "../components/map/Map.module.scss";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const darkTheme = createTheme({
  palette: {
    mode: "light",
  },
});
import ShopsList from "@/components/list/ShopList";
import Navbar from "@/components/navbar/navbar";
import { AdminContext } from "@/components/context/Contexts";

export default function Home() {
  return (
    <AdminContext>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Navbar />
        <div className={styles.div}>
          <section className={styles.map}>
            <Map />
            <ShopsList />
          </section>
        </div>
      </ThemeProvider>
    </AdminContext>
  );
}
