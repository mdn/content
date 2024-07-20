---
title: Abstraction
slug: Glossary/Abstraction
page-type: glossary-definition
---

{{GlossarySidebar}}

**Abstraction** in {{Glossary("computer programming")}} is a way to reduce complexity and allow efficient design and implementation in complex software systems. It hides the technical complexity of systems behind simpler {{Glossary("API", "APIs")}}.

## Advantages of Data Abstraction

- Helps the user to avoid writing low-level code.
- Avoids code duplication and increases reusability.
- Can change the internal implementation of a class independently without affecting the user.
- Helps to increase the security of an application or program as only important details are provided to the user.

## Example

```js
class ImplementAbstraction {
  // method to set values of internal members
  set(x, y) {
    this.a = x;
    this.b = y;
  }

  display() {
    console.log(`a = ${this.a}`);
    console.log(`b = ${this.b}`);
  }
}

const obj = new ImplementAbstraction();
obj.set(10, 20);
obj.display();
// a = 10
// b = 20
```

## See also

- [Abstraction](<https://en.wikipedia.org/wiki/Abstraction_(computer_science)>) on Wikipedia
