---
title: General sibling combinator
slug: Web/CSS/General_sibling_combinator
page-type: css-combinator
browser-compat: css.selectors.general_sibling
---

{{CSSRef("Selectors")}}

The **general sibling combinator** (`~`) separates two selectors and matches _all instances_ of the second element that follow the first element (not necessarily immediately) and share the same parent element.

In the following example, the general sibling combinator (`~`) helps to select and style paragraphs that are both siblings of an image and appear after any image.

```css
img ~ p {
  color: red;
}
```

## Syntax

```css-nolint
/* The white space around the ~ combinator is optional but recommended. */
compound_selector1 ~ compound_selector2 { style properties }
```

## Examples

### Using the combinator with simple selectors

This example shows the use of the `~` combinator when both the selectors are simple (`p` and `span`).

```html
<article>
  <span>This is not red because it appears before any paragraph.</span>
  <p>Here is a paragraph.</p>
  <code>Here is some code.</code>
  <span>
    This span is red because it appears after the paragraph, even though there
    are other nodes in between.
  </span>
  <p>Whatever it may be, keep smiling.</p>
  <h1>Dream big</h1>
  <span>
    Doesn't matter how many or what kind of nodes are in between, all spans from
    the same parent after a paragraph are red.
  </span>
</article>
<span>
  This span is not red because it doesn't share a parent with a paragraph.
</span>
```

```css
p ~ span {
  color: red;
}
```

{{EmbedLiveSample("Using the combinator with simple selectors", "auto", 300)}}

### Using the combinator with compound selectors

Elements represented by the two compound selectors share the same parent in the document tree. The element represented by the first compound selector precedes (not necessarily immediately) the element represented by the second one.

The example below shows that the second compound selector must match the parent of the first compound selector.

```html
<h1>Dream big</h1>
<span>And yet again this is a red span!</span>
<div class="foo">
  <p>Here is another paragraph.</p>
  <span>A blue span</span>
  <div class="foo">
    <span>A green span</span>
  </div>
</div>
```

```css
.foo p ~ span {
  color: blue;
}

.foo p ~ .foo span {
  color: green;
}
```

{{EmbedLiveSample("Using the combinator with compound selectors", "auto", 200)}}

In the above HTML, the two siblings of `.foo p` are `span` and `.foo span`.

- When the second compound selector is `span`, it selects the `span` element that is a sibling of `p` and both are descendants of `.foo`.
- When the second compound selector is `.foo span`, it selects the `span` element that's a descendant of `.foo` if that `.foo` is a sibling of `p`; essentially, both are nested in an ancestor of `.foo`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Adjacent sibling combinator](/en-US/docs/Web/CSS/Adjacent_sibling_combinator)
-
