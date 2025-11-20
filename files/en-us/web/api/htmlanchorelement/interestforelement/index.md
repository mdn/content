---
title: "HTMLAnchorElement: interestForElement property"
short-title: interestForElement
slug: Web/API/HTMLAnchorElement/interestForElement
page-type: web-api-instance-property
browser-compat: api.HTMLAnchorElement.interestForElement
---

{{ApiRef("HTML DOM")}}

The **`interestForElement`** property of the {{domxref("HTMLAnchorElement")}} interface returns a reference to the associated interest invoker target element, in cases where the associated {{htmlelement("a")}} element has been specified as an interest invoker.

See [Creating an interest invoker](/en-US/docs/Web/API/Popover_API/Interest_invokers#creating_an_interest_invoker) for more details.

## Value

An {{domxref("Element")}} object instance, or `null` if the associated `<a>` element has no interest invoker target.

## Examples

### Basic `interestForElement` usage

In this example, we use an `<a>` element's `interestForElement` property to retrieve its target element's `tagName`. The `tagName` is then printed into the `<a>` element's text content.

#### HTML

We set up a relationship between the `<a>` element interest invoker and its target — a `<div>` element — by setting the `<a>` element's `interestfor` attribute equal to the `<div>` element's `id`. We also turn the `<div>` element into a popover by setting a `popover` attribute on it.

```html live-sample___basic-interest-invoker
<a href="#" interestfor="mypopover">a link</a>
<div id="mypopover" popover>I am a <code>&lt;div&gt;</code> element.</div>
```

#### JavaScript

We grab a reference to the `<a>` element in script, then set its text content equal to a string containing the target element's `tagName`, retrieved via `invoker.interestForElement.tagName`.

```js live-sample___basic-interest-invoker
const invoker = document.querySelector("[interestfor]");
invoker.textContent = `My target is a ${invoker.interestForElement.tagName} element`;
```

#### Result

The example renders like this:

{{embedlivesample("basic-interest-invoker", "100%", "100")}}

Try showing interest in the link (for example, by hovering or focusing it) to make the `<div>` appear.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using interest invokers](/en-US/docs/Web/API/Popover_API/Interest_invokers)
- [The Popover API](/en-US/docs/Web/API/Popover_API)
