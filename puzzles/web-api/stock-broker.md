# Developer Puzzle

## Stock Broker

Using public data APIs gather and display information about the stock performance for stocks
over a specified historical data range.

Display this information in a manner that the user can understand and form opinions on trends in the price movement of a selected stock.

* User enters exchange name (NYSE, NASDAQ, Tokyo Stock Exchange,...)
* Allow user to enter stock ticker symbol
* select date range to gather data for.

* collect stock price info for specified stock symbol during date range.
    * if less than 1 week then show hourly price changes
    * if less than 1 month then show daily high/low and close values
    * if more than 1 month then show close values.

### Bonus:

   * Use a look-ahead combo box for the stock exchange name
   * Use a look-ahead combo box for the stock ticker symbol
   * Use a charting library to chart the data graphically

