---
title: HTMLElement.dir
slug: Web/API/HTMLElement/dir
page-type: web-api-instance-property
tags:
  - API
  - HTML DOM
  - HTMLElement
  - Property
  - Reference
browser-compat: api.HTMLElement.dir
---
{{ApiRef("HTML DOM")}}

The **`HTMLElement.dir`** property gets or sets the text
writing directionality of the content of the current element.

The text writing directionality of an element is which direction that text goes (for
support of different language systems). Arabic languages and Hebrew are typical
languages using the RTL directionality.

An image can have its `dir` property set to "`rtl`" in which case
the HTML attributes `title` and `alt` will be formatted and
defined as "`rtl`".

When a table has its `dir` set to "`rtl`", the column order is
arranged from right to left.

When an element has its dir set to "`auto`", the direction of the element is
determined based on its first strong directionality character, or default to the
directionality of its parent element.

> **Note:** Browsers might allow users to change the directionality of {{ HTMLElement("input") }}
> and {{ HTMLElement("textarea") }}s in order to assist with authoring content. Chrome
> and Safari provide a directionality option in the contextual menu of input fields
> while Internet Explorer and Edge use the key combinations <kbd>Ctrl</kbd> + <kbd>Left Shift</kbd> and <kbd>Ctrl</kbd> + <kbd>Right Shift</kbd>. Firefox uses <kbd>Ctrl</kbd>/<kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>X</kbd> but does NOT update
> the **`dir`** attribute value.

## Value

One of the following:

- `ltr`, for left-to-right;
- `rtl`, for right-to-left;
- `auto` for specifying that the direction of the element must be determined based on the contents of the element.

## Examples

```js
const parg = document.getElementById("para1");
parg.dir = "rtl";
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
