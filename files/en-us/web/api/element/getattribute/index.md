---
title: Element.getAttribute()
slug: Web/API/Element/getAttribute
page-type: web-api-instance-method
tags:
  - API
  - DOM
  - Element
  - Method
  - Reference
browser-compat: api.Element.getAttribute
---
{{APIRef("DOM")}}

The **`getAttribute()`** method of the
{{domxref("Element")}} interface returns the value of a specified attribute on the
element.

If the given attribute does not exist, the value returned will
either be `null` or `""` (the empty string); see [Non-existing attributes](#non-existing_attributes) for details.

## Syntax

```js
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
const div1 = document.getElementById('div1');
//=> <div id="div1">Hi Champ!</div>

const exampleAttr= div1.getAttribute('id');
//=> "div1"

const align = div1.getAttribute('align')
//=> null
```

## Description

### Lower casing

When called on an HTML element in a DOM flagged as an HTML document,
`getAttribute()` lower-cases its argument before proceeding.

### Non-existing attributes

Essentially all web browsers (Firefox, Internet Explorer, recent versions of Opera,
Safari, Konqueror, and iCab, as a non-exhaustive list) return `null` when
the specified attribute does not exist on the specified element; this is what [the current DOM specification draft](https://dom.spec.whatwg.org/#dom-element-getattribute) specifies. The old DOM 3 Core specification, on the other
hand, says that the correct return value in this case is actually the _empty
string_, and some DOM implementations implement this behavior. The
implementation of `getAttribute()` in XUL (Gecko) actually follows the DOM
3 Core specification and returns an empty string. Consequently, you should use
{{domxref("element.hasAttribute()")}} to check for an attribute's existence prior to
calling `getAttribute()` if it is possible that the requested attribute
does not exist on the specified element.

### Retrieving nonce values

For security reasons, [CSP](/en-US/docs/Web/HTTP/CSP) nonces from non-script
sources, such as CSS selectors, and  `.getAttribute("nonce")` calls are
hidden.

```js example-bad
let nonce =  script.getAttribute('nonce');
// returns empty string
```

Instead of retrieving the nonce from the content attribute, use the
{{domxref("HTMLElement/nonce", "nonce")}} property:

```js
let nonce =  script.nonce;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
