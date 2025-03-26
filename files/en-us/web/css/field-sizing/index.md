---
title: field-sizing
slug: Web/CSS/field-sizing
page-type: css-property
status:
  - experimental
browser-compat: css.properties.field-sizing
---

{{CSSRef}}{{seecompattable}}

The **`field-sizing`** [CSS](/en-US/docs/Web/CSS) property enables you to control the sizing behavior of elements that are given a default preferred size, such as form control elements. This property enables you to override the default sizing behavior, allowing form controls to adjust in size to fit their contents.

This property is typically used to style text {{htmlelement("input")}} and {{htmlelement("textarea")}} elements to allow them to shrinkwrap their content as well as grow when more text is entered into the form control.

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
  - : Sets a fixed size for the element. This is the default value.

## Description

`field-sizing: content` overrides the default preferred sizing of form elements. This setting provides an easy way to configure text inputs to shrinkwrap their content and grow as more text is entered. They stop expanding when they reach maximum size limits (defined by the size of their containing element or set via CSS), at which point scrolling is required to view all the content.

### Elements affected by `field-sizing: content`

Specifically, `field-sizing` to `content` affects the following elements:

- Form input types that accept direct text input from users. This includes [`email`](/en-US/docs/Web/HTML/Element/input/email), [`number`](/en-US/docs/Web/HTML/Element/input/number), [`password`](/en-US/docs/Web/HTML/Element/input/password), [`search`](/en-US/docs/Web/HTML/Element/input/search), [`tel`](/en-US/docs/Web/HTML/Element/input/tel), [`text`](/en-US/docs/Web/HTML/Element/input/text), and [`url`](/en-US/docs/Web/HTML/Element/input/url) types.
  - If no minimum width is set on the control, it will only be as wide as the text cursor.
  - Controls with [`placeholder`](/en-US/docs/Web/HTML/Element/input#placeholder) attributes will be rendered large enough to display the placeholder text.
  - The [`size`](/en-US/docs/Web/HTML/Element/input#size) attribute modifies the default preferred size of such `<input>` elements. As a result, `size` has no effect on `<input>` elements with `field-sizing: content` set.
- [`file`](/en-US/docs/Web/HTML/Element/input/file) inputs. Direct text input is not possible; however, the displayed filename changes as the user selects a new file to upload. When `field-sizing: content` is set, the control will change size to shrinkwrap the filename.
- {{htmlelement("textarea")}} controls. It is worth noting that `<textarea>` elements with `field-sizing: content` set behave much like single-line text controls, with the following additions:
  - If `<textarea>` elements are unable to grow due to a width constraint, they will start to grow in height to display additional rows of content. When a height constraint is then reached, they will then start to show a scrollbar to allow all the content to be viewed.
  - [`rows`](/en-US/docs/Web/HTML/Element/textarea#cols) and [`cols`](/en-US/docs/Web/HTML/Element/textarea#cols) attributes modify the default preferred size of a `<textarea>`. As a result, `rows`/`cols` have no effect on `<textarea>` elements with `field-sizing: content` set.
- {{htmlelement("select")}} controls. These behave a bit differently to what you might expect with `field-sizing: content` set. The effect depends on the type of `<select>` control you are creating:
  - Regular drop-down boxes will change their width to always fit the displayed option value as new values are selected. (By default, the drop-down's size is set to be large enough to display the longest option value.)
  - List boxes (`<select>` elements with the [`multiple`](/en-US/docs/Web/HTML/Element/select#multiple) or [`size`](/en-US/docs/Web/HTML/Element/select#multiple) attribute) will be large enough to display all the options without needing to scroll. (By default, the drop-down box will require scrolling to view all the option values.)
  - The [`size`](/en-US/docs/Web/HTML/Element/select#size) attribute has very little effect on `<select>` elements that have `field-sizing: content` set. In such cases, the browser checks if the `size` is equal to `1` to determine whether the `<select>` control should appear as a drop-down or a listbox. However, it will always display all the options of a listbox, even if `size` is smaller than the number of options.

### `field-sizing` interaction with other size settings

The sizing flexibility provided to form controls by `field-sizing: content` can be overridden if you use other CSS sizing properties. Avoid setting a fixed {{cssxref("width")}} and {{cssxref("height")}} when using `field-sizing: content` because they will reimpose a fixed size on the control. However, using properties like {{cssxref("min-width")}} and {{cssxref("max-width")}} alongside `field-sizing: content` is quite effective because they allow the control to grow and shrink with the entered text and also prevent the control from becoming too large or too small.

The [`maxlength`](/en-US/docs/Web/HTML/Element/input#maxlength) attribute causes the control to stop growing in size when the maximum character limit is reached.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Growing and shrinking text fields

This example illustrates the effect of `field-sizing: content` on single- and multi-line text fields. The fields adjust their size as text is added or removed, effectively shrinkwrapping the contents, until a lower or upper size limit is reached.

#### HTML

The HTML in this example contains three form fields, each with an associated {{htmlelement("label")}}: two `<input>` elements of types [`text`](/en-US/docs/Web/HTML/Element/input/text) and [`email`](/en-US/docs/Web/HTML/Element/input/email) and a {{htmlelement("textarea")}} element.

```html
<div>
  <label for="name">Enter name:</label>
  <input type="text" id="name" maxlength="50" />
</div>
<div>
  <label for="email">Enter email:</label>
  <input type="email" id="email" maxlength="50" placeholder="e.g. a@b.com" />
</div>
<div>
  <label for="comment">Enter comment:</label>
  <textarea id="comment">This is a comment.</textarea>
</div>
```

Note the following points about the HTML:

- The first two fields have a [`maxlength`](/en-US/docs/Web/HTML/Element/input#maxlength) attribute set, which stops the size of the field from increasing when the character limit is reached.
- The `<textarea>` will grow in the inline direction until the edge of the {{cssxref("min-width")}} constraint (set in the CSS code below) is reached, then start to add new lines in the block direction to contain subsequent characters.
- The `email` input has a placeholder set. This causes the field to render big enough to show the entire placeholder. Once the field is focused and the user starts typing, the field changes size to the `min-width` value. The `text` field, which doesn't have a placeholder, renders initially at `min-width`.

#### CSS

In the CSS, we set `field-sizing: content` on the three form fields, along with a {{cssxref("min-width")}} and {{cssxref("max-width")}} to constrain the input size. It is worth reiterating that, if no minimum width was set on the fields, they would be rendered only as wide as the text cursor.

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

The HTML contains two sets of `<select>` elements: one with `field-sizing: content` applied, and one without, allowing you to see the difference (though the effect may be less obvious than on text fields). Each set includes one drop-down menu type and one multiline listbox type (with the [`multiple`](/en-US/docs/Web/HTML/Element/select#multiple) attribute set).

```html
<div class="field-sizing">
  <h2>With <code>field-sizing: content</code></h2>
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
  <h2>Without <code>field-sizing: content</code></h2>
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

> [!NOTE]
> Best practice is to include a {{htmlelement("label")}} element for each form control, to associate a meaningful text description with each field for accessibility purposes (see [Meaningful text labels](/en-US/docs/Learn_web_development/Core/Accessibility/HTML#meaningful_text_labels) for more information). We haven't done so in this example, as it focuses purely on aspects of the form controls' visual rendering, but you should make sure you include form labels in production code.

#### CSS

In the CSS, `field-sizing: content` is set only on the first set of `<select>` elements.

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

{{ EmbedLiveSample('Controlling select element display', '100%', '170') }}

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
