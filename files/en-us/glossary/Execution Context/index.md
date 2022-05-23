---
title: Execution context
slug: Glossary/Execution_context
tags:
  - Glossary
  - JavaScript
---

An **execution context** is the environment in which Javascript code executes. It contains the information that links a variable name with the actual variable storing data, either inside the execution context, if they are declared in it, or outside it if not. The binding of the {{jsxref("this")}} reference is also done in the execution context.

When running, the JavaScript engine initially creates the _global execution context_, then a new context is created for each function or `eval` call.

Variables created using `let` and constants are available in the _current_ execution context only, while variables created using `var` are _hoisted_ to the _global_ execution context and available everywhere, when not hidden by another declaration.

#### Example:
```js
const n = 2;  // n is available to the global execution context

function square(num) { // the square function creates its own execution context, when num is declared
  const ans = num * num; // ans is only available to the function execution context
  return ans;
}

const square2 = square(n); // square2 is available to the global execution context
const square4 = ans; // ans is undefined as it was defined in another execution context

```

### Inside the Execution Context there two components:

#### 1. Memory component/ Variable Environment
This is the first phase also known as `Memory Creation Phase` in which, JavaScript will allocate memory to all its variables and functions.

Variables and functions values can be stored in a  key-value format. Memory component is also called as `variable environment`.


| Memory Component                                  | Code Component    | 
| --------------------------------------------------| :----------------:| 
| n : undefined                                     |                   | 
| square: f() { var ans = num* num; return ans}     |                   |  
| square2: undefined                                |                   |
| square4: undefined                                |                   |

For variable(s), key is the variable name itself and value is undefined (even if the variable is initialized).
For function(s), key is the function name and value is body of the code.

#### 2. Code component/ Thread Of Execution
This is the second phase also known as `Code Execution Phase`, where JavaScript will run again line by line and it starts executing the code now.

It starts assigning the values to the variables in memory.

Code Component is also called as `Thread of Execution`. 

#### When the code is run `Global Execution Context` is created.

#### It is due to the **Execution Context**, the variable(s) name and function(s) are hoisted because of allocation in memory.


## See also

- {{glossary("Hoisting")}} 
