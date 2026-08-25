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

Use this attribute for content that is not part of the structure of the surrounding document, such as a {{htmlelement("dialog")}}, a popover, or markup inserted from another source. Their headings then start again at level 1.

If the element carries both `headingoffset` and `headingreset`, its own offset applies and everything above it is discarded.

## Examples

### Resetting heading levels in a dialog

In this example, the `<section>` offsets its headings by `2`, so the heading directly inside it is at level 3. The `<dialog>` element has `headingreset`, so the section's offset never reaches the heading inside the dialog, which stays at level 1:

```html
<section headingoffset="2">
  <h1>Level 3</h1>

  <dialog headingreset>
    <h1>Level 1</h1>
    <p>The offset of the section does not apply here.</p>
  </dialog>
</section>
```

### Using `headingreset` and `headingoffset` on the same element

In this example, the outer offset of `3` never reaches the heading. Only the offset on the element with `headingreset` applies, so the heading is at level 2:

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
