---
title: Loop
slug: Glossary/loop
tags:
  - CodingScripting
  - control flow
  - programming
---

A loop is a sequence of instructions that is continually repeated until a certain condition is met in {{Glossary("computer programming")}}. An example would be the process of getting an item of data and changing it, and then making sure some {{Glossary("conditional", "condition")}} is checked such as, if a counter has reached a prescribed number.

JavaScript offers three kinds of basic loop syntax:

- [`while`](/en-US/docs/Web/JavaScript/Reference/Statements/while)
- [`do...while`](/en-US/docs/Web/JavaScript/Reference/Statements/do...while)
- [`for`](/en-US/docs/Web/JavaScript/Reference/Statements/for)

A typical workflow for a loop looks like:

1. Check the condition. If the condition holds (is {{glossary("truthy")}}), continue to step 2; otherwise, go to step 5.
2. Execute the statement associated with the loop.
3. (For `for` loops) Execute an afterthought. (Such as incrementing the counter)
4. Go to step 1.
5. Execute the first statement after the loop statement.

You can use control flow statements like [`break`](/en-US/docs/Web/JavaScript/Reference/Statements/break) and [`continue`](/en-US/docs/Web/JavaScript/Reference/Statements/break) to break out of a loop (go to step 5) or to skip to the next loop iteration (go to step 1).

`do...while` starts with step 2; everything else starts with step 1. Step 2 and step 3, by their nature, should potentially change the condition's value. If the condition remains `false` forever, the loop is said to be _infinite_. Infinite loops can still be terminated through [`break`](/en-US/docs/Web/JavaScript/Reference/Statements/break), [`return`](/en-US/docs/Web/JavaScript/Reference/Statements/return), or [`throw`](/en-US/docs/Web/JavaScript/Reference/Statements/throw).

There are two other specialized loop syntaxes:

- [`for...in`](/en-US/docs/Web/JavaScript/Reference/Statements/for...in)
- [`for...of`](/en-US/docs/Web/JavaScript/Reference/Statements/for...of)

In these loops, the language checks the condition and prepares a looping variable for you, and you don't need to maintain a counter or provide a condition yourself.

## See also

- [Control flow](https://en.wikipedia.org/wiki/Control_flow#Loops) on Wikipedia
- [Loops and iteration guide](/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)
