import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { createCurrentFormattedDate, getKeyByValue } from "../utils";

export const MessageComponent = () => {
    const {t, i18n} = useTranslation();
    const [numberOfMessages, setNumberOfMessages] = useState<number | undefined>(undefined);
    const [repr, setRepr] = useState('')

    const changeLanguage = (language: string) => {
        i18n.changeLanguage(language);
    }

    useEffect(() => {
        setNumberOfMessages(Math.floor(Math.random() * 10 + 1));
        setRepr(createCurrentFormattedDate());
    }, []);

    if (!numberOfMessages) {
        return <div> </div>;
    }
    
    return (
        <div>
            <div>
                <button onClick={() => {changeLanguage('ru');}}>RU</button>
                <button onClick={() => {changeLanguage('en');}}>EN</button>
            </div>
            <div>
                <p>{t(getKeyByValue(numberOfMessages), {count: numberOfMessages})}</p>
                <p>{t('last_message', {date: repr})}</p>
            </div>
        </div>
    );
}