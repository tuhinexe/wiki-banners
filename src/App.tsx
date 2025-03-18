import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner";
import EditBannerForm from "./components/EditBannerForm";

function App() {
  const [bannerText, setBannerText] = useState("I love Open Source");
  const [backgroundColor, setBackgroundColor] = useState("#3b82f6");
  const [imageUrl, setImageUrl] = useState("");
  const [textColor, setTextColor] = useState("#ffffff");

  return (
    <main className="h-screen w-full flex">
      <div className="w-full flex">
        <div className="flex-1 flex items-center justify-center">
          <Banner
            backgroundColor={backgroundColor}
            text={bannerText}
            imageUrl={imageUrl}
            textColor={textColor}
          />
        </div>
        <EditBannerForm
          textColor={textColor}
          text={bannerText}
          imageUrl={imageUrl}
          backgroundColor={backgroundColor}
          onBackgroundColorChange={setBackgroundColor}
          onTextChange={setBannerText}
          onImageUrlChange={setImageUrl}
          onTextColorChange={setTextColor}
        />
      </div>
    </main>
  );
}

export default App;
