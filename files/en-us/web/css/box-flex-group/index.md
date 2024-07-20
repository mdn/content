---
title: box-flex-group
slug: Web/CSS/box-flex-group
page-type: css-property
status:
  - deprecated
  - non-standard
browser-compat: css.properties.box-flex-group
---

{{CSSRef}}{{Non-standard_Header}}{{Deprecated_Header}}

> **Warning:** This is a property of the original CSS flexible box layout Module draft. It has been replaced in the specification. See [flexbox](/en-US/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox) for information about the current standard.

The **`box-flex-group`** [CSS](/en-US/docs/Web/CSS) property assigns the flexbox's child elements to a flex group.

For flexible elements assigned to flex groups, the first flex group is 1 and higher values specify subsequent flex groups. The initial value is 1. When dividing up the box's extra space, the browser first considers all elements within the first flex group. Each element within that group is given extra space based on the ratio of that element's flexibility compared to the flexibility of other elements within the same flex group. If the space of all flexible children within the group has been increased to the maximum, the process repeats for the children within the next flex group, using any space left over from the previous flex group. Once there are no more flex groups, and there is still space remaining, the extra space is divided within the containing box according to the {{cssxref("box-pack")}} property.

If the box would overflow after the preferred space of the children has been computed, then space is removed from flexible elements in a manner similar to that used when adding extra space. Each flex group is examined in turn and space is removed according to the ratio of the flexibility of each element. Elements do not shrink below their minimum widths.

## Syntax

```css
/* <integer> values */
box-flex-group: 1;
box-flex-group: 5;

/* Global values */
box-flex-group: inherit;
box-flex-group: initial;
box-flex-group: unset;
```

The `box-flex-group` property is specified as any positive {{CSSxRef("&lt;integer&gt;")}}.

## Formal definition

{{CSSInfo}}

## Formal syntax

```plain
box-flex-group =
  <integer>
```

## Examples

### Simple usage example

In the original flexbox spec, `box-flex-group` could be used to assign flex children to different groups to distribute flexible space between:

```css
article:nth-child(1) {
  -webkit-box-flex-group: 1;
}

article:nth-child(2) {
  -webkit-box-flex-group: 2;
}
```

This was only ever supported in WebKit-based browsers, with a prefix, and in subsequent versions of the spec this functionality does not have an equivalent. Instead, distribution of space inside the flex container is now handled using [`flex-basis`](/en-US/docs/Web/CSS/flex-basis), [`flex-grow`](/en-US/docs/Web/CSS/flex-grow), and [`flex-shrink`](/en-US/docs/Web/CSS/flex-shrink).

## Specifications

Not part of any standard.

## Browser compatibility

{{Compat}}

## See also

- {{CSSxRef("flex")}}
- {{CSSxRef("flex-basis")}}
- {{CSSxRef("flex-grow")}}
- {{CSSxRef("flex-shrink")}}
