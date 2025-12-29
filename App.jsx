import Header from "./components/Header";
import PrimaryHeader from "./components/PrimaryHeader";
import MainComponent from "./components/MainComponents";
import Loading from "./components/Loading";
import ApiError from "./components/Apierror";
export default function App() {
  return (
    <>
      <Header />
      {/* <Loading /> */}
      {/* <ApiError /> */}
      {/* <PrimaryHeader />*/}
      <MainComponent />
    </>
  );
}
