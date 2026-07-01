---
title: "HTMLImageElement: longDesc property"
short-title: longDesc
slug: Web/API/HTMLImageElement/longDesc
page-type: web-api-instance-property
status:
  - deprecated
browser-compat: api.HTMLImageElement.longDesc
---

{{APIRef("HTML DOM")}}{{deprecated_header}}

The _deprecated_ **`longDesc`** property of the {{domxref("HTMLImageElement")}} interface specifies the URL of a text or HTML file which contains a long-form description of the image. This can be used to provide optional added details beyond the short description provided in the [`title`](/en-US/docs/Web/HTML/Reference/Global_attributes/title) attribute. It reflects the `<img>` element's [`longdesc`](/en-US/docs/Web/HTML/Reference/Elements/img#longdesc) content attribute.

This attribute is considered obsolete in the [HTML spec](https://html.spec.whatwg.org/multipage/obsolete.html#element-attrdef-img-longdesc). It has an uncertain future; authors should use a {{glossary("WAI")}}-{{glossary("ARIA")}} alternative such as [`aria-describedby`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) or [`aria-details`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details). You can also encapsulate the image within a link using the {{HTMLElement("a")}} element.

## Value

A string which may be either an empty string (indicating that no long description is available) or the URL of a file containing a long form description of the image's contents.

## Examples

Consider the following older HTML:

```html
<img
  src="taco-tuesday.jpg"
  alt="Taco Tuesday"
  longdesc="image-descriptions/taco-tuesday.html" />
```

Here, the `longDesc` is used to indicate that the user should be able to access a detailed description of the image `taco-tuesday.jpg` in the HTML file `image-descriptions/taco-tuesday.html`.

This should be converted into the following HTML:

```html
<a href="image-descriptions/taco-tuesday.html">
  <img src="taco-tuesday.jpg" alt="Taco Tuesday" />
</a>
```

With that, the image is a link to the HTML file describing the image in more detail.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`aria-details`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details)
