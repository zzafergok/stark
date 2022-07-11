import { Routes, Route } from "react-router-dom";
import MarvelUniverse from "./views/MarvelUniverse/index";
import Login from "./views/Login/index";
import ILoveThreeHundred from "./views/ILoveThreeHoundred/index";
import MarvelUniverseCharacters from "./views/MarvelUniverseCharacters/index";
import MarvelUniverseCharacterDetail from "./views/MarvelUniverseCharacterDetail/index";
import MarvelUniverseComics from "./views/MarvelUniverseComics/index";
import MarvelUniverseComicDetail from "./views/MarvelUniverseComicDetail/index";

type Props = {};

function AllRoutes({}: Props) {
  return (
    <Routes>
      <Route path="/" element={<MarvelUniverse />} />
      <Route path="/login" element={<Login />} />
      <Route path="/i-love-3000" element={<ILoveThreeHundred />} />

      <Route
        path="/marvel-universe-characters"
        element={<MarvelUniverseCharacters />}
      />
      <Route
        path="/marvel-universe-characters/:character"
        element={<MarvelUniverseCharacterDetail />}
      />
      <Route
        path="/marvel-universe-comics"
        element={<MarvelUniverseComics />}
      />
      <Route
        path="/marvel-universe-comics/:comic"
        element={<MarvelUniverseComicDetail />}
      />
    </Routes>
  );
}

export default AllRoutes;
