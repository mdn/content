---
title: appearance
slug: Web/CSS/appearance
page-type: css-property
browser-compat: css.properties.appearance
sidebar: cssref
---

The **`appearance`** [CSS](/en-US/docs/Web/CSS) property specifies the rendered appearance of replaced UI widget elements. Most commonly, such elements are given native, platform-specific styling, based on the operating system's theme, or a primitive appearance with styles that can be overridden using CSS.

{{InteractiveExample("CSS Demo: appearance")}}

```css interactive-example-choice
appearance: auto;
```

```css interactive-example-choice
appearance: none;
```

```css interactive-example-choice
appearance: textfield;
```

```html interactive-example
<section id="default-example">
  <div class="background" id="example-element">
    <input type="search" value="search" aria-label="unlabeled search" />
    <input type="checkbox" aria-label="unlabeled checkbox" />
    <input type="radio" aria-label="unlabeled radio button" />
    <button>Button</button>
  </div>
</section>
```

```css interactive-example
input,
button {
  appearance: inherit;
}
```

## Syntax

```css
/* CSS Basic User Interface Module Level 4 values */
appearance: none;
appearance: auto;
appearance: menulist-button;
appearance: textfield;
appearance: base-select;

/* Global values */
appearance: inherit;
appearance: initial;
appearance: revert;
appearance: revert-layer;
appearance: unset;

/* <compat-auto> values have the same effect as 'auto' */
appearance: button;
appearance: checkbox;
```

### Values

The `appearance` property can be applied to all elements and pseudo-elements, but the effect of the specified value, if any, depends on the element to which it is applied.

- `none`
  - : Gives the widget a _primitive_ appearance, making it stylable via CSS, while maintaining the widget's native functionality. This value does not affect non-widgets.

- `auto`
  - : Sets interactive widgets to render with their _OS-native_ appearance. Behaves as `none` on elements with no OS-native styling.

- `base-select`
  - : Only relevant to the {{htmlelement("select")}} element and {{cssxref("::picker()", "::picker(select)")}} pseudo-element, allowing them to be styled.

- `<compat-special>`
  - : Has an effect similar to`auto` on certain elements.
    - `textfield`
      - : Causes the appearance of certain `<input>` types, to [match the appearance of the `text` type](#try_it).
    - `menulist-button`
      - : When set on the `<select>` element, the drop-down picker is set to match that of its devolved, or default, state.

- `<compat-auto>`
  - : Included for backwards compatibility; possible values include `button`, `checkbox`, `listbox`, `menulist`, `meter`, `progress-bar`, `push-button`, `radio`, `searchfield`, `slider-horizontal`, `square-button`, and `textarea`. The values all behave as `auto`: use `auto` instead.

> [!NOTE]
> The specification also defines a `base` value. This is not yet supported by any browser.

#### Non-standard values

Some non-standard values are also supported in some browsers:

- `slider-vertical`
  - : Makes the slider vertical when applied to `<input type="range">` elements. To [create a vertical slider](/en-US/docs/Web/CSS/CSS_writing_modes/Vertical_controls) you should instead set the {{cssxref("writing-mode")}} to `vertical-lr` and the {{cssxref("direction")}} to `rtl`.

- `-apple-pay-button`
  - : Displays the Apple Pay logo when set on a {{htmlelement("button")}}, {{htmlelement("a")}}, or {{htmlelement("input")}} element of type `button` or `reset`.

## Description

The `appearance` property enables displaying elements in their OS-native style based on the operating system's theme, as well as the removal of any platform-native styling with the `none` value. Setting `appearance: none`, or otherwise changing the appearance of UI widgets, does not change the element's functionality.

While most elements in a document can be fully styled by CSS, UI controls (_widgets_) are typically rendered by the browser using the operating system's native UI styles. This _native_ appearance differs between operating systems and browsers. In this default state, widgets have limited, if any, features that can be styled with CSS. Which elements have this native UI appearance is defined in HTML.

The `appearance` property provides some control over the appearance of HTML widgets that, by default, look like native operating system controls. Most notably, the `none` value suppresses some of a widget's native appearance. This results in a _primitive_ look that can be styled via CSS while still maintaining functionality and supporting native user interactions.

Some widgets disappear completely when set to `appearance: none`. The hidden controls are still interactive, however. For example, clicking on a {{htmlelement("label")}} associated with an `appearance: none` checkbox will toggle the checkbox's checked state.

Because `none` can cause a widget to be hidden, the `base` value is being added to provide widgets with a base appearance. When supported, the `base` value will ensure widgets maintain their native appearance while enabling CSS to be used to change a widget's styles that are not changeable by default. Unlike `none`, that can make radio buttons and checkboxes disappear, with base, the widget will retain a primitive appearance with default styles that are usable and interoperable. In other words, the `base` value is an alternative to `none` that guarantees widgets some usable, interoperable native styles as well as a good degree of customization via CSS. While this `base` value is not yet supported, the many `<compat-auto>` values provide similar functionality but are type-specific and not global in nature.

The `base-select` value, which is relevant only for the {{htmlelement("select")}} element and {{cssxref("::picker()", "::picker(select)")}} pseudo-element, enables [styling `<select>` elements and the select picker](#Setting_the_appearance_of_a_select) (which contains the `<option>` elements). The picker is rendered in the top layer, similar to a popover. When `base-select` is set, the picker can be positioned relative to the select (or other elements) using CSS anchoring features. In addition, the `base-select` value causes the `<select>` to not render outside the browser pane and not trigger built-in mobile operating system components. It is also no longer sized based on the width of the widest `<option>`.

### Prefixed non-standard values

Before standardization, the prefixed **`-moz-appearance`** and **`-webkit-appearance`** properties allowed elements to be shown as widgets such as buttons or checkboxes. The following non-standard values may be encountered in legacy style sheets, most commonly as values of shadow DOM component [prefixed pseudo-elements](/en-US/docs/Web/CSS/WebKit_Extensions#pseudo-elements):

- `attachment`
- `borderless-attachment`
- `button-bevel`
- `caps-lock-indicator`
- `caret`
- `checkbox-container`
- `checkbox-label`
- `checkmenuitem`
- `color-well`
- `continuous-capacity-level-indicator`
- `default-button`
- `discrete-capacity-level-indicator`
- `inner-spin-button`
- `image-controls-button`
- `list-button`
- `listitem`
- `media-enter-fullscreen-button`
- `media-exit-fullscreen-button`
- `media-fullscreen-volume-slider`
- `media-fullscreen-volume-slider-thumb`
- `media-mute-button`
- `media-play-button`
- `media-overlay-play-button`
- `media-return-to-realtime-button`
- `media-rewind-button`
- `media-seek-back-button`
- `media-seek-forward-button`
- `media-toggle-closed-captions-button`
- `media-slider`
- `media-sliderthumb`
- `media-volume-slider-container`
- `media-volume-slider-mute-button`
- `media-volume-slider`
- `media-volume-sliderthumb`
- `media-controls-background`
- `media-controls-dark-bar-background`
- `media-controls-fullscreen-background`
- `media-controls-light-bar-background`
- `media-current-time-display`
- `media-time-remaining-display`
- `menulist-text`
- `menulist-textfield`
- `meterbar`
- `number-input`
- `progress-bar-value`
- `progressbar`
- `progressbar-vertical`
- `range`
- `range-thumb`
- `rating-level-indicator`
- `relevancy-level-indicator`
- `scale-horizontal`
- `scalethumbend`
- `scalethumb-horizontal`
- `scalethumbstart`
- `scalethumbtick`
- `scalethumb-vertical`
- `scale-vertical`
- `scrollbarthumb-horizontal`
- `scrollbarthumb-vertical`
- `scrollbartrack-horizontal`
- `scrollbartrack-vertical`
- `searchfield-decoration`
- `searchfield-results-decoration`
- `searchfield-results-button`
- `searchfield-cancel-button`
- `snapshotted-plugin-overlay`
- `sheet`
- `sliderthumb-horizontal`
- `sliderthumb-vertical`
- `textfield-multiline`

Authors are encouraged to use only standard keywords.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Basic example

This example demonstrates basic usage of the `appearance` property, altering the appearance of an {{htmlelement("input")}} element in some browsers.

#### HTML

We include two `number` form controls along with their labels.

```html
<p>
  <label>Enter a number: <input type="number" min="0" max="10" /></label>
</p>
<p>
  <label
    >Enter a number: <input type="number" min="0" max="10" class="text"
  /></label>
</p>
```

#### CSS

We set the element with the class of `text` to look like a text field.

```css
.text {
  appearance: textfield;
}
```

#### Results

{{EmbedLiveSample("Basic example", 600, 100)}}

Depending on the browser, the spinner may be visually removed when the control is set to look like a text field. The `appearance` property has no effect on the functionality: for example, while there may no longer be a spinner to click on,the up and down cursor keys will still increment and decrement the value.

### Appearance set to `none`

The following example shows how to remove the default styling from a checkbox, a radio button, and a {{htmlelement("select")}} element, and apply custom styling.

#### HTML

We include pairs of checkboxes, radio buttons, and `<select>` elements, along with their associated labels:

```html
<label><input type="checkbox" /> Default unchecked </label>
<label><input type="checkbox" checked /> Default checked </label>

<hr />

<label><input type="radio" name="radio" /> Default unchecked </label>
<label><input type="radio" name="radio" checked /> Default checked </label>

<hr />

<label
  >Unstyled select
  <select>
    <option>Option 1</option>
    <option>Option 2</option>
  </select>
</label>

<label
  >Styled select
  <select class="none">
    <option>Option 1</option>
    <option>Option 2</option>
  </select>
</label>
```

#### CSS

```css hidden
label {
  display: block;
  margin: 0.5em 0;
}
```

We include styles to apply to both {{htmlelement("input")}} elements of type `checkbox`. We provide styles for the checkbox that will create a red square if the element is styleable. We set `appearance: none` to the {{cssxref(":checked")}} UI state for all inputs (`checkbox` and `radio`), as well as to elements with the `.none` class. This removes all the style of the radio button and checkbox, other than the margins, and allows them to be styled; but there are no alternative styles provided for the radio button or `<select>` for when `none` is set.

```css
[type="checkbox"] {
  width: 1em;
  height: 1em;
  display: inline-block;
  background: red;
}
input:checked,
.none {
  appearance: none;
}
```

#### Result

{{EmbedLiveSample("Appearance set to none", 600, 220)}}

Setting `appearance: none` enables UI elements to be styled, but it also runs the risk of hiding the widget. The unchecked checkbox, with it's `appearance` defaulting to `auto`, looks like a checkbox. Setting `appearance: none` in the `:checked` state enables it to be styled. Like the unchecked checkbox, the unchecked radio looks like the native UI widget, because it is. When in the checked state, with `appearance: none` applied, the radio button disappears; only its margins impact the page while the functionality remains present.

### Setting the appearance of a select

We can use the `appearance` property to opt-in to custom select functionality, enabling styling the `<select>` element and its picker, which represents the part of the form control that pops out of the page.

#### HTML

We include three `<select>` elements, with the same multiple {{htmlelement("option")}} children. As with every `<select>`, we also include associated {{htmlelement("label")}} elements. The third option has more text to demonstrate the effect of `base-select` on the width of the `<select>`:

```html
<label for="ice-cream1"
  >Default flavor:
  <select id="ice-cream1">
    <option>Asparagus</option>
    <option>Dulce de leche</option>
    <option>Pistachio, rum raisin, and coffee</option>
  </select>
</label>
<label for="ice-cream2"
  >Base select flavor:
  <select id="ice-cream2" class="baseSelect">
    <option>Asparagus</option>
    <option>Dulce de leche</option>
    <option>Pistachio, rum raisin, and coffee</option>
  </select>
</label>
<label for="ice-cream3"
  >Menulist button flavor:
  <select id="ice-cream3" class="menulistButton">
    <option>Asparagus</option>
    <option>Dulce de leche</option>
    <option>Pistachio, rum raisin, and coffee</option>
  </select>
</label>
```

#### CSS

We select the pickers of all the `<select>` elements using the {{cssxref("::picker()")}} pseudo-element with the `select` parameter. We set the `appearance` value of all the pickers and one `<select>` element to `base-select`. We set the last `<select>` to `menulist-button`. The first `<select>` defaults to the `auto` state:

```css
.baseSelect,
::picker(select) {
  appearance: base-select;
}
.menulistButton {
  appearance: menulist-button;
}
```

```css
label {
  display: block;
}
```

We set values for the `<select>` and pickers' {{cssxref("background-color")}} and {{cssxref("border")}} properties to demonstrate the effects of the `appearance` values:

```css
select {
  border: 1px solid red;
  background-color: orange;
}

::picker(select) {
  background-color: yellow;
  border: none;
}
```

#### Results

{{EmbedLiveSample("Setting the appearance of a select", 1050, 80)}}

While the {{cssxref("background-color")}} and {{cssxref("border")}} styles are defined on all the `<select>` elements and their pickers, the `::picker(select)` styles only effect the picker where both the select and the picker have the `appearance` property set to `base-select`. The first and third selects look the same because `menulist-button` is a compatibility keyword.

Notice that, by default, the inline-size of the `<select>` is generally the inline-size of the `<option>` with the most text and the picker pane is fully visible when opened. This is no longer true when `base-select` is set.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`prefers-color-scheme`](/en-US/docs/Web/CSS/@media/prefers-color-scheme)
