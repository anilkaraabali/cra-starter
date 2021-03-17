import i18n from '../i18n'

export const EMAIL_VALIDATION = {
    value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    message: i18n.t('email-address-error'),
}

export const NAME_VALIDATION = {
    value: /^[A-Za-z\s]+$/,
    message: i18n.t('name-error'),
}

export const PASSWORD_VALIDATION = {
    value: 6,
    message: i18n.t('password-hint'),
}

export const PHONE_NUMBER_VALIDATION = {
    pattern: {
        // eslint-disable-next-line no-useless-escape
        value: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
        message: i18n.t('phone-number-error'),
    },
    minLength: {
        value: 11,
        message: i18n.t('phone-number-min-error'),
    },
    maxLength: {
        value: 17,
        message: i18n.t('phone-number-max-error'),
    },
}
