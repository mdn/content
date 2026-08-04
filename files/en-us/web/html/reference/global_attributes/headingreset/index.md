---
title: "`headingreset` HTML global attribute"
short-title: headingreset
slug: Web/HTML/Reference/Global_attributes/headingreset
page-type: html-attribute
status:
  - experimental
browser-compat: html.global_attributes.headingreset
sidebar: htmlsidebar
---

{{SeeCompatTable}}

The **`headingreset`** [global attribute](/en-US/docs/Web/HTML/Reference/Global_attributes) is a [boolean attribute](/en-US/docs/Glossary/Boolean/HTML) that stops the [`headingoffset`](/en-US/docs/Web/HTML/Reference/Global_attributes/headingoffset) values of ancestor elements from applying to the [headings](/en-US/docs/Web/HTML/Reference/Elements/Heading_Elements) inside it.

## Syntax

```html
<dialog headingreset>
  <h1>This heading has a computed heading level of 1</h1>
</dialog>
```

Like other boolean attributes, its presence enables it. The value is ignored, so `headingreset`, `headingreset=""`, and `headingreset="false"` all have the same effect.

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
