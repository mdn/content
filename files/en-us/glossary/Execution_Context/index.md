---
title: Execution_Context
slug: Glossary/Execution_context
tags:
  - Glossary
  - JavaScript
---

When you write a JavaScript code, it gets interpreted by the {{glossary("Engine", "JavaScript engine")}}. To understand what happens behind the scenes, you need to be familiar with _execution context_. The concept of execution context is also important to understand other JavaScript concepts such as {{glossary("Hoisting")}}, {{glossary("Scope")}}, and {{glossary("Closure")}}.

An **Execution Context** is the environment in which a JavaScript code executes. The execution context consists of the {{glossary("scope")}}, which is the information that links a variable name with the actual variable storing data, and the binding of the {{jsxref("this")}} reference, which is the object that `this` refers to.

When the JavaScript engine runs, it first creates the _global execution context_ and then a new context is created for each function or `eval` call.

Variables created using `let` and `const` are available only in the _current_ execution context. On the other hand, variables created using `var` are _hoisted_ to the _global_ execution context and are available everywhere when not hidden by another declaration.

## Example

Let's understand how the JavaScript Engine is creating the execution context for the below code:

```js
const n = 2;  // n is available to the global execution context

function square(num) { // the square function creates its own execution context, when num is declared
  const ans = num * num; // ans is only available to the function execution context
  return ans;
}

const square2 = square(n); // square2 is available to the global execution context
const square4 = square(4); 
```

The components of execution context include:

i. Memory component

ii. Code component

iii. Deletion of execution context


1. Memory component/ Variable Environment

Before the Javascript Code starts executing, memory will be allocated to all the variable(s) and function(s). This phase is known as Memory creation Phase.

<img width="557" alt="memory allocation phase" src="https://user-images.githubusercontent.com/41745320/184529394-3a29808a-562c-4668-a2d3-d87e150e1e94.png">

For variable(s), key is the variable name itself and value is undefined (even if the variable is initialized).
For function(s), key is the function name and value is body of the code.

2. Code component/ Thread Of Execution

This is the second phase also known as `Code Execution Phase`, where JavaScript code starts executing line by line and it starts executing the code now.
It starts assigning the values to the variables in memory.
Code Component is also called as `Thread of Execution`

<img width="791" alt="Code Execution Phase-1" src="https://user-images.githubusercontent.com/41745320/184529515-82a6a2f1-4810-44c3-ab68-99083b2ef999.png">

<img width="781" alt="Code Execution Phase-2" src="https://user-images.githubusercontent.com/41745320/184529581-53b070f4-3100-46ce-a7bd-dd3d11a63375.png">

Now, the Execution context inside the code component of Global Execution context gets deleted.

3. Deletion Phase

When the execution of JavaScript code completes and values are allocated to the variable. the Execution context inside the code component of Global Execution context gets deleted.

<img width="595" alt="EC deleted inside code component" src="https://user-images.githubusercontent.com/41745320/184529679-b084aae1-a88b-4c20-8df8-c62c4b72875d.png">

Now, again the execution context will be created for the square function, for assigning the value in `square4`.

<img width="782" alt="EC created for square function" src="https://user-images.githubusercontent.com/41745320/184529775-7e4420ad-9dfc-47ba-8f48-a055e8ed6a27.png">

Now, again the local execution_context gets deleted after assigning the value in `square4`.

<img width="564" alt="EC delete after assigning square value" src="https://user-images.githubusercontent.com/41745320/184529806-3fd6d619-93bc-4b4f-839e-1507d378eea7.png">

So javascript is done executing the code so the whole execution context will be deleted.

`Note`: Whenever Execution Context is created, it will be pushed into the call-stack. Whenever it's done it will be pulled out of the stack.

So Call Stack maintains the order of execution of `Execution Context`.

## See also

- {{glossary("Hoisting")}} 
- {{glossary("Scope")}}
