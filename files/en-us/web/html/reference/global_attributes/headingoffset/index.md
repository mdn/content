---
title: "`headingoffset` HTML global attribute"
short-title: headingoffset
slug: Web/HTML/Reference/Global_attributes/headingoffset
page-type: html-attribute
status:
  - experimental
browser-compat: html.global_attributes.headingoffset
sidebar: htmlsidebar
---

{{SeeCompatTable}}

The **`headingoffset`** [global attribute](/en-US/docs/Web/HTML/Reference/Global_attributes) increases the heading level of the [heading elements](/en-US/docs/Web/HTML/Reference/Elements/Heading_Elements) inside the element it is set on, without changing the tags used to write them.

This lets you write a component that always uses the same heading markup, such as an `<h1>` for its title, and have that heading take the level that fits the place where the component is used.

## Syntax

```html
<article headingoffset="1">
  <h1>This heading has a computed heading level of 2</h1>
</article>
```

### Value

A non-negative integer between `0` and `8`, inclusive. Values outside that range, and values that are not valid non-negative integers, are ignored, which is the same as an offset of `0`.

## Description

Each heading element has a **computed heading level**, which is the level assistive technologies expose to users. Without `headingoffset`, that level is the number in the element's tag name: `1` for [`<h1>`](/en-US/docs/Web/HTML/Reference/Elements/Heading_Elements), `2` for `<h2>`, and so on.

The `headingoffset` attribute adds to that number. The browser walks up from the heading element through its ancestors — crossing shadow boundaries into the shadow host — and adds up the `headingoffset` values it finds. It stops at the first ancestor that has the [`headingreset`](/en-US/docs/Web/HTML/Reference/Global_attributes/headingreset) attribute. The offsets therefore accumulate: an `<h1>` inside an element with `headingoffset="1"` that is itself inside an element with `headingoffset="2"` has a computed heading level of 4.

The computed heading level is clamped to a maximum of `9`. Levels above 6 cannot be written with a tag name, so they can only be produced by `headingoffset` or by the [`aria-level`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-level) attribute.

The attribute affects the computed heading level only. It does not change:

- The element's tag name, so CSS selectors such as `h1` still match, and the default styling of the heading is unchanged.
- The element's [ARIA role](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/heading_role), which stays `heading`.
- An explicit `aria-level` attribute on the heading, which takes precedence over the computed heading level.

Because the offset comes from ancestors, the same component markup can be reused at different depths of a page without editing its headings, and without the accessibility problems caused by picking a heading tag for its font size.

## Examples

### Offsetting headings in a component

In this example, the same article markup is used twice. Both copies use an `<h1>` for their title, but the second one is nested in a `<section>` that offsets its headings by one level.

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

## Accessibility

Screen reader users navigate by headings and rely on heading levels to understand how a page is structured. Use `headingoffset` to make those levels match the visual structure of the page, and check the result with a screen reader or with the browser's accessibility inspector.

At the time of writing, `headingoffset` is not enabled by default in any browser. In browsers that do not support it, headings keep the level of their tag name, so the markup must still make sense without the offset — or you can set [`aria-level`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-level) as a fallback.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`headingreset`](/en-US/docs/Web/HTML/Reference/Global_attributes/headingreset) global attribute
- [`<h1>`–`<h6>`](/en-US/docs/Web/HTML/Reference/Elements/Heading_Elements) elements
- [`aria-level`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-level) attribute
- [ARIA: heading role](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/heading_role)
