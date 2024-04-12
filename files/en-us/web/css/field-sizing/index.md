---
title: field-sizing
slug: Web/CSS/field-sizing
page-type: css-property
browser-compat: css.properties.field-sizing
---

{{CSSRef}}{{seecompattable}}

The **`field-sizing`** [CSS](/en-US/docs/Web/CSS) property sets the sizing behavior of elements that by default are given a default preferred size — i.e. form control elements. `field-sizing` enables this behavior to be overridden so that controls are instead sized to fit their contents.

This property is typically used to style text [{{htmlelement("input")}} and {{htmlelement("textarea")}} elements to allow them to both shrinkwrap their content as well as grow when more text is entered into the form control.

## Syntax

```css
/* Keyword values */
field-sizing: content;
field-sizing: fixed;

/* Global values */
field-sizing: inherit;
field-sizing: initial;
field-sizing: revert;
field-sizing: revert-layer;
field-sizing: unset;
```

### Values

- `content`
  - : Allows the element to adjust its size to fit its contents.
- `fixed`
  - : Sets a fixed size for the element.

## Description

`field-sizing: content` overrides the default preferred sizing of form elements, providing an easy way to create text inputs that shrinkwrap their content and grow as more text is entered, only stopping their growth and requiring scrolling to view all the content when maximum size limits are reached (i.e. their containing elements' size, or a size set on them via CSS).

Specifically, this property affects the following elements:

- Form input types that accept direct text input from users: This includes [`email`](/en-US/docs/Web/HTML/Element/input/email), [`number`](/en-US/docs/Web/HTML/Element/input/number), [`password`](/en-US/docs/Web/HTML/Element/input/password), [`search`](/en-US/docs/Web/HTML/Element/input/search), [`tel`](/en-US/docs/Web/HTML/Element/input/tel), [`text`](/en-US/docs/Web/HTML/Element/input/text), and [`url`](/en-US/docs/Web/HTML/Element/input/url) types.
  - If no minimum width is set on the control, it will only be as wide as the text cursor.
  - Controls with [`placeholder`](/en-US/docs/Web/HTML/Element/input#placeholder) attributes will be rendered large enough to display the placeholder text.
  - The [`size`](/en-US/docs/Web/HTML/Element/input#size) attribute modifies the default preferred size of such `<input>` elements. As a result, `size` has no effect on `<input>` elements with `field-sizing: content` set.
- [`file`](/en-US/docs/Web/HTML/Element/input/file) inputs: Direct text input is not possible, but the filename display changes as the user selects a new file to upload, which will change the control size if `field-sizing: content` is set.
- {{htmlelement("textarea")}} controls: It is worth noting that `<textarea>` elements with `field-sizing: content` set behave much like single-line text controls, with the following additions:
  - If `<textarea>` elements are unable to grow due to a width constraint, they will start to grow in height to display additional rows of content. When a height constraint is then reached, they will then start to show a scrollbar to allow all the content to be viewed.
  - [`rows`](/en-US/docs/Web/HTML/Element/textarea#cols) and [`cols`](/en-US/docs/Web/HTML/Element/textarea#cols) attributes modify the default preferred size of a `<textarea>`. As a result, `rows`/`cols` have no effect on `<textarea>` elements with `field-sizing: content` set.
- {{htmlelement("select")}} controls: These behave a bit differently to what you might expect with `field-sizing: content` set. The effect depends on the type of `<select>` control you are creating:
  - Regular drop-down boxes will change their width to always fit the displayed option value as new values are selected. (By default, the dropdown's size is set to be large enough to display the longest option value.)
  - List boxes (`<select>` elements with the [`multiple`](/en-US/docs/Web/HTML/Element/select#multiple) or [`size`](/en-US/docs/Web/HTML/Element/select#multiple) attributes set) will be large enough to display all the options without needing to scroll. (By default, the drop-down will require scrolling to view all the option values.)
  - The [`size`](/en-US/docs/Web/HTML/Element/select#size) attribute has very little effect on `<select>` elements that have `field-sizing: content` set. In such cases, the browser checks if the `size` is equal to `1` to determine whether the `<select>` control should appear as a drop-down or a listbox. However, it will always display all the options of a listbox, even if `size` is smaller than the number of options.

### Sizing controls with CSS

The sizing flexibility provided to form controls by `field-sizing: content` can be overridden if you use other CSS sizing properties. Avoid setting a fixed {{cssxref("width")}} and {{cssxref("height")}} when using `field-sizing: content` because they will reimpose a fixed size on the control. However, using properties like {{cssxref("min-width")}} and {{cssxref("max-width")}} alongside `field-sizing: content` is quite effective because they allow the control to grow and shrink with the entered text and also prevent the control from becoming too large or too small.

It is also useful to combine these properties with form attributes like [`maxlength`](/en-US/docs/Web/HTML/Element/input#maxlength), which will cause the control to stop growing in size when the maximum character limit is reached.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Growing and shrinking text fields

This example illustrates the effect of `field-sizing: content` on single- and multi-line text fields. The fields adjust their size as text is added or removed, effectively shrinkwrapping the contents, until a lower or upper size limit is reached.

#### HTML

Our HTML contains three form fields with associated {{htmlelement("label")}}s — `<input>`s of type [`text`](/en-US/docs/Web/HTML/Element/input/text) and [`email`](/en-US/docs/Web/HTML/Element/input/email) respectively, and a {{htmlelement("textarea")}}.

```html
<div>
  <label for="text">Enter name:</label>
  <input type="text" id="text" maxlength="50" />
</div>
<div>
  <label for="email">Enter email:</label>
  <input type="email" id="email" maxlength="50" placeholder="e.g. a@b.com" />
</div>
<div>
  <label for="textarea">Enter comment:</label>
  <textarea id="textarea" maxlength="400">This is a comment.</textarea>
</div>
```

Note how:

- The fields have a [`maxlength`](/en-US/docs/Web/HTML/Element/input#maxlength) attribute set, which works usefully alongside `field-sizing: content` — the size of the field will stop increasing when the character limit is reached.
- The `<textarea>`'s `maxlength` is bigger than that of the other two fields. The result is that the `<textarea>` will grow in the inline direction until the edge of the {{cssxref("min-width")}} constraint is reached, then start to add new lines in the block direction until the `maxlength` limit is reached.
- The `email` input has a placeholder set. This causes the field to render big enough to show the entire placeholder. Once the field is focused and the user starts typing, the field changes size to the {{cssxref("min-width")}} value set in the CSS code below. The `text` field, which doesn't have a placeholder, renders initially at `min-width`.

#### CSS

In the CSS, we set `field-sizing: content` on the three form fields, along with a {{cssxref("min-width")}} and {{cssxref("min-width")}} to constrain the input size. It is worth reiterating that, if no minimum width is set on the field, they will only be rendered as big as the text cursor.

We also give the `<label>`s some rudimentary styling so that they sit neatly next to the fields.

```css hidden
body {
  box-sizing: border-box;
  padding: 20px;
}

div {
  margin-bottom: 20px;
  display: flex;
}
```

```css
input,
textarea {
  field-sizing: content;
  min-width: 50px;
  max-width: 350px;
}

label {
  width: 150px;
  margin-right: 20px;
  text-align: right;
}
```

#### Result

Try entering and removing text in the fields below to explore the effects of `field-sizing: content` alongside other sizing properties.

{{ EmbedLiveSample('Growing/shrinking text fields', '100%', '200') }}

### Controlling `<select>` element display

This example illustrates the effect of `field-sizing: content` on {{htmlelement("select")}} elements, both drop-down menu types and multiline listbox types.

#### HTML

Our HTML contains two sets of `<select>` elements — one that will have `field-sizing: content` applied to it, and one that won't — so you can see the difference (the effect is a bit less obvious than on text fields). Each set contains one drop-down menu type and multiline listbox type (with the [`multiple`](/en-US/docs/Web/HTML/Element/select#multiple) attribute set).

```html
<div class="field-sizing">
  <h2>With field-sizing: content</h2>
  <select>
    <option>Bananas</option>
    <option>Strawberries</option>
    <option selected>Apples</option>
    <option>Raspberries</option>
    <option>Pomegranate</option>
  </select>
  <select multiple>
    <option>Bananas</option>
    <option>Strawberries</option>
    <option>Apples</option>
    <option>Raspberries</option>
    <option>Pomegranate</option>
  </select>
</div>
<div>
  <h2>Without field-sizing: content</h2>
  <select>
    <option>Bananas</option>
    <option>Strawberries</option>
    <option selected>Apples</option>
    <option>Raspberries</option>
    <option>Pomegranate</option>
  </select>
  <select multiple>
    <option>Bananas</option>
    <option>Strawberries</option>
    <option>Apples</option>
    <option>Raspberries</option>
    <option>Pomegranate</option>
  </select>
</div>
```

#### CSS

In the CSS, we set `field-sizing: content` on the first set of `<select>` elements only.

```css hidden
body {
  box-sizing: border-box;
  display: flex;
  gap: 20px;
  font-family: sans-serif;
}

h2 {
  margin-top: 0;
  font-size: 1rem;
  text-align: center;
  flex: 1 0 100%;
}

div {
  margin-bottom: 20px;
  flex: 1;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  flex-flow: row wrap;
}

select {
  valign: top;
}
```

```css
.field-sizing select {
  field-sizing: content;
}
```

#### Result

{{ EmbedLiveSample('Controlling select element display', '100%', '150') }}

Note the following effects of `field-sizing: content`:

- The drop-down menu always fits the size of the displayed option, changing size as different options are selected. Without `field-sizing: content`, the size is fixed as wide as the longest option.
- The multi-select list box displays all of the options at once. Without `field-sizing: content`, the user has to scroll the box to view all the options.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{htmlelement("input")}}
- {{htmlelement("select")}}
- {{htmlelement("textarea")}}
