## Mystic Square:

    https://en.wikipedia.org/wiki/15_puzzle

   Given a sequence of integers from 0 to 15 in any order.
   The array of numbers will overlay a 4x4 matrix.

   The '**0**' digit is considered the '**empty space**'

   Solve the puzzle to get all integers (1-15) in proper sequence.
   Keep track of all moves to print out solution.  

### Rules:
   The '0' value is considered an empty space.  
   This is the only space that any _tile_ can move into.

   Another way to think of this is the '0' value is the tile that always gets swapped with any other neighboring tile.
   All moves go thru the empty space ('0' tile).

   Each number can only move left, right, up or down.  
   Numbers on the borders of the matrix are constrained and cannot move across border:

       assuming matrix index 0,0 is top left and 3,3 is bottom right then
       any value at 0,0 can only move right or down, 
       any value at 0,1 can only move right, up or down…

### Bonus:

   Create UI that allows user to enter tile values in a 4x4 cell matrix visually.

### Bonus:

    Animate each move made by the game engine

### Bonus:

    Display list of moves made during game play.   

### Bonus:

   What is the shortest path to a solution?

   This will require some heuristics and possibly various search modes.


### Example

Start State:

|   |   |   |   |
|---|---|---|---|
| 4 | 9 | 2 | 13|
| 3 |   | 12| 7 |
| 1 | 15| 3 | 5 |
| 6 | 10| 8 | 11|

#### Possible first moves:
3 - right
12 - left
9 - down
15 - up

resulting state after move 9 down

|   |   |   |   |
|---|---|---|---|
| 4 |   | 2 | 13|
| 3 | 9 | 12| 7 |
| 1 | 15| 3 | 5 |
| 6 | 10| 8 | 11|

#### Possible moves
4 - right
2 - left
9 - up

----
#### Valid solutions:

valid solution 1:

|   |   |   |   |
|---|---|---|---|
| 12| 13| 14| 15|
| 8 | 9 | 10| 11|
| 4 | 5 | 6 | 7 |
|   | 1 | 2 | 3 |

valid solution 2:

|   |   |   |   |
|---|---|---|---|
| 13| 14| 15|   |
| 9 | 10| 11| 12|
| 5 | 6 | 7 | 8 |
| 1 | 2 | 3 | 4 |

What was the shortest path (least number of moves) to achieve a solution.
Output the sequence of moves: [{ number, dir [n|s|e|w] },...]

```
[ {9,'s'}, {4,'e'} ... ]
```

or 1 move per line:
```
1: {9,'s'}
2: {4,'e'} 
n: ...
 ```
