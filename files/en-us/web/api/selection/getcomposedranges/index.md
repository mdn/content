---
title: "Selection: getComposedRanges() method"
short-title: getComposedRanges()
slug: Web/API/Selection/getComposedRanges
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.Selection.getComposedRanges
---

{{ ApiRef("DOM") }}{{SeeCompatTable}}

The **`Selection.getComposedRanges()`** method returns an array of {{domxref("StaticRange")}} objects representing the current selection ranges, and can return ranges that potentially cross shadow boundaries.

As the selection range endpoints may be within a shadow tree, or even different shadow trees, and because these may be closed, the method cannot by default return nodes from within a shadow tree.
If the method needs to return a selection that includes nodes inside shadow trees, then the {{domxref("ShadowRoot")}} objects for these trees must be passed as arguments to the method.
If a corresponding roots are not provided and the start or endpoint of the selection are within a shadow tree, the returned range is re-scoped to include the host of the shadow root rather than some node with in the root.

The returned ranges represent the range at the time that `getComposedRanges()` was called.
If the DOM or a shadow DOM is mutated, the selected range is likely to be incorrect.
Application code might use a {{domxref("MutationObserver")}} to monitor for DOM mutations and then call {{domxref("Selection.setBaseAndExtent()")}} to update the selection.

> [!NOTE]
> This method should be used instead of {{domxref("Selection.getRangeAt()")}} when selecting ranges that can potentially cross shadow root boundaries.
> {{domxref("Selection.getRangeAt()")}} is not aware of shadow roots.
> The returned range is not specified, and varies between browsers.

## Syntax

```js-nolint
getComposedRanges()
getComposedRanges(shadowRoot1)
getComposedRanges(shadowRoot1, shadowRoot2)
getComposedRanges(shadowRoot1, shadowRoot2, /* …, */ shadowRootN)
```

### Parameters

- `shadowRoot1`, …, `shadowRootN`
  - : Zero or more {{domxref("ShadowRoot")}} arguments.
    If a selection endpoint is within one of the provided shadow roots, the range will be able to return nodes within its corresponding Shadow DOM tree.
    Otherwise, if the selection crosses a shadow boundary and the corresponding `ShadowRoot` is not provided, the returned range will be adjusted to include the entire host element for the shadow root.

### Return value

An array of {{domxref("StaticRange")}} objects that represent the selected ranges within the composed (flattened) tree of the document.
At time of writing the specification expects this array to only contain one object.

## Examples

### Selecting across inline shadow roots

This example demonstrates how `getComposedRanges()` behaves, both when shadow roots are passed and when they are not, and contrasts with {{domxref("Selection.getRangeAt()")}}.

It allows you to select text that is defined in different nodes in the DOM, and in open and closed shadow roots, copy the range for the selection using the different approaches, and then reapply the range to see how well the original selection worked.

#### HTML

The HTML defines some text nodes with some `<span>` elements to which we'll attach a shadow root using JavScript.
We also add some buttons for copying and applying the selection using a number of different methods.

```html
<p>
  DOM Text One<span id="openHost"></span>DOM Text Two<span
    id="closedHost"></span
  >DOM Text Three
</p>
```

```html
<button id="copySelection">Copy range not passing shadow roots</button>
<button id="copySelectionWithShadowRoots">
  Copy range passing shadow roots
</button>
<button id="applySelection">Apply selection</button>
<hr />
<button id="copySelectionRangeAt">Copy range with getRangeAt()</button>
<button id="applySelectionGetRangeAt">Apply selection</button>
```

#### CSS

The CSS doesn't do anything interesting.
We're just laying out the buttons vertically so that they are easier to read.

```css
button {
  display: block;
}
```

```css hidden
#log {
  height: 20px;
  padding: 0.5rem;
  border: 1px solid black;
}
```

#### JavaScript

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = text;
}
```

Most of the work happens in the JavaScript.
First we log if the `getComposedRanges()` is not supported, though we don't actually prevent the rest of the example attempting to use it.

```js
if (!("getComposedRanges" in Selection.prototype)) {
  log("getComposedRanges() method not supported in this browser");
}
```

Then we create an open and a closed shadow root and attach them to the two `<span>` elements we created in the HTML.
These contain some simple text in bold so that we can easily identify the shadow nodes when the HTML is rendered.

```js
let openRoot = openHost.attachShadow({ mode: "open" });
openRoot.innerHTML = `<b>Open Shadow DOM Text</b>`;

let closedRoot = closedHost.attachShadow({ mode: "closed" });
closedRoot.innerHTML = `<b>Closed Shadow DOM Text</b>`;
```

Next we create code to get the selected ranges with `getComposedRanges()` when the first two buttons are clicked.
The first button calls `getComposedRanges()` without passing shadow roots, while the second passes both of the shadow roots.
In both cases the composed range is saved to a variable.

```js
const copySelectionButton = document.querySelector("#copySelection");
let composedRangeSelection = null;
copySelectionButton.addEventListener("click", () => {
  composedRangeSelection = window.getSelection().getComposedRanges()[0];
  log(`Selection copied (no shadow roots passed)`);
});

const copySelectionWithShadowRootsButton = document.querySelector(
  "#copySelectionWithShadowRoots",
);
copySelectionWithShadowRootsButton.addEventListener("click", () => {
  composedRangeSelection = window
    .getSelection()
    .getComposedRanges(openRoot, closedRoot)[0];
  log(`Selection has been copied (shadow roots passed)`);
});
```

The handler for the "Apply selection" button is shown below.
This calls {{domxref("Selection.setBaseAndExtent()", "setBaseAndExtent()")}} to set the current selection, passing the nodes and offsets from the saved range.

```js
const applySelectionButton = document.querySelector("#applySelection");
applySelectionButton.addEventListener("click", () => {
  if (composedRangeSelection) {
    window
      .getSelection()
      .setBaseAndExtent(
        composedRangeSelection.startContainer,
        composedRangeSelection.startOffset,
        composedRangeSelection.endContainer,
        composedRangeSelection.endOffset,
      );
    log(`Selection applied`);
  } else {
    log(`No selection to apply`);
  }
});
```

The last part of the code defines buttons to copy the current selection range using {{domxref("Selection.getRangeAt()")}} and then reapply the selection.

```js
const copySelectionRangeAtButton = document.querySelector(
  "#copySelectionRangeAt",
);
let rangeSelection = null;
copySelectionRangeAtButton.addEventListener("click", () => {
  const selection = window.getSelection();
  if (selection.rangeCount > 0) {
    log(`Selection copied using getRangeAt()`);
    rangeSelection = selection.getRangeAt(0);
  } else {
    log(`No range selected`);
  }
});

const applySelectionGetRangeAtButton = document.querySelector(
  "#applySelectionGetRangeAt",
);
applySelectionGetRangeAtButton.addEventListener("click", () => {
  if (rangeSelection) {
    window
      .getSelection()
      .setBaseAndExtent(
        rangeSelection.startContainer,
        rangeSelection.startOffset,
        rangeSelection.endContainer,
        rangeSelection.endOffset,
      );
    log(`Selection applied`);
  } else {
    log(`No selection to apply`);
  }
});
```

```html hidden
<pre id="log"></pre>
```

#### Results

The running example is shown below.
Select text in the top line starting from some normal text and ending in a bold section so that you have selected nodes from the DOM into a shadow root.
If you select "Copy range passing shadow roots" and then the "Apply selection" button, you will note that the selection doesn't change, because the code has given access to all the nodes in the shadow root, even if it is closed.
If you then select the button "Copy range not passing shadow roots" and then apply, the selection will extend to the end of the text in the shadow root.
This is because the selection is re-scoped to the end of the host node, since the `getComposedRanges()` method was not given visibility inside the shadow tree.

Also test what happens if you use the "Copy range with getRangeAt()" and "Apply selection" buttons.
You should find that the selected range is fairly arbitrary if you cross into the shadow root, and differs depending on what browser you are using.

{{EmbedLiveSample('Selecting across inline shadow roots', '100%', '240px')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Selection")}}, the interface it belongs to.
