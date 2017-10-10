# Postfix Calculator

A Post fix calculator places the operators after the operands X and Y
eg.

    input:  4.5 5.25 +
    output: 9.75

because the operand is added to the input stream last it can be executed immediately
thus no '=' sign is required to invoke the calculation.

An Infix calculator places operators between operands X and Y
eg.

    input:  4.5 + 525 =
    output: 9.75

Problem:

## Given:

    Input of numbers and operators in postfix order onto a stack.  
    When operators are entered they operate on the top 1 or more numerical entries as appropriate.
    Show a rolling stack display.

### Bonus:

allow for stack operations

- clear:    empty the stack
- drop:     drop the top item on the stack
- swap:     swap the top 2 elements on the stack
- roll:     rotate the top Y elements on the stack


## Sample:

    Input:   3.5 2 + 4.25 4 x - 15 20
Output:

    11.5
    15
    20.10

### Reason:

The stack should behave as below:

#### step 1:

|   |
|---|
|   |



| input | stack | notes |
|-------|-------|-------|
|  3.5  |  3.5  |       |


#### step 2:

 | input | stack | notes |
 |-------|-------|-------|
 |  2    |  3.5  |  this is now the bottom of the stack  |
 |       |  2    |       |

#### step 3:

 | input | stack | notes |
 |-------|-------|-------|
 |  +    |  5.5  |  3.5 + 2 == 5.5  |
 |       |       |       |

#### step 4:

 | input | stack | notes |
 |-------|-------|-------|
 |  4.25 |  5.5  |  this is now the bottom of the stack |
 |       | 4.25  |       |

#### step 5:

 | input | stack | notes |
 |-------|-------|-------|
 |  4    |  5.5  |    |
 |       |  4.25 |       |
 |       |  4    | This is the top of the stack |

#### step 6:

 | input | stack | notes |
 |-------|-------|-------|
 |  *    |  5.5  |       |
 |       |  17   |   4 * 4.25 == 17     |

#### step 7:

 | input | stack | notes |
 |-------|-------|-------|
 |  -    | 11.5  | 5.5 - 17 == -11.5 : X is always on the bottom of the stack roll. |
 |       |       |       |


#### step 8:

 | input | stack | notes |
 |-------|-------|-------|
 |   15  | 11.5  |       |
 |       | 15    |       |


#### step 9:

 | input | stack | notes |
 |-------|-------|-------|
 |   20  | 11.5  |       |
 |       | 15    |       |
 |       | 20    |       |



