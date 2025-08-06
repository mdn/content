---
title: caret-color
slug: Web/CSS/caret-color
page-type: css-property
browser-compat: css.properties.caret-color
sidebar: cssref
---

The **`caret-color`** [CSS](/en-US/docs/Web/CSS) property sets the color of the **insertion caret**, sometimes referred to as the **text input cursor**. This is the visible marker appearing at the insertion point where the next character typed will be added or where the next character deleted will be removed.

{{InteractiveExample("CSS Demo: caret-color")}}

```css interactive-example-choice
caret-color: red;
```

```css interactive-example-choice
caret-color: auto;
```

```css interactive-example-choice
caret-color: transparent;
```

```html interactive-example
<section class="default-example container" id="default-example">
  <div>
    <p>Enter text in the field to see the caret:</p>
    <p><input id="example-element" type="text" /></p>
  </div>
</section>
```

```css interactive-example
#example-element {
  font-size: 1.2rem;
}
```

## Syntax

```css
/* Keyword values */
caret-color: auto;
caret-color: transparent;
caret-color: currentColor;

/* <color> values */
caret-color: red;
caret-color: #5729e9;
caret-color: rgb(0 200 0);
caret-color: hsl(228deg 4% 24% / 80%);

/* Global values */
caret-color: inherit;
caret-color: initial;
caret-color: revert;
caret-color: revert-layer;
caret-color: unset;
```

### Values

- `auto`
  - : Generally resolves to [`currentColor`](/en-US/docs/Web/CSS/color_value#currentcolor_keyword), the {{cssxref("color")}} of the text that will be modified.

- {{cssxref("&lt;color&gt;")}}
  - : The color of the caret.

## Description

An insertion caret is a visible indicator of the spot within editable text — or within an element that accepts text input — where content will be inserted (or deleted) by the user. The caret is typically a thin vertical line indicating where the addition or deletion of characters will occur. It generally blinks (flashes on and off), so it is more noticeable. The caret only appears when the editable element has focus. By default, this caret is the color of the text. The `caret-color` property can be used to set the color of this caret to something other than the `currentColor`, or to reset a colored caret back to its default.

The `auto` value sets the insertion caret to `currentColor`, which is the {{cssxref("color")}} of the text that is being added or deleted. User agents may choose a different color to ensure good visibility and contrast with the surrounding content, taking into account the {{cssxref("color")}}, {{cssxref("background-color")}}, shadows, and other factors. In practice, however, all browsers use the current color by default, and when `caret-color` is set to `auto`. You can set any valid `<color>` as the value.

### Understanding insertion carets

The insertion caret, and therefore this property, only applies to text or elements that can accept text input. The caret appears in focused user interface elements where users can update content, such as {{HTMLElement("input")}} elements that accept freeform text, the {{HTMLElement("textarea")}} element, and elements with the [`contenteditable`](/en-US/docs/Web/HTML/Reference/Global_attributes/contenteditable) attribute set.

The caret may appear in `<input>` elements of type `password`, `text`, `search`, `tel`, and `email`. No caret exists with date, `color`, `hidden`, `radio`, or `checkbox` input types. Some browsers display a caret with the `number` input type. It is possible in some browsers to make a caret appear in elements that never have text content — for example, by setting [`appearance: none`](/en-US/docs/Web/CSS/appearance) and adding the `contenteditable` attribute. However, this is not recommended.

A caret may be displayed in an editable element or its descendants, provided the editability is not disabled, for example by setting a descendant element's `contentEditable` attribute to `false`. If an element is not editable or selectable, for example if {{cssxref("user-select")}} is set to `none`, the caret should not appear.

### Caret versus cursor

There are multiple types of carets. The insertion caret is the only type affected by the `caret-color` property.

Many browsers have a **navigation caret**, which acts similarly to an insertion caret but can be moved around in non-editable text.

The mouse cursor image shown for certain {{cssxref("cursor")}} property values (for example, `auto` or `text`) may resemble a caret, but it's not. It's a cursor.

### Animating from `auto`

Generally, when the `caret-color` is set to or defaults to `auto`, user agents use `currentColor`, which is animatable. However, `auto` is not an animatable value by default: when animating or transitioning the `caret-color` from `auto` to any color value, no interpolation happens. Instead, the color switches from or to the `currentColor` color at the midpoint of the {{cssxref("animation-duration")}} or {{cssxref("transition-duration")}}.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting a custom caret color

#### HTML

```html
<input value="This field uses a default caret." size="64" />
<input class="custom" value="I have a custom caret color!" size="64" />
<p contenteditable class="custom">
  This paragraph can be edited, and its caret has a custom color as well!
</p>
```

#### CSS

```css
input {
  caret-color: auto;
  display: block;
  margin-bottom: 0.5em;
}

input.custom {
  caret-color: orange;
}

p.custom {
  caret-color: green;
}
```

#### Result

{{EmbedLiveSample('Setting_a_custom_caret_color', 500, 200)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("color")}}
- {{cssxref("text-emphasis")}}
- {{cssxref("cursor")}}
- {{cssxref("text-emphasis")}}
- CSS {{cssxref("&lt;color&gt;")}} data type
- {{HTMLElement("input")}} element
- HTML [`contenteditable`](/en-US/docs/Web/HTML/Reference/Global_attributes/contenteditable) attribute
