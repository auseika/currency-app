export type RequestStatus = 'NOT_STARTED' | 'FETCH' | 'FETCH_SUCCESS' | 'FETCH_ERROR';

export type Currency =
    | 'AUD'
    | 'CAD'
    | 'CZK'
    | 'DKK'
    | 'HUF'
    | 'JPY'
    | 'NOK'
    | 'SEK'
    | 'CHF'
    | 'GBP'
    | 'BAM'
    | 'EUR'
    | 'PLN';

export interface CurrencyRate {
    selling_rate: string;
    buying_rate: string;
    median_rate: string;
    currency_code: Currency;
    unit_rate: number;
}

export interface Colors {
    black: string;
    white: string;
    blue: string;
    gray: string;
    lightGray: string;
}
