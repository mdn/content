---
title: Highlight
slug: Web/API/Highlight
page-type: web-api-interface
browser-compat: api.Highlight
---

{{APIRef("CSS Custom Highlight API")}}

The **`Highlight`** interface of the [CSS Custom Highlight API](/en-US/docs/Web/API/CSS_Custom_Highlight_API) is used to represent a collection of {{domxref("Range")}} instances to be styled using the API.

To style arbitrary ranges in a page, instantiate a new `Highlight` object, add one or more `Range` objects to it, and register it using the {{domxref("HighlightRegistry")}}.

A `Highlight` instance is a [`Set`-like object](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_browser_apis) that can hold one or more `Range` objects.

{{InheritanceDiagram}}

## Constructor

- {{domxref("Highlight.Highlight()", "Highlight()")}}
  - : Returns a newly created `Highlight` object.

## Instance properties

_The `Highlight` interface doesn't inherit any properties._

- {{domxref("Highlight.priority")}}
  - : A number that indicates the priority of this `Highlight` object. When multiple highlights overlap, the browser uses this priority to decide how to style the overlapping parts.
- {{domxref("Highlight.size")}} {{ReadOnlyInline}}
  - : Returns the number of ranges in the `Highlight` object.
- {{domxref("Highlight.type")}}
  - : An enumerated {{jsxref("String")}} used to specify the semantic meaning of the highlight. This allows assistive technologies to include this meaning when exposing the highlight to users.

## Instance methods

_The `Highlight` interface doesn't inherit any methods_.

- {{domxref("Highlight.add()")}}
  - : Add a new range to this highlight.
- {{domxref("Highlight.clear()")}}
  - : Remove all ranges from this highlight.
- {{domxref("Highlight.delete()")}}
  - : Remove a range from this highlight.
- {{domxref("Highlight.entries()")}}
  - : Returns a new iterator object that contains each range in the highlight object, in insertion order.
- {{domxref("Highlight.forEach()")}}
  - : Calls the given callback once for each range in the highlight object, in insertion order.
- {{domxref("Highlight.has()")}}
  - : Returns a boolean asserting whether a range is present the highlight object or not.
- {{domxref("Highlight.keys()")}}
  - : An alias for {{domxref("Highlight.values()")}}.
- {{domxref("Highlight.values()")}}
  - : Returns a new iterator object that yields the ranges in the highlight object in insertion order.

## Example

The following example demonstrates how specific parts of a block of text can be highlighted.

```html
<p class="foo">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem sapiente non eum facere? Nam rem hic culpa, ipsa rerum ab itaque consectetur molestiae dolores vitae! Quo ex explicabo tempore? Tenetur.</p>
```

This JavaScript demonstrates how to create [ranges](/en-US/docs/Web/API/Range), instantiate a new [`Highlight`](/en-US/docs/Web/API/Highlight/Highlight) object for them, and [register it](/en-US/docs/Web/API/HighlightRegistry/set) to be styled on the page:

```js
const parentNode = document.querySelector(".foo");
const textNode = parentNode.firstChild;

// Create a couple of ranges.
const range1 = new Range();
range1.setStart(textNode, 6);
range1.setEnd(textNode, 21);

const range2 = new Range();
range2.setStart(textNode, 57);
range2.setEnd(textNode, 71);

// Create a custom highlight for these ranges.
const highlight = new Highlight(range1, range2);

// Register the ranges in the HighlightRegistry.
CSS.highlights.set("my-custom-highlight", highlight);
```

The following CSS code snippet demonstrates how to style the registered custom highlight by using the {{cssxref("::highlight")}} pseudo-element:

```css
::highlight(my-custom-highlight) {
  background-color: peachpuff;
}
```

### Result

{{EmbedLiveSample("example", "100%", '100')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("css_custom_highlight_api", "The CSS Custom Highlight API", "", "nocode")}}
- [CSS Custom Highlight API: The Future of Highlighting Text Ranges on the Web](https://css-tricks.com/css-custom-highlight-api-early-look/)
