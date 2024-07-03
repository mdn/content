---
title: Class selectors
slug: Web/CSS/Class_selectors
page-type: css-selector
browser-compat: css.selectors.class
---

{{CSSRef}}

The [CSS](/en-US/docs/Web/CSS) **class selector** matches elements based on the contents of their [`class`](/en-US/docs/Web/HTML/Global_attributes#class) attribute.

```css
/* All elements with class="spacious" */
.spacious {
  margin: 2em;
}

/* All <li> elements with class="spacious" */
li.spacious {
  margin: 2em;
}

/* All <li> elements with a class list that includes both "spacious" and "elegant" */
/* For example, class="elegant retro spacious" */
li.spacious.elegant {
  margin: 2em;
}
```

## Syntax

```css
.class_name { style properties }
```

Note that this is equivalent to the following [attribute selector](/en-US/docs/Web/CSS/Attribute_selectors):

```css
[class~=class_name] { style properties }
```

The `class_name` value must be a valid [CSS identifier](/en-US/docs/Web/CSS/ident).

## Examples

### Valid class selectors

#### HTML

```html
<p class="red">This paragraph has red text.</p>
<p class="red yellow-bg">
  This paragraph has red text and a yellow background.
</p>
<p class="red fancy">This paragraph has red text and "fancy" styling.</p>
<p>This is just a regular paragraph.</p>
```

#### CSS

```css
.red {
  color: #f33;
}

.yellow-bg {
  background: #ffa;
}

.fancy {
  font-weight: bold;
  text-shadow: 4px 4px 3px #77f;
}
```

#### Result

{{EmbedLiveSample('Examples')}}

### Invalid class selectors

Class selectors must be valid CSS identifiers.

```css example-bad
.item?one {
  background-color: green;
}

.123item {
  background-color: green;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [CSS Selectors](/en-US/docs/Web/CSS/CSS_selectors)
- [Learn CSS: Selectors](/en-US/docs/Learn/CSS/Building_blocks/Selectors)
