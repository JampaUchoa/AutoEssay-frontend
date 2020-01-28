import React from 'react';
import './notFound.scss'
import { useTranslation } from 'react-i18next';

export default function NotFound() {
    const { t, i18n } = useTranslation();

    return (
        <div className="not-found">
            <h1> 404 </h1>
            <span> {t('Page not found')} </span>
            <a href="/">  {t('Return to home')}</a>
        </div>
    )
}

