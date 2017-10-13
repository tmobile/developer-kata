# Developer Puzzles

Candidate puzzles are small coding challenges given to developers.

We want to see how well developers write their code, and especially how they test their code.  
Each challenge is fairly simple to solve, although they get progressively more difficult near the bottom of the list.

## Defined Challenges

- [Check Writer](docs/english-check-writer.md)
- [Post-fix Calculator](docs/postfix-calculator.md)
- [Black Jack](docs/black-jack.md)
- [Integer Spiral](docs/integer-spiral.md)
- [Game of Life](docs/game-of-life.md)
- [Mystic Square](docs/mystic-square.md)

# TMNG Stack

For TMNG the foundational stack is AngularJS 1.6.x with ES5, or AEM 6.1 with Java 8 and Sightly.
We are upgrading to Angular5 and AEM 6.3.


## Caution

Each challenge can be found online with multiple reference solutions.
To take advantage of this challenge **do not** use google to solve the problem.
We have seen most of the solutions available on the web.  If you plagiarize your solution,
we will likely know.  You may still try to impress us with your tests, but we will know
that you copied the solution - This is a personal integrity issue.  **don't do it**

## Focus

Developers should concentrate on solving these puzzles with high quality code,
and exemplification of [software craftsmanship](https://en.wikipedia.org/wiki/Software_craftsmanship).  
This includes a thorough test automation suite for unit, integration and ui/functional tests.

Emphasis is on code quality, structure, design and most importantly - tests.

## Language / Frameworks

While these puzzles can be done in any language, for the TMNG project we want to see
solutions in AngularJS and AEM(Java). All solutions should provide a UI, whether this is a stand-alone
AngularJS application or an AngularJS application that connects to a java web service, or a java console application.


# AEM / Java solutions

For Java solutions you should use maven as the build tool and project structure,
or if you are building a simple console app you can use javac from command line

make sure that you provide adequate instructions in your README.md on how to compile, execute and test your solution.




# AngularJS / Angular solutions


## Seed starters

For AngularJS solutions **DO NOT** use any public seed starters or generators
(eg.
[angular-seed](https://github.com/angular/angular-seed),
[yeoman](http://yeoman.io/),
[lineman](http://www.linemanjs.com/)
...)

Try to create the necessary build scripts and configurations yourself using the following minimal setup:

- **npm** for node package management.  *Do not use bower*.
    - use npm *scripts* for build commands (*start*, *test*, *protractor* ...)
        - **Do not use** *grunt*, *gulp*, *webpack* or any other script runner.

- **karma** as the unit test runner
    - **mocha** for unit test framework
    - **chai** for unit and functional test assertion (assert, expect, should)
    - **sinon** for unit test mock, stub, spy

- **protractor** as the functional/UI test runner

- **eslint** for static analysis of code quality.


#### Bonus:

_For an added challenge, and learning of preferred tools, try adding the following:_

- **cucumber** (with protractor)
    - [getting started with Protractor and Cucumber](https://semaphoreci.com/community/tutorials/getting-started-with-protractor-and-cucumber)
- **LESS** (instead of SASS, Stylus or plain CSS)
- **material design** (angular-material)
    - *instead of twitter bootstrap*

These are the libraries and tools that we use and that we are most interested in seeing you use.


### Shortcut

If you are not up to the challenge of creating a build/work environment then
you can use the included seed folder as your starter.

For AngularJS solutions **DO NOT** use any public seed starters or generators
(eg.
[angular-seed](https://github.com/angular/angular-seed),
[yeoman](http://yeoman.io/),
[lineman](http://www.linemanjs.com/)
...)

Simply copy the contents of the  **/seed** folder in this repository to the root of your project folder
and add your solution scripts to the **/app** folder.
This simple seed has a readme that explains how to use it.

# Candidate Interviews

This puzzle should take between 2 - 8 hours to complete, but feel free to take more time if you need.
Take the time to make sure your code is clean and presentable and well tested.  Timebox this to no more than 3 days.


# Project on-boarding and training:

Project on-boarding is more intense because we want to make sure that you fully understand our development environment
and the foundation basis of our code.  For this purpose we want you to review our published
[coding standards guidelines](https://tmobile.atlassian.net/wiki/spaces/MAG/pages/194675089/c.+Coding+Guidelines+and+Best+Practices)


## AEM / Java

TBD.


## Angular\[JS|\d+\]

For on-boarding exercises you must create the build environment yourself, do not copy the seed environment settings.
The goal here is learning thru research and exercise of your problem solving muscles.  Once you have a reasonable
build environment working you can reference the seed to see how well you did.  **Do not cheat**;
make sure you try to complete this part of the exercise to the best of your ability before you reference the seed.

To start you should solve a puzzle with AngularJS 1.6 and ES5.  This is the basis of the TMNG project.

Pay particular attention to :

- the quality of your code
    - we read code much more than we write code, so write your code in a very understandable **format** and **structure** with **good naming conventions** to make reading as painless as possible.
        - the *read-ability* of your code
        - the structure of your solution
        - the linted quality of your source files
- the structure of your unit tests
- the completeness of your unit test
    - particularly the logical reason and value for each test.


Once you have completed your solution you should enter a code review and refactor loop until you clean-up your code to meet current codings standards and guidelines.

Once you have achieved a high level of reviewed code quality you should then re-solve the same puzzle using the latest Angular+ (4,5,6...) with Typescript.  
For the Angular+ solution you will use the angular-cli to scaffold and build your solution, do not use the **seed** starter from the AngularJS solution.

When you are done you will have a solid understanding of not only the basics of both AngularJS and Angular+,
and how to produce quality code that meets our coding standards and quality guidelines,
but you will be able to compare and contrast the relative strengths and weaknesses of the two frameworks.


