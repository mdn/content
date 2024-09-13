---
title: Subsequent-sibling combinator
slug: Web/CSS/Subsequent-sibling_combinator
page-type: css-combinator
browser-compat: css.selectors.subsequent-sibling
---

{{CSSRef}}

The **subsequent-sibling combinator** (`~`, a tilde) separates two selectors and matches _all instances_ of the second element that follow the first element (not necessarily immediately) and share the same parent element.

In the following example, the subsequent-sibling combinator (`~`) helps to select and style paragraphs that are both siblings of an image and appear after any image.

```css
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

### Using the combinator with simple selectors

This example shows the use of the `~` combinator when both the selectors are simple selectors (`p` and `span`).

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

### Using the combinator with complex selectors

This example contains two [complex selectors](/en-US/docs/Web/CSS/CSS_selectors/Selector_structure#complex_selector), both using the subsequent-sibling combinator: `.foo p ~ span` and `.foo p ~ .foo span`.

- The first complex selector, `.foo p ~ span`, matches all spans that come after a paragraph _if_ the span and paragraph share the same parent **and** that parent or an ancestor of that parent has the class `.foo`.
- The second complex selector, `.foo p ~ .foo span`, matches all spans that are a descendant of the element with class `.foo` _if_ that element is a sibling of the previously mentioned paragraph.

The example below shows that the target element in the complex selector must share the same parent as the initial element in the complex selector.

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

{{EmbedLiveSample("Using the combinator with complex selectors", "auto", 200)}}

In the above HTML, the two siblings of `.foo p` are `span` and `.foo`. The green `span` is a descendant of the `.foo` class, which is a sibling of `p`.

- When the target selector is `span`, the `span` element that is a sibling of `p` is selected. The `p` element is a descendant of `.foo`, so are its `span` siblings.
- In `.foo p ~ .foo span`, the target selector is `span` that is a descendant of `.foo`. In this case, the `span` element that's a descendent of `.foo` is selected if that `.foo` is a sibling of `p`; essentially, both are nested in an ancestor of `.foo`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Next-sibling combinator](/en-US/docs/Web/CSS/Next-sibling_combinator)
