---
title: contain
slug: Web/CSS/contain
page-type: css-property
browser-compat: css.properties.contain
---

{{CSSRef}}

The **`contain`** [CSS](/en-US/docs/Web/CSS) property indicates that an element and its contents are, as much as possible, independent from the rest of the document tree.
Containment enables isolating a subsection of the DOM, providing performance benefits by limiting calculations of layout, style, paint, size, or any combination to a DOM subtree rather than the entire page. Containment can also be used to scope CSS counters and quotes.

{{EmbedInteractiveExample("pages/css/contain.html")}}

There are four types of CSS containment: size, layout, style, and paint, which are set on the container.
The property is a space-separated list of a subset of the five standard values or one of the two shorthand values.
Changes to the contained properties within the container are not propagated outside of the contained element to the rest of the page.
The main benefit of containment is that the browser does not have to re-render the DOM or page layout as often, leading to small performance benefits during the rendering of static pages and greater performance benefits in more dynamic applications.

Using the `contain` property is useful on pages with groups of elements that are supposed to be independent, as it can prevent element internals from having side effects outside of its bounding-box.

> **Note:** using `layout`, `paint`, `strict` or `content` values for this property creates:
>
> 1. A new [containing block](/en-US/docs/Web/CSS/Containing_block) (for the descendants whose {{cssxref("position")}} property is `absolute` or `fixed`).
> 2. A new [stacking context](/en-US/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context).
> 3. A new [block formatting context](/en-US/docs/Web/Guide/CSS/Block_formatting_context).

## Syntax

```css
/* Keyword values */
contain: none;
contain: strict;
contain: content;
contain: size;
contain: inline-size;
contain: layout;
contain: style;
contain: paint;

/* Multiple keywords */
contain: size paint;
contain: size layout paint;
contain: inline-size layout;

/* Global values */
contain: inherit;
contain: initial;
contain: revert;
contain: revert-layer;
contain: unset;
```

### Values

The `contain` property can have any of the following values:

- The keyword `none` **or**
- One or more of the space-separated keywords `size` (or `inline-size`), `layout`, `style`, and `paint` in any order **or**
- One of the shorthand values `strict` or `content`

The keywords have the following meanings:

- `none`
  - : The element renders as normal, with no containment applied.
- `strict`
  - : All containment rules are applied to the element. This is equivalent to `contain: size layout paint style`.
- `content`
  - : All containment rules except `size` are applied to the element. This is equivalent to `contain: layout paint style`.
- `size`
  - : Size containment is applied to the element in both the inline and block directions. The size of the element can be computed in isolation, ignoring the child elements. This value cannot be combined with `inline-size`.
- `inline-size`
  - : Inline size containment is applied to the element. The inline size of the element can be computed in isolation, ignoring the child elements. This value cannot be combined with `size`.
- `layout`
  - : The internal layout of the element is isolated from the rest of the page. This means nothing outside the element affects its internal layout, and vice versa.
- `style`
  - : For properties that can affect more than just an element and its descendants, the effects don't escape the containing element. Counters and quotes are scoped to the element and its contents.
- `paint`
  - : Descendants of the element don't display outside its bounds. If the containing box is offscreen, the browser does not need to paint its contained elements — these must also be offscreen as they are contained completely by that box. If a descendant overflows the containing element's bounds, then that descendant will be clipped to the containing element's border-box.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Paint containment

The following example shows how to use `contain: paint` to prevent an element's descendants from painting outside of its bounds.

```css
div {
  width: 100px;
  height: 100px;
  background: red;
  margin: 10px;
  font-size: 20px;
}
```

```html
<div style="contain: paint">
  <p>This text will be clipped to the bounds of the box.</p>
</div>
<div>
  <p>This text will not be clipped to the bounds of the box.</p>
</div>
```

{{EmbedLiveSample("Paint_containment", "100%", 280)}}

### Layout containment

Consider the example below which shows how elements behave with and without layout containment applied:

```html
<div class="card" style="contain: layout;">
  <h2>Card 1</h2>
  <div class="fixed"><p>Fixed box 1</p></div>
  <div class="float"><p>Float box 1</p></div>
</div>
<div class="card">
  <h2>Card 2</h2>
  <div class="fixed"><p>Fixed box 2</p></div>
  <div class="float"><p>Float box 2</p></div>
</div>
<div class="card">
  <h2>Card 3</h2>
  <!-- ... -->
</div>
```

```css hidden
p {
  margin: 4px;
  padding: 4px;
}

h2 {
  margin-bottom: 4px;
  padding: 10px;
}

div {
  border-radius: 4px;
  box-shadow: 0 2px 4px 0 gray;
  padding: 6px;
  margin: 6px;
}
```

```css
.card {
  width: 70%;
  height: 90px;
}

.fixed {
  position: fixed;
  right: 10px;
  top: 10px;
  background: coral;
}

.float {
  float: left;
  margin: 10px;
  background: aquamarine;
}
```

The first card has layout containment applied, and its layout is isolated from the rest of the page.
We can reuse this card in other places on the page without worrying about layout recalculation of the other elements.
If floats overlap the card bounds, elements on the rest of the page are not affected.
When the browser recalculates the containing element's subtree, only that element is recalculated. Nothing outside of the contained element needs to be recalculated.
Additionally, the fixed box uses the card as a layout container to position itself.

The second and third cards have no containment.
The layout context for the fixed box in the second card is the root element so the fixed box is positioned in the top right corner of the page.
A float overlaps the second card's bounds causing the third card to have unexpected layout shift that's visible in the positioning of the `<h2>` element.
When recalculation occurs, it is not limited to a container.
This impacts performance and interferes with the rest of the page layout.

{{EmbedLiveSample("Layout_containment", "100%", 350)}}

### Style containment

Style containment scopes [counters](/en-US/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters) and [quotes](/en-US/docs/Web/CSS/quotes) to the contained element.
For CSS counters, the {{cssxref("counter-increment")}} and {{cssxref("counter-set")}} properties are scoped to the element as if the element is at the root of the document.

#### Containment and counters

The example below takes a look at how counters work when style containment is applied:

```html
<ul>
  <li>Item A</li>
  <li>Item B</li>
  <li class="container">Item C</li>
  <li>Item D</li>
  <li>Item E</li>
</ul>
```

```css
body {
  counter-reset: list-items;
}

li::before {
  counter-increment: list-items;
  content: counter(list-items) ": ";
}

.container {
  contain: style;
}
```

Without containment, the counter would increment from 1 to 5 for each list item.
Style containment causes the {{cssxref("counter-increment")}} property to be scoped to the element's subtree and the counter begins again at 1:

{{EmbedLiveSample('Containment_and_counters', '100%', 140)}}

#### Containment and quotes

CSS quotes are similarly affected in that the [`content`](/en-US/docs/Web/CSS/content) values relating to quotes are scoped to the element:

```html
<!-- With style containment -->
<span class="open-quote">
  outer
  <span style="contain: style;">
    <span class="open-quote"> inner </span>
  </span>
</span>
<span class="close-quote"> close </span>
<br />
<!-- Without containment -->
<span class="open-quote">
  outer
  <span>
    <span class="open-quote"> inner </span>
  </span>
</span>
<span class="close-quote"> close </span>
```

```css
body {
  quotes: "[" "]" "‹" "›";
}
.open-quote:before {
  content: open-quote;
}

.close-quote:after {
  content: close-quote;
}
```

Because of containment, the first closing quote ignores the inner span and uses the outer span's closing quote instead:

{{EmbedLiveSample('Containment_and_quotes', '100%', 40)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [CSS containment](/en-US/docs/Web/CSS/CSS_containment)
- [CSS container queries](/en-US/docs/Web/CSS/CSS_container_queries)
- CSS {{cssxref("content-visibility")}} property
- CSS {{cssxref("position")}} property
