---
title: ::placeholder
slug: Web/CSS/::placeholder
page-type: css-pseudo-element
browser-compat: css.selectors.placeholder
---

{{CSSRef}}

The **`::placeholder`** [CSS](/en-US/docs/Web/CSS) [pseudo-element](/en-US/docs/Web/CSS/Pseudo-elements) represents the [placeholder text](/en-US/docs/Web/HTML/Element/input#placeholder) in an {{HTMLElement("input")}} or {{HTMLElement("textarea")}} element.

{{EmbedInteractiveExample("pages/tabbed/pseudo-element-placeholder.html", "tabbed-shorter")}}

Only the subset of CSS properties that apply to the {{cssxref("::first-line")}} pseudo-element can be used in a rule using `::placeholder` in its selector.

> [!NOTE]
> In most browsers, the appearance of placeholder text is a translucent or light gray color by default.

## Syntax

```css
::placeholder {
  /* ... */
}
```

## Accessibility

### Color contrast

#### Contrast Ratio

Placeholder text typically has a lighter color treatment to indicate that it is a suggestion for what kind of input will be valid, and is not actual input of any kind.

It is important to ensure that the contrast ratio between the color of the placeholder text and the background of the input is high enough that people experiencing low vision conditions will be able to read it while also making sure there is enough of a difference between the placeholder text and input text color that users do not mistake the placeholder for inputted data.

Color contrast ratio is determined by comparing the luminosity of the placeholder text and the input background color values. In order to meet current [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/), a ratio of 4.5:1 is required for text content and 3:1 for larger text such as headings. Large text is defined as 18.66px and bold or larger, or 24px or larger.

- [WebAIM: Color Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [MDN Understanding WCAG, Guideline 1.4 explanations](/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Success Criterion 1.4.3 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

#### Usability

Placeholder text with sufficient color contrast may be interpreted as entered input. Placeholder text will also disappear when a person enters content into an {{htmlelement("input")}} element. Both of these circumstances can interfere with successful form completion, especially for people with cognitive concerns.

An alternate approach to providing placeholder information is to include it outside of the input in close visual proximity, then use [`aria-describedby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) to programmatically associate the {{HTMLElement("input")}} with its hint.

With this implementation, the hint content is available even if information is entered into the input field, and the input appears free of preexisting input when the page is loaded. Most screen reading technology will use `aria-describedby` to read the hint after the input's label text is announced, and the person using the screen reader can mute it if they find the extra information unnecessary.

```html
<label for="user-email">Your email address</label>
<span id="user-email-hint" class="input-hint">Example: jane@sample.com</span>
<input
  id="user-email"
  aria-describedby="user-email-hint"
  name="email"
  type="email" />
```

- [Placeholders in Form Fields Are Harmful — Nielsen Norman Group](https://www.nngroup.com/articles/form-design-placeholders/)

### Windows High Contrast Mode

Placeholder text will appear with the same styling as user-entered text content when rendered in [Windows High Contrast Mode](https://www.smashingmagazine.com/2022/06/guide-windows-high-contrast-mode/). This will make it difficult for some people to determine which content has been entered, and which content is placeholder text.

### Labels

Placeholders are not a replacement for the {{htmlelement("label")}} element. Without a label that has been programmatically associated with an input using a combination of the [`for`](/en-US/docs/Web/HTML/Element/label#for) and [`id`](/en-US/docs/Web/HTML/Global_attributes/id) attributes, assistive technology such as screen readers cannot parse {{htmlelement("input")}} elements.

- [Placeholders in Form Fields Are Harmful — Nielsen Norman Group](https://www.nngroup.com/articles/form-design-placeholders/)

## Examples

### Change placeholder appearance

This example shows some of the adjustments that you can make to the styles of placeholder text.

#### HTML

```html
<input placeholder="Type here" />
```

#### CSS

```css
input::placeholder {
  color: red;
  font-size: 1.2em;
  font-style: italic;
  opacity: 0.5;
}
```

#### Result

{{EmbedLiveSample("Change_placeholder_appearance", 200, 60)}}

### Opaque text

Some browsers make placeholder text less opaque. If you want fully opaque text, then set the {{CSSXref("color")}} property value explicitly. The [`currentColor`](/en-US/docs/Web/CSS/color_value#currentcolor_keyword) value can be used to have the same color as the corresponding input element.

#### HTML

```html
<input placeholder="Color set by browser" />
<input placeholder="Same color as input" class="explicit-color" />
<input placeholder="Semi-opaque text color" class="opacity-change" />
```

#### CSS

```css
input {
  font-weight: bold;
  color: green;
}

.explicit-color::placeholder {
  /* use the same color as input element to avoid the browser set default color */
  color: currentColor;
}

.opacity-change::placeholder {
  /* less opaque text */
  color: color-mix(in srgb, currentColor 70%, transparent);
}
```

#### Result

{{EmbedLiveSample("default_color", 200, 60)}}

> [!NOTE]
> Note that browsers use different default colors for placeholder text. For example, Firefox uses the input element's color with 54% opacity, and Chrome uses `darkgray` color. If you want consistent placeholder text color across the browsers, then set the `color` explicitly.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{cssxref(":placeholder-shown")}} pseudo-class styles an element that _has_ an active placeholder.
- Related HTML elements: {{HTMLElement("input")}}, {{HTMLElement("textarea")}}
- [HTML forms](/en-US/docs/Learn_web_development/Extensions/Forms)
