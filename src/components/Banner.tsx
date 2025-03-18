import React from "react";

interface BannerProps {
  backgroundColor?: string;
  text?: string;
  imageUrl?: string;
  textColor?: string;
}

const Banner: React.FC<BannerProps> = ({
  backgroundColor = "#3b82f6",
  text = "I love Open Source",
  textColor = "#ffffff",
  imageUrl,
}) => {
  return (
    <div
      className="relative overflow-hidden rounded-lg h-5/6 shadow-lg w-full mx-4 mt-4"
      style={{
        backgroundColor,
      }}
    >
      {imageUrl && (
        <img
          src={imageUrl}
          alt="Banner background"
          className="absolute inset-0 object-cover w-full h-full opacity-90"
        />
      )}

      <div className="absolute inset-0 flex items-center justify-center p-6">
        {text && (
          <h1
            style={{ color: textColor }}
            className="text-3xl font-bold text-center z-10"
          >
            {text}
          </h1>
        )}
      </div>
    </div>
  );
};

export default Banner;
