---
title: 'HTML attribute: for'
slug: Web/HTML/Attributes/for
tags:
  - Attribute
  - Attributes
  - HTML
  - for
  - Reference
spec-urls:
  - https://html.spec.whatwg.org/multipage/forms.html#attr-label-for
  - https://html.spec.whatwg.org/multipage/form-elements.html#attr-output-for
---

{{HTMLSidebar}}

The **`for`** attribute is an allowed attribute for {{htmlelement("label")}} and {{htmlelement("output")}}. When used on a `<label>` element it indicates the form element that this label describes. When used on an `<output>` element it allows for an explicit relationship between the elements that represent values which are used in the output.

## Usage

When used as an attribute of `<label>`, the `for` attribute has a value which is the `id` of the form element it relates to.

```html
<label for="username">Your name</label>
<input type="text" id="username">
```

When used as an attribute of `<output>`, the `for` attribute has a value which is a space separated list of the `id` values of the elements which are used to create the output.

```html
<input type="range" id="b" name="b" value="50"> +
<input type="number" id="a" name="a" value="10"> =
<output name="result" for="a b">60</output>
```

## Examples

See examples of usage on the element pages for {{htmlelement("label")}} and {{htmlelement("output")}}.

## Specifications

{{Specifications}}

## Browser compatibility

### Support with label

{{Compat("html.elements.label.for")}}

### Support with output

{{Compat("html.elements.output.for")}}
