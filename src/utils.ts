export const createCurrentFormattedDate = () => {
    const date = new Date();

    return date.toLocaleString(
        'ru-RU',
        {
            day: '2-digit',
            month: 'short',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
        }
    );
}

export const resources = {
    ru: {
        translation: {
            'one_messages': 'У вас {{count}} непрочитанное сообщение',
            'many_messages': 'У вас {{count}} непрочитанных сообщения',
            'few_messages': 'У вас {{count}} непрочитанных сообщений',
            'last_message': 'Дата последнего сообщения: {{date}}'
        }
    },
    en: {
        translation: {
            'one_messages': 'You have only {{count}} unread message',
            'many_messages': 'You have {{count}} unread messages',
            'few_messages': 'You have {{count}} unread messages',
            'last_message': 'The date of last message: {{date}}'
        }
    }
};

export const getKeyByValue = (value: number) => {
    if (value === 1) {
        return 'one_messages';
    }

    if (value >= 2 && value <= 4) {
        return 'many_messages';
    }

    return 'few_messages';
}