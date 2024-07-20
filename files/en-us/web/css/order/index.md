---
title: order
slug: Web/CSS/order
page-type: css-property
browser-compat: css.properties.order
---

{{CSSRef}}

The **`order`** [CSS](/en-US/docs/Web/CSS) property sets the order to lay out an item in a flex or grid container. Items in a container are sorted by ascending `order` value and then by their source code order. Items not given an explicit `order` value are assigned the default value of `0`.

{{EmbedInteractiveExample("pages/css/order.html")}}

In the above demo, select the options on the left-hand side to change the value of the pink box's `order` property. The light blue boxes have been given fixed `order` values.

Bear in mind the effect of source order. For example, when `order: 2;` is selected, the pink box is placed before the two blue boxes with `order: 2;`. This is because the pink box appears before the blue boxes in the source code.

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

Defined in the [CSS display](/en-US/docs/Web/CSS/CSS_display) module, this property impacts only grid and flex items. When `order` is set on an element whose parent's {{cssxref("display")}} property is not creating a flex or grid container, the `order` property has no effect.

### Values

- {{cssxref("&lt;integer&gt;")}}
  - : Represents the ordinal group to be used by the item.

## Accessibility concerns

Using the `order` property will create a disconnect between the visual presentation of content and DOM order. This will adversely affect low vision users navigating with the aid of assistive technology such as a screen reader. If the visual order differs from the DOM order, your users will have different experiences depending on how they access your content.

- [Flexbox & the keyboard navigation disconnect](https://tink.uk/flexbox-the-keyboard-navigation-disconnect/) via Tink (2016)
- [Source Order Matters](https://adrianroselli.com/2015/09/source-order-matters.html) via Adrian Roselli (2015)
- [Understanding WCAG, Guideline 1.3 explanations](/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.3_—_create_content_that_can_be_presented_in_different_ways)
- [Understanding Success Criterion 1.3.2 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-sequence.html)

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Ordering items in a flex container

In this example, we create a classic two-sidebar layout.

#### HTML

We include a header, a footer, and a main content area. The main content includes an article and two side bars. Note their order! We'll use the CSS `order` property to change their visual order.

```html
<header>Header</header>
<main>
  <article>Article</article>
  <nav>Nav</nav>
  <aside>Aside</aside>
</main>
<footer>Footer</footer>
```

#### CSS

We style the main area using [flexible box layout](/en-US/docs/Web/CSS/CSS_flexible_box_layout) module features; by setting {{cssxref("display")}} to `flex`, the {{htmlelement("main")}} element becomes a flex container. By default, this creates flex items of equal vertical size. The sidebars are both given an absolute {{cssxref("width")}}, while the {{htmlelement("article")}} will consume all the [positive free space](/en-US/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis#positive_and_negative_free_space) with a {{cssxref("flex-grow")}} factor set via the {{cssxref("flex")}} shorthand.

We then set different `order` property values on each of the flex container's three children; this means the CSS is defining that component's visual order rather than it appearing in the order declared in the HTML.

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

The `<article>` appears first in the source order but visually rendered in the center.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Basic concepts of flexbox](/en-US/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Ordering flex items](/en-US/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items)
- [CSS grid layout and accessibility](/en-US/docs/Web/CSS/CSS_grid_layout/Grid_layout_and_accessibility)
- [CSS display](/en-US/docs/Web/CSS/CSS_display) module
