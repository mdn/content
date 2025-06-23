---
title: :last-of-type
slug: Web/CSS/:last-of-type
page-type: css-pseudo-class
browser-compat: css.selectors.last-of-type
---

{{CSSRef}}

The **`:last-of-type`** [CSS](/en-US/docs/Web/CSS) [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes) represents the last element of its type (tag name) among a group of sibling elements.

{{InteractiveExample("CSS Demo: :last-of-type", "tabbed-shorter")}}

```css interactive-example
dt {
  font-weight: bold;
}

dd {
  margin: 3px;
}

dd:last-of-type {
  border: 2px solid orange;
}
```

```html interactive-example
<dl>
  <dt>Vegetables:</dt>
  <dd>1. Tomatoes</dd>
  <dd>2. Cucumbers</dd>
  <dd>3. Mushrooms</dd>
  <dt>Fruits:</dt>
  <dd>4. Apples</dd>
  <dd>5. Mangos</dd>
  <dd>6. Pears</dd>
  <dd>7. Oranges</dd>
</dl>
```

## Syntax

```css
:last-of-type {
  /* ... */
}
```

## Examples

### Styling the last paragraph

#### HTML

```html
<h2>Heading</h2>
<p>Paragraph 1</p>
<p>Paragraph 2</p>
```

#### CSS

```css
p:last-of-type {
  color: red;
  font-style: italic;
}
```

#### Result

{{EmbedLiveSample('Styling_the_last_paragraph')}}

### Nested elements

This example shows how nested elements can also be targeted. Note that the [universal selector](/en-US/docs/Web/CSS/Universal_selectors) (`*`) is implied when no simple selector is written.

#### HTML

```html
<article>
  <div>This `div` is first.</div>
  <div>This <span>nested `span` is last</span>!</div>
  <div>
    This <em>nested `em` is first</em>, but this <em>nested `em` is last</em>!
  </div>
  <p>This `p` qualifies!</p>
  <div>This is the final `div`!</div>
</article>
```

#### CSS

```css
article :last-of-type {
  background-color: pink;
}
```

#### Result

{{EmbedLiveSample('Nested_elements', 500)}}

### Multiple selectors elements

This HTML example contains nested elements of different types. The CSS contains both type selectors and class selectors.

#### HTML

```html
<p>This `p` is not selected.</p>
<p>This `p` is not selected either.</p>
<p>
  This `p` is last `p` element of its parent e.g. `body` selected by `p` type
  selector.
</p>
<div class="container">
  <div class="item">This `div` is not selected.</div>
  <div class="item">This `div` is not selected either.</div>
  <div class="item">
    This `div` is last `div` element of its parent `div` selected by `.container
    .item` class selector.
  </div>
  <p class="item">
    This `p` is last `p` element of its parent `div` selected by `.container
    .item` class selector.
  </p>
</div>
```

#### CSS

```css
p:last-of-type {
  background: skyblue;
}

.container .item:last-of-type {
  color: red;
  font-weight: bold;
}
```

#### Result

{{EmbedLiveSample('Multiple_selectors_elements', 500)}}

The last `<div>` and the last `<p>` are both red and bold as the `.item:last-of-type` selects the last of every type if that last element also has the `item` class.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref(":last-child")}}, {{Cssxref(":nth-last-of-type")}}
