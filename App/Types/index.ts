type Currency = 'AUD' | 'CAD' | 'CZK' | 'DKK' | 'HUF' | 'JPY' | 'NOK' | 'SEK' | 'CHF' | 'GBP' | 'BAM' | 'EUR' | 'PLN';

export interface CurrencyRate {
    sellingRate: string;
    buyingRate: string;
    medianRate: string;
    currencyCode: Currency;
    unitRate: number;
}
