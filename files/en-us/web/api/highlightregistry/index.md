---
title: HighlightRegistry
slug: Web/API/HighlightRegistry
page-type: web-api-interface
status:
  - experimental
browser-compat: api.HighlightRegistry
---

{{APIRef("CSS Custom Highlight API")}}{{SeeCompatTable}}

The **`HighlightRegistry`** interface of the [CSS Custom Highlight API](/en-US/docs/Web/API/CSS_Custom_Highlight_API) is used to register {{domxref("Highlight")}} objects to be styled using the API.
It is accessed via {{domxref("CSS.highlights_static", "CSS.highlights")}}.

A `HighlightRegistry` instance is a [`Map`-like object](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map#map-like_objects), in which each key is the name string for a custom highlight, and the corresponding value is the associated {{domxref("Highlight")}} object.

{{InheritanceDiagram}}

## Instance properties

_The `HighlightRegistry` interface doesn't inherit any properties._

- {{domxref("HighlightRegistry.size")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns the number of `Highlight` objects currently registered.

## Instance methods

_The `HighlightRegistry` interface doesn't inherit any methods_.

- {{domxref("HighlightRegistry.clear()")}} {{Experimental_Inline}}
  - : Remove all `Highlight` objects from the registry.
- {{domxref("HighlightRegistry.delete()")}} {{Experimental_Inline}}
  - : Remove the named `Highlight` object from the registry.
- {{domxref("HighlightRegistry.entries()")}} {{Experimental_Inline}}
  - : Returns a new iterator object that contains each `Highlight` object in the registry, in insertion order.
- {{domxref("HighlightRegistry.forEach()")}} {{Experimental_Inline}}
  - : Calls the given callback once for each `Highlight` object in the registry, in insertion order.
- {{domxref("HighlightRegistry.get()")}} {{Experimental_Inline}}
  - : Gets the named `Highlight` object from the registry.
- {{domxref("HighlightRegistry.has()")}} {{Experimental_Inline}}
  - : Returns a boolean asserting whether a `Highlight` object is present the registry or not.
- {{domxref("HighlightRegistry.keys()")}} {{Experimental_Inline}}
  - : An alias for {{domxref("HighlightRegistry.values()")}}.
- {{domxref("HighlightRegistry.set()")}} {{Experimental_Inline}}
  - : Adds the given `Highlight` object to the registry with the given name, or updates the named `Highlight` object, if it already exists in the registry.
- {{domxref("HighlightRegistry.values()")}} {{Experimental_Inline}}
  - : Returns a new iterator object that yields the `Highlight` objects in the registry, in insertion order.

## Examples

### Registering a highlight

The following example demonstrates how to create ranges, instantiate a new `Highlight` object for them, and register the highlight using the `HighlightRegistry`, to style it on the page:

#### HTML

```html
<p id="foo">CSS Custom Highlight API</p>
```

#### CSS

```css
::highlight(my-custom-highlight) {
  background-color: peachpuff;
}
```

#### JavaScript

```js
const text = document.getElementById("foo").firstChild;

if (!CSS.highlights) {
  text.textContent =
    "The CSS Custom Highlight API is not supported in this browser!";
}

// Create a couple of ranges.
const range1 = new Range();
range1.setStart(text, 0);
range1.setEnd(text, 3);

const range2 = new Range();
range2.setStart(text, 21);
range2.setEnd(text, 24);

// Create a custom highlight for these ranges.
const highlight = new Highlight(range1, range2);

// Register the ranges in the HighlightRegistry.
CSS.highlights.set("my-custom-highlight", highlight);
```

#### Result

{{ EmbedLiveSample("Registering a highlight") }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("css_custom_highlight_api", "The CSS Custom Highlight API", "", "nocode")}}
- [CSS Custom Highlight API: The Future of Highlighting Text Ranges on the Web](https://css-tricks.com/css-custom-highlight-api-early-look/)
