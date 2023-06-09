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

Things get a little tricky when the combinator is used to join two compound selectors meant to ensure the matching elements are both in the same hierarchy.

When there is a compound selector in the subsequent selector (right side of combinator), this entire subsequent selector must match UNDER the parent of the matching child in the preceding selector (left-side of combinator).

```css
/* Will NOT match `span` as a sibling of `p` when both are descendants of `.foo` */
/* Will match  `span` descendant of `.foo` if that `.foo` is a sibling of `p` both nested in an ancestor `.foo` */
.foo p ~ .foo span {  
  color: green;
}
```

If the desired result is to ensure both elements match the same compound selector, the compound statement in the subsequent selector is unnecessary since it would be implied if it was a sibling of the matching element in the preceding selector.

```css
/* Will match `span` as a sibling of `p`; both must be decendants of `.foo` */
.foo p ~ span {  
  color: blue;
}
```

## Syntax

```css
former_element ~ target_element { style properties }
```

## Examples

### CSS

```css
p ~ span {
  color: red;
}

.foo p ~ .foo span {
  color: green;
}

.foo p ~ span {
  color: blue;
}
```

### HTML

```html
<span>This is not red.</span>
<p>Here is a paragraph.</p>
<code>Here is some code.</code>
<span>And here is a red span!</span>
<span>And this is a red span!</span>
<code>More code…</code>
<div>How are you?</div>
<p>Whatever it may be, keep smiling.</p>
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

### Result

{{EmbedLiveSample("Examples", "auto", 300)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Adjacent sibling combinator](/en-US/docs/Web/CSS/Adjacent_sibling_combinator)
