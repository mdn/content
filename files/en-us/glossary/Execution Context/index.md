---
title: Execution context
slug: Glossary/Execution Context
tags:
  - Glossary
  - JavaScript
---

Everything in JavaScript happens/executes inside **Execution Context**.

#### Example:
```js
const n = 2;

function square(num) {
  const ans = num * num;
  return ans;
}

const square2 = square(n);
const square4 = square(4);

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

### Two golden Rules of Hoisting:
So, the concept of Hoisting can be explained now based on the Execution Context.

1. Variable(s) are scanned and are made undefined(Memory Creation Phase).
2. Function(s) are scanned and are made available(Memory Creation Phase).
