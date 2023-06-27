---
title: Namespace separator
slug: Web/CSS/Namespace_separator
page-type: css-combinator
browser-compat: css.selectors.namespace
---

{{CSSRef("Selectors")}}

The **namespace separator** (`|`) separates the selector from the namespace, identifying the namespace, or lack thereof, for a type selector.

```css
/* Links in the namespace named myNameSpace */
myNameSpace|a {
  font-weight: bold;
}
/* paragraphs in any or no namespace */
*|p {
  color: darkblue;
}
/* heading level 2 not in a namespace */
|h2 {
  margin-bottom: 0;
}
```

[Type selectors](/en-US/docs/Web/CSS/Type_selectors) and the [universal selector](/en-US/docs/Web/CSS/Universal_selectors) allow an optional namespace component. When a namespace has been previously declared via {{CSSXref("@namespace")}}, these selectors can be namespaced by prepending the selector with name of the namespace separated by the namespace separator (`|`). This is useful when dealing with documents containing multiple namespaces such as HTML with inline SVG or MathML, or XML that mixes multiple vocabularies.

- `ns|h1` - matches `<h1>` elements in namespace `ns`
- `*|h1` - matches all `<h1>` elements
- `|h1` - matches all `<h1>` elements outside of any declared or implied namespace

## Syntax

```css
namespace|element { style properties }
```

## Examples

#### CSS

The CSS declares two namespaces, then assigns styles to links globally, to links in no name space, any namespace or no namespace, and than to two different named namespaces.

```css
@namespace myNamespace url("http://www.w3.org/2000/svg");
@namespace defaultNameSpace url("http://www.w3.org/1999/xhtml");
/* all namespaces or no namespace */
a {
  font-size: 1.4rem;
}
/* no name space */
|a {
  text-decoration: wavy overline lime;
  font-weight: bold;
}
/* all namespaces or no namespace */
*|a {
  color: red;
  fill: red;
  font-style: italic;
}
/* only the myNamespace namespace */
myNamespace|a {
  color: green;
  fill: green;
}
/* all HTML is in a namespace */
defaultNameSpace|a {
  text-decoration-line: line-through;
}
```

#### HTML

The HTML contains two links. One link is in an SVG with a explicitly declared namespace.

```html
<p>This paragraph <a href="#">has a link</a>.</p>

<svg width="400" viewBox="0 0 400 20">
  <a href="#">
    <text x="0" y="15">Link created in SVG</text>
  </a>
</svg>
```

### Result

{{EmbedLiveSample("Examples", "100%", 100)}}

The selector `|a`, a link not in a namespace, doesn't match any links. In HTML, the `http://www.w3.org/1999/xhtml` is implied, meaning all HTML is in a namespace even if none is explicitly declared. In SVG, even if not explicitly set, the `http://www.w3.org/2000/svg` namespace is implied.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [@namespace](/en-US/docs/Web/CSS/@namespace)
- [CSS type selector](/en-US/docs/Web/CSS/Type_selectors)
- [CSS universal selector](/en-US/docs/Web/CSS/Universal_selectors)
- [CSS selector module](/en-US/docs/Web/CSS/CSS_selectors)
