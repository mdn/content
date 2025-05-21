---
title: "Element: beforematch event"
short-title: beforematch
slug: Web/API/Element/beforematch_event
page-type: web-api-event
browser-compat: api.Element.beforematch_event
---

{{APIRef}}

An element receives a **`beforematch`** event when it is in the _hidden until found_ state and the browser is about to reveal its content because the user has found the content through the "find in page" feature or through fragment navigation.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js-nolint
addEventListener("beforematch", (event) => { })

onbeforematch = (event) => { }
```

## Event type

A generic {{domxref("Event")}}.

## Usage notes

The HTML [`hidden`](/en-US/docs/Web/HTML/Reference/Global_attributes/hidden) attribute accepts a value `until-found`: when this value is specified, the element is hidden but its content will be accessible to the browser's "find in page" feature or to fragment navigation. When these features cause a scroll to an element in a "hidden until found" subtree, the browser will:

1. Fire a `beforematch` event on the hidden element
2. Remove the `hidden` attribute from the element
3. Scroll to the element

## Examples

### Using beforematch

In this example, we have two {{HTMLElement("div")}} elements.
The first is visible, while the second has the `hidden="until-found"` and `id="until-found-box"` attributes.
The element with a `until-found-box` id has a dotted red border and a gray background.

We also have a link that targets the `"until-found-box"` fragment and JavaScript that listens for the `beforematch` event firing on that hidden element.
The event handler changes the text content of the box to illustrate an action that can occur when the _hidden until found_ state is about to be removed.

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

div#until-found-box {
  color: red;
  border: 5px dotted red;
  background-color: lightgray;
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

Clicking the "Go to hidden content" button navigates to the element in the _hidden until found_ state.
The `beforematch` event fires, the text content is updated, and then the element's content is displayed (the `hidden` attribute is removed).

To run the example again, click "Reload".

{{EmbedLiveSample("Using beforematch", "", 300)}}

If your browser does not support the `"until-found"` enumerated value of the `hidden` attribute, the second `<div>` will be hidden (as `hidden` was boolean prior to the addition of the `until-found` value).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The HTML [`hidden`](/en-US/docs/Web/HTML/Reference/Global_attributes/hidden) attribute
