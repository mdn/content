---
title: :only-of-type
slug: Web/CSS/:only-of-type
page-type: css-pseudo-class
browser-compat: css.selectors.only-of-type
---

{{CSSRef}}

The **`:only-of-type`** CSS [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes) represents an element that has no siblings of the same type (tag name).

{{InteractiveExample("CSS Demo: :only-of-type", "tabbed-shorter")}}

```css interactive-example
a:only-of-type {
  color: fuchsia;
}

dd:only-of-type {
  background-color: bisque;
}
```

```html interactive-example
<p>
  To find out more about <b>QUIC</b>, check <a href="#">RFC 9000</a> and
  <a href="#">RFC 9114</a>.
</p>

<dl>
  <dt>Published</dt>
  <dd>2021</dd>
  <dd>2022</dd>
</dl>

<p>Details about <b>QPACK</b> can be found in <a href="#">RFC 9204</a>.</p>

<dl>
  <dt>Published</dt>
  <dd>2022</dd>
</dl>
```

## Syntax

```css
:only-of-type {
  /* ... */
}
```

## Examples

### Styling elements with no siblings of the same type

#### HTML

```html
<main>
  <div>I am `div` #1.</div>
  <p>I am the only `p` among my siblings.</p>
  <div>I am `div` #2.</div>
  <div>
    I am `div` #3.
    <i>I am the only `i` child.</i>
    <em>I am `em` #1.</em>
    <em>I am `em` #2.</em>
  </div>
</main>
```

#### CSS

```css
main :only-of-type {
  color: red;
}
```

#### Result

{{EmbedLiveSample('Styling_elements_with_no_siblings_of_the_same_type','100%',180)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{Cssxref(":only-child")}}
- {{Cssxref(":first-of-type")}}
- {{Cssxref(":last-of-type")}}
- {{Cssxref(":nth-of-type")}}
