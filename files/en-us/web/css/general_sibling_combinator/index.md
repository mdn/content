---
title: General sibling combinator
slug: Web/CSS/General_sibling_combinator
tags:
  - CSS
  - Reference
  - Selector
  - Selectors
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

```css
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
<span>This is not red.</span>
<p>Here is a paragraph.</p>
<code>Here is some code.</code>
<span>And here is a red span!</span>
<span>And this is a red span!</span>
<code>More code…</code>
<div> How are you? </div>
<p> Whatever it may be, keep smiling. </p>
<h1> Dream big </h1>
<span>And yet again this is a red span!</span>
```

### Result

{{EmbedLiveSample("Examples", "auto", 300)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Adjacent sibling combinator](/en-US/docs/Web/CSS/Adjacent_sibling_combinator)
