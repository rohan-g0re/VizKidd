import { SpeechRecognitionService } from './speechRecognition';

// Create a singleton instance of the speech recognition service
let speechRecognitionInstance: SpeechRecognitionService | null = null;

/**
 * Initialize or get the speech recognition service instance
 */
function getSpeechRecognitionService(): SpeechRecognitionService {
  if (!speechRecognitionInstance) {
    speechRecognitionInstance = new SpeechRecognitionService();
  }
  return speechRecognitionInstance;
}

/**
 * Start speech recognition with callbacks for interim and final results
 * @param onInterimResult Callback for interim results
 * @param onFinalResult Callback for the final result
 * @returns Object with isRecording state and any error message
 */
export function startSpeechRecognition(
  onInterimResult: (transcript: string) => void,
  onFinalResult: (transcript: string) => void
): { isRecording: boolean; error?: string } {
  try {
    const service = getSpeechRecognitionService();
    
    if (!service.isSupported()) {
      return { 
        isRecording: false, 
        error: 'Speech recognition is not supported in this browser' 
      };
    }
    
    // Set up result callback
    service.onResult((finalTranscript, interimTranscript) => {
      // Send interim transcript updates
      if (interimTranscript) {
        onInterimResult(interimTranscript);
      }
      
      // Send final transcript when available
      if (finalTranscript) {
        // Temporarily pause listening while processing the query
        service.stop();
        
        // Call the final result callback
        onFinalResult(finalTranscript);
        
        // Resume listening after a short delay to allow processing
        setTimeout(() => {
          // Reset state to prepare for the next question
          service.clear();
          onInterimResult(''); // Clear the UI transcript display
          service.start(true);
        }, 1000);
      }
    });
    
    // Set up error handling
    let errorMessage: string | undefined;
    service.onError((error) => {
      errorMessage = error;
    });
    
    // Clear previous transcript and start listening
    service.clear();
    const started = service.start(true); // Set autoRestart to true
    
    return { 
      isRecording: started, 
      error: errorMessage 
    };
  } catch (error) {
    console.error('Error starting speech recognition:', error);
    return { 
      isRecording: false, 
      error: error instanceof Error ? error.message : 'Unknown error starting speech recognition'
    };
  }
}

/**
 * Stop speech recognition
 */
export function stopSpeechRecognition(): void {
  try {
    const service = getSpeechRecognitionService();
    service.stop();
  } catch (error) {
    console.error('Error stopping speech recognition:', error);
  }
} 