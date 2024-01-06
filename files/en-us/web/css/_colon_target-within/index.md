---
title: ":target-within"
slug: Web/CSS/:target-within
page-type: css-pseudo-class
status:
  - experimental
browser-compat: css.selectors.target-within
---

{{CSSRef}}{{SeeCompatTable}}

The **`:target-within`** [CSS](/en-US/docs/Web/CSS) [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes) represents an element that is a target element or _contains_ an element that is a target. A target element is a unique element with an [`id`](/en-US/docs/Web/HTML/Global_attributes#id) matching the URL's fragment. In other words, it represents an element that is itself matched by the {{CSSxRef(":target")}} pseudo-class or has a descendant that is matched by `:target`. (This includes descendants in [shadow trees](/en-US/docs/Web/API/Web_components/Using_shadow_DOM).)

```css
/* Selects a <div> when one of its descendants is a target */
div:target-within {
  background: cyan;
}
```

## Syntax

```css
:target-within {
  /* ... */
}
```

## Examples

### Highlighting an article

The `:target-within` pseudo-class can be used to highlight the article if anything inside it has been directly linked to. The `:target` pseudo-class is also being used to show which item has been targeted.

#### HTML

```html
<h3>Table of Contents</h3>
<ol>
  <li><a href="#p1">Jump to the first paragraph!</a></li>
  <li><a href="#p2">Jump to the second paragraph!</a></li>
</ol>

<article>
  <h3>My Fun Article</h3>
  <p id="p1">
    You can target <i>this paragraph</i> using a URL fragment. Click on the link
    above to try out!
  </p>
  <p id="p2">
    This is <i>another paragraph</i>, also accessible from the links above.
    Isn't that delightful?
  </p>
</article>
```

#### CSS

```css
article:target-within {
  background-color: gold;
}

/* Add a pseudo-element inside the target element */
p:target::before {
  font: 70% sans-serif;
  content: "►";
  color: limegreen;
  margin-right: 0.25em;
}

/* Style italic elements within the target element */
p:target i {
  color: red;
}
```

#### Result

{{EmbedLiveSample('Examples', 500, 300)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{CSSxRef(":target")}}
