---
title: Cross browser testing
slug: Learn/Tools_and_testing/Cross_browser_testing
page-type: learn-module
---

{{LearnSidebar}}

This module focuses on testing web projects across different browsers. We look at identifying your target audience (e.g. what users, browsers, and devices do you most need to worry about?), how to go about doing testing, the main issues that you'll face with different types of code and how to mitigate them, what tools are most useful in helping you test and fix problems, and how to use automation to speed up testing.

> **Callout:**
>
> #### Looking to become a front-end web developer?
>
> We have put together a course that includes all the essential information you need to
> work towards your goal.
>
> [**Get started**](/en-US/docs/Learn/Front-end_web_developer)

## Prerequisites

You should really learn the basics of the core [HTML](/en-US/docs/Learn/HTML), [CSS](/en-US/docs/Learn/CSS), and [JavaScript](/en-US/docs/Learn/JavaScript) languages first before attempting to use the tools detailed here.

## Guides

- [Introduction to cross browser testing](/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/Introduction)
  - : This article starts the module off by providing an overview of the topic of cross browser testing, answering questions such as "what is cross browser testing?", "what are the most common types of problems you'll encounter?", and "what are the main approaches for testing, identifying, and fixing problems?"
- [Strategies for carrying out testing](/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/Testing_strategies)
  - : Next, we drill down into carrying out testing, looking at identifying a target audience (e.g. what browsers, devices, and other segments should you make sure are tested), lo-fi testing strategies (get yourself a range of devices and some virtual machines and do ad hoc tests when needed), higher tech strategies (automation, using dedicated testing apps), and testing with user groups.
- [Handling common HTML and CSS problems](/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS)
  - : With the scene set, we'll now look specifically at the common cross-browser problems you will come across in HTML and CSS code, and what tools can be used to prevent problems from happening, or fix problems that occur. This includes linting code, handling CSS prefixes, using browser dev tools to track down problems, using polyfills to add support into browsers, tackling responsive design problems, and more.
- [Handling common JavaScript problems](/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/JavaScript)
  - : Now we'll look at common cross-browser JavaScript problems and how to fix them. This includes information on using browser dev tools to track down and fix problems, using polyfills and libraries to work around problems, getting modern JavaScript features working in older browsers, and more.
- [Handling common accessibility problems](/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility)
  - : Next we turn our attention to accessibility, providing information on common problems, how to do simple testing, and how to make use of auditing/automation tools for finding accessibility issues.
- [Implementing feature detection](/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/Feature_detection)
  - : Feature detection involves working out whether a browser supports a certain block of code, and running different code dependent on whether it does (or doesn't), so that the browser can always provide a working experience rather than crashing/erroring in some browsers. This article details how to write your own simple feature detection, how to use a library to speed up implementation, and native features for feature detection such as `@supports`.
- [Introduction to automated testing](/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/Automated_testing)
  - : Manually running tests on several browsers and devices, several times per day, can get tedious and time-consuming. To handle this efficiently, you should become familiar with automation tools. In this article, we look at what is available, how to use task runners, and the basics of how to use commercial browser test automation apps such as Sauce Labs and Browser Stack.
- [Setting up your own test automation environment](/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/Your_own_automation_environment)
  - : In this article, we will teach you how to install your own automation environment and run your own tests using Selenium/WebDriver and a testing library such as selenium-webdriver for Node. We will also look at how to integrate your local testing environment with commercial apps like the ones discussed in the previous article.
