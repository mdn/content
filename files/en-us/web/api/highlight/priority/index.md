---
title: "Highlight: priority property"
short-title: priority
slug: Web/API/Highlight/priority
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.Highlight.priority
---

{{APIRef("CSS Custom Highlight API")}}{{SeeCompatTable}}

It is possible to create {{domxref("Range")}} objects that overlap in a document.

When overlapping ranges are used by multiple different {{domxref("Highlight")}} objects, and when those highlights are styled using {{cssxref("::highlight")}} pseudo-elements, this may lead to conflicting styles.

If two text ranges overlap and are both highlighted using the {{domxref("css_custom_highlight_api", "CSS Custom Highlight API", "", "nocode")}}, and if they're both styled using the `color` CSS property, the browser needs to decide which color should be used for styling the text in the overlapping part.

By default, all highlights have the same priority and the browser chooses the most recently registered highlight to style the overlapping parts.

The `priority` property of the {{domxref("Highlight")}} interface is a {{jsxref("Number")}} used to change this default behavior and determine which highlight's styles should be used to resolve style conflicts in overlapping parts.

Note that all the styles of a highlight are applied and the browser only needs to resolve conflicts when the same CSS properties are used by multiple overlapping highlights. The highlight style conflict resolution also does not depend on the order in which the {{cssxref("::highlight")}} pseudo-elements rules appear in the source, or whether or not CSS properties are marked as `!important`.

## Value

An integer.

## Examples

### Default priority

#### HTML

```html
<p>Time is an illusion. Lunchtime doubly so.</p>
```

#### CSS

```css
::highlight(highlight-2) {
  color: blue;
}

::highlight(highlight-1) {
  color: white;
  background: orange;
}
```

#### JavaScript

```js
const text = document.querySelector("p").firstChild;

// Create two overlapping highlights
const range1 = new Range();
range1.setStart(text, 5);
range1.setEnd(text, 25);

const range2 = new Range();
range2.setStart(text, 15);
range2.setEnd(text, 35);

const highlight1 = new Highlight(range1);
const highlight2 = new Highlight(range2);

CSS.highlights.set("highlight-1", highlight1);
CSS.highlights.set("highlight-2", highlight2);
```

#### Result

As seen below, by default, the part of the text node where the two registered highlights overlap is displayed in blue because `highlight-2` is registered after `highlight-1`. The background color defined by `highlight-1` includes the entire `range1` range because it does not conflict with another background color.

{{EmbedLiveSample("Default priority")}}

### Setting priority

#### HTML

```html
<button id="prioritize-1" type="button">Prioritize 1</button>
<button id="prioritize-2" type="button">Prioritize 2</button>
<button id="reset" type="button">Reset</button>
<p>Time is an illusion. Lunchtime doubly so.</p>
```

#### CSS

```css
::highlight(highlight-1) {
  background-color: blue;
  color: white;
}

::highlight(highlight-2) {
  background-color: orange;
}
```

#### JavaScript

```js
const text = document.querySelector("p").firstChild;

// Create two overlapping highlights
const range1 = new Range();
range1.setStart(text, 5);
range1.setEnd(text, 25);

const range2 = new Range();
range2.setStart(text, 15);
range2.setEnd(text, 35);

const highlight1 = new Highlight(range1);
const highlight2 = new Highlight(range2);

CSS.highlights.set("highlight-1", highlight1);
CSS.highlights.set("highlight-2", highlight2);

// Add buttons to change the highlight priority.
const prioritize1 = document.querySelector("#prioritize-1");
const prioritize2 = document.querySelector("#prioritize-2");
const reset = document.querySelector("#reset");

prioritize1.addEventListener("click", () => {
  highlight1.priority = 1;
  highlight2.priority = 0;
});

prioritize2.addEventListener("click", () => {
  highlight1.priority = 0;
  highlight2.priority = 1;
});

reset.addEventListener("click", () => {
  highlight1.priority = 0;
  highlight2.priority = 0;
});
```

#### Result

As seen below, by default, the part of the text node where the two registered highlights overlap is displayed in blue because `highlight-2` is registered after `highlight-1`.

{{EmbedLiveSample("Setting priority")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("css_custom_highlight_api", "The CSS Custom Highlight API", "", "nocode")}}
- [CSS Custom Highlight API: The Future of Highlighting Text Ranges on the Web](https://css-tricks.com/css-custom-highlight-api-early-look/)
