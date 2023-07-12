---
title: Namespace separator
slug: Web/CSS/Namespace_separator
page-type: css-combinator
browser-compat: css.selectors.namespace
---

{{CSSRef("Selectors")}}

The **namespace separator** (`|`) separates the selector from the namespace, identifying the {{glossary("namespace")}}, or lack thereof, for a type selector.

```css
/* Links in the namespace named myNameSpace */
myNameSpace|a {
  font-weight: bold;
}
/* paragraphs in any namespace (including no namespace) */
*|p {
  color: darkblue;
}
/* heading level 2 not in a namespace */
|h2 {
  margin-bottom: 0;
}
```

[Type selectors](/en-US/docs/Web/CSS/Type_selectors) and the [universal selector](/en-US/docs/Web/CSS/Universal_selectors) allow an optional namespace component. When a namespace has been previously declared via {{CSSXref("@namespace")}}, these selectors can be namespaced by prepending the selector with the name of the namespace separated by the namespace separator (`|`). This is useful when dealing with documents containing multiple namespaces such as HTML with inline SVG or MathML, or XML that mixes multiple vocabularies.

- `ns|h1` - matches `<h1>` elements in namespace `ns`
- `*|h1` - matches all `<h1>` elements
- `|h1` - matches all `<h1>` elements outside of any declared or implied namespace

## Syntax

```css
namespace|element { style properties }
```

## Examples

By default, all elements in an HTML or SVG element have a namespace as the `http://www.w3.org/1999/xhtml` and `http://www.w3.org/2000/svg` namespace are implied. The {{domxref("document.createElementNS")}} method, with an empty string for the namespace parameter, can be used to create elements with no namespace.

### Named namespace example

In this example, all elements are in a namespace.

#### HTML

No namespaces are explicitly declared in the HTML or within the SVG.

```html
<p>This paragraph <a href="#">has a link</a>.</p>

<svg width="400" viewBox="0 0 400 20">
  <a href="#">
    <text x="0" y="15">Link created in SVG</text>
  </a>
</svg>
```

#### CSS

The CSS declares two namespaces, then assigns styles to links globally (`a`), to links in no namespace (`|a`), to links in any namespace or no namespace (`*|a`), and then to two different named namespaces (`svgNamespace|a` and `htmlNameSpace|a`).

```css
@namespace svgNamespace url("http://www.w3.org/2000/svg");
@namespace htmlNameSpace url("http://www.w3.org/1999/xhtml");
/* All `<a>`s in the default namespace, in this case, all `<a>`s */
a {
  font-size: 1.4rem;
}
/* no namespace */
|a {
  text-decoration: wavy overline lime;
  font-weight: bold;
}
/* all namespaces (including no namespace) */
*|a {
  color: red;
  fill: red;
  font-style: italic;
}
/* only the svgNamespace namespace, which is <svg> content */
svgNamespace|a {
  color: green;
  fill: green;
}
/* The htmlNameSpace namespace, which is the HTML document */
htmlNameSpace|a {
  text-decoration-line: line-through;
}
```

#### Result

{{EmbedLiveSample("Named_namespace_example", "100%", 100)}}

The selector `|a`, a link not in a namespace, doesn't match any links. In HTML, the `http://www.w3.org/1999/xhtml` is implied, meaning all HTML is in a namespace, even if none is explicitly declared. In SVG, even if not explicitly set, the `http://www.w3.org/2000/svg` namespace is also implied. This means all the content is within at least one namespace.

### Default namespace and no namespace

In this example, we use JavaScript to create an element without a namespace and append it to the document. We set the SVG namespace to be the default namespace by defining the unnamed namespace with `@namespace`.

> **Note:** If a default, or unnamed, namespace is defined, universal and type selectors apply only to elements in that namespace.

#### HTML

No namespaces are explicitly declared in the HTML or within the SVG.

```html
<p><a href="#">A link</a> in the implied HTML namespace.</p>

<svg width="400" viewBox="0 0 400 20">
  <a href="#">
    <text x="0" y="15">Link created in SVG namespace</text>
  </a>
</svg>
```

#### JavaScript

With JavaScript, with {{DOMXRef("document.createElementNS")}}, we create an anchor link without a namespace, then append the link.

```js
// create 'no namespace' anchor
const a = document.createElementNS("", "a");
a.href = "#";
a.appendChild(document.createTextNode("Link created without a namespace"));

document.body.appendChild(a);
```

#### CSS

We declare a namespace with {{cssxref("@namespace")}}. By omitting the name for the namespace, the `@namespace` declaration creates a default namespace.

```css
/* By omitting a name, this sets SVG as the default namespace */
@namespace url("http://www.w3.org/2000/svg");

/* `<a>` in the default (set to SVG) namespace */
a {
  font-size: 1.4rem;
}

/* `<svg>` and `<p>` in the default (set to SVG) namespace */
svg,
p {
  border: 5px solid gold;
}

/* links outside of any namespace */
|a {
  text-decoration: wavy underline purple;
  font-weight: bold;
}

/* links with any namespace or no namespace */
*|a {
  font-style: italic;
  color: magenta;
  fill: magenta;
}
```

#### Result

{{EmbedLiveSample("Default_namespace_and_no_namespace", "100%", 100)}}

The selector with no namespace separator, the `a`, matched only the SVG `<a>` elements, as SVG was set as the default namespace.

The selector with no namespace, the `|a`, matched the JavaScript defined and appended `<a>`, as that node is the only node that doesn't have a default namespace.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`@namespace`](/en-US/docs/Web/CSS/@namespace)
- [`Document.createElementNS()`](/en-US/docs/Web/API/Document/createElementNS) method
- [`Element.namespaceURI`](/en-US/docs/Web/API/Element/namespaceURI) property
- [CSS type selector](/en-US/docs/Web/CSS/Type_selectors)
- [CSS universal selector](/en-US/docs/Web/CSS/Universal_selectors)
- [CSS selector module](/en-US/docs/Web/CSS/CSS_selectors)
