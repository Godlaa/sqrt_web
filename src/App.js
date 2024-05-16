import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import SquareRoot from './SquareRoot';
import i18n from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import enTranslations from "./locales/en.json";
import ruTranslations from "./locales/ru.json";
import chTranslations from "./locales/ch.json";
import arTranslations from "./locales/ar.json";
import hdTranslations from "./locales/hd.json";
import spTranslations from "./locales/sp.json";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslations
      },
      ru: {
        translation: ruTranslations
      },
      ch: {
        translation: chTranslations
      },
      ar: {
        translation: arTranslations
      },
      hd: {
        translation: hdTranslations
      },
      sp: {
        translation: spTranslations
      },
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  }
);

const App = () => {

  const [ value, setValue ] = useState('');
  const [ accuracy, setAccuracy ] = useState(3);
  const [ result, setResult ] = useState('');
  const { t } = useTranslation();

  const calcSquareRoot = () => {
    const squareRoot = new SquareRoot(value, accuracy);
    const calcAnswer = squareRoot.calc();
    if (calcAnswer) {
      setResult(t('result').toString() + ': ' + squareRoot.calc());
    }
    else setResult('Ошибка вычисления');
  }

  return (
    <Container>
      <Container className="mt-5 d-flex justify-content-center align-items-center">
        <strong className="mx-3">{t('language')}:</strong>
        <Button variant="dark" className="mx-3" onClick={() => i18n.changeLanguage('sp')}>Español</Button>
        <Button variant="dark" className="mx-3" onClick={() => i18n.changeLanguage('hd')}>हिन्दी</Button>
        <Button variant="dark" className="mx-3" onClick={() => i18n.changeLanguage('ar')}>العربية</Button>
        <Button variant="dark" className="mx-3" onClick={() => i18n.changeLanguage('ch')}>中文</Button>
        <Button variant="dark" className="mx-3" onClick={() => i18n.changeLanguage('en')}>English</Button>
        <Button variant="dark" className="mx-3" onClick={() => i18n.changeLanguage('ru')}>Русский</Button>
      </Container>

      <Container className="d-flex justify-content-center align-items-center" style={{ height: '80vh' }}>
        <Row>
          <Col>
            <Form>

              <Form.Group className="d-flex justify-content-center align-items-center" controlId="numberInput">
                <Row >
                  <Col>
                    <Form.Label  className='mx-3 d-flex justify-content-center align-items-center'>{t('enterNumber')}</Form.Label>
                    <Form.Control value={value} onChange={e => setValue(e.target.value)} type="text" placeholder={t('enterNumber')} />
                    <Form.Label className='mx-3 mt-5 d-flex justify-content-center align-items-center'>{t('enterAccuracy')}</Form.Label>
                    <Form.Control value={accuracy} onChange={e => setAccuracy(e.target.value)} type="text" placeholder={t('enterAccuracy')} />
                    <Form.Label className='mx-3 mt-5 d-flex justify-content-center align-items-center'>{t('result')}</Form.Label>
                    <Form.Control style={{width: '300px'}} type="text" readOnly placeholder={result} />
                  </Col>
                </Row>
                <Button className="mt-4 ms-5" variant="dark" onClick={calcSquareRoot}>{t('calculate')}</Button>
              </Form.Group> 
            </Form>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}


export default App;
