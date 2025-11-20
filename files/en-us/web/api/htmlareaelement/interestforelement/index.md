---
title: "HTMLAreaElement: interestForElement property"
short-title: interestForElement
slug: Web/API/HTMLAreaElement/interestForElement
page-type: web-api-instance-property
browser-compat: api.HTMLAreaElement.interestForElement
---

{{ApiRef("HTML DOM")}}

The **`interestForElement`** property of the {{domxref("HTMLAreaElement")}} interface returns a reference to the interest invoker target element, in cases where the associated {{htmlelement("area")}} element has been specified as an interest invoker.

See [Creating an interest invoker](/en-US/docs/Web/API/Popover_API/Interest_invokers#creating_an_interest_invoker) for more details.

## Value

An {{domxref("Element")}} object instance, or `null` if the associated `<area>` element has no interest invoker target.

## Examples

### Basic `interestForElement` usage

In this example, we use an `<area>` element's `interestForElement` property to retrieve its target element's `tagName`. The `tagName` is then printed into the `<area>` element's text content.

#### HTML

We set up a relationship between the `<area>` element interest invoker and its target — a `<div>` element — by setting the `<area>` element's `interestfor` attribute equal to the `<div>` element's `id`. We also turn the `<div>` element into a popover by setting a `popover` attribute on it.

```html live-sample___basic-interest-invoker
<map>
  <area href="#" shape="default" interestfor="mypopover" />
</map>
<div id="mypopover" popover>I am a <code>&lt;div&gt;</code> element.</div>
```

```css hidden live-sample___basic-interest-invoker
map {
  width: 200px;
  height: 100px;
  background-color: pink;
  padding: 5px;
}
```

#### JavaScript

We grab a reference to the `<area>` element in script, then set its text content equal to a string containing the target element's `tagName`, retrieved via `invoker.interestForElement.tagName`.

```js live-sample___basic-interest-invoker
const invoker = document.querySelector("[interestfor]");
invoker.textContent = `My target is a ${invoker.interestForElement.tagName} element`;
```

#### Result

The example renders like this:

{{embedlivesample("basic-interest-invoker", "100%", "100")}}

Try showing interest in the area (for example, by hovering or focusing it) to make the `<div>` appear.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using interest invokers](/en-US/docs/Web/API/Popover_API/Interest_invokers)
- [The Popover API](/en-US/docs/Web/API/Popover_API)
