---
title: "Element: getAttribute() method"
short-title: getAttribute()
slug: Web/API/Element/getAttribute
page-type: web-api-instance-method
browser-compat: api.Element.getAttribute
---

{{APIRef("DOM")}}

The **`getAttribute()`** method of the
{{domxref("Element")}} interface returns the value of a specified attribute on the
element.

If the given attribute does not exist, the value returned will
either be `null` or `""` (the empty string); see [Non-existing attributes](#non-existing_attributes) for details.

## Syntax

```js-nolint
getAttribute(attributeName)
```

### Parameters

- `attributeName` is the name of the attribute whose value you want to get.

### Return value

A string containing the value of `attributeName`.

## Examples

```html
<!-- example div in an HTML DOC -->
<div id="div1">Hi Champ!</div>
```

```js
// in a console
const div1 = document.getElementById("div1");
//=> <div id="div1">Hi Champ!</div>

const exampleAttr = div1.getAttribute("id");
//=> "div1"

const align = div1.getAttribute("align");
//=> null
```

## Description

### Lower casing

When called on an HTML element in a DOM flagged as an HTML document,
`getAttribute()` lower-cases its argument before proceeding.

### Non-existing attributes

All modern web browsers return `null` when the specified attribute does not exist on the specified element.

### Retrieving nonce values

For security reasons, [CSP](/en-US/docs/Web/HTTP/CSP) nonces from non-script
sources, such as CSS selectors, and `.getAttribute("nonce")` calls are
hidden.

```js example-bad
let nonce = script.getAttribute("nonce");
// returns empty string
```

Instead of retrieving the nonce from the content attribute, use the
{{domxref("HTMLElement/nonce", "nonce")}} property:

```js
let nonce = script.nonce;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
