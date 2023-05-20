---
title: order
slug: Web/CSS/order
page-type: css-property
browser-compat: css.properties.order
---

{{CSSRef}}

The **`order`** [CSS](/en-US/docs/Web/CSS) property sets the order to lay out an item in a flex or grid container. Items in a container are sorted by ascending `order` value and then by their source code order.

{{EmbedInteractiveExample("pages/css/order.html")}}

## Syntax

```css
/* <integer> values */
order: 5;
order: -5;

/* Global values */
order: inherit;
order: initial;
order: revert;
order: revert-layer;
order: unset;
```

Since `order` is only meant to affect the _visual order_ of elements and not their logical or tab order. `order` must not be used on non-visual media such as [speech](/en-US/docs/Web/CSS/@media#speech).

### Values

- {{cssxref("&lt;integer&gt;")}}
  - : Represents the ordinal group to be used by the item.

## Accessibility concerns

Using the `order` property will create a disconnect between the visual presentation of content and DOM order. This will adversely affect users experiencing low vision navigating with the aid of assistive technology such as a screen reader. If the visual (css) order is important, then screen reader users will not have access to the correct reading order.

- [Flexbox & the keyboard navigation disconnect — Tink](https://tink.uk/flexbox-the-keyboard-navigation-disconnect/)
- [Source Order Matters | Adrian Roselli](https://adrianroselli.com/2015/09/source-order-matters.html)
- [MDN Understanding WCAG, Guideline 1.3 explanations](/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.3_%e2%80%94_create_content_that_can_be_presented_in_different_ways)
- [Understanding Success Criterion 1.3.2 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-sequence.html)

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Ordering items in a flex container

This example uses CSS to create a classic two-sidebar layout surrounding a content block. The Flexible Box Layout Module automatically creates blocks of equal vertical size and uses as much horizontal space as available.

#### HTML

```html
<header>…</header>
<main>
  <article>Article</article>
  <nav>Nav</nav>
  <aside>Aside</aside>
</main>
<footer>…</footer>
```

#### CSS

```css
main {
  display: flex;
  text-align: center;
}
main > article {
  flex: 1;
  order: 2;
}
main > nav {
  width: 200px;
  order: 1;
}
main > aside {
  width: 200px;
  order: 3;
}
```

#### Result

{{ EmbedLiveSample('Ordering_items_in_a_flex_container') }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- CSS Flexbox Guide: _[Basic Concepts of Flexbox](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)_
- CSS Flexbox Guide: _[Ordering flex items](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Ordering_Flex_Items)_
- CSS Grid Guide: _[CSS Grid Layout and accessibility](/en-US/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_Layout_and_Accessibility)_
