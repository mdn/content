---
title: contain
slug: Web/CSS/contain
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

The **`contain`** [CSS](/en-US/docs/Web/CSS) property allows an author to indicate that an element and its contents are, as much as possible, _independent_ of the rest of the document tree.
Containment allows the browser to calculate layout, style, paint, size, or any combination of them for a specific area of the DOM.
Changes within an element with containment applied are not propagated outside of the contained element to the rest of the page, leading to performance benefits through fewer DOM re-renders.

{{EmbedInteractiveExample("pages/css/contain.html")}}

This property is useful on pages that contain a lot of widgets that are all independent, as it can be used to prevent each widget's internals from having side effects outside of the widget's bounding-box.

> **Note:** If applied (with value: `paint`, `strict` or `content`), this property creates:
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

The `contain` property is specified as either one of the following:

- Using a single `none`, `strict`, or `content` keyword.
- Using one or more of `size` (or `inline-size`), `layout`, `style`, `paint` keywords in any order.

### Values

- `none`
  - : Indicates the element renders as normal, with no containment applied.
- `strict`
  - : Indicates that all containment rules are applied to the element. This is equivalent to `contain: size layout paint style`.
- `content`
  - : Indicates that all containment rules except `size` are applied to the element. This is equivalent to `contain: layout paint style`.
- `size`
  - : Indicates that size containment is applied to the element. The size of the element can be computed in isolation, ignoring the child elements. This value cannot be combined with `inline-size`.
- `inline-size`
  - : Indicates that inline size containment is applied to the element. The inline size of the element can be computed in isolation, ignoring the child elements. This value cannot be combined with `size`.
- `layout`
  - : Indicates that the internal layout of the element is isolated from the rest of the page, that is, nothing outside the element affects its internal layout, and vice versa.
- `style`
  - : Indicates that, for properties that can have effects on more than just an element and its descendants, those effects don't escape the containing element. Counters and quotes are scoped to the element and its contents.
- `paint`
  - : Indicates that descendants of the element don't display outside its bounds. If the containing box is offscreen, the browser does not need to paint its contained elements — these must also be offscreen as they are contained completely by that box. And if a descendant overflows the containing element's bounds, then that descendant will be clipped to the containing element's border-box.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting up a simple layout without containment

The markup below consists of two articles, each with content:

```html
<h1>My blog</h1>
<article>
  <h2>Heading of a nice article</h2>
  <p>Content here.</p>
</article>
<article>
  <h2>Another heading of another article</h2>
  <img src="graphic.jpg" alt="photo">
  <p>More content here.</p>
</article>
```

Each `<article>` and `<img>` is given a border, and the images are floated:

```css
img {
  float: left;
  border: 3px solid black;
}

article {
  border: 1px solid black;
}
```

{{EmbedGHLiveSample("css-examples/contain/simple-layout.html", '100%', 400)}}

There is an issue because the floating element is laid out beyond the bottom of the article.

### Adding an additional floating element

In the previous example, if we insert another image at the bottom of the first article, a large portion of the DOM tree is re-laid out or repainted, and this interferes with the layout of the second article:

```html
<h1>My blog</h1>
<article>
  <h2>Heading of a nice article</h2>
  <p>Content here.</p>
  <img src="i-just-showed-up.jpg" alt="social">
</article>
<article>
  <h2>Another heading of another article</h2>
  <img src="graphic.jpg" alt="photo">
  <p>More content here.</p>
</article>
```

```css hidden
img {
  float: left;
  border: 3px solid black;
}

article {
  border: 1px solid black;
}
```

Because of the way floats work, the first image ends up inside the area of the second article:

{{EmbedGHLiveSample("css-examples/contain/float-interference.html", '100%', 400)}}

### Fixing the layout with contain

If we give each `article` the `contain` property with a value of `content`, when new elements are inserted, the browser only needs to recalculate the containing element's subtree, and not anything outside it:

```html hidden
<h1>My blog</h1>
<article>
  <h2>Heading of a nice article</h2>
  <p>Content here.</p>
  <img src="i-just-showed-up.jpg" alt="social">
</article>
<article>
  <h2>Another heading of another article</h2>
  <img src="graphic.jpg" alt="photo">
  <p>More content here.</p>
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

This also means that the first image no longer floats down to the second article, and instead stays inside its containing element's bounds:

{{EmbedGHLiveSample("css-examples/contain/contain-fix.html", '100%', 500)}}

### Using the style value for containment

Style containment scopes [counters](/en-US/docs/Web/CSS/CSS_Counter_Styles/Using_CSS_counters) and [quotes](/en-US/docs/Web/CSS/quotes) to the contained element.
For CSS counters, the `counter-increment` and `counter-set` properties are scoped to the element as if the element is at the root of the document.
The example below takes a look at how counters work when style containment is applied:

```html
<h1>Introduction</h1>
<h1>Background</h1>
<div class="contain">
  <h1>Contained counter</h1>
</div>
<h1>Conclusion</h1>
```

```css
body {
  counter-reset: headings;
}

h1::before {
  counter-increment: headings;
  content: counter(headings) ": ";
}

.contain {
  contain: style;
}
```

{{EmbedGHLiveSample("css-examples/contain/contain-style-counter.html", '100%', 500)}}

Without containment, the counter would increment from 1 to 4 for each heading.
Style containment causes the `counter-increment` to be scoped to the element's subtree and the counter begins again at 1.
CSS quotes are similarly affected in that the [`content`](/en-US/docs/Web/CSS/content) values relating to quotes are scoped to the element:

```html
<span class="open-quote">
   outer
  <span style="contain: style;">
    <span class="open-quote">
    inner
    </span>
  </span>
</span>
<span class="close-quote">close</span>

```

```css
body {
  quotes: "«" "»" "‹" "›"
}
.open-quote:before {
  content: open-quote;
}

.close-quote:after {
  content: close-quote;
}
```

In this example, the close quote ignores the inner span because it has style containment applied:

{{EmbedGHLiveSample("css-examples/contain/contain-style-quotes.html", '100%', 500)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [CSS containment](/en-US/docs/Web/CSS/CSS_Containment)
- CSS {{cssxref("content-visibility")}} property
- CSS {{cssxref("position")}} property
