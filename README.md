# Developer Puzzles

Candidate puzzles are small coding challenges given to developers as either an entrance requirement or training and on-boarding.

We want to see how well developers write their code, and especially how they test their code.



### Submitting your Solution:

You can fork/clone this repository or simply copy the specific puzzle definition into your own repository.
If you clone the repository you will not be able to push your changes as it is locked to READ ONLY.
If you fork the repository please do not submit a pull request.

When you are completed with the challenge simply send your reviewer a link to your repo.



## Defined Challenges

Each challenge is fairly simple to solve, although they get progressively more difficult near the bottom of the list.

### Algorithms:

- [Check Writer](puzzles/algorithms/english-check-writer.md)
- [Post-fix Calculator](puzzles/algorithms/postfix-calculator.md)
- [Black Jack](puzzles/algorithms/black-jack.md)
- [Integer Spiral](puzzles/algorithms/integer-spiral.md)
- [Game of Life](puzzles/algorithms/game-of-life.md)
- [Mystic Square](puzzles/algorithms/mystic-square.md)

### Web API:

- [Weather](puzzles/web-api/weather-man.md)
- [Stock Broker](puzzles/web-api/stock-broker.md

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

Please read the additional requirements for [on-boarding and training exercises](Training.md).