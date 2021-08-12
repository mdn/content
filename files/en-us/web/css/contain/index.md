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

The **`contain`** [CSS](/en-US/docs/Web/CSS) property allows an author to indicate that an element and its contents are, as much as possible, _independent_ of the rest of the document tree. This allows the browser to recalculate layout, style, paint, size, or any combination of them for a limited area of the DOM and not the entire page, leading to obvious performance benefits.

This property is useful on pages that contain a lot of widgets that are all independent, as it can be used to prevent each widget's internals from having side effects outside of the widget's bounding-box.

> **Note:** If applied (with value: `paint`, `strict` or `content`), this property creates:
>
> 1.  A new [containing block](/en-US/docs/Web/CSS/Containing_block) (for the descendants whose {{cssxref("position")}} property is `absolute` or `fixed`).
> 2.  A new [stacking context](/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context).
> 3.  A new [block formatting context](/en-US/docs/Web/Guide/CSS/Block_formatting_context).

## Syntax

```css
/* Keyword values */
contain: none;
contain: strict;
contain: content;
contain: size;
contain: layout;
contain: style;
contain: paint;

/* Multiple keywords */
contain: size paint;
contain: size layout paint;

/* Global values */
contain: inherit;
contain: initial;
contain: revert;
contain: unset;
```

The `contain` property is specified as either one of the following:

- Using a single `none`, `strict`, or `content` keyword.
- Using one or more of the `size`, `layout`, `style`, and `paint` keywords in any order.

### Values

- `none`
  - : Indicates the element renders as normal, with no containment applied.
- `strict`
  - : Indicates that all containment rules except `style` are applied to the element. This is equivalent to `contain: size layout paint`.
- `content`
  - : Indicates that all containment rules except `size` and `style` are applied to the element. This is equivalent to `contain: layout paint`.
- `size`
  - : Indicates that the element can be sized without the need to examine its descendants' sizes.
- `layout`
  - : Indicates that nothing outside the element may affect its internal layout and vice versa.
- `style`
  - : Indicates that, for properties that can have effects on more than just an element and its descendants, those effects don't escape the containing element. Note that this value is marked "at-risk" in the spec and may not be supported everywhere.
- `paint`
  - : Indicates that descendants of the element don't display outside its bounds. If the containing box is offscreen, the browser does not need to paint its contained elements — these must also be offscreen as they are contained completely by that box. And if a descendant overflows the containing element's bounds, then that descendant will be clipped to the containing element's border-box.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Simple layout

The markup below consists of a number of articles, each with content:

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

You can immediately see an issue — no effort is made to clear the floating beyond the bottom of the article.

### Float interference

If we were to insert another image at the bottom of the first article, a large portion of the DOM tree may be re-laid out or repainted, and this would interfere further with the layout of the second article:

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

As you can see, because of the way floats work, the first image ends up inside the area of the second article:

{{EmbedGHLiveSample("css-examples/contain/float-interference.html", '100%', 400)}}

### Fixing with contain

If we give each `article` the `contain` property with a value of `content`, when new elements are inserted the browser understands it only needs to recalculate the containing element's subtree, and not anything outside it:

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

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [CSS containment](/en-US/docs/Web/CSS/CSS_Containment)
- CSS {{cssxref("content-visibility")}} property
- CSS {{cssxref("position")}} property
