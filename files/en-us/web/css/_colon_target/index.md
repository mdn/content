---
title: :target
slug: Web/CSS/:target
page-type: css-pseudo-class
browser-compat: css.selectors.target
---

{{CSSRef}}

The **`:target`** [CSS](/en-US/docs/Web/CSS) [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes) selects the _target element of the document_. When the document is loaded, the target element is derived using the document's [URL fragment identifier](/en-US/docs/Web/URI/Reference/Fragment#fragment).

```css
/* Selects document's target element */
:target {
  border: 2px solid black;
}
```

For example, the following URL has a fragment identifier (denoted by the _#_ sign) that marks the element with the [`id`](/en-US/docs/Web/HTML/Global_attributes/id) of `setup` as the document's target element:

```url
http://www.example.com/help/#setup
```

The following element would be selected by a `:target` selector when the current URL is equal to the above:

```html
<section id="setup">Installation instructions</section>
```

## Syntax

```css
:target {
  /* ... */
}
```

## Description

When an HTML document loads, the browser sets its target element. The element is identified using the URL fragment identifier. Without the URL fragment identifier, the document has no target element. The `:target` pseudo-class allows styling the document's target element. The element could be focused, highlighted, animated, etc.

The target element is set at document load and [`history.back()`](/en-US/docs/Web/API/History/back), [`history.forward()`](/en-US/docs/Web/API/History/forward), and [`history.go()`](/en-US/docs/Web/API/History/forward) method calls. But it is _not_ changed when [`history.pushState()`](/en-US/docs/Web/API/History/pushState) and [`history.replaceState()`](/en-US/docs/Web/API/History/replaceState) methods are called.

> [!NOTE]
> Due to [a possible bug in the CSS specification](https://discourse.wicg.io/t/target-css-does-not-work-because-shadowroot-does-not-set-a-target-element/2070/), `:target` doesn't work within a [web component](/en-US/docs/Web/API/Web_components) because the [shadow root](/en-US/docs/Web/API/ShadowRoot) doesn't pass the target element down to the shadow tree.

## Examples

### A table of contents

The `:target` pseudo-class can be used to highlight the portion of a page that has been linked to from a table of contents.

#### HTML

```html
<h3>Table of Contents</h3>
<ol>
  <li><a href="#p1">Jump to the first paragraph!</a></li>
  <li><a href="#p2">Jump to the second paragraph!</a></li>
  <li>
    <a href="#nowhere">
      This link goes nowhere, because the target doesn't exist.
    </a>
  </li>
</ol>

<h3>My Fun Article</h3>
<p id="p1">
  You can target <i>this paragraph</i> using a URL fragment. Click on the first
  link above to try out!
</p>
<p id="p2">
  This is <i>another paragraph</i>, also accessible from the second link above.
  Isn't that delightful?
</p>
```

#### CSS

```css
p:target {
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

{{EmbedLiveSample('A_table_of_contents', 500, 300)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the :target pseudo-class in selectors](/en-US/docs/Web/CSS/CSS_selectors/Using_the_:target_pseudo-class_in_selectors)
