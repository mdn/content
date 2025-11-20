---
title: "SVGAElement: interestForElement property"
short-title: interestForElement
slug: Web/API/SVGAElement/interestForElement
page-type: web-api-instance-property
browser-compat: api.SVGAElement.interestForElement
---

{{ApiRef("HTML DOM")}}

The **`interestForElement`** property of the {{domxref("SVGAElement")}} interface returns a reference to the interest invoker target element, in cases where the associated {{svgelement("a")}} element has been specified as an interest invoker.

See [Creating an interest invoker](/en-US/docs/Web/API/Popover_API/Interest_invokers#creating_an_interest_invoker) for more details.

## Value

An {{domxref("Element")}} object instance, or `null` if the associated `<a>` element has no interest invoker target.

## Examples

### Basic `interestForElement` usage

In this example, we use an SVG `<a>` element's `interestForElement` property to retrieve its target element's `tagName`. The `tagName` is then printed into the `<a>` element's text content.

#### HTML

We set up a relationship between the `<a>` element interest invoker and its target — a `<div>` element — by setting the `<a>` element's `interestfor` attribute equal to the `<div>` element's `id`. We also turn the `<div>` element into a popover by setting a `popover` attribute on it, and include some link text inside a {{svgelement("text")}} element.

```html live-sample___basic-interest-invoker
<svg>
  <a href="#" interestfor="mypopover">
    <text x="90" y="20" text-anchor="middle">A link</text>
  </a>
</svg>
<div id="mypopover" popover>I am a <code>&lt;div&gt;</code> element.</div>
```

```css hidden live-sample___basic-interest-invoker
svg {
  width: 200px;
  height: 100px;
}
```

#### JavaScript

We grab references to the `<a>` and `<text>` elements in script, then set the text content equal to a string containing the invoker target element's `tagName`, retrieved via `invoker.interestForElement.tagName`.

```js live-sample___basic-interest-invoker
const invoker = document.querySelector("[interestfor]");
const invokerText = document.querySelector("text");
invokerText.textContent = `My target is a ${invoker.interestForElement.tagName} element`;
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
