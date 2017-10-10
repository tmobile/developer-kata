## Check Writer:

Given a currency value output the English equivalent as written on a check:

Sample

    Input: 10,985.25   Output: Ten thousand nine hundred eighty five dollars and 25/100
    Input: 125.75      Output: One hundred twenty five dollars and 75/100
    Input: 95.00       Output: Ninety five dollars only
    Input: 69          Output: Sixty nine dollars only


- Note the initial capital on the output line.
- Note the input may be an integer or a float.
- Note: Should handle enough digits to pay off US National debt, including cents.

Bonus: internationalization;

    Europe swaps separator and decimal symbol:
    eg.  2.342,95



