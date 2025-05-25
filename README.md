# VizKidd.AI - Technical Content Visualization System

A **React-TypeScript** application that transforms complex textual content into interactive visual representations using **AI-powered concept extraction** and **SVG generation**.

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
- **PDF Processing** (`react-pdf`, `pdfjs-dist`, `@react-pdf/renderer`)
- **Voice Assistant** with **Web Speech API** integration
- **Drag-and-drop** file upload (`react-dropzone`)
- **Mermaid.js** diagram rendering
- **Real-time concept visualization**

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

### **PDF Processing Pipeline**
**Multi-stage PDF text extraction**:

1. **File upload** via drag-and-drop interface
2. **PDF.js** text extraction
3. **Text preprocessing** and chunking
4. **Concept extraction** via Gemini 2.0 Flash
5. **SVG generation** for each concept

### **State Management Architecture**
**React Context** pattern with three main contexts:

- **AppContext**: Global UI state, modals, navigation
- **ConceptContext**: Concept extraction, visualization logic
- **VoiceContext**: Voice assistant state and commands

### **Styling System**
**Tailwind CSS** with custom configuration:

- **Custom color palette** (`primary`, `background` variants)
- **Animation keyframes** for smooth transitions
- **Typography plugin** for content styling
- **Responsive design** with mobile-first approach

## 🎨 UI/UX Features

- **Parallax scrolling** effects
- **Mapped Navigation across Visualizations**
- **Tabbed interface** (Input/Visualization)
- **Expandable visualization** modal
- **Voice command integration**


## 🔌 API Integration

### **Anthropic Claude**
```typescript
const anthropic = new Anthropic({
  apiKey: import.meta.env.VITE_ANTHROPIC_API_KEY,
  dangerouslyAllowBrowser: true
});
```

### **Google Generative AI**
```typescript
const genAI = new GoogleGenerativeAI(
  import.meta.env.VITE_GOOGLE_AI_API_KEY
);
```
## 🛠️ Development Tools

- **ESLint** with React and TypeScript rules
- **TypeScript** strict mode configuration
- **PostCSS** with Autoprefixer
- **Vite** with React plugin and optimizations


## 🚀 Quick Start

### **Prerequisites**
- **Node.js 18+**
- **npm** or **yarn**
- **Anthropic API Key**
- **Google AI API Key** (optional)

### **Installation**

```bash
# Clone repository
git clone <repository-url>
cd VizCon.AI

# Install dependencies
npm install

# Environment setup
cp .env.example .env
```

### **Environment Variables**
```env
VITE_ANTHROPIC_API_KEY=your_anthropic_api_key
VITE_GOOGLE_AI_API_KEY=your_google_ai_key
```

### **Development**
```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 🚀 Build Your VizKidd.AI

### **Build Configuration**
```bash
npm run build
# Outputs to dist/ directory
```

### **Environment Setup**
- Configure **API keys** in production environment
- Set up **CORS** for API endpoints
- Configure **CDN** for static assets

## 📊 Performance Optimizations

- **Code splitting** with dynamic imports
- **Lazy loading** for heavy components
- **SVG optimization** for faster rendering
- **Bundle analysis** with Vite build tools
- **Image optimization** for landing page assets

## 📈 Scalability Features

- **Modular architecture** with feature-based organization
- **Context-based state management** for scalable state
- **Service layer abstraction** for API integrations
- **Component composition** for reusable UI elements
