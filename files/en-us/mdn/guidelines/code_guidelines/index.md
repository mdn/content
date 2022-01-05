---
title: Code example guidelines
slug: MDN/Guidelines/Code_guidelines
tags:
  - CSS
  - Code
  - Guide
  - Guidelines
  - HTML
  - JavaScript
  - MDN Meta
  - Shell
---
{{MDNSidebar}}

This document series outlines the coding guidelines and best practices we use for writing demos, code snippets, interactive examples, etc, for use on MDN.

If you are looking for guidelines to follow when writing your code examples, you have come to the right place. The biggest advantage to adhering to these guidelines is that it will foster consistency across our samples and demos on MDN, which increases readability and comprehension overall.

> **Note:** If you want advice on the styling of code as it appears on an MDN article, rather than the code content, see our [Writing style guide](/en-US/docs/MDN/Guidelines/Writing_style_guide#code_sample_style_and_formatting).

## Article structure

This article contains general high-level best practices for writing MDN code examples. Its subarticles are as follows:

- [General guidelines for all code](/en-US/docs/MDN/Guidelines/Code_guidelines/General) — both syntactical and for styling/displaying examples
- [HTML guidelines](/en-US/docs/MDN/Guidelines/Code_guidelines/HTML)
- [CSS guidelines](/en-US/docs/MDN/Guidelines/Code_guidelines/CSS)
- [JavaScript guidelines](/en-US/docs/MDN/Guidelines/Code_guidelines/JavaScript)
- [Shell prompt guidelines](/en-US/docs/MDN/Guidelines/Code_guidelines/Shell)

## General best practices

This section provides quick general best practices for creating an understandable minimal code sample to demonstrate usage of a specific feature or function.

Code samples need to be:

- simple enough to be understandable, but
- complex enough to do something interesting, and preferably useful.

There is one overarching consideration that you need to keep in mind: **Readers will copy and paste the code sample into their own code, and may put it into production.**

Therefore, you need to make sure that the code example is usable and follows generally accepted best practices, and **does not** do anything that will cause an application to be insecure, grossly inefficient, bloated, or inaccessible. If the code example is not runnable or production-worthy, be sure to include a warning in a code comment and in the explanatory text — if it is a snippet and not a full example, make this clear. This also means that you should provide **all** of the information necessary to run the example including any dependencies and setup.

Code samples should be as self-contained and easy to understand as possible. The aim is not necessarily to produce efficient, clever code that impresses experts and has great functionality, but rather to produce reduced working examples that can be understood as quickly as possible.

Further general best practices are as follows:

- The sample should be short and ideally only show the feature you are immediately interested in.
- **Only** include code that is essential for the example. A large amount of non-relevant code can easily distract or confuse the audience. If you want to provide a full, more lengthy, example put it in one of our [Github repos](https://github.com/mdn/) (or a JSBin, Codepen, or similar) and then provide the link to the full version above or below the sample.
- Don't include unnecessary server-side code, libraries, frameworks, preprocessors, and other such dependencies — they make the code less portable, and harder to run and understand. Use vanilla code where possible.
- Don't assume knowledge of any libraries, frameworks, preprocessors, or other non-native features. For example, use class names that make sense within the example rather than classnames that make sense to BEM or Bootstrap users.
- Write your code as cleanly and understandably as possible, even if it is not the most efficient way to do it.
- Don't use bad practices for brevity (such as presentational elements like {{HTMLElement("big")}} or {{domxref("Document.write", "document.write()")}}); do it correctly.
- In the case of API demos, if you are using multiple APIs together point out what APIs are included, and what features come from where.
