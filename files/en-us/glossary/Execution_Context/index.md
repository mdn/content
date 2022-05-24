---
title: Execution_context
slug: Glossary/Execution_context
tags:
  - Glossary
  - JavaScript
---

An **execution context** is the environment in which Javascript code executes. It consists of the {{glossary("scope")}}, the information that links a variable name with the actual variable storing data, and of the binding of the {{jsxref("this")}} reference, the object `this` refers to.

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
const square4 = square(4); 

```

### Components of Execution Context:

#### 1. Memory component/ Variable Environment

Before the Javascript Code starts executing, memory will be allocated to all the variable(s) and function(s). This phase is known as Memory creation Phase.

| Memory Component                                  | Code Component    | 
| --------------------------------------------------| :----------------:| 
| n : undefined                                     |                   | 
| square: f() { var ans = num* num; return ans}     |                   |  
| square2: undefined                                |                   |
| square4: undefined                                |                   |

For variable(s), key is the variable name itself and value is undefined (even if the variable is initialized).
For function(s), key is the function name and value is body of the code.

#### 2. Code component/ Thread Of Execution

This is the second phase also known as `Code Execution Phase`, where JavaScript code starts executing line by line and it starts executing the code now.
It starts assigning the values to the variables in memory.
Code Component is also called as `Thread of Execution`



| Memory Component                                  | Code Component    | 
| --------------------------------------------------| :----------------:| 
| n : 2                                             |                   | 
| square: f() { var ans = num* num; return ans}     |                   |  
| square2: undefined                                |                   |
| square4: undefined                                |                   |




| Memory Component                                  |                   Code Component                | 
| --------------------------------------------------| :----------------------------------------------:| 
| n : 2                                             |                                                 | 
| square: f() { var ans = num* num; return ans}     |   ------------------------------------------|   |
| square2: undefined                                |   | __memory___________ |_______code_______ |   |
| square4: undefined                                |   |                     |                   |   |
|                                                   |   |       num = 2       |                   |   |
|                                                   |   |       ans = 4       |      return ans   |   |
|                                                   |   | ________________________________________|   |   
|                                                   |                                                 |
-------------------------------------------------------------------------------------------------------




| Memory Component                                  |                   Code Component                | 
| --------------------------------------------------| :----------------------------------------------:| 
| n : 2                                             |                                                 | 
| square: f() { var ans = num* num; return ans}     |   ------------------------------------------|   |
| square2: 4                                        |   | __memory___________ |_______code_______ |   |
| square4: undefined                                |   |                     |                   |   |
|                                                   |   |       num = 2       |                   |   |
|                                                   |   |       ans = 4       |      return ans   |   |
|                                                   |   | ________________________________________|   |   
|                                                   |                                                 |
-------------------------------------------------------------------------------------------------------



#### Now, the Execution context inside the code component of Global Execution context gets deleted.



| Memory Component                                  | Code Component    | 
| --------------------------------------------------| :----------------:| 
| n : 2                                             |                   | 
| square: f() { var ans = num* num; return ans}     |                   |  
| square2: 4                                        |                   |
| square4: undefined                                |                   |


Now, again the execution context will be created for the square function, for assigning the value in `square4`.



| Memory Component                                  |                   Code Component                | 
| --------------------------------------------------| :----------------------------------------------:| 
| n : 2                                             |                                                 | 
| square: f() { var ans = num* num; return ans}     |   ------------------------------------------|   |
| square2: 4                                        |   | __memory___________ |_______code_______ |   |
| square4: undefined                                |   |                     |                   |   |
|                                                   |   |       num = 4       |                   |   |
|                                                   |   |       ans = 16      |      return ans   |   |
|                                                   |   | ________________________________________|   |   
|                                                   |                                                 |
-------------------------------------------------------------------------------------------------------




| Memory Component                                  |                   Code Component                | 
| --------------------------------------------------| :----------------------------------------------:| 
| n : 2                                             |                                                 | 
| square: f() { var ans = num* num; return ans}     |   ------------------------------------------|   |
| square2: 4                                        |   | __memory___________ |_______code_______ |   |
| square4: 16                                       |   |                     |                   |   |
|                                                   |   |       num = 4       |                   |   |
|                                                   |   |       ans = 16      |      return ans   |   |
|                                                   |   | ________________________________________|   |   
|                                                   |                                                 |
-------------------------------------------------------------------------------------------------------

Now, again the local execution_context gets deleted after assigning the value in `square4`.


| Memory Component                                  | Code Component    | 
| --------------------------------------------------| :----------------:| 
| n : 2                                             |                   | 
| square: f() { var ans = num* num; return ans}     |                   |  
| square2: 4                                        |                   |
| square4: 16                                       |                   |


So javascript is done executing the code so the whole execution context will be deleted.





## See also

- {{glossary("Hoisting")}} 
- {{glossary("Scope")}}
