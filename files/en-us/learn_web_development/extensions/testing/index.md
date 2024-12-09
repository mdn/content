---
title: Testing
slug: Learn_web_development/Extensions/Testing
page-type: learn-module
---

{{LearnSidebar}}

{{NextMenu("Learn_web_development/Extensions/Testing/Introduction", "Learn_web_development/Extensions")}}

Any codebase past a certain level of complexity needs to have a system of tests associated with it, to make sure that as new code is added, the codebase continues to function correctly and performantly, and continues to meet the users' needs. This module lists the fundamentals that you should start with.

> [!NOTE]
> This module was originally dedicated in its entirety to cross-browser testing, but we are in the process of refocusing it to cover testing in general. When we find the time, we are intending to update the material to cover General testing fundamentals, Functional and compat testing, and Usability testing.

## Prerequisites

Before starting this module, You should really have learnt the fundamentals of [HTML](/en-US/docs/Learn_web_development/Core/Structuring_content), [CSS](/en-US/docs/Learn_web_development/Core/Styling_basics), and [JavaScript](/en-US/docs/Learn_web_development/Core/Scripting).

## Tutorials

- [Introduction to cross browser testing](/en-US/docs/Learn_web_development/Extensions/Testing/Introduction)
  - : This article starts the module off by providing an overview of the topic of cross browser testing, answering questions such as "what is cross browser testing?", "what are the most common types of problems you'll encounter?", and "what are the main approaches for testing, identifying, and fixing problems?"
- [Strategies for carrying out testing](/en-US/docs/Learn_web_development/Extensions/Testing/Testing_strategies)
  - : Next, we drill down into carrying out testing, looking at identifying a target audience (e.g. what browsers, devices, and other segments should you make sure are tested), lo-fi testing strategies (get yourself a range of devices and some virtual machines and do ad hoc tests when needed), higher tech strategies (automation, using dedicated testing apps), and testing with user groups.
- [Handling common HTML and CSS problems](/en-US/docs/Learn_web_development/Extensions/Testing/HTML_and_CSS)
  - : With the scene set, we'll now look specifically at the common cross-browser problems you will come across in HTML and CSS code, and what tools can be used to prevent problems from happening, or fix problems that occur. This includes linting code, handling CSS prefixes, using browser dev tools to track down problems, using polyfills to add support into browsers, tackling responsive design problems, and more.
- [Implementing feature detection](/en-US/docs/Learn_web_development/Extensions/Testing/Feature_detection)
  - : Feature detection involves working out whether a browser supports a certain block of code, and running different code dependent on whether it does (or doesn't), so that the browser can always provide a working experience rather than crashing/erroring in some browsers. This article details how to write your own simple feature detection, how to use a library to speed up implementation, and native features for feature detection such as `@supports`.
- [Introduction to automated testing](/en-US/docs/Learn_web_development/Extensions/Testing/Automated_testing)
  - : Manually running tests on several browsers and devices, several times per day, can get tedious and time-consuming. To handle this efficiently, you should become familiar with automation tools. In this article, we look at what is available, how to use task runners, and the basics of how to use commercial browser test automation apps such as Sauce Labs and Browser Stack.
- [Setting up your own test automation environment](/en-US/docs/Learn_web_development/Extensions/Testing/Your_own_automation_environment)
  - : In this article, we will teach you how to install your own automation environment and run your own tests using Selenium/WebDriver and a testing library such as selenium-webdriver for Node. We will also look at how to integrate your local testing environment with commercial apps like the ones discussed in the previous article.

{{NextMenu("Learn_web_development/Extensions/Testing/Introduction", "Learn_web_development/Extensions")}}
