---
title: "HTMLGeolocationElement: HTMLGeolocationElement() constructor"
short-title: HTMLGeolocationElement()
slug: Web/API/HTMLGeolocationElement/HTMLGeolocationElement
page-type: web-api-constructor
status:
  - experimental
browser-compat: api.HTMLGeolocationElement.HTMLGeolocationElement
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}

The **`HTMLGeolocationElement()`** constructor creates a new {{domxref("HTMLGeolocationElement")}} object instance.

## Syntax

```js-nolint
new HTMLGeolocationElement()
```

### Parameters

None.

### Return value

A new {{domxref("HTMLGeolocationElement")}} object instance, if used internally by the browser.

Developers cannot use the `HTMLGeolocationElement()` constructor directly to create a new `HTMLGeolocationElement` instance: attempting to do so results in an "illegal constructor" error.

### Examples

#### Creating a new `HTMLGeolocationElement` instance programmatically

To programmatically create a new `HTMLGeolocationElement` instance, instead of trying to use the contructor directly, you would create a new {{htmlelement("geolocation")}} element instance using {{domxref("Document.createElement()")}}:

```js
const geo = document.createElement("geolocation");
```

You can then use it by appending it to the DOM:

```js
document.body.append(geo);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{htmlelement("geolocation")}} element
