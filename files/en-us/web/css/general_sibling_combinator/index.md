---
title: General sibling combinator
slug: Web/CSS/General_sibling_combinator
page-type: css-combinator
browser-compat: css.selectors.general_sibling
---

{{CSSRef("Selectors")}}

The **general sibling combinator** (`~`) separates two selectors and matches _all iterations_ of the second element, that are following the first element (though not necessarily immediately), and are children of the same parent {{Glossary("element")}}.

```css
/* Paragraphs that are siblings of and
   subsequent to any image */
img ~ p {
  color: red;
}
```

## Syntax

```css-nolint
/* The white space around the ~ combinator is optional but recommended. */
former_element ~ target_element { style properties }
```

## Examples

### CSS

```css
p ~ span {
  color: red;
}
```

### HTML

```html
<article>
  <span>This is not red because it appears before any paragraph.</span>
  <p>Here is a paragraph.</p>
  <code>Here is some code.</code>
  <span>
    This span is red because it appears after the paragraph, even though there
    are other nodes in between
  </span>
  <p>Whatever it may be, keep smiling.</p>
  <h1>Dream big</h1>
  <span>
    Doesn't matter how many or what kind of nodes are in between, all spans from
    the same parent after a paragraph are red.
  </span>
</article>
<span>
  This span is not red because it doesn't share a parent with a paragraph
</span>
```

### Result

{{EmbedLiveSample("Examples", "auto", 300)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Adjacent sibling combinator](/en-US/docs/Web/CSS/Adjacent_sibling_combinator)
