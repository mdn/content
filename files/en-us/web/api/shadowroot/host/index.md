---
title: "ShadowRoot: host property"
short-title: host
slug: Web/API/ShadowRoot/host
page-type: web-api-instance-property
browser-compat: api.ShadowRoot.host
---

{{APIRef("Shadow DOM")}}

The **`host`** read-only property of
the {{domxref("ShadowRoot")}} returns a reference to the DOM element the
`ShadowRoot` is attached to.

## Value

A DOM {{domxref('Element')}}.

## Examples

```js
let customElem = document.querySelector("my-shadow-dom-element");
let shadow = customElem.shadowRoot;

// ...

// return the original host element some time later
let hostElem = shadow.host;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`part`](/en-US/docs/Web/HTML/Global_attributes/part) and [`exportparts`](/en-US/docs/Web/HTML/Global_attributes/exportparts) HTML attributes
- {{HTMLelement("template")}} and {{HTMLElement("slot")}} HTML elements
- {{CSSXref(":host")}}, {{CSSXref(":host_function", ":host()")}}, and {{CSSXref(":host-context", ":host-context()")}} CSS pseudo-classes
- {{CSSXref("::part")}} and {{CSSXref("::slotted")}} CSS pseudo-elements
