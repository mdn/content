---
title: Element.ariaCurrent
slug: Web/API/Element/ariaCurrent
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - ariaCurrent
  - AriaAttributes
  - AriaMixin
  - Element
browser-compat: api.Element.ariaCurrent
---
{{DefaultAPISidebar("DOM")}}

The **`ariaCurrent`** property of the {{domxref("Element")}} interface reflects the value of the [`aria-current`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-current) attribute, which indicates the element that represents the current item within a container or set of related elements.

## Value

A string with one of the following values:

- `"page"`
  - : Represents the current page within a set of pages.
- `"step"`
  - : Represents the current step within a process.
- `"location"`
  - : Represents the current location, for example the current page in a breadcrumbs hierarchy.
- `"date"`
  - : Represents the current date within a collection of dates.
- `"time"`
  - : Represents the current time within a set of times.
- `"true"`
  - : Represents the current item within a set.
- `"false"`
  - : Does not represent the current item within a set.

## Examples

In this example a set of links are used for site navigation. The `aria-current` attribute indicates the current page. The value `page` is incorporated into the screen reader announcement. Using `ariaCurrent` we can update that value.

```html
<nav>
  <ul>
    <li><a id="link-home" href="/" aria-current="page">Home</a></li>
    <li><a href="/">About</a></li>
    <li><a href="/">Contact</a></li>
  </ul>
</nav>
```

```js
let el = document.getElementById('link-home');
console.log(el.ariaCurrent); // "page"
el.ariaCurrent = "tab"
console.log(el.ariaCurrent); // "tab"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the aria-current attribute](https://tink.uk/using-the-aria-current-attribute/)
