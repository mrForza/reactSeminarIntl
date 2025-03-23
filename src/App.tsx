import React from 'react';
import './App.css';
import { MessageComponent } from './components/MessageComponent';
import { I18nextProvider } from 'react-i18next';
import i18next from './i18n'

function App() {
    return (
      <I18nextProvider i18n={i18next}>
        <div className="App">
            <MessageComponent/>
        </div>
      </I18nextProvider>
    );
}

export default App;
