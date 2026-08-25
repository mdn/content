---
title: "`headingreset` HTML global attribute"
short-title: headingreset
slug: Web/HTML/Reference/Global_attributes/headingreset
page-type: html-attribute
sidebar: htmlsidebar
---

{{SeeCompatTable}}

The **`headingreset`** [global attribute](/en-US/docs/Web/HTML/Reference/Global_attributes) stops the [`headingoffset`](/en-US/docs/Web/HTML/Reference/Global_attributes/headingoffset) values of ancestor elements from applying to the [heading elements](/en-US/docs/Web/HTML/Reference/Elements/Heading_Elements) inside the element it is set on.

## Values

This is a [boolean attribute](/en-US/docs/Glossary/Boolean/HTML); it takes effect when it is present. A value for it is ignored, so `headingreset`, `headingreset=""`, and `headingreset="false"` all have the same effect.

## Description

When a browser computes the [heading level](/en-US/docs/Web/HTML/Reference/Global_attributes/headingoffset#description) of a heading element, it walks up the ancestor chain and adds up the [`headingoffset`](/en-US/docs/Web/HTML/Reference/Global_attributes/headingoffset) values it finds. The `headingreset` attribute stops that walk: offsets set on the element itself still count, but no ancestor above it contributes an offset.

Use it for content that is not part of the structure of the surrounding document, such as a {{htmlelement("dialog")}}, a popover, or content inserted from another source, where headings should start again at level 1.

If the element carries both `headingoffset` and `headingreset`, its own offset applies and everything above it is discarded.

## Examples

### Resetting heading levels in a dialog

The `<section>` offsets its headings by 2, so its own heading is at level 3. The dialog has `headingreset`, so the heading inside it is back at level 1:

```html
<section headingoffset="2">
  <h1>Level 3</h1>

  <dialog headingreset>
    <h1>Level 1</h1>
    <p>The offset of the section does not apply here.</p>
  </dialog>
</section>
```

### Combining `headingreset` with `headingoffset`

Here the outer offset of 3 is discarded, and only the offset on the element with `headingreset` is applied:

```html
<div headingoffset="3">
  <div headingreset headingoffset="1">
    <h1>Level 2</h1>
  </div>
</div>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`headingoffset`](/en-US/docs/Web/HTML/Reference/Global_attributes/headingoffset) global attribute
- [`<h1>`–`<h6>`](/en-US/docs/Web/HTML/Reference/Elements/Heading_Elements) elements
- [`aria-level`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-level) attribute
