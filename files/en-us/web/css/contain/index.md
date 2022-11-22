---
title: contain
slug: Web/CSS/contain
page-type: css-property
tags:
  - CSS
  - CSS Containment
  - CSS Property
  - Layout
  - NeedsExample
  - Paint
  - Reference
  - Style
  - Web
  - recipe:css-property
browser-compat: css.properties.contain
---

{{CSSRef}}

The **`contain`** [CSS](/en-US/docs/Web/CSS) property indicates that an element and its contents are, as much as possible, independent from the rest of the document tree.
Containment allows the browser to calculate layout, style, paint, size, or any combination of these for a specific area of the DOM.

Changes within an element with containment applied are not propagated outside of the contained element to the rest of the page.
The main benefit of this is that the browser does not have to re-renders the DOM or page layout as often, leading to performance benefits.

Using the `contain` property is useful on pages with groups of elements that are supposed to be independent, as it can prevent element internals from having side effects outside of its bounding-box.

> **Note:** using `layout`, `paint`, `strict` or `content` values for this property creates:
>
> 1. A new [containing block](/en-US/docs/Web/CSS/Containing_block) (for the descendants whose {{cssxref("position")}} property is `absolute` or `fixed`).
> 2. A new [stacking context](/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context).
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

- One of the keywords `none`, `strict`, or `content` **or**
- One or more of the keywords `size` (or `inline-size`), `layout`, `style`, and `paint` in any order.

The keywords have the following meanings:

- `none`
  - : The element renders as normal, with no containment applied.
- `strict`
  - : All containment rules are applied to the element. This is equivalent to `contain: size layout paint style`.
- `content`
  - : All containment rules except `size` are applied to the element. This is equivalent to `contain: layout paint style`.
- `size`
  - : Size containment is applied to the element. The size of the element can be computed in isolation, ignoring the child elements. This value cannot be combined with `inline-size`.
- `inline-size`
  - : Inline size containment is applied to the element. The inline size of the element can be computed in isolation, ignoring the child elements. This value cannot be combined with `size`.
- `layout`
  - : The internal layout of the element is isolated from the rest of the page. That means nothing outside the element affects its internal layout, and vice versa.
- `style`
  - : For properties that can have effects on more than just an element and its descendants, those effects don't escape the containing element. Counters and quotes are scoped to the element and its contents.
- `paint`
  - : Descendants of the element don't display outside its bounds. If the containing box is offscreen, the browser does not need to paint its contained elements — these must also be offscreen as they are contained completely by that box. If a descendant overflows the containing element's bounds, then that descendant will be clipped to the containing element's border-box.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Preventing floats from escaping their containers

Consider the markup below with two `<article>` elements with an `<img>` with {{cssxref("float")}} style applied to each.
When a float interferes with elements outside of a bounding box, a portion of the DOM tree is re-laid out or repainted, and this interferes with the layout of the second article:

```html
<h1>My blog</h1>
<article>
  <h2>Heading of a nice article</h2>
  <p>Content here.</p>
  <img src="graphic.jpg" alt="Black cross on a gray background." />
</article>
<article>
  <h2>Another heading of another article</h2>
  <p>More content here.</p>
  <img src="graphic.jpg" alt="Black cross on a gray background." />
</article>
```

```css
img {
  float: left;
  border: 3px solid black;
}

article {
  border: 1px solid black;
}
```

{{EmbedGHLiveSample("css-examples/contain/float-interference.html", '100%', 400)}}

If we give each `<article>` the `contain` property with a value of `content`, when new elements are inserted, the browser only needs to recalculate the containing element's subtree, and not anything outside it:

```html hidden
<h1>My blog</h1>
<article>
  <h2>Heading of a nice article</h2>
  <p>Content here.</p>
  <img src="graphic.jpg" alt="Black cross on a gray background." />
</article>
<article>
  <h2>Another heading of another article</h2>
  <p>More content here.</p>
  <img src="graphic.jpg" alt="Black cross on a gray background." />
</article>
```

```css
img {
  float: left;
  border: 3px solid black;
}

article {
  border: 1px solid black;
  contain: content;
}
```

The images no longer float down into sibling articles, and instead stay inside the containing element's bounds:

{{EmbedGHLiveSample("css-examples/contain/contain-fix.html", '100%', 500)}}

### Style containment

Style containment scopes [counters](/en-US/docs/Web/CSS/CSS_Counter_Styles/Using_CSS_counters) and [quotes](/en-US/docs/Web/CSS/quotes) to the contained element.
For CSS counters, the `counter-increment` and `counter-set` properties are scoped to the element as if the element is at the root of the document.

#### Containment and counters

The example below takes a look at how counters work when style containment is applied:

TODO - link to props

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
Style containment causes the `counter-increment` to be scoped to the element's subtree and the counter begins again at 1:

{{EmbedLiveSample('Containment_and_counters', '100%', 140)}}

#### Containment and quotes

CSS quotes are similarly affected in that the [`content`](/en-US/docs/Web/CSS/content) values relating to quotes are scoped to the element:

```html
<span class="open-quote">
  outer
  <span style="contain: style;">
    <span class="open-quote"> inner </span>
  </span>
</span>
<span class="close-quote">close</span>
```

```css
body {
  quotes: "«" "»" "‹" "›";
}
.open-quote:before {
  content: open-quote;
}

.close-quote:after {
  content: close-quote;
}
```

In this example, the close quote ignores the inner span because it has style containment applied:

{{EmbedLiveSample('Containment_and_quotes', '100%', 50)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [CSS containment](/en-US/docs/Web/CSS/CSS_Containment)
- [CSS container queries](/en-US/docs/Web/CSS/CSS_Container_Queries)
- CSS {{cssxref("content-visibility")}} property
- CSS {{cssxref("position")}} property
