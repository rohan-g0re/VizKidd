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

## 🎨 UX Features

- **Parallel scrolling** across tabs
- **Mapped Navigation across Visualizations**
- **Expandable visualization** screen for closer look
- **Voice command integration**


## 🚀 Build Your VizKidd.AI

### **Prerequisites**
- **Node.js 18+**
- **npm** or **yarn**
- **Anthropic API Key**
- **Google AI API Key** (optional)

### **Step 1: Installation & Setup**

```bash
# Clone repository
git clone <repository-url>
cd VizCon.AI

# Install dependencies
npm install

# Environment setup
cp .env.example .env
```

### **Step 2: API Integration**

#### **Environment Variables**
```env
VITE_ANTHROPIC_API_KEY=your_anthropic_api_key
VITE_GOOGLE_AI_API_KEY=your_google_ai_key
```

#### **Anthropic Claude Integration**
```typescript
const anthropic = new Anthropic({
  apiKey: import.meta.env.VITE_ANTHROPIC_API_KEY,
  dangerouslyAllowBrowser: true
});
```

#### **Google Generative AI Integration**
```typescript
const genAI = new GoogleGenerativeAI(
  import.meta.env.VITE_GOOGLE_AI_API_KEY
);
```

### **Step 3: Development**
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

### **Step 4: Production Deployment**

#### **Build Configuration**
```bash
npm run build
# Outputs to dist/ directory
```

#### **Environment Setup**
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
