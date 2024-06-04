---
title: position-anchor
slug: Web/CSS/position-anchor
page-type: css-property
status:
  - experimental
browser-compat: css.properties.position-anchor
---

{{CSSRef}}{{seecompattable}}

The **`position-anchor`** [CSS](/en-US/docs/Web/CSS) property associates a positioned element with its **anchor element** (i.e. an element that has had an **anchor name** set on it via the {{cssxref("anchor-name")}} property). This is done by specifying the anchor name as the value of the positioned element's `position-anchor` property.

## Syntax

```css
/* Single values */
position-anchor: implicit;
position-anchor: --name;

/* Global values */
position-anchor: inherit;
position-anchor: initial;
position-anchor: revert;
position-anchor: revert-layer;
position-anchor: unset;
```

### Values

- `auto`

  - : Associates a positioned element with its implicit anchor element, if it has one — for example as set by the non-standard HTML [`anchor`](/en-US/docs/Web/HTML/Global_attributes/anchor) attribute.

- {{cssxref("dashed-ident")}}
  - : The name of the anchor element to associate the positioned element with, as defined by the anchor element's {{cssxref("anchor-name")}} property. This is known as the **default anchor specifier**.

## Description

To position an element relative to an anchor element, the positioned element requires three features: an association, a position, and a location. The `position-anchor` and {{htmlelement("anchor-name")}} properties provide the association. The anchor element has a `<dashed-ident>` anchor name set on it via the `anchor-name` property; the same name is then set as the value of the positioned element's `position-anchor` property to associate the two.

If multiple anchor elements have the same anchor name set on them, and that name is referenced by the `position-anchor` property value of a positioned element, that positioned element will be associated with the last anchor element with that anchor name in the source order.

To create an anchor-positioned element, you have to set its {{cssxref("position")}} property to either `fixed` or `absolute`. The element needs to be placed after the anchor element in the DOM, or be a descendant of it, for this association to work. This `position` will be relative to the anchor rather than to the nearest ancestor positioned element.

To tether and place a positioned element in a specific location relative to an anchor element, an anchor positioning feature such as the {{cssxref("anchor()")}} function or the {{cssxref("inset-area")}} property is needed.

You cannot associate a positioned element with an anchor element if the anchor is hidden, for example with {{cssxref("display", "display: none")}} or {{cssxref("visibility", "visibility: hidden")}}, or if it is part of the [skipped contents](/en-US/docs/Web/CSS/CSS_containment/Using_CSS_containment#skips_its_contents) of another element due to it having {{cssxref("content-visibility", "content-visibility: hidden")}} set on it.

[Pseudo-elements](/en-US/docs/Web/CSS/Pseudo-elements) set on anchor-positioned elements are implicitly anchored to the same element as the pseudo-element's originating element, unless otherwise specified.

For detailed information on anchor features and usage, see the [CSS anchor positioning](/en-US/docs/Web/CSS/CSS_anchor_positioning) module landing page and the [Using CSS anchor positioning](/en-US/docs/Web/CSS/CSS_anchor_positioning/Using) guide.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

See [`anchor-name`](/en-US/docs/Web/CSS/anchor-name#examples).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("anchor-name")}}
- HTML [`anchor`](/en-US/docs/Web/HTML/Global_attributes/anchor) attribute
- [CSS anchor positioning](/en-US/docs/Web/CSS/CSS_anchor_positioning)
- [Using CSS anchor positioning](/en-US/docs/Web/CSS/CSS_anchor_positioning/Using)
