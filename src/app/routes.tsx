import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { LandingPage } from "./components/LandingPage";
import { MemoriesGallery } from "./components/MemoriesGallery";
import { LoveLetter } from "./components/LoveLetter";
import { SurprisePage } from "./components/SurprisePage";
import { FinalMessage } from "./components/FinalMessage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: LandingPage },
      { path: "memories", Component: MemoriesGallery },
      { path: "letter", Component: LoveLetter },
      { path: "surprise", Component: SurprisePage },
      { path: "final", Component: FinalMessage },
    ],
  },
]);
