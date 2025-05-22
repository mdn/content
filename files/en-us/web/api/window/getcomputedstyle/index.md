---
title: "Window: getComputedStyle() method"
short-title: getComputedStyle()
slug: Web/API/Window/getComputedStyle
page-type: web-api-instance-method
browser-compat: api.Window.getComputedStyle
---

{{APIRef("CSSOM")}}

The
**`Window.getComputedStyle()`** method returns an object
containing the values of all CSS properties of an element, after applying active
stylesheets and resolving any basic computation those values may contain.

Individual CSS property values are accessed through APIs provided by the returned {{DOMxRef("CSSStyleDeclaration")}} object, or by indexing with CSS property names. The values returned by `getComputedStyle` are [resolved values](/en-US/docs/Web/CSS/CSS_cascade/Value_processing#resolved_value).

## Syntax

```js-nolint
getComputedStyle(element)
getComputedStyle(element, pseudoElt)
```

### Parameters

- `element`
  - : The {{DOMxRef("Element")}} for which to get the computed style.
- `pseudoElt` {{optional_inline}}
  - : A string specifying the pseudo-element to match. Omitted (or `null`) for
    real elements.

### Return value

A _live_ {{DOMxRef("CSSStyleDeclaration")}} object, which updates automatically when the element's styles are changed.

Note that:

- The returned {{DOMxRef("CSSStyleDeclaration")}} object contains active values for CSS property _longhand_ names as well as shorthand names. For example, the returned object contains entries for {{cssxref("border-bottom-width")}} in addition to the {{cssxref("border-width")}} and {{cssxref("border")}} [shorthand property names](/en-US/docs/Web/CSS/CSS_cascade/Shorthand_properties).
- Returned values are sometimes deliberately inaccurate. To avoid the "CSS History Leak" security issue, browsers may lie about the computed styles for a visited link, returning values as if the user never visited the linked URL. See [Plugging the CSS history leak](https://blog.mozilla.org/security/2010/03/31/plugging-the-css-history-leak/) and [Privacy-related changes coming to CSS `:visited`](https://hacks.mozilla.org/2010/03/privacy-related-changes-coming-to-css-vistited/) for examples of how this is implemented.
- During [CSS transitions](/en-US/docs/Web/CSS/CSS_transitions), `getComputedStyle` returns the original property value in Firefox, but the final property value in WebKit.
- In Firefox, properties with the value `auto` return the used value, not the value `auto`. So if you apply `top:auto` and `bottom:0` on an element with `height:30px` and a containing block of `height:100px`, Firefox's computed style for `top` returns `70px`, as 100 − 30 = 70.
- For compatibility reasons, serialized color values are expressed as [`rgb()`](/en-US/docs/Web/CSS/color_value/rgb) colors if the alpha channel value is exactly `1`, and `rgba()` colors otherwise. In both cases, legacy syntax is used, with commas as separators (for example `rgb(255, 0, 0)`).

The returned object is the same {{DOMxRef("CSSStyleDeclaration")}} type as the object returned from the element's {{DOMxRef("HTMLElement/style", "style")}} property. However, the two objects have different purposes:

- The object from `getComputedStyle` is read-only, and should be used to inspect the element's style — including those set by a `<style>` element or an external stylesheet.
- The `element.style` object should be used to **set** styles on that element, or inspect styles directly added to it from JavaScript manipulation or the global `style` attribute.

### Exceptions

- {{JSxRef("TypeError")}}

  - : If the passed object is not an {{DOMxRef("Element")}} or the
    `pseudoElt` is not a valid pseudo-element selector or is
    {{CSSxRef("::part", "::part()")}} or {{CSSxRef("::slotted", "::slotted()")}}.

    > [!NOTE]
    > Valid pseudo-element selector refers to syntactic
    > validity, e.g., `::unsupported` is considered valid, even though the
    > pseudo-element itself is not supported. Additionally, the latest W3 standard [explicitly supports](https://www.w3.org/TR/cssom-1/#dom-window-getcomputedstyle) only `::before` and `::after`, while the CSS
    > WG draft [does not restrict this value](https://drafts.csswg.org/cssom/#dom-window-getcomputedstyle). Browser compatibility may vary.

## Examples

### Retrieving computed styles

In this example we style a {{HTMLElement("p")}} element, then retrieve those styles
using `getComputedStyle()`, and print them into the text content of the
`<p>`.

#### HTML

```html
<p>Hello</p>
```

#### CSS

```css
p {
  width: 400px;
  margin: 0 auto;
  padding: 20px;
  font: 2rem/2 sans-serif;
  text-align: center;
  background: purple;
  color: white;
}
```

#### JavaScript

```js
const para = document.querySelector("p");
const compStyles = window.getComputedStyle(para);
para.textContent =
  `My computed font-size is ${compStyles.getPropertyValue("font-size")},\n` +
  `and my computed line-height is ${compStyles.getPropertyValue(
    "line-height",
  )}.`;
```

#### Result

{{EmbedLiveSample('retrieving_computed_styles', '100%', '240px')}}

### Use with pseudo-elements

`getComputedStyle` can pull style info from pseudo-elements (such as
`::after`, `::before`, `::marker`,
`::line-marker` — see [the pseudo-element spec](https://www.w3.org/TR/css-pseudo-4/)).

```html
<style>
  h3::after {
    content: " rocks!";
  }
</style>

<h3>Generated content</h3>

<script>
  const h3 = document.querySelector("h3");
  const result = getComputedStyle(h3, ":after").content;

  console.log("the generated content is: ", result); // returns ' rocks!'
</script>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{DOMxRef("window.getDefaultComputedStyle()")}}
- {{DOMxRef("CSSStyleDeclaration.getPropertyValue", "getPropertyValue()")}}
- {{domxref("Element.computedStyleMap()")}}
- [Resolved value](/en-US/docs/Web/CSS/CSS_cascade/Value_processing#resolved_value)
