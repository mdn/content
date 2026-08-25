---
title: "`headingoffset` HTML global attribute"
short-title: headingoffset
slug: Web/HTML/Reference/Global_attributes/headingoffset
page-type: html-attribute
sidebar: htmlsidebar
status:
  - experimental
browser-compat:
  - html.global_attributes.headingoffset
---

{{SeeCompatTable}}

The **`headingoffset`** [global attribute](/en-US/docs/Web/HTML/Reference/Global_attributes) increases the computed heading level of the [heading elements](/en-US/docs/Web/HTML/Reference/Elements/Heading_Elements) inside the element it is set on, without changing the elements used to write them.

## Values

A valid non-negative integer between `0` and `8`, inclusive. A value that cannot be parsed as a non-negative integer is treated as an offset of `0`.

## Description

Each heading element has a **computed heading level**, which is the level assistive technologies expose to users. Without `headingoffset`, that level is the number in the element's name: `1` for [`<h1>`](/en-US/docs/Web/HTML/Reference/Elements/Heading_Elements), `2` for `<h2>`, and so on.

The `headingoffset` attribute adds to that number. To find the offset for a heading, the browser starts at the heading element itself and walks up through its ancestors, adding up every `headingoffset` value it finds. The offsets accumulate: an `<h1>` inside an element with `headingoffset="1"` that is itself inside an element with `headingoffset="2"` has a computed heading level of 4.

Because the walk starts at the heading element, an offset on the heading itself also counts: `<h1 headingoffset="2">` has a computed heading level of 3.

The walk stops at the first element that has the [`headingreset`](/en-US/docs/Web/HTML/Reference/Global_attributes/headingreset) attribute, after adding that element's own `headingoffset`.

The computed heading level never exceeds `9`, even in cases where offsets add up to more. Because HTML has no heading element above `<h6>`, heading levels of 7, 8, and 9 can be produced only by the `headingoffset` attribute or by the [`aria-level`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-level) attribute.

This attribute affects only the computed heading level. It does not change the following:

- The element's name, so CSS selectors such as `h1` still match, and the default styling of the heading is unchanged.
- The element's [ARIA role](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/heading_role), which stays `heading`.
- An explicit `aria-level` attribute on the heading, which takes precedence over the computed heading level.

Because the offset comes from the heading and its ancestors, a reusable component can always use the same heading markup, such as an `<h1>` for its title. You can then use the same markup at any depth of a page without editing its headings. This also avoids the accessibility problem caused by picking a heading element for its font size.

## Accessibility

Screen reader users navigate by headings and rely on heading levels to understand how a page is structured. Use `headingoffset` to make those levels match the visual structure of the page, and check the result with a screen reader or the browser's accessibility inspector.

In browsers that do not support this attribute, headings keep the level of their element name, so the markup must still make sense without the offset. Alternatively, you can set [`aria-level`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-level) as a fallback.

## Examples

### Offsetting headings in a component

In this example, the markup uses the same component structure twice – an `<article>` with an `<h1>` title. The second one is nested in a `<section>` that offsets its headings by one level.

```html
<h1>Insect guide</h1>

<article>
  <h1>Beetles</h1>
  <p>A beetle has a hardened forewing.</p>
</article>

<section headingoffset="1">
  <h1>Appendix</h1>
  <article>
    <h1>Beetles, revisited</h1>
    <p>The same component, one level deeper.</p>
  </article>
</section>
```

The computed heading levels are:

- `Insect guide`: level 1
- `Beetles`: level 1
- `Appendix`: level 2
- `Beetles, revisited`: level 2

### Accumulating offsets

Offsets from nested elements are added together, so this `<h2>` has a computed heading level of 5:

```html
<article headingoffset="1">
  <section headingoffset="2">
    <h2>Level 5</h2>
  </section>
</article>
```

### Stopping the offset

An element with the [`headingreset`](/en-US/docs/Web/HTML/Reference/Global_attributes/headingreset) attribute stops the offsets of its ancestors from applying to its descendants. This is useful for content that is not part of the surrounding document structure, such as a dialog:

```html
<section headingoffset="2">
  <h1>Level 3</h1>

  <dialog headingreset>
    <h1>Level 1</h1>
  </dialog>
</section>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`headingreset`](/en-US/docs/Web/HTML/Reference/Global_attributes/headingreset) global attribute
- [`<h1>`–`<h6>`](/en-US/docs/Web/HTML/Reference/Elements/Heading_Elements) elements
- [`aria-level`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-level) attribute
- [ARIA: heading role](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/heading_role)
