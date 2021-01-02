# Technical questions
### `Author: Peter C Gwaka`

Question 1
--------------------
How long did you spend on the coding assignment?\
What would you add to your solution if you had more time?\
If you didn't spend much time on the coding assignment then use this as an opportunity to
explain what you would add.
```
This assignmnet took me 8 hours 30mins
Backend: 4 hours
Frontend: 4 hours 30 mins

Given more time I would add a test coverage report
```

Question 2
--------------------
What was the most useful feature that was added to the latest version of your language of choice?\
Please include a snippet of code that shows how you've used it.

```
Language of choice: Javascript
Feature: Arrow functions
File: server/datasource.js
Usage: 
export const dataSources = () => ({ 
  coinMarketCap: new CoinMarketCapAPI(),
  exchangeRateAPI: new ExchangeRateAPI(),
})

```

Question 3
--------------------
How would you track down a performance issue in production?\
Have you ever had to do this?

```
Performance issues can vary on a single application.
There is the general application performance which is used by google and other search engines to rank an application and it's pages. This is usually based on some type of performace metrics such as first paint, application bundle size, none blocking calls to files that are required to render the application, image size and format, how long it takes to render the application on a browser and many other key performance indicators. General performace metrics can be measured using free tools such as lighthouse audit. The audit has a detailed report of the obvious issues that can fixed to improve an applications performace.

There are many platforms used to monitor and track an applciations performace.

In order to track down a performance issue in production, one must understand what type of a performace issue is affecting the application:
1) UI performace
2) Function performace
3) Query performace

Ui rendering performace can be measured using tools such as lighthouse audit. All performance issues require some kind of optimization to be carried out to the affected component or function. Increasing the logging level for your application generates more detail regarding any issue the developer is tracking. Queries can be monitored and information about their health and duration can be retrieved to understand their performance.

I have tracked down performace issues in production.

```

Question 4
--------------------
What was the latest technical book you have read or tech conference you have been to? What did you
learn?

```
Book: You don't know javascript                                                                  
Lesson: I got to understand how javascript really works and it's core mechanisms.
```

Question 5
--------------------
What do you think about this technical assessment?

```
This technical assessment was very interesting and different. It is not restrictive and allows a candidate to express themself in solving the given problem in a language or manor that suits them.
```

Question 6
--------------------
Please, describe yourself using JSON.

```
{
  "name": "Peter",
  "middlename": "Claver",
  "lastname": "Gwaka",
  "nickname": "Papa P"
  "age": 35,
  "nationality": "Zimbabwean",
  "livesin": "Johannesburg",
  "passions": [
    "Programming",
    "Fintech",
    "Teaching others"
  ],
  "interests": [
    "Travelling",
    "Culture",
    "Human Psychology",
    "Blockchain"
  ],
  "hobbies": [
    "basketball",
    "hiking",
    "Gaming"
  ],
  "dreams": [
    "To make this world a better place!"
  ],
}
```
