# VizKidd.AI - Technical Content Visualization System

An application that transforms complex technical content into visual representations using contexually-aware mechanisms.

## 🏗️ Technical Architecture

### **Frontend Stack**
- **React 18.3.1** with **TypeScript 5.5.3**
- **Vite 5.4.2** for build tooling and development server
- **Tailwind CSS 3.4.1** with custom design system
- **Lucide React** for iconography
- **React Context API** for state management

### **AI Integration**
- **Anthropic Claude API** (`@anthropic-ai/sdk`) for concept extraction and SVG generation
- **Google Generative AI** (`@google/generative-ai`) for enhanced AI capabilities
- **Custom prompt engineering** for technical visualization generation

### **Core Features**
- **Real-time concept visualization and swift navigation**
- **PDF Processing** (`react-pdf`, `pdfjs-dist`, `@react-pdf/renderer`)
- **Voice Assistant** with **Web Speech API** integration
- **Drag-and-drop** file upload (`react-dropzone`)
- **Mermaid.js** diagram rendering

## 🔧 Technical Implementation

### **AI-Powered Concept Extraction**
The application uses **Gemini 2.0 Flash** for extracting key concepts from text:

```typescript
// Concept extraction with structured JSON output
const concepts = await extractConcepts(inputText);
// Returns: Array<{title: string, description: string}>
```

### **SVG Visualization Generation**
**Claude 3.7 Sonnet** generates technical SVG visualizations:

```typescript
// SVG generation with technical accuracy
const svg = await generateSvgVisualization({
  text: conceptText,
  type: 'neural-network' | 'flowchart' | 'concept' | 'technical'
});
```

### **Voice Assistant Integration**
**Web Speech API** implementation with custom command handling:

```typescript
// Voice command processing
const recognition = new webkitSpeechRecognition();
recognition.continuous = true;
recognition.interimResults = true;
```

### **Content Processing Pipeline**

1. **Content upload (text/pdf/url)** via Paste-controlled or drag-and-drop interface
2. If Pdf, **PDF.js** is used for text extraction
3. **Text preprocessing** and chunking
4. **Concept extraction** via Gemini 2.0 Flash
5. **SVG generation** for each concept via Claude 3.7 Sonnet

### **State Management Architecture**
**React Context** pattern with three main contexts:

- **AppContext**: Global UI state, modals, navigation
- **ConceptContext**: Concept extraction, visualization logic
- **VoiceContext**: Voice assistant state and commands

## UX Features

- **Parallel scrolling** across tabs
- **Mapped Navigation across Visualizations**
- **Expandable visualization** screen for closer look
- **Voice command integration**


## 🚀 Build Your VizKidd.AI

### **Prerequisites**
- **Node.js 18+** (see `requirements.txt` for full dependencies)
- **Anthropic API Key** & **Google AI API Key**

### **Setup & Run**

```bash
# Clone and install
git clone <repository-url>
cd VizCon.AI
npm install

# Configure environment
cp .env.example .env
# Add your API keys to .env file:
# VITE_ANTHROPIC_API_KEY=your_key
# VITE_GOOGLE_AI_API_KEY=your_key

# Run it 
npm run dev

```

## 📈 Scalability Features

- **Modular architecture** with feature-based organization
- **Context-based state management** for scalable state
- **Service layer abstraction** for API integrations
- **Component composition** for reusable UI elements


## 📊 Performance Optimizations

- **SVG utlization** for faster rendering
- **API Parallelization** nfor conrtent extraction and svg generation
- **Bundle analysis** with Vite build tools

#### **print ("GG")**