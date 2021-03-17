import React from 'react'
import { useTranslation } from 'react-i18next'

import { CommonProvider } from '../../providers/CommonProvider'

import LanguageDetector from '../LanguageDetector'

import './index.scss'

const App = () => {
    const { t } = useTranslation()

    return (
        <CommonProvider>
            <div className="App">
                {t('homepage')} <LanguageDetector />
            </div>
        </CommonProvider>
    )
}

export default App
