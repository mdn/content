---
title: sibling-index()
slug: Web/CSS/sibling-index
page-type: css-function
browser-compat: css.types.sibling-index
---

{{CSSRef}}

The **`sibling-index()`** [CSS](/en-US/docs/Web/CSS) [function](/en-US/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) returns an integer representing the position of the current element in the DOM tree relative to all its sibling elements. The returned value is the index number of the contextual child's position among all the sibling elements within a parent element, with the first child returning `1` and the last child, returning {{domxref("Element.children")}}.length.

> [!NOTE]
> Like the {{CSSxRef(":nth-child()")}} pseudo-class, `sibling-index()` starts from 1, not 0.

## Syntax

```css
li {
  width: calc(sibling-index() * 100px);
}
```

### Parameters

The `sibling-index()` function doesn't accept parameters.

### Return value

An integer; the position of the current element in the DOM tree's sibling order.

## Examples

### Dynamic list width

This example demonstrates how to dynamically increase the width of each {{htmlelement("li")}} item in the {{htmlelement("ul")}} by `50px`.

#### HTML

```html
<ul>
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
  <li>Four</li>
</ul>
```

#### CSS

```css
li {
  width: calc(sibling-index() * 50px);
  background-color: #faa;
}
```

#### Results

{{EmbedLiveSample("Dynamic list width", "300", "100")}}

### Ordered List

This example demonstrates how to create an ordered list using `sibling-index()`, without using the {{htmlelement("ol")}} element. Always use the most semantic element for the context; this example is included to demonstrate what can be done with CSS when you have the ability to change the HTML.

#### HTML

When you have {{htmlelement("nav")}} container and several children {{htmlelement("div")}} elements.

```html
<nav arial-label="Ordered list">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
</nav>
```

#### CSS

We make it visually appear as a numbered list by displaying the sibling-index before each {{htmlelement("div")}} element using the {{CSSxRef("::before")}} pseudo-element, setting the {{CSSxRef("content")}} to be the integer returned by the `sibling-index()` function.

```css
div {
  --list-index: sibling-index();
  display: flex;
  gap: 1ch;
}

div::before {
  content: var(--list-index);
}
```

#### Results

{{EmbedLiveSample("Ordered List", "300", "100")}}

### Tree Counting Entrance Animation

Combining `sibling-index()` with CSS animations open new posibilities:

#### HTML

```html
<ul>
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
  <li>Four</li>
</ul>
```

#### CSS

```css
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

li {
  animation-name: fade;
  animation-duration: 1s;
  animation-iteration-count: 1;
  animation-timing-function: linear;
  animation-fill-mode: backwards;
  animation-delay: calc(1s * sibling-index());
}

@keyframes fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
```

#### Results

{{EmbedLiveSample("Tree Counting Entrance Animation", "300", "100")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{CSSxRef("sibling-count", "sibling-count()")}}
