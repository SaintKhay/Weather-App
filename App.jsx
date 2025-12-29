import Header from "./components/Header";
import PrimaryHeader from "./components/PrimaryHeader";
import MainComponent from "./components/MainComponents";
import Loading from "./components/Loading";
import ApiError from "./components/Apierror";
import dataSet from "./components/hooks";
export default function App() {
  const { loading } = dataSet();
  return (
    <>
      <Header />
      <PrimaryHeader />
      {loading ? (
        <Loading />
      ) : (
        <div className="fade-in">
          <MainComponent />
        </div>
      )}
    </>
  );
}
