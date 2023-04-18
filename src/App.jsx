import Body from "./components/Body";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-between bg-eerie-black">
      <Navbar />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
