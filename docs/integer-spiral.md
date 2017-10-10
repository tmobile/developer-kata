## Integer Spiral:

Input:
    Target Value: Integer
    Spin Direction: boolean || ‘left’|’right’

  Output:
       Sequence of integer values starting from 0 and counting up to target value creating a spiral around the ‘0’ value:  Be mindful to handle extra spacing for multi-digit numbers.  Consider that a solution can handle spirals of integers with 1,2 or 3 digits each (max) ( do not make all cells 4 spaces; if the target value is less than 10 then all values are separated by a single space, if < 100 then all values separate by 1 or 2 spaces … make the columns line up.)

  Sample:

      |--------|----------|--------|
      | Sample | Input    | Output |
      |--------|----------|--------|
      |   1    | 6, right | 6      |
      |        |          | 5 0 1  |
      |        |          | 4 3 2  |
      |--------|----------|--------|
      |   2    | 7, left  |   7 6  |
      |        |          | 1 0 5  |
      |        |          | 2 3 4  |
      |--------|----------|--------|

## Bonus:

Conserve memory by calculating the digits per column on a row, then print that row starting at topmost row.  This means you cannot use an array to store all values, you simply calculate a single row at a time and print it to the screen/console.
