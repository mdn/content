---
title: Attribute
slug: Glossary/Attribute
tags:
  - CodingScripting
  - Glossary
  - HTML
---
An **attribute** extends an HTML or XML {{Glossary("element")}}, changing its behavior or providing metadata.

An attribute always has the form `name="value"` (the attribute's identifier followed by its associated value).

You may see attributes without the equals sign or a value. That is a shorthand for providing the empty string in HTML, or the attribute's name in XML.

```html
<input required>
<!-- is the same as… -->
<input required="">
<!-- or -->
<input required="required">
```

## Reflection of an attribute

Attributes may be _reflected_ into a particular property of the specific interface.
It means that the value of the attribute can be read by accessing the property,
and can be modified by setting the property to a different value.

For example, the `placeholder` below is reflected into {{domxref("HTMLInputElement.placeholder")}}.

Considering the follow HTML:

```html
<input placeholder="Original placeholder">
```

We can check the reflection between {{domxref("HTMLInputElement.placeholder")}} and the attribute using:

```js
let input = document.getElementsByTagName("input")[0];
let attr = input.getAttributeNode("placeholder")
console.log(attr.value);
console.log(input.placeholder); //Returns the same value as `attr.value`
```

and

```js
let input2 = document.getElementsByTagName("input")[0];
let attr2 = input.getAttributeNode("placeholder")
console.log(attr2.value); // Returns `Original placeholder`
input2.placeholder = "Modified placeholder"; // Also change the value of the reflected attribute.
console.log(attr2.value); // Returns `Modified placeholder`
```

## See also

- [HTML attribute reference](/en-US/docs/Web/HTML/Attributes)
- Information about HTML's [global attributes](/en-US/docs/Web/HTML/Global_attributes)
