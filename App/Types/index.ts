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
    sellingRate: string;
    buyingRate: string;
    medianRate: string;
    currencyCode: Currency;
    unitRate: number;
}

export interface Colors {
    black: string;
    white: string;
    blue: string;
    gray: string;
    lightGray: string;
}
