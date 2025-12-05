---
title: "SVGAElement: interestForElement property"
short-title: interestForElement
slug: Web/API/SVGAElement/interestForElement
page-type: web-api-instance-property
browser-compat: api.SVGAElement.interestForElement
---

{{ApiRef("HTML DOM")}}

The **`interestForElement`** property of the {{domxref("SVGAElement")}} interface gets or sets the target element of an interest invoker, in cases where the associated {{svgelement("a")}} element is specified as an interest invoker.

See [Creating an interest invoker](/en-US/docs/Web/API/Popover_API/Using_interest_invokers#creating_an_interest_invoker) for more details.

## Value

An {{domxref("Element")}} object instance, or `null` if the associated `<a>` element does not have a target element set.

## Examples

### Basic `interestForElement` usage

In this example, we use an SVG `<a>` element's `interestForElement` property to set its target element and then retrieve the target element's `tagName`. The `tagName` is then included in the `<a>` element's text content.

#### HTML

The markup contains an SVG {{svgelement("a")}} element with a {{svgelement("text")}} element, and the link text is included within the `<text>` element. There's also an HTML `<div>` element. We turn the `<div>` element into a popover by setting the `popover` attribute on it.

```html live-sample___basic-interest-invoker
<svg>
  <a href="#">
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

We get references to the `<a>`, `<text>`, and `<div>` elements in script. We then create the interest invoker-target relationship between the `<a>` and the `<div>` by setting the `<a>` element's `interestForElement` property equal to a reference to the `<div>`. We then update the `<text>` content to display the target element's `tagName`, retrieved via `invoker.interestForElement.tagName`.

```js live-sample___basic-interest-invoker
const invoker = document.querySelector("a");
const invokerText = document.querySelector("text");
const popover = document.querySelector("div");

invoker.interestForElement = popover;

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

- [Using interest invokers](/en-US/docs/Web/API/Popover_API/Using_interest_invokers)
- [The Popover API](/en-US/docs/Web/API/Popover_API)
