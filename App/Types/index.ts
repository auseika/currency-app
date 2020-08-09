type Currency =
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
  sellingRate: '4.565264';
  buyingRate: '4.537954';
  medianRate: '4.551609';
  currencyCode: Currency;
  unitRate: number;
}
