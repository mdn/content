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
  - : The y-coordinate of the point within the viewport from which to return custom highlight information.
- `options` {{optional_inline}}
  - : An object containing options, which can include:
    - `shadowRoots`
      - : An array of {{domxref("ShadowRoot")}} objects. Custom highlights that exist at the specified point inside shadow roots in the array will also be included in the return value, in addition to those present in the light DOM. By default, highlights inside shadow roots are not returned.

### Return value

An array of `HighlightHitResult` objects representing the custom highlights applied at the point in the viewport specified by the `x` and `y` parameters.

Each `HighlightHitResult` object contains the following properties:

- `highlight`
  - : A {{domxref("Highlight")}} object representing the applied custom highlight.
- `ranges`
  - : An array of {{domxref("AbstractRange")}} objects representing the ranges to which the custom highlight is applied.

If no custom highlights are applied at the specified point, or the specified point is outside the viewport, the method returns an empty array.

## Examples

### Output custom highlights applied at the mouse pointer position

In this example, you can apply custom highlights to a paragraph of text. These custom highlights can be overlapping. When the user double-clicks the paragraph, we use the `highlightsFromPoint()` method to return the content of any custom highlights located at the mouse pointer coordinates of the double-click.

#### HTML

The markup includes a {{htmlelement("p")}} element containing text to which you can apply custom highlights, and a {{htmlelement("section")}} element into which we will output the highlighted text fragments.

```html live-sample___highlights-from-point-example
<h1>highlightsFromPoint() demo</h1>
<p class="highlightable-text">
  When you select a section of text then press "h" on the keyboard, the text you
  selected will be given a custom highlight. Multiple highlights will be colored
  yellow, red, and blue, in that order. When you double-click on a highlighted
  section of text, that section will be outputted at the bottom of the UI. If
  multiple highlights overlap the section, you'll see multiple text sections
  outputted.
</p>
<h2>Highlighted text at point</h2>
<section></section>
```

#### CSS

In the CSS, we define styling for three custom highlights named `highlight1`, `highlight2`, and `highlight3`. We select each custom highlight by passing its name into the {{cssxref("::highlight()")}} pseudo-element, giving them yellow, red, and blue background colors respectively.

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

.highlightable-text,
article {
  padding: 10px;
  background-color: #eee;
  border: 2px solid #ddd;
  border-radius: 5px;
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

We start by grabbing references to the `<p>` element, its contained text node, and our `<section>` element. We then create a variable called `highlightCount`, initially set to `1`, which will be used to specify which custom highlight to apply later on.

```js live-sample___highlights-from-point-example
const pElem = document.querySelector(".highlightable-text");
const textNode = pElem.firstChild;
const section = document.querySelector("section");
let highlightCount = 1;
```

Next, we define a [`keydown`](/en-US/docs/Web/API/Element/keydown_event) event handler that applies a custom highlight to any selected text if <kbd>h</kbd> is pressed on the keyboard. Inside, we start by grabbing the selected text using {{domxref("Window.getSelection()")}} and converting it to a {{domxref("Range")}} using {{domxref("Selection.getRangeAt()")}}.

We check that the `selectedRange` object's [`startContainer`](/en-US/docs/Web/API/Range/startContainer) and [`endContainer`](/en-US/docs/Web/API/Range/endContainer) are both equal to the paragraph `textNode`, to make sure we don't allow any cross-container highlights. If so, we set the custom `highlightName` we want to apply to the `selectedRange` using `highlight${highlightCount++}`. Since we are incrementing `highlightCount`, we add in a check — when it reaches `4`, we set it back to `1`. This has the effect of cycling through the available highlights in order as they are set.

Finally for the `keydown` event handler, we create a new `highlight` object using the {{domxref("Highlight.Highlight", "Highlight()")}} constructor, passing it the `selectedRange` we created earlier. We then apply the chosen custom highlight referenced in `highlightName` to `highlight` using the {{domxref("HighlightRegistry.set()")}} method.

```js live-sample___highlights-from-point-example
window.addEventListener("keydown", (event) => {
  if (event.key === "h") {
    const selection = window.getSelection();
    const selectedRange = selection.getRangeAt(0);
    if (
      selectedRange.startContainer === textNode &&
      selectedRange.endContainer === textNode
    ) {
      const highlightName = `highlight${highlightCount++}`;
      if (highlightCount === 4) {
        highlightCount = 1;
      }
      const highlight = new Highlight(selectedRange);
      CSS.highlights.set(highlightName, highlight);
    }
  }
});
```

Next, we define a [`dblclick`](/en-US/docs/Web/API/Element/dblclick_event) event handler function to handle outputting the highlighted text at the mouse cursor position when the event fires. We pass the current mouse coordinates into a `highlightsFromPoint()` call, clear the contents of the `<section>` element, then loop through each highlight in the `highlights` array.

For each `highlight`, we grab the first range in the [`ranges`](#ranges) array (there is only ever one range in each highlight, in this case), then get the exact highlighted string using {{domxref("Range.toString()")}} and add it to the `<section>` element's `innerHTML`, inside an `<article>` element.

```js live-sample___highlights-from-point-example
pElem.addEventListener("dblclick", (event) => {
  const highlights = CSS.highlights.highlightsFromPoint(
    event.clientX,
    event.clientY,
  );

  section.innerHTML = "";
  for (highlight of highlights) {
    const range = highlight.ranges[0];
    const textSelection = range.toString();
    section.innerHTML += `<article>${textSelection}</article>`;
  }
});
```

#### Result

{{EmbedLiveSample("highlights-from-point-example", "100%", "600")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("css_custom_highlight_api", "The CSS Custom Highlight API", "", "nocode")}}
- [CSS custom highlight API](/en-US/docs/Web/CSS/CSS_custom_highlight_API) module
