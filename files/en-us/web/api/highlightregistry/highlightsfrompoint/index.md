---
title: "HighlightRegistry: highlightsFromPoint() method"
short-title: highlightsFromPoint()
slug: Web/API/HighlightRegistry/highlightsFromPoint
page-type: web-api-instance-method
browser-compat: api.HighlightRegistry.highlightsFromPoint
---

{{APIRef("CSS Custom Highlight API")}}

The **`highlightsFromPoint()`** method of the {{domxref("HighlightRegistry")}} interface returns an array of objects representing the custom highlights applied at a specific point within the viewport.

## Syntax

```js-nolint
highlightsFromPoint(x, y)
highlightsFromPoint(x, y, options)
```

### Parameters

- `x`
  - : The x-coordinate of the point within the viewport from which to return custom highlight information.
- `y`
  - : The y coordinate of the point within the viewport to return custom highlight information for.
- `options` {{optional_inline}}
  - : An object containing options, which can include:
    - `shadowRoots`
      - : An array of {{domxref("ShadowRoot")}} objects. Custom highlights that exist at the specified point inside shadow roots in the array will also be included in the return value, in addition to those present in the light DOM. By default, highlights inside shadow roots are not returned.

### Return value

An array of `HighlightHitResult` objects representing the custom highlights applied at the specified point. Each object contains the following properties:

- `highlight`
  - : A {{domxref("Highlight")}} object representing the applied custom highlight.
- `ranges`
  - : An array of {{domxref("AbstractRange")}} objects representing the ranges to which the custom highlight is applied.

If no custom highlights are applied at the specified point, an empty array is returned. This includes instances where the specified point is outside the viewport, that is, the coordinate values are negative or greater than the viewport dimensions.

## Examples

### Output custom highlights applied at the mouse pointer position

In this example, we provide a paragraph of text that you can apply custom highlights to. You can then double-click a point in the paragraph to output the text that has custom highlights applied at that point.

#### HTML

The markup includes a {{htmlelement("p")}} element containing the text to apply custom highlights to, and a {{htmlelement("section")}} element that we will output the highlighted text fragments to.

```html live-sample___highlights-from-point-example
<h1>highlightsFromPoint() demo</h1>
<p class="highlight-text">
  Deadlights jack lad schooner scallywag dance the hempen jig carouser broadside
  cable strike colors. Bring a spring upon her cable holystone blow the man down
  spanker Shiver me timbers to go on account lookout wherry doubloon chase.
  Belay yo-ho-ho keelhaul squiffy black spot yardarm spyglass sheet transom
  heave to.
</p>
<h2>Highlighted text at point</h2>
<section></section>
```

#### CSS

We have hidden most of the CSS for brevity; the most relevant CSS defines styling for three custom highlights named `highlight1`, `highlight2`, and `highlight3`.

```css hidden live-sample___highlights-from-point-example
* {
  box-sizing: border-box;
}

body {
  background-color: #fff;
  color: #333;
  font:
    1em / 1.4 Helvetica Neue,
    Helvetica,
    Arial,
    sans-serif;
  padding: 1em;
  max-width: 800px;
  margin: 0 auto;
}

section {
  display: flex;
  gap: 10px;
}

.highlight-text,
article {
  padding: 10px;
  background-color: #eee;
  border: 2px solid #ddd;
  border-radius: 10px;
}

.instructions {
  font-size: 0.8rem;
}
```

```css live-sample___highlights-from-point-example
:root::highlight(highlight1) {
  background-color: rgb(255 255 0 / 0.5);
}

:root::highlight(highlight2) {
  background-color: rgb(255 0 0 / 0.5);
}

:root::highlight(highlight3) {
  background-color: rgb(0 0 255 / 0.75);
  color: white;
}
```

#### JavaScript

In our script, we start by grabbing references to the `<p>` element, its contained text node, and our `<section>` element. We then create an array called `customHighlights` that contains our custom highlight names, and a variable called `currentHighlight`, initially set to `0`, which will be used to specify which custom highlight to apply later on.

```js live-sample___highlights-from-point-example
const pElem = document.querySelector(".highlight-text");
const textNode = pElem.firstChild;
const section = document.querySelector("section");
const customHighlights = ["highlight1", "highlight2", "highlight3"];
let currentHighlight = 0;
```

Next, we define a keyboard control — <kbd>h</kbd> — that when pressed applies a custom highlight to any text selected inside the paragraph text. This consists of a [`keydown`](/en-US/docs/Web/API/Element/keydown_event) event handler function that only runs its contents if the pressed key was <kbd>h</kbd>. If so, we grab the selected text using {{domxref("Window.getSelection()")}} and convert it to a {{domxref("Range")}} using {{domxref("Selection.getRangeAt()")}}.

Next, we check that the `range` object's [`startContainer`](/en-US/docs/Web/API/Range/startContainer) and [`endContainer`](/en-US/docs/Web/API/Range/endContainer) are both the paragraph text node, to make sure we don't allow any cross-container highlights. If so, we select the custom highlight we want to apply to the `range` using `customHighlights[currentHighlight]`, then increment `currentHighlight`; if it reaches `3`, we set it back to `0`. This has the effect of cycling through the available highlights in order as they are set.

Finally for the `keydown` event handler, we create a new `highlight` object using the {{domxref("Highlight.Highlight", "Highlight()")}} constructor, passing it the `range` we created earlier. We then apply the chosen custom highlight style to `highlight` using the {{domxref("HighlightRegistry.set()")}} method.

```js live-sample___highlights-from-point-example
window.addEventListener("keydown", (event) => {
  if (event.key === "h") {
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);
    if (range.startContainer === textNode && range.endContainer === textNode) {
      const highlightStyle = customHighlights[currentHighlight];
      currentHighlight++;
      if (currentHighlight === 3) {
        currentHighlight = 0;
      }
      const highlight = new Highlight(range);
      CSS.highlights.set(highlightStyle, highlight);
    }
  }
});
```

Next, we define a [`dblclick`](/en-US/docs/Web/API/Element/dblclick_event) event handler function to handle outputting the highlighted text at the mouse cursor position when the event fires. We first grab the current mouse coordinates from the event object ({{domxref("MouseEvent")}}). We then pass those coordinates into a `highlightsFromPoint()` call to return the custom highlights applied at that point. We then clear the contents of the `<section>` element, and loop through each highlight in the `highlights` array.

For each `highlight`, we grab the first range in the [`ranges`](#ranges) array (there is only ever one range in each highlight, in this case), then get the exact highlighted string using {{domxref("Range.toString()")}} and add it to the `<section>` element's `innerHTML`, inside an `<article>` element.

```js live-sample___highlights-from-point-example
pElem.addEventListener("dblclick", (event) => {
  const mouseX = event.clientX;
  const mouseY = event.clientY;
  const highlights = CSS.highlights.highlightsFromPoint(mouseX, mouseY);

  section.innerHTML = "";
  for (highlight of highlights) {
    const range = highlight.ranges[0];
    const textSelection = range.toString();
    section.innerHTML += `<article>${textSelection}</article>`;
  }
});
```

#### Result

Try selecting some sections of text, pressing <kbd>h</kbd> after each one to apply a highlight. Then try double-clicking on a highlighted section of text to see that section outputted at the bottom of the UI. If multiple highlights overlap the section, you'll see multiple text fragments outputted.

{{EmbedLiveSample("highlights-from-point-example", "100%", "600")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("css_custom_highlight_api", "The CSS Custom Highlight API", "", "nocode")}}
- [CSS Custom Highlight API: The Future of Highlighting Text Ranges on the Web](https://css-tricks.com/css-custom-highlight-api-early-look/)
