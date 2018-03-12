# Developer Puzzle

Make sure that you have completely read the [README](../../README.md) and the corresponding project notes:

- [MyTmo](../../MyTmo.md)
- [TMNG](../../TMNG.md)
- [MPCS](../../MPCS.md)


## Weather Man

Using public data APIs gather and display information about the weather for a user specified location.

Collect user input for an address to gather historical weather data for.

Collect historical data for 30 days prior to the current date thru 60 days after the current date.

Collect historical data for this date spread for the current year and the previous 2 years.

Data to collect:

* Sunrise time (in local time - for the specified location)
* Sunset time (in local time - for the specified location)
* Daily Temp (Low, Hi)
* Daily Precipitation

Create a UI that allows the user to submit any address (street, city ,state/province, country ).
The data returned should allow them to easily view and/or guess the weather and sunlight conditions for the next 2 months.

### Note:

You will be using 2 data APIs for this puzzle.

1. Collect the GPS location of the address entered,
1. Collect the weather data for the GPS coordinates

### Bonus:

Use a charting program to create a multi-axis chart showing all 3 data types (sun, temp, precipitation)
