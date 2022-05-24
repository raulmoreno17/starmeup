import "./Home.scss";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ValuesPanel from "../../components/valuesPanel/ValuesPanel";

const Home = () => {
  return (
    <Grid container spacing={2} className="home__container">
      <Grid item xs={12}>
        <ValuesPanel />
      </Grid>
      <Grid item xs={4}>
        <h3>Profile Board</h3>
        <h3>Trending Panel</h3>
      </Grid>
      <Grid item xs={4}>
        <h3 style={{ height: "2000px" }}>Main feed</h3>
      </Grid>
      <Grid item xs={4}>
        <h3>Surveys</h3>
        <h3>Discover colleages</h3>
        <h3>Top Stars</h3>
      </Grid>
    </Grid>
  );
};

export default Home;
