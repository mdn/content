---
title: "HTMLElement: dir property"
short-title: dir
slug: Web/API/HTMLElement/dir
page-type: web-api-instance-property
browser-compat: api.HTMLElement.dir
---

{{ApiRef("HTML DOM")}}

The **`HTMLElement.dir`** property indicates the text writing directionality of the content of the current element. It reflects the element's [`dir`](/en-US/docs/Web/HTML/Global_attributes/dir) attribute.

Note that if the `dir` attribute is unspecified, the element itself may still inherit directionality from its parent. However, that inherited directionality is not reflected by this property's value.

The text writing directionality of an element is which direction that text goes (for support of different language systems). Arabic languages and Hebrew are typical languages using the RTL directionality.

## Value

One of the following:

- `"ltr"`
  - : Left-to-right writing direction.
- `"rtl"`
  - : Right-to-left writing direction.
- `"auto"`
  - : The direction of the element must be determined based on the contents of the element.
- `""`
  - : The default value; the directionality is inherited from the parent element.

## Examples

```js
const para = document.getElementById("para1");
para.dir = "rtl";
// change the text direction on a paragraph identified as "para1"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("document.dir")}}
- HTML [`dir`](/en-US/docs/Web/HTML/Global_attributes/dir)
  global attribute
- CSS {{cssxref("direction")}} property
- CSS {{cssxref(":dir")}} pseudo-class
