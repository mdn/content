---
title: :any-link
slug: Web/CSS/:any-link
page-type: css-pseudo-class
browser-compat: css.selectors.any-link
---

{{CSSRef}}

The **`:any-link`** [CSS](/en-US/docs/Web/CSS) [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes) selector represents an element that acts as the source anchor of a hyperlink, independent of whether it has been visited. In other words, it matches every {{HTMLElement("a")}} or {{HTMLElement("area")}} element that has an `href` attribute. Thus, it matches all elements that match {{cssxref(":link")}} or {{cssxref(":visited")}}.

{{InteractiveExample("CSS Demo: :any-link", "tabbed-shorter")}}

```css interactive-example
p {
  font-weight: bold;
}

a:any-link {
  color: forestgreen;
  text-decoration-color: hotpink;
}
```

```html interactive-example
<p>Pages that you might have visited:</p>
<ul>
  <li>
    <a href="https://developer.mozilla.org">MDN Web Docs</a>
  </li>
  <li>
    <a href="https://www.youtube.com/YouTube">Google</a>
  </li>
</ul>
<p>Pages unlikely to be in your history:</p>
<ul>
  <li>
    <a href="https://developer.mozilla.org/missing-3">Random MDN page</a>
  </li>
  <li>
    <a href="https://example.com/missing-3">Random Example page</a>
  </li>
</ul>
```

## Syntax

```css
:any-link {
  /* ... */
}
```

## Examples

### HTML

```html
<a href="https://example.com">External link</a><br />
<a href="#">Internal target link</a><br />
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

- [Creating links](/en-US/docs/Learn_web_development/Core/Structuring_content/Creating_links)
- Matches HTML elements: [`<a>`](/en-US/docs/Web/HTML/Element/a) and [`<area>`](/en-US/docs/Web/HTML/Element/area) with an [`href`](/en-US/docs/Web/HTML/Element/a#href) attribute
- Related CSS selectors:

  - [`:visited`](/en-US/docs/Web/CSS/:visited)
  - [`:link`](/en-US/docs/Web/CSS/:link)
