import logo from './logo.svg';
import './App.css';

import { i18n } from '@lingui/core'
import { I18nProvider, Trans } from '@lingui/react'

import { messages as messages_fr } from './locales/fr/messages.js'
import { messages as messages_en } from './locales/en/messages.js'

const messages = {
  en: messages_en,
  fr: messages_fr
}

const locale = 'en'

i18n.load(locale, messages[locale])
i18n.activate(locale)

function App() {
  const departDate = new Date()
  return (
    <I18nProvider i18n={i18n}>
      <div className="App">
        <header className="App-header">
            <ul>
              <li>{locale}</li>
              {/* Also exists in macro form: <Trans>Depart {departDate} ...</Trans> */}
              <li>              
                <Trans id="depart" values={{
                  departDate: i18n.date(departDate, { year: 'numeric', month: 'long', day: 'numeric' }),
                  departTime: i18n.date(departDate, { hour: 'numeric', minute: 'numeric'})
                }} />
              </li>
              <li>
                <Trans id="transitFare" values={{
                  fare: i18n.number(1.50, { style: 'currency', currency: i18n._("currencyCode") })
                }} />
              </li>
              <li>
                <Trans id="walkDistance" values={{
                  dist: i18n.number(0.4, { style: 'unit', unit: i18n._("distanceUnit") })
                }} />
              </li>
            </ul>
        </header>
      </div>
    </I18nProvider>
  );
}

export default App;
