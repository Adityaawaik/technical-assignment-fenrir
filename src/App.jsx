import "./App.css";

import Header from "./Components/SignupPage/Header";
import SignUpContent from "./Components/SignupPage/SignUpContent";

function App() {
  return (
    <>
      <div className="min-h-screen text-white bg-[#0b1120] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-125 h-125 bg-teal-700 opacity-30 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-125 h-125 bg-orange-500 opacity-30 blur-[150px] rounded-full"></div>
        <Header />
        <SignUpContent />
      </div>
    </>
  );
}

export default App;
