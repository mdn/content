---
title: Element.querySelector()
slug: Web/API/Element/querySelector
page-type: web-api-instance-method
tags:
  - API
  - CSS
  - CSS Selectors
  - DOM
  - Element
  - Elements
  - Finding Elements
  - Locating Elements
  - Method
  - Reference
  - Searching Elements
  - Selecting Elements
  - Selectors
  - querySelector
browser-compat: api.Element.querySelector
---
{{APIRef("DOM")}}

The **`querySelector()`** method of the {{domxref("Element")}}
interface returns the first element that is a descendant of the element on which it is
invoked that matches the specified group of selectors.

## Syntax

```js
querySelector(selectors)
```

### Parameters

- `selectors`
  - : A group of [selectors](/en-US/docs/Learn/CSS/Building_blocks/Selectors) to match
    the descendant elements of the {{domxref("Element")}} `baseElement`
    against; this must be valid CSS syntax, or a `SyntaxError` exception will
    occur. The first element found which matches this group of selectors is returned.

### Return value

The first descendant element of `baseElement` which matches the specified
group of `selectors`. The entire hierarchy of elements is considered when
matching, including those outside the set of elements including `baseElement`
and its descendants; in other words, `selectors` is first applied to the
whole document, not the `baseElement`, to generate an initial list of
potential elements. The resulting elements are then examined to see if they are
descendants of `baseElement`. The first match of those remaining elements is
returned by the `querySelector()` method.

If no matches are found, the returned value is `null`.

### Exceptions

- `SyntaxError` {{domxref("DOMException")}}
  - : Thrown if the specified `selectors` are invalid.

## Examples

Let's consider a few examples.

### Find a specific element with specific values of an attribute

In this first example, the first {{HTMLElement("style")}} element which either has no
type or has type "text/css" in the HTML document body is returned:

```js
const el = document.body.querySelector("style[type='text/css'], style:not([type])");
```

### Get direct descendants using the :scope pseudo-class

This example uses the {{cssxref(":scope")}} pseudo-class to retrieve direct children of the `parentElement` element.

#### HTML

```html
<div>
  <h6>Page Title</h6>
  <div id="parent">
    <span>Love is Kind.</span>
    <span>
      <span>Love is Patient.</span>
    </span>
    <span>
      <span>Love is Selfless.</span>
    </span>
  </div>
</div>
```

#### CSS

```css
  span {
    display:block;
    margin-bottom: 5px;
  }
  .red span {
    background-color: red;
    padding:5px;
  }
```

#### JavaScript

```js
  const parentElement = document.querySelector('#parent');
  let allChildren = parentElement.querySelectorAll(":scope > span");
  allChildren.forEach((item) => item.classList.add("red"));
```

#### Result

{{ EmbedLiveSample('Get_direct_descendants_using_the_scope_pseudo-class', 600, 160) }}

### The entire hierarchy counts

This example demonstrates that the hierarchy of the entire document is considered when
applying `selectors`, so that levels outside the specified
`baseElement` are still considered when locating matches.

#### HTML

```html
<div>
  <h5>Original content</h5>
  <p>
    inside paragraph
    <span>inside span</span>
    inside paragraph
  </p>
</div>
<div>
  <h5>Output</h5>
  <div id="output"></div>
</div>
```

#### JavaScript

```js
const baseElement = document.querySelector("p");
document.getElementById("output").innerHTML =
  (baseElement.querySelector("div span").innerHTML);
```

#### Result

The result looks like this:

{{ EmbedLiveSample('The_entire_hierarchy_counts', 600, 160) }}

Notice how the `"div span"` selector still successfully matches the
{{HTMLElement("span")}} element, even though the `baseElement`'s child nodes
do not include the {{HTMLElement("div")}} element (it is still part of the specified
selector).

### More examples

See {{domxref("Document.querySelector()")}} for additional examples of the proper
format for the `selectors`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Locating DOM elements using selectors](/en-US/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors)
- [Attribute selectors](/en-US/docs/Web/CSS/Attribute_selectors) in the CSS
  Guide
- [Attribute selectors](/en-US/docs/Learn/CSS/Building_blocks/Selectors/Attribute_selectors) in the MDN Learning Area
- {{domxref("Element.querySelectorAll()")}}
- {{domxref("Document.querySelector()")}} and
  {{domxref("Document.querySelectorAll()")}}
- {{domxref("DocumentFragment.querySelector()")}} and
  {{domxref("DocumentFragment.querySelectorAll()")}}
- Other methods that take selectors: {{domxref("element.closest()")}} and
  {{domxref("element.matches()")}}.
