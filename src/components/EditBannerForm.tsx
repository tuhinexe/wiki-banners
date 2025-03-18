import React from "react";

interface EditBannerFormProps {
  text: string;
  backgroundColor: string;
  textColor: string;
  imageUrl: string;
  onTextChange: (text: string) => void;
  onBackgroundColorChange: (color: string) => void;
  onImageUrlChange: (url: string) => void;
  onTextColorChange: (color: string) => void;
}

const EditBannerForm: React.FC<EditBannerFormProps> = ({
  text,
  backgroundColor,
  imageUrl,
  textColor,
  onTextChange,
  onBackgroundColorChange,
  onImageUrlChange,
  onTextColorChange,
}) => {
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        onImageUrlChange(result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
      <h2 className="text-xl font-semibold mb-4">Edit Banner</h2>

      <div className="space-y-4">
        <div>
          <label
            htmlFor="banner-text"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Banner Text
          </label>
          <input
            id="banner-text"
            type="text"
            value={text}
            onChange={(e) => onTextChange(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter banner text"
          />
        </div>

        <div>
          <label
            htmlFor="bg-color"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Background Color
          </label>
          <div className="flex items-center">
            <input
              id="bg-color"
              type="color"
              value={backgroundColor}
              onChange={(e) => onBackgroundColorChange(e.target.value)}
              className="h-10 w-10 rounded-md border border-gray-300 cursor-pointer"
            />
            <span className="ml-2 text-gray-600">{backgroundColor}</span>
          </div>
        </div>

        <div>
          <label
            htmlFor="bg-color"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Text Color
          </label>
          <div className="flex items-center">
            <input
              id="bg-color"
              type="color"
              value={textColor}
              onChange={(e) => onTextColorChange(e.target.value)}
              className="h-10 w-10 rounded-md border border-gray-300 cursor-pointer"
            />
            <span className="ml-2 text-gray-600">{textColor}</span>
          </div>
        </div>

        <div>
          <label
            htmlFor="banner-image"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Banner Image
          </label>
          <input
            id="banner-image"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
          {imageUrl && (
            <div className="mt-2">
              <p className="text-sm text-gray-600">Image preview:</p>
              <img
                src={imageUrl}
                alt="Banner preview"
                className="mt-1 h-64 w-full object-cover rounded-md"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EditBannerForm;
