---
title: Signature (functions)
slug: Glossary/Signature/Function
page-type: glossary-definition
---

{{GlossarySidebar}}

A **function signature** (or _type_ signature, or _method_ signature) defines input and output of {{Glossary("Function", "functions")}} or {{Glossary("Method", "methods")}}.

A signature can include:

- {{Glossary("Parameter", "parameters")}} and their {{Glossary("Type", "types")}}
- a return value and type
- {{Glossary("Exception", "exceptions")}} that might be thrown or passed back
- information about the availability of the method in an {{Glossary("OOP", "object-oriented")}} program (such as the keywords `public`, `static`, or `prototype`).

## In depth

### Signatures in JavaScript

{{Glossary("JavaScript")}} is a _loosely typed_ or a _dynamic_ language. That means you don't have to declare the type of a variable ahead of time. The type will get determined automatically while the program is being processed. A signature in JavaScript can still give you some information about the method:

```js
MyObject.prototype.myFunction(value);
```

- The method is installed on an {{Glossary("object")}} called `MyObject`.
- The method is installed on the `prototype` of `MyObject` (thus it is an {{Glossary("Method", "instance method")}}) as opposed to being a {{Glossary("static method")}}.
- The name of the method is `myFunction`.
- The method accepts one parameter, which is called `value` and is not further defined.

### Signatures in Java

In {{Glossary("Java")}}, signatures are used to identify methods and classes at the level of the virtual machine code. You have to declare types of variables in your code in order to be able to run the Java code. Java is _strictly typed_ and will check any parameters at compilation time if they are correct.

```java
public static void main(String[] args)
```

- The `public` keyword is an access modifier and indicates that this method can be called by any object.
- The `static` keyword indicates that this method is a class method as opposed to being an instance method.
- The `void` keyword indicates that this method has no return value.
- The name of the method is `main`.
- The method accepts one parameter of type String Array. It is named `args`.

## See also

- [Java internal type signatures](https://en.wikipedia.org/wiki/Type_signature#Java) on Wikipedia
