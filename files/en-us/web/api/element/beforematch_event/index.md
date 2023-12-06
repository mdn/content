---
title: "Element: beforematch event"
short-title: beforematch
slug: Web/API/Element/beforematch_event
page-type: web-api-event
status:
  - experimental
browser-compat: api.Element.beforematch_event
---

{{APIRef}}{{SeeCompatTable}}

An element receives a **`beforematch`** event when it is in the _hidden until found_ state and the browser is about to reveal its content because the user has found the content through the "find in page" feature or through fragment navigation.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("beforematch", (event) => {});

onbeforematch = (event) => {};
```

## Event type

A generic {{domxref("Event")}}.

## Usage notes

The HTML [`hidden`](/en-US/docs/Web/HTML/Global_attributes/hidden) attribute accepts a value `until-found`: when this value is specified, the element is hidden but its content will be accessible to the browser's "find in page" feature or to fragment navigation. When these features cause a scroll to an element in a "hidden until found" subtree, the browser will:

- fire a `beforematch` event on the hidden element
- remove the `hidden` attribute from the element
- scroll to the element

## Examples

### Using beforematch

In this example we have:

- Two {{HTMLElement("div")}} elements. The first is not hidden, while the second has `hidden="until-found"`and `id="until-found-box"` attributes.
- A link whose target is the `"until-found-box"` fragment.

We also have some JavaScript that listens for the `beforematch` event firing on the hidden until found element. The event handler changes the text content of the box.

#### HTML

```html
<a href="#until-found-box">Go to hidden content</a>

<div>I'm not hidden</div>
<div id="until-found-box" hidden="until-found">Hidden until found</div>
```

```html hidden
<button id="reset">Reset</button>
```

#### CSS

```css
div {
  height: 40px;
  width: 300px;
  border: 5px dashed black;
  margin: 1rem 0;
  padding: 1rem;
  font-size: 2rem;
}
```

```css hidden
#until-found-box {
  scroll-margin-top: 200px;
}
```

#### JavaScript

```js
const untilFound = document.querySelector("#until-found-box");
untilFound.addEventListener(
  "beforematch",
  () => (untilFound.textContent = "I've been revealed!"),
);
```

```js hidden
document.querySelector("#reset").addEventListener("click", () => {
  document.location.hash = "";
  document.location.reload();
});
```

#### Result

Clicking the "Go to hidden content" button navigates to the hidden-until-found element. The `beforematch` event fires, the text content is updated, and then the element's content is displayed.

To run the example again, click "Reload".

{{EmbedLiveSample("Using beforematch", "", 300)}}

If your browser does not support the `"until-found"` enumerated value of the `hidden` attribute, the second `<div>` will be hidden (as `hidden` was boolean prior to the addition of the `until-found` value).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The HTML [`hidden`](/en-US/docs/Web/HTML/Global_attributes/hidden) attribute
