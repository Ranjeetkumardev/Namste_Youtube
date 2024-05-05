import { Provider } from "react-redux";
import "./App.css";
import Body from "./Components/Body";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./Components/MainContainer";
import WatchPage from "./Components/WatchPage";
import { lazy } from "react";
import { Suspense } from "react";
 

const SearchResults = lazy(() => import("./Components/SearchResults"));
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/watch",
        element: <WatchPage />,
      },
      {
        path: "/results",
        element: (
          <Suspense>
            <SearchResults />
          </Suspense>
        )
      },
    ],
  },
]);

function App() {
   
  return (
    <Provider store={store}>
      <div className="">
         <RouterProvider router={appRouter} />
        {/**
         * Header
         * Body
         * Sidebar
         *  Menuitem
         * MaiContainer
         *  ButtonList
         * VkideoContainer
         *  videoCard
         *
         */}
      </div>
    </Provider>
  );
}

export default App;
