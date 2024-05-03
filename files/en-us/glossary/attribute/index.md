---
title: Attribute
slug: Glossary/Attribute
page-type: glossary-definition
---

{{GlossarySidebar}}

An **attribute** extends an HTML or XML {{Glossary("element")}}, changing its behavior or providing metadata.

An attribute always has the form `name="value"` (the attribute's identifier followed by its associated value).

You may see attributes without the equals sign or a value. That is a shorthand for providing the empty string in HTML, which is considered as a [boolean attribute](/en-US/docs/Web/HTML/Attributes#boolean_attributes). However, this is not allowed in XML, as XML required attribute name must follows an equals sign.

The following code shows a good example of a boolean attribute in HTML:

```html
<input required />
<!-- equivalent in HTML -->
<input required="" />
```

While in XML, code like this will throw a syntax error:

```xml-nolint example-bad
<tag id />
```

## Reflection of an attribute

Attributes may be _reflected_ into a particular property of the specific interface.
It means that the value of the attribute can be read by accessing the property,
and can be modified by setting the property to a different value.

For example, the `placeholder` below is reflected into {{domxref("HTMLInputElement.placeholder")}}.

Considering the following HTML:

```html
<input placeholder="Original placeholder" />
```

We can check the reflection between {{domxref("HTMLInputElement.placeholder")}} and the attribute using:

```js
const input = document.querySelector("input");
const attr = input.getAttributeNode("placeholder");
console.log(attr.value);
console.log(input.placeholder); // Prints the same value as `attr.value`

// Changing placeholder value will also change the value of the reflected attribute.
input.placeholder = "Modified placeholder";
console.log(attr.value); // Prints `Modified placeholder`
```

## See also

- [HTML attribute reference](/en-US/docs/Web/HTML/Attributes)
- Information about HTML's [global attributes](/en-US/docs/Web/HTML/Global_attributes)
- XML StartTag Attribute Recommendation in [W3C XML Recommendation](https://www.w3.org/TR/xml#sec-starttags)
