---
title: ':any-link'
slug: Web/CSS/:any-link
tags:
  - ':any-link'
  - CSS
  - Layout
  - Links
  - Pseudo-class
  - Reference
  - Selector
  - Web
  - hyperlinks
browser-compat: css.selectors.any-link
---
{{CSSRef}}

The **`:any-link`** [CSS](/en-US/docs/Web/CSS) [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes) selector represents an element that acts as the source anchor of a hyperlink, independent of whether it has been visited. In other words, it matches every {{HTMLElement("a")}} or {{HTMLElement("area")}} element that has an `href` attribute. Thus, it matches all elements that match {{cssxref(":link")}} or {{cssxref(":visited")}}.

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-any-link.html", "tabbed-shorter")}}

## Syntax

```
:any-link
```

## Examples

### HTML

```html
<a href="https://example.com">External link</a><br>
<a href="#">Internal target link</a><br>
<a>Placeholder link (won't get styled)</a>
```

### CSS

```css
a:any-link {
  border: 1px solid blue;
  color: orange;
}

/* WebKit browsers */
a:-webkit-any-link {
  border: 1px solid blue;
  color: orange;
}
```

### Result

{{EmbedLiveSample('Examples')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Creating hyperlinks](/en-US/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks)
- Matches HTML elements: [`<a>`](/en-US/docs/Web/HTML/Element/a) and [`<area>`](/en-US/docs/Web/HTML/Element/area) with an {{htmlattrxref("href", "a")}} attribute
- Related CSS selectors:

  - [`:visited`](/en-US/docs/Web/CSS/:visited)
  - [`:link`](/en-US/docs/Web/CSS/:link)
