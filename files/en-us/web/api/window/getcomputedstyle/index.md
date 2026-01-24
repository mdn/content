---
title: "Window: getComputedStyle() method"
short-title: getComputedStyle()
slug: Web/API/Window/getComputedStyle
page-type: web-api-instance-method
browser-compat: api.Window.getComputedStyle
---

{{APIRef("CSSOM")}}

The **`Window.getComputedStyle()`** method returns a live read-only {{DOMxRef("CSSStyleProperties")}} object containing the [resolved values](/en-US/docs/Web/CSS/Guides/Cascade/Property_value_processing#resolved_value) of all CSS properties of an element, after applying active stylesheets and resolving any computation those values may contain.

## Syntax

```js-nolint
getComputedStyle(element)
getComputedStyle(element, pseudoElt)
```

### Parameters

- `element`
  - : The {{DOMxRef("Element")}} for which to get the computed style.
- `pseudoElt` {{optional_inline}}
  - : A string specifying the pseudo-element to match.
    Omitted (or `null`) for real elements.

### Return value

A _live_ {{DOMxRef("CSSStyleProperties")}} object, which updates automatically when the element's styles are changed.

> [!NOTE]
> Earlier versions of the specification returned a {{domxref("CSSStyleDeclaration")}} (from which {{domxref("CSSStyleProperties")}} is derived).
> See the [browser compatibility](#browser_compatibility) table for browser support information.

> [!WARNING]
> Returned values are sometimes deliberately inaccurate.
> To avoid the "CSS History Leak" security issue, browsers may lie about the computed styles for a visited link, returning values as if the user never visited the linked URL.
> See [Plugging the CSS history leak](https://blog.mozilla.org/security/2010/03/31/plugging-the-css-history-leak/) and [Privacy-related changes coming to CSS `:visited`](https://hacks.mozilla.org/2010/03/privacy-related-changes-coming-to-css-vistited/) for examples of how this is implemented.

### Exceptions

- {{JSxRef("TypeError")}}
  - : If the passed object is not an {{DOMxRef("Element")}} or the `pseudoElt` is not a valid pseudo-element selector or is {{CSSxRef("::part", "::part()")}} or {{CSSxRef("::slotted", "::slotted()")}}.

    > [!NOTE]
    > Valid pseudo-element selector refers to syntactic validity, e.g., `::unsupported` is considered valid, even though the pseudo-element itself is not supported.

## Description

The method returns a live read-only {{DOMxRef("CSSStyleProperties")}} object containing the [resolved values](/en-US/docs/Web/CSS/Guides/Cascade/Property_value_processing#resolved_value) of all CSS properties of an element, after applying active stylesheets and resolving any computation those values may contain.

The returned object can be used to inspect the element's styles — including those set inline, using a `<style>` element, or via an external stylesheet.
Since the object read-only you can't use it to set the styles of an element.
However because it is "live", if you update the element styles using another API (such as {{domxref("HTMLElement.style")}}), the returned object will be updated with the corresponding resolved value.

The distinction that the object contains [resolved values](/en-US/docs/Web/CSS/Guides/Cascade/Property_value_processing#resolved_value) is important.
For most properties, in particular those that depend on layout such as `display`, `font-size`, or `line-height`, the resolved value is the computed value.
For properties that depend on layout, the used value may differ slightly from the computed value, and this is what is returned as the resolved value.
For an animating property value, it will be the computed value at the current point in the animation.

The returned object has dash-named and corresponding {{Glossary("camel_case", "camel-case")}} named properties for **all** [CSS properties](/en-US/docs/Web/CSS/Reference/Properties) supported by the browser, including both [shorthand](/en-US/docs/Web/CSS/Guides/Cascade/Shorthand_properties) and longhand properties.

Shorthand CSS properties of the element are expanded to their corresponding long-form properties.
For example, an element with style `"border-top: 1px solid black"` would be represented in the returned object by properties with the names {{cssxref("border-top")}} and `borderTop`, and the corresponding longhand properties {{cssxref("border-top-color")}} and `borderTopColor`, {{cssxref("border-top-style")}} and `borderTopStyle`, and {{cssxref("border-top-width")}} and `borderTopWidth`.

Note that the returned object is the same type as the object returned from the element's {{DOMxRef("HTMLElement/style", "style")}} property.
However the `element.style` object can also be used to **set** styles on that element, and returns just the inline styles or those set via JavaScript.

### Color values

For compatibility reasons, serialized color values specified using the traditional sRGB color space are expressed as {{cssxref("color_value/rgb", "rgb()")}} colors if the alpha channel value is exactly `1`, and `rgba()` colors otherwise.
The legacy syntax with commas is used, with commas as separators (for example `rgb(255, 0, 0)`).

For other {{glossary("color space","color spaces")}} the values are serialized using the corresponding functional expressions: {{cssxref("color_value/lab", "lab()")}}, {{cssxref("color_value/lch", "lch()")}} {{cssxref("color_value/oklab", "oklab()")}}, {{cssxref("color_value/oklch", "oklch()")}}, {{cssxref("color_value/color", "color()")}}.

## Examples

### Retrieving resolved styles

In this example we style a {{HTMLElement("p")}} element, then retrieve those styles using `getComputedStyle()`, and print them into the text content of the `<p>`.

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

{{EmbedLiveSample('retrieving_resolved_styles', '100%', '240px')}}

### Use with pseudo-elements

`getComputedStyle()` can pull style info from [pseudo-elements](/en-US/docs/Web/CSS/Reference/Selectors/Pseudo-elements), such as `::after`, `::before`, `::marker`, or `::line-marker`.

```html
<h3>Generated content</h3>
```

```css
h3::after {
  content: " rocks!";
}
```

```js
const h3 = document.querySelector("h3");
const result = getComputedStyle(h3, "::after").content;

console.log("the generated content is: ", result); // returns ' rocks!'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{DOMxRef("window.getDefaultComputedStyle()")}}
- {{DOMxRef("CSSStyleDeclaration.getPropertyValue", "getPropertyValue()")}}
- {{domxref("Element.computedStyleMap()")}}
- [Resolved value](/en-US/docs/Web/CSS/Guides/Cascade/Property_value_processing#resolved_value)
