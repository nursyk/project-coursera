import { createRoot } from 'react-dom/client';
import React from 'react';

function App() {
    return <h1>Welcome to InsightHub!</h1>;
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
