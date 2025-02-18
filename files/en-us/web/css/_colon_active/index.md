---
title: :active
slug: Web/CSS/:active
page-type: css-pseudo-class
browser-compat: css.selectors.active
---

{{CSSRef}}

The **`:active`** [CSS](/en-US/docs/Web/CSS) [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes) represents an element (such as a button) that is being activated by the user. When using a mouse, "activation" typically starts when the user presses down the primary mouse button.

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-active.html", "tabbed-shorter")}}

The `:active` pseudo-class is commonly used on {{HTMLElement("a")}} and {{HTMLElement("button")}} elements. Other common targets of this pseudo-class include elements that are _contained in_ an activated element, and form elements that are being activated through their associated {{HTMLElement("label")}}.

Styles defined by the `:active` pseudo-class will be overridden by any subsequent link-related pseudo-class ({{cssxref(":link")}}, {{cssxref(":hover")}}, or {{cssxref(":visited")}}) that has at least equal specificity. To style links appropriately, put the `:active` rule after all other link-related rules, as defined by the _LVHA-order_: `:link` — `:visited` — `:hover` — `:active`.

> [!NOTE]
> On systems with multi-button mice, CSS specifies that the `:active` pseudo-class must only apply to the primary button; on right-handed mice, this is typically the leftmost button.

## Syntax

```css
:active {
  /* ... */
}
```

## Examples

### Active links

#### HTML

```html
<p>
  This paragraph contains a link:
  <a href="#">This link will turn red while you click on it.</a>
  The paragraph will get a gray background while you click on it or the link.
</p>
```

#### CSS

```css
/* Unvisited links */
a:link {
  color: blue;
}
/* Visited links */
a:visited {
  color: purple;
}
/* Hovered links */
a:hover {
  background: yellow;
}
/* Active links */
a:active {
  color: red;
}

/* Active paragraphs */
p:active {
  background: #eee;
}
```

#### Result

{{EmbedLiveSample('Active_links')}}

### Active form elements

#### HTML

```html
<form>
  <label for="my-button">My button: </label>
  <button id="my-button" type="button">Try Clicking Me or My Label!</button>
</form>
```

#### CSS

```css
form :active {
  color: red;
}

form button {
  background: white;
}
```

#### Result

{{EmbedLiveSample('Active_form_elements')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Link-related pseudo-classes: {{cssxref(":link")}}, {{cssxref(":visited")}}, and {{cssxref(":hover")}}
