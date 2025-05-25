# VizCon.AI

A powerful AI-powered visualization tool that converts text and documents into interactive visual representations using advanced AI models.

## Features

- 📄 PDF text extraction and processing
- 🤖 AI-powered concept extraction using Claude and Gemini
- 🎨 Dynamic SVG visualization generation
- 🎙️ Voice interaction capabilities
- 📱 Responsive modern UI with dark theme

## Setup

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd VizCon.AI
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory and add your API keys:

```env
VITE_GEMINI_API_KEY=your_gemini_api_key_here
VITE_ANTHROPIC_API_KEY=your_anthropic_api_key_here
```

**Important**: Never commit your `.env` files to version control. They are already included in `.gitignore`.

### Getting API Keys

#### Google Gemini API Key
1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Create a new API key
3. Copy the key to your `.env.local` file

#### Anthropic Claude API Key
1. Visit [Anthropic Console](https://console.anthropic.com/)
2. Create an account and get your API key
3. Copy the key to your `.env.local` file

### Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Building for Production

```bash
npm run build
```

## Usage

1. **Upload Documents**: Drag and drop PDF files or paste text
2. **AI Processing**: The system extracts concepts using AI models
3. **Visualizations**: Generate interactive SVG visualizations
4. **Voice Interaction**: Use voice commands for hands-free operation

## Technologies Used

- **Frontend**: React, TypeScript, Vite, Tailwind CSS
- **AI Models**: Google Gemini 2.0 Flash, Anthropic Claude
- **PDF Processing**: PDF.js
- **Voice**: Web Speech API
- **Visualization**: Custom SVG generation

## Security

This project uses environment variables to securely manage API keys. Never commit sensitive information to version control.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Ensure all API keys are properly handled via environment variables
5. Submit a pull request

## License

[Add your license information here] 