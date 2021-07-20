# Excuses-Generator
Small project on creating a random message generator when you need an excuse to ditch a hangout.

## Table of Contents
* [General Information](#general-information)
* [Technologies Used](#technologies-used)
* [Usage](#usage)
* [Project Status](#project-status)
* [Room for Improvement](#room-for-improvement)
* [Sources](#sources)
* [Contact](#contact)

## General Information
- Creates excuses for you so you don't have to think.
- No need to feel bad about ignoring you're friends messages.

## Technologies Used
- Javascript ES6
- Node.js

## Usage
- For now, you may create an array of excuses and pass it through the function `excuseGenerator()`
- The code looks like this:
```javascript
const excuseGenerator = arr => {
    let ranExcuse = arr[Math.floor(Math.random() * arr.length)];
    return ranExcuse;
}
```

## Project Status
- In progress

## Room for improvement
- Link to HTML & CSS so it can be an actual website.
- Create categories of events that you want to ditch.

## Sources
- [MDN Math methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)

## Contact
Email: jaimepangn@gmail.com
