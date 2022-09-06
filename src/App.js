import LeftContent from "./Component/LeftContent";
import RightContent from "./Component/RightContent";
import Navbar from "./Component/Navbar";
function App() {
  return (
    <div className="Main-Container">
      <Navbar/>
        <div className="SubMain-container">
            <LeftContent />
            <RightContent />  
        </div>
    </div>
  );
}

export default App;
