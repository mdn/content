---
title: "Element: currentCSSZoom property"
short-title: currentCSSZoom
slug: Web/API/Element/currentCSSZoom
page-type: web-api-instance-property
browser-compat: api.Element.currentCSSZoom
---

{{APIRef("DOM")}}

The **`currentCSSZoom`** read-only property of the {{domxref("Element")}} interface provides the "effective" [CSS `zoom`](/en-US/docs/Web/CSS/zoom) of an element, taking into account the zoom applied to the element and all its parent elements.

The value calculated by multiplying the CSS `zoom` values of the element and all of its parents.
For example, if three elements with zoom values of 2, 1.5, and 3, are nested within each other, the most deeply nested element will have a `currentCSSZoom` value of 9.
If the element doesn't have a CSS box, for example because `display: none` is set on the element or one of its parents, then the `currentCSSZoom` is set to 1.

Note that some methods, such as {{domxref("Element.getBoundingClientRect()")}}, return dimensions and position that are relative to the viewport, and hence include the effects of CSS `zoom`.
Other properties and methods return values that are relative to the element itself, and do not include the effects of zooming.
These include, for example, `client*` properties such as {{domxref("Element.clientHeight")}}, `scroll*()` methods like {{domxref("Element.scroll()")}}, and `offset*` properties such as {{domxref("HTMLElement.offsetHeight")}}.
The `currentCSSZoom` property can be used to scale these values to adjust for the effects of zooming.

## Value

A number indicating the effective CSS zoom on the element, or 1 if the element is not rendered.

## Examples

This example demonstrates how the `currentCSSZoom` is calculated.

First we define a nested structure of `<div>` elements where the "parent" is unzoomed and contains a nested element "child1" that has `zoom: 2` applied, which in turn contains a nested element "child2" with `zoom: 3` applied.
The "child2" element contains two nested elements, one of which is not rendered, and neither of which have the zoom property applied.

```html
<div id="parent">
  parent
  <div style="zoom: 2" id="child1">
    child1 (zoom: 2)
    <div style="zoom: 3" id="child2">
      child2 (zoom: 3)
      <div id="child3_rendered">child3_rendered</div>
      <div style="display: none" id="child3_not-rendered">
        child3_not-rendered
      </div>
    </div>
  </div>
</div>
```

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 95px;
  overflow: scroll;
  margin: 10px;
  border: 1px solid black;
}
```

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

The JavaScript code logs the zoom value applied at each level along with its `currentCSSZoom` value.

```js
if ("currentCSSZoom" in Element.prototype) {
  const parent = document.querySelector("#parent");
  log(`parent (unzoomed). currentCSSZoom: ${parent.currentCSSZoom}`);
  const child1 = document.querySelector("#child1");
  log(`child1 (zoom: 2). currentCSSZoom: ${child1.currentCSSZoom}`);
  const child2 = document.querySelector("#child2");
  log(`child2 (zoom: 2). currentCSSZoom: ${child2.currentCSSZoom}`);
  const top_child3_rendered = document.querySelector("#child3_rendered");
  log(
    `child3_rendered (unzoomed). currentCSSZoom: ${child3_rendered.currentCSSZoom}`,
  );
  const top_child3_notRendered = document.querySelector("#child3_not-rendered");
  log(
    `child3_notRendered (not rendered): ${child3_notRendered.currentCSSZoom}`,
  );
} else {
  log("Element.currentCSSZoom not supported in this browser");
}
```

The resulting rendered `<div>` structure and log are shown below.
First note that the parent, child1 and child2 have zoom levels 1, 2, and 3, respectively, and render at 1, 2 and 6 times the size of the parent text.
This is reflected by the logged `currentCSSZoom` values.

The `<div>` with id `child3_rendered` does not have `zoom` set but inherits the `currentCSSZoom` value of 6 as shown in the log.
The final `<div>` is not rendered and therefore has a `currentCSSZoom` value of 1.

{{EmbedLiveSample('Examples', '100%', "400px")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [CSS `zoom`](/en-US/docs/Web/CSS/zoom)
