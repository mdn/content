---
title: "HTMLAnchorElement: interestForElement property"
short-title: interestForElement
slug: Web/API/HTMLAnchorElement/interestForElement
page-type: web-api-instance-property
status:
  - experimental
  - non-standard
browser-compat: api.HTMLAnchorElement.interestForElement
---

{{ApiRef("HTML DOM")}}{{SeeCompatTable}}{{non-standard_header}}

The **`interestForElement`** property of the {{domxref("HTMLAnchorElement")}} interface gets or sets the target element of an interest invoker, in cases where the associated {{htmlelement("a")}} element is specified as an interest invoker.

See [Creating an interest invoker](/en-US/docs/Web/API/Popover_API/Using_interest_invokers#creating_an_interest_invoker) for more details.

## Value

An {{domxref("Element")}} object instance, or `null` if the associated `<a>` element does not have a target element set.

## Examples

### Basic `interestForElement` usage

In this example, we use an `<a>` element's `interestForElement` property to set its target element and then retrieve that element's `tagName`. The `tagName` is then printed in the `<a>` element's text content.

#### HTML

The markup includes an `<a>` element and a `<div>` element. We turn the `<div>` element into a popover by setting a `popover` attribute on it.

```html live-sample___basic-interest-invoker
<a href="#">a link</a>
<div id="mypopover" popover>I am a <code>&lt;div&gt;</code> element.</div>
```

#### JavaScript

We get references to the `<a>` and `<div>` elements in script. We then create the interest invoker-target relationship between the `<a>` and the `<div>` by setting the `<a>` element's `interestForElement` property equal to a reference to the `<div>`. We then update the `<a>` element's text content to include a string containing the target element's `tagName`, retrieved via `invoker.interestForElement.tagName`.

```js live-sample___basic-interest-invoker
const invoker = document.querySelector("a");
const popover = document.querySelector("div");

invoker.interestForElement = popover;

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

- [Using interest invokers](/en-US/docs/Web/API/Popover_API/Using_interest_invokers)
- [The Popover API](/en-US/docs/Web/API/Popover_API)
