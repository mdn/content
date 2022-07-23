---
title: Window.getComputedStyle()
slug: Web/API/Window/getComputedStyle
page-type: web-api-instance-method
tags:
  - API
  - CSSOM View
  - Method
  - Reference
  - Window
  - getComputedStyle
browser-compat: api.Window.getComputedStyle
---
{{APIRef("CSSOM")}}

The
**`Window.getComputedStyle()`** method returns an object
containing the values of all CSS properties of an element, after applying active
stylesheets and resolving any basic computation those values may contain.

Individual CSS property values are accessed through APIs provided by the object, or by
indexing with CSS property names.

## Syntax

```js
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

A _live_ {{DOMxRef("CSSStyleDeclaration")}}
object, which updates automatically when the element's styles are changed.

### Throws

- {{JSxRef("TypeError")}}

  - : If the passed object is not an {{DOMxRef("Element")}} or the
    `pseudoElt` is not a valid pseudo-element selector or is
    {{CSSxRef("::part", "::part()")}} or {{CSSxRef("::slotted", "::slotted()")}}.

    > **Note:** Valid pseudo-element selector refers to syntactic
    > validity, e.g. `::unsupported` is considered valid, even though the
    > pseudo-element itself is not supported.  Additionally, the latest W3 standard [explicitly supports](https://www.w3.org/TR/cssom-1/#dom-window-getcomputedstyle) only `::before` and `::after`, while the CSS
    > WG draft [does not > restrict this value](https://drafts.csswg.org/cssom/#dom-window-getcomputedstyle).  Browser compatibility may vary.

## Examples

In this example we style a {{HTMLElement("p")}} element, then retrieve those styles
using `getComputedStyle()`, and print them into the text content of the
`<p>`.

### HTML

```html
<p>Hello</p>
```

### CSS

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

### JavaScript

```js
const para = document.querySelector('p');
const compStyles = window.getComputedStyle(para);
para.textContent = `My computed font-size is ${compStyles.getPropertyValue('font-size')},\n` +
  `and my computed line-height is ${compStyles.getPropertyValue('line-height')}.`;
```

### Result

{{EmbedLiveSample('Examples', '100%', '240px')}}

## Description

The returned object is the same {{DOMxRef("CSSStyleDeclaration")}} type as the object
returned from the element's {{DOMxRef("HTMLElement/style", "style")}} property. However,
the two objects have different purposes:

- The object from `getComputedStyle` is read-only, and should be used to
  inspect the element's style — including those set by a `<style>`
  element or an external stylesheet.
- The `element.style` object should be used to
  **set** styles on that element, or inspect styles directly added to it
  from JavaScript manipulation or the global `style` attribute.

The first argument must be an {{domxref("Element")}}. Non-elements, like a
{{DOMxRef("Text")}} node, will throw an error.

## defaultView

In many code samples, `getComputedStyle` is used from the
{{DOMxRef("document.defaultView")}} object. In nearly all cases, this is needless, as
`getComputedStyle` exists on the `window` object as well. It's
likely the `defaultView` pattern was a combination of folks not wanting to
write a testing spec for `window` and making an API that was also usable in
Java.

## Use with pseudo-elements

`getComputedStyle` can pull style info from pseudo-elements (such as
`::after`, `::before`, `::marker`,
`::line-marker` — see [the pseudo-element spec](https://www.w3.org/TR/css-pseudo-4/)).

```html
<style>
  h3::after {
    content: ' rocks!';
  }
</style>

<h3>Generated content</h3>

<script>
  const h3 = document.querySelector('h3');
  const result = getComputedStyle(h3, ':after').content;

  console.log('the generated content is: ', result); // returns ' rocks!'
</script>
```

## Notes

- The returned {{DOMxRef("CSSStyleDeclaration")}} object contains active values for
  CSS property **_longhand_** names. For example,
  `border-bottom-width` instead of the `border-width` and
  `border` [shorthand property names](/en-US/docs/Web/CSS/Shorthand_properties). It is safest to query values with only longhand names like
  `font-size`. Shorthand names like `font` will not work with most
  browsers.
- CSS property values may be accessed using the
  `getPropertyValue(propName)` API or by indexing directly into the object
  such as `obj['z-index']` or `obj.zIndex`.
- The values returned by `getComputedStyle` are {{CSSxRef("resolved_value",
    "resolved values", "", 1)}}. These are usually the same as CSS 2.1's
  {{CSSxRef("computed_value","computed values", "", 1)}}, but for some older properties
  like `width`, `height`, or `padding`, they are
  instead the same as {{CSSxRef("used_value","used values", "", 1)}}. Originally, CSS
  2.0 defined the _computed values_ as the "ready to be used" final values of
  properties after cascading and inheritance, but CSS 2.1 redefined them as pre-layout,
  and _used values_ as post-layout. For CSS 2.0 properties,
  `getComputedStyle` returns the old meaning of computed values, now called
  **used values**. An example difference between pre- and post-layout
  values includes the resolution of percentages for `width` or
  `height`, as those will be replaced by their pixel equivalent only for
  _used values_.
- Returned values are sometimes deliberately inaccurate. To avoid the "CSS History
  Leak" security issue, browsers may lie about the computed styles for a visited link,
  returning values as if the user never visited the linked URL. See [Plugging the CSS History Leak](https://blog.mozilla.org/security/2010/03/31/plugging-the-css-history-leak/) and [Privacy-related changes coming to CSS :visited](https://hacks.mozilla.org/2010/03/privacy-related-changes-coming-to-css-vistited/) for examples of how this is implemented.
- During [CSS transitions](/en-US/docs/Web/CSS/CSS_Transitions),
  `getComputedStyle` returns the original property value in Firefox, but the
  final property value in WebKit.
- In Firefox, properties with the value `auto` return the used value, not
  the value `auto`. So if you apply `top:auto` and
  `bottom:0` on an element with `height:30px` and a containing
  block of `height:100px`, Firefox's computed style for `top`
  returns `70px`, as 100 − 30 = 70.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{DOMxRef("window.getDefaultComputedStyle")}}
- {{CSSxRef("resolved_value", "Resolved Value")}}
