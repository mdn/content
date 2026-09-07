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

An array of objects representing the custom highlights applied at the point in the viewport specified by the `x` and `y` parameters.

Each object contains the following properties:

- `highlight`
  - : A {{domxref("Highlight")}} object representing the applied custom highlight.
- `ranges`
  - : An array of {{domxref("AbstractRange")}} objects representing the ranges to which the custom highlight is applied.

If no custom highlights are applied at the specified point, or the specified point is outside the viewport, the method returns an empty array.

## Examples

### Retrieving custom highlights applied at the mouse pointer position

This example demonstrates how to use the `highlightsFromPoint()` method to return the content of all custom highlights located at the mouse pointer coordinates of a user's double-click.

In this example, multiple custom highlights can be created on a paragraph of text, and the highlights can overlap. When the user presses the <kbd>h</kbd> key after selecting some text, a new {{domxref("Highlight")}} is named and registered. This example supports up to three custom highlights at a time. When the user double-clicks within the highlighted area, the content of all highlights at that point, if any, is displayed in the output area.

#### HTML

The markup includes a {{htmlelement("p")}} element and a {{htmlelement("section")}} element. The `<section>` serves as the output area where the content of the double-clicked highlights are displayed.

```html live-sample___highlights-from-point-example
<h1>highlightsFromPoint() demo</h1>
<h2>Highlightable content</h2>
<p class="highlightable-text">
  Select a portion of text, and then press the "h" key. The selected text gets a
  custom highlight, colored yellow, red, or blue, in that order. After the third
  highlight, each new one replaces the oldest, cycling through the colors in the
  same order. Next, double-click any highlighted text. The highlighted text will
  appear in the output. If multiple highlights overlap a section, you'll see
  multiple text sections in the output.
</p>
<h2>Text in double-clicked highlights</h2>
<section></section>
```

#### CSS

In the CSS, we define styling for three custom highlights named `highlight1`, `highlight2`, and `highlight3`. We target each custom highlight using the {{cssxref("::highlight()")}} pseudo-element, making their backgrounds semi-transparent yellow, red, and blue, respectively. Where highlights overlap, the semi-transparent backgrounds combine to show a mixed color.

```css live-sample___highlights-from-point-example
::highlight(highlight1) {
  background-color: rgb(255 255 0 / 0.75);
}

::highlight(highlight2) {
  background-color: rgb(255 0 0 / 0.3);
}

::highlight(highlight3) {
  background-color: rgb(0 0 255 / 0.3);
}
```

```css hidden live-sample___highlights-from-point-example
* {
  box-sizing: border-box;
}

body {
  background-color: white;
  color: #333333;
  font:
    1em / 1.4 "Helvetica Neue",
    "Helvetica",
    "Arial",
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
  background-color: #eeeeee;
  border: 2px solid #dddddd;
  border-radius: 5px;
}
```

#### JavaScript

This example has two distinct areas of functionality. We first enable the creation of custom highlights when the user clicks the <kbd>h</kbd> key after selecting some text. We then enable writing the highlighted content to the page when the user double-clicks one or more custom highlights.

##### Creating and applying custom highlights

To create custom highlights, we start by grabbing references to the `<p>` element and its contained text node. We also create a variable called `highlightCount`, initially set to `1`, which is used to specify which custom highlight to apply later on.

```js live-sample___highlights-from-point-example
const pElem = document.querySelector(".highlightable-text");
const textNode = pElem.firstChild;
let highlightCount = 1;
```

When the user presses the <kbd>h</kbd> key after selecting some text, we need to register and name a new {{domxref("Highlight")}} object, supporting up to three custom highlights at a time. To do this, we define a [`keydown`](/en-US/docs/Web/API/Element/keydown_event) event handler that applies a custom highlight to any selected text if <kbd>h</kbd> is pressed on the keyboard. Inside, we start by grabbing the selected text using {{domxref("Window.getSelection()")}} and converting it to a {{domxref("Range")}} using {{domxref("Selection.getRangeAt()")}}.

We check that the `selectedRange` object's [`startContainer`](/en-US/docs/Web/API/AbstractRange/startContainer) and [`endContainer`](/en-US/docs/Web/API/AbstractRange/endContainer) are both equal to the paragraph `textNode`, to make sure we don't allow any cross-container highlights. If so, we set the custom `highlightName` we want to apply to the `selectedRange` using `highlight${highlightCount++}`. Since we are incrementing `highlightCount` but only have three highlights, when counter reaches `4` we set it back to `1`, effectively cycling through the available highlights in the order they are set.

Finally, for the `keydown` event handler, we create a new `highlight` object using the {{domxref("Highlight.Highlight", "Highlight()")}} constructor, passing it the `selectedRange` we created earlier. We then apply the chosen custom highlight referenced in `highlightName` to `highlight` using the {{domxref("HighlightRegistry.set()")}} method.

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

##### Returning custom highlights from a point

Now that we can create and apply custom highlights, we can use the `highlightsFromPoint()` method to return the custom highlights applied at a specific point.

We grab a reference to our `<section>` element, then define a [`dblclick`](/en-US/docs/Web/API/Element/dblclick_event) event handler function to handle outputting the highlighted text at the mouse cursor position when the event fires. Inside the handler, we pass the current mouse coordinates into a `highlightsFromPoint()` call, clear the contents of the `<section>` element, then loop through each highlight in the `highlights` array.

For each `highlight`, we grab the first range in the [`ranges`](#ranges) array (there is only ever one range in each highlight, in this case), then get the exact highlighted string using {{domxref("Range.toString()")}} and add it to the `<section>` element's `innerHTML`, inside an `<article>` element.

```js live-sample___highlights-from-point-example
const section = document.querySelector("section");

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

{{EmbedLiveSample("Examples", "100%", "600")}}

To create a highlight, press <kbd>h</kbd> after selecting some text. You can create up to three highlights. Double-click on the highlights you created, preferably where they overlap, to write the content of the clicked highlights to the page.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("css_custom_highlight_api", "CSS Custom Highlight API", "", "nocode")}}
- [CSS custom highlight API](/en-US/docs/Web/CSS/Guides/Custom_highlight_API) module
