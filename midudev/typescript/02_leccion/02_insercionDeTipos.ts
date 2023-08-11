const canvas = document.querySelector('canvas');

// null si no lo encuentra
// HTMLElement si lo encuentra

// ??? como sabe TypeScript que realmente estas recuperando un elemento <canvas /> ???

// es inferencia -> TypeScript se da cuenta que dentro del if
// ya solo el canvas va a poder ser un HTMLCanvasElement
if(canvas instanceof HTMLCanvasElement) {
    const ctx = canvas.getContext('2d');
}