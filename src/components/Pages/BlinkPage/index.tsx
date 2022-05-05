import { StyledEngineProvider } from "@mui/material";

import Header from "../../Organisms/Headers/currentBookHeader";
import ExploreBooks from "../../Organisms/ExploreBooks";
import { Footer } from "../../Organisms/Footer/currentBookFooter";
import TrendingBlinks from "../../Organisms/TrendingBlinks/Blinks";

const ExplorePage: React.FunctionComponent = () => {
  return (
    <StyledEngineProvider injectFirst>
      <div id="appbar">
        <Header />
      </div>

      <div id="explorebooks" style={{ marginTop: "72px", marginLeft: "264px" }}>
        <ExploreBooks />
      </div>

      <div
        id="trendingblinks"
        style={{ marginTop: "80px", marginLeft: "264px" }}
      >
        <TrendingBlinks />
      </div>
      <div style={{ paddingTop: "100px" }}></div>

      <div id="footer">
        <Footer />
      </div>
    </StyledEngineProvider>
  );
};
export default ExplorePage;
