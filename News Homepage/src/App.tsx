import Navbar from "./components/Navbar";
import MainFeatureArticle from "./components/MainFeatureArticle";
import SideBar from "./components/SideBar";
import FeatureCardList from "./components/FeatureCardList";
import "./App.css";
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div className="flex justify-between items-center mt-10 mb-16">
        <MainFeatureArticle />
        <SideBar />
      </div>

      <FeatureCardList />
      {/* <div className="card">
        <button className='' onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
    </>
  );
}

export default App;
