# Developer Puzzles

Candidate puzzles are small coding challenges given to developers.

We want to see how well developers write their code, and especially how they test their code.  
Each challenge is fairly simple to solve, although they get progressively more difficult near the bottom of the list.

## Defined Challenges

- [Check Writer](puzzles/english-check-writer.md)
- [Post-fix Calculator](puzzles/postfix-calculator.md)
- [Black Jack](puzzles/black-jack.md)
- [Integer Spiral](puzzles/integer-spiral.md)
- [Game of Life](puzzles/game-of-life.md)
- [Mystic Square](puzzles/mystic-square.md)

# Tech Stack

While these puzzles can be done in any language, each project has a specific tech stack that they are targeting.  
Make sure that you use the languages and frameworks targeted by the project you wish to join.

Check one of these separate documents for tech stack expectations:

- [TMNG](TMNG.md)
- [MyTmo](MyTmo.md)
- [MPCS](MPCS.md)


All solutions should provide a UI, whether this is

- a console app
- a web api service
- a browser application
- some other language or platform targeted by your respective project.


# Caution - No Cheating !

Each challenge can be found online with multiple reference solutions.
To take advantage of this challenge **do not use google** to solve the problem.

We have seen most of the solutions available on the web.  If you can google it, so can me.
If you plagiarize your solution, we will likely know.  You may still try to impress us with your tests,
but we will know that you copied the solution -
This is a personal integrity issue.
**don't do it**

## Focus

Developers should concentrate on solving these puzzles with high quality code,
and exemplification of [software craftsmanship](https://en.wikipedia.org/wiki/Software_craftsmanship).  
This includes a thorough test automation suite for unit, integration and ui/functional tests.

Emphasis is on code quality, structure, design and most importantly - tests.


# Build Tools

make sure that you provide adequate instructions in your README.md on how to

- compile
- execute
- run unit tests
- run functional tests


## Java / AEM

For Java solutions you should use maven as the build tool and project structure.
You can use a maven archetype to start you application.


## NodeJS / Angular(JS)

For NodeJS / AngularJS solutions **DO NOT** use any public seed starters or generators,
eg.

- [angular-seed](https://github.com/angular/angular-seed)
- [yeoman](http://yeoman.io/)
- [lineman](http://www.linemanjs.com/)


Try to create the necessary build scripts and configurations yourself using the following minimal setup:

- **yarn** for node package management.
    - _yarn_ is quickly replacing _npm_ as the preferred nodejs package manager
    - *Do not use bower*.

- **karma** as the unit test runner
    - **mocha** for unit test framework
    - **chai** for unit and functional test assertion (assert, expect, should)
    - **sinon** for unit test mock, stub, spy

- **protractor** as the functional/UI test runner

- **eslint** for static analysis of code quality.


### Bonus:

Show good UI design with animations

### Bonus:

_For an added challenge, and learning of preferred tools, try adding the following:_

- Create your own build env using package.json scripts rather than a build tool like grunt, gulp or webpack
- Business Readable UI Functional tests with **cucumber** (and protractor)
    - [getting started with Protractor and Cucumber](https://semaphoreci.com/community/tutorials/getting-started-with-protractor-and-cucumber)
- **SASS** (instead of plain CSS)
- **material design** () *instead of twitter bootstrap*
    - [angular-material js](https://material.angularjs.org/latest/)
    - [angualr material]*https://material.angular.io/)
    - 
These are the libraries and tools that we use and that we are most interested in seeing you use.


---



# Candidate Interviews

This puzzle should take between 4 - 16 hours to complete, but feel free to take more time if you need.
Take the time to make sure your code is clean and presentable and well tested.  Timebox this to no more than 3 days.


# Project on-boarding and training:

Project on-boarding is more intense because we want to make sure that you fully understand our development environment
and the foundation basis of our code.  For this purpose we want you to review our published
[coding standards guidelines](https://tmobile.atlassian.net/wiki/spaces/MAG/pages/194675089/c.+Coding+Guidelines+and+Best+Practices)

You will likely need a full sprint to complete all aspects fo the on-boarding project.

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


## AEM / Java

TBD.


## Angular\[JS|\d+\]

For on-boarding exercises you must create the build environment yourself, do not copy the seed environment settings.
The goal here is learning thru research and exercise of your problem solving muscles.  Once you have a reasonable
build environment working you can reference the seed to see how well you did.  **Do not cheat**;
make sure you try to complete this part of the exercise to the best of your ability before you reference the seed.

To start you should solve a puzzle with AngularJS 1.6 and ES5.  This is the basis of the TMNG project.

Once you have achieved a high level of reviewed code quality you should then re-solve the same puzzle using the latest Angular+ (4,5,6...) with Typescript.  
For the Angular+ solution you will use the angular-cli to scaffold and build your solution, do not use the **seed** starter from the AngularJS solution.

When you are done you will have a solid understanding of not only the basics of both AngularJS and Angular+,
and how to produce quality code that meets our coding standards and quality guidelines,
but you will be able to compare and contrast the relative strengths and weaknesses of the two frameworks.



