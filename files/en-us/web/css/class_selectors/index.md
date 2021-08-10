---
title: Class selectors
slug: Web/CSS/Class_selectors
tags:
  - CSS
  - Reference
  - Selector
  - Selectors
browser-compat: css.selectors.class
---
{{CSSRef}}

The [CSS](/en-US/docs/CSS) **class selector** matches elements based on the contents of their {{htmlattrxref("class")}} attribute.

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

Note that this is equivalent to the following {{Cssxref("Attribute_selectors", "attribute selector")}}:

```css
[class~=class_name] { style properties }
```

## Examples

### CSS

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

### HTML

```html
<p class="red">This paragraph has red text.</p>
<p class="red yellow-bg">This paragraph has red text and a yellow background.</p>
<p class="red fancy">This paragraph has red text and "fancy" styling.</p>
<p>This is just a regular paragraph.</p>
```

### Result

{{EmbedLiveSample('Examples')}}

## Specifications

| Specification                                                                                | Status                               | Comment            |
| -------------------------------------------------------------------------------------------- | ------------------------------------ | ------------------ |
| {{SpecName('CSS4 Selectors', '#class-html', 'class selectors')}}         | {{Spec2('CSS4 Selectors')}} | No changes         |
| {{SpecName('CSS3 Selectors', '#class-html', 'class selectors')}}         | {{Spec2('CSS3 Selectors')}} |                    |
| {{SpecName('CSS2.1', 'selector.html#class-html', 'child selectors')}} | {{Spec2('CSS2.1')}}             |                    |
| {{SpecName('CSS1', '#class-as-selector', 'child selectors')}}             | {{Spec2('CSS1')}}             | Initial definition |

## Browser compatibility

{{Compat}}

## See also

- [CSS Selectors](/en-US/docs/Web/CSS/CSS_Selectors)
- [Learn CSS: Selectors](/en-US/docs/Learn/CSS/Building_blocks/Selectors)
