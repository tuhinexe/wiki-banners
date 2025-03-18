# Wiki Banners

A modern, flexible tool for creating customizable banners for your wikis, documentation sites, and open source projects.

## About

Wiki Banners is a React-based web application that allows users to design and generate visually appealing banner images. These banners can be used in documentation, wiki pages, GitHub repositories, or any other place where you need to add visual elements to enhance your content.

The application provides an intuitive interface to:

- Create banners with custom text
- Choose background colors
- Upload and integrate custom images
- Customize text colors

## Technology Stack

This project is built with:

- **React**: For the UI components and state management
- **TypeScript**: For type safety and improved developer experience
- **Vite**: As the build tool for fast development and optimized production builds
- **Tailwind CSS**: For responsive and utility-first styling
- **Vitest**: For unit and component testing

## Key Features

- **Live Preview**: See your banner changes in real-time
- **Image Upload**: Use your own images as banner backgrounds
- **Color Customization**: Select colors for both text and backgrounds
- **Responsive Design**: Works on devices of all sizes

## Project Structure

- `src/components/Banner.tsx`: The main banner display component
- `src/components/EditBannerForm.tsx`: Form component for customizing banner properties
- `src/__test__/`: Contains test files for all components

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/tuhinexe/wiki-banners.git
cd wiki-banners
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Usage

1. Use the sidebar to navigate to the banner creation tool
2. Enter your desired text in the text input field
3. Choose a background color using the color picker
4. Upload an image if you want to use one as a background
5. Adjust the text color to ensure readability
6. Use the generated banner in your wiki or documentation

## Testing

Run the test suite with:

```bash
npm test
```

## Building for Production

To create a production build:

```bash
npm run build
```

The build files will be available in the `dist` directory.

## Contributing

Contributions are welcome! This project is perfect for developers who want to contribute to open source. If you'd like to contribute, please:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
