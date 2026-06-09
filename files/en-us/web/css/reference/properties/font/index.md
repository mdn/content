---
title: "`font` CSS property"
short-title: font
slug: Web/CSS/Reference/Properties/font
page-type: css-shorthand-property
browser-compat: css.properties.font
sidebar: cssref
---

The **`font`** [CSS](/en-US/docs/Web/CSS) [shorthand property](/en-US/docs/Web/CSS/Guides/Cascade/Shorthand_properties) sets all the different properties of an element's font. Alternatively, it sets an element's font to a system font.

{{InteractiveExample("CSS Demo: font")}}

```css interactive-example-choice
font:
  1.2rem "Fira Sans",
  sans-serif;
```

```css interactive-example-choice
font:
  italic 1.2rem "Fira Sans",
  serif;
```

```css interactive-example-choice
font: italic small-caps bold 16px/2 cursive;
```

```css interactive-example-choice
font: small-caps bold 24px/1 sans-serif;
```

```css interactive-example-choice
font: caption;
```

```html interactive-example
<section id="default-example">
  <q id="example-element">
    Prejudices, it is well known, are most difficult to eradicate from the heart
    whose soil has never been loosened or fertilised by education: they grow
    there, firm as weeds among stones.
  </q>
</section>
```

```css interactive-example
@font-face {
  font-family: "Fira Sans";
  src:
    local("FiraSans-Regular"),
    url("/shared-assets/fonts/FiraSans-Regular.woff2") format("woff2");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "Fira Sans";
  src:
    local("FiraSans-Italic"),
    url("/shared-assets/fonts/FiraSans-Italic.woff2") format("woff2");
  font-weight: normal;
  font-style: italic;
}

section {
  margin-top: 10px;
  font-size: 1.1em;
}
```

## Constituent properties

This property is a shorthand for the following CSS properties:

- {{cssxref("font-family")}}
- {{cssxref("font-size")}}
- {{cssxref("font-width")}}
- {{cssxref("font-style")}}
- {{cssxref("font-variant")}}
- {{cssxref("font-weight")}}
- {{cssxref("line-height")}}

## Syntax

```css-nolint
/* font-size font-family */
font: 1.2em sans-serif;

/* font-size/line-height font-family */
font: 1.2em/2 "Fira Sans", sans-serif;

/* font-style font-weight font-size font-family */
font: italic bold 1.2em monospace;

/* font-width font-variant font-size font-family */
font: ultra-condensed small-caps 1.2em Montserrat, Helvetica, sans-serif;

/* system font */
font: caption;
```

### Values

The value is either a shorthand specifying the various font-related properties or a single `<system-font-family-name>` keyword:

- `<'font-style'>` {{optional_inline}}
  - : See the {{cssxref("font-style")}} CSS property. Defaults to `normal`.
- `<font-variant-css2>` {{optional_inline}}
  - : Either the `normal` or `small-caps` value of the {{cssxref("font-variant")}} property. Defaults to `normal`.
- `<'font-weight'>` {{optional_inline}}
  - : See the {{cssxref("font-weight")}} CSS property. Defaults to `normal`.
- `<font-width-css3>` {{optional_inline}}
  - : The keywords supported by the {{cssxref("font-width")}} CSS property. Defaults to `normal`.
- `<'font-size'>`
  - : See the {{cssxref("font-size")}} CSS property.
- `<'line-height'>` {{optional_inline}}
  - : See the {{cssxref("line-height")}} CSS property. Defaults to `normal`.
- `<'font-family'>`
  - : See the {{cssxref("font-family")}} CSS property. Must be the last value.

- `<system-font-family-name>`
  - : A single keyword representing a system font, including:
    - `caption`
      - : The system font used for captioned controls (e.g., buttons, drop-downs, etc.).
    - `icon`
      - : The system font used to label icons.
    - `menu`
      - : The system font used in menus (e.g., dropdown menus and menu lists).
    - `message-box`
      - : The system font used in dialog boxes.
    - `small-caption`
      - : The system font used for labeling small controls.
    - `status-bar`
      - : The system font used in window status bars.

    There are several non-standard values implemented with prefixes.

## Description

The `font` property value is either a single keyword representing a system-font-family-name or multiple longhand property values used to set all the different properties of an element's font.

### System font declarations

If `font` is specified as a `<system-font-family-name>` keyword, the full property value must be set to that single, case-insensitive keyword. Valid values include `caption`, `icon`, `menu`, `message-box`, `small-caption`, or `status-bar`.

Browsers also support non-standard prefixed values:

 Chromium implements `-webkit-control`, `-webkit-small-control`, and `-webkit-mini-control`.
 Webkit includes the Chromium values, and adds `-webkit-body`, `-webkit-pictograph`, and `-webkit-ruby-text`, along with several `-apple-system-*` prefixed system font names.
 Gecko implements `-moz-window`, `-moz-document`, `-moz-desktop`, `-moz-info`, `-moz-dialog`, `-moz-button`, `-moz-pull-down-menu`, `-moz-list`, and `-moz-field`.

The system font, or `<system-font-family-name>`, can only be set with the `font` property. Defining a single keyword value, such as `font: icon`, sets the font's family, size, weight, style, etc., to the values the browser defines for the named system font. These values can all be changed with longhand declarations placed _after_ the `font` declaration.

Including any `font` longhand components after the `<system-font-family-name>` keyword within a `font` property value invalidates the declaration. For example, `font: icon small` is invalid.

If a `<system-font-family-name>` keyword appears anywhere in the value other than as the first component, the keyword is treated as an {{cssxref("ident")}} representing a standard `font-family` name. For example, the declaration `font: small icon` sets the `font-family` to a font named `icon`, a non-system font which may or may not exist. This declaration also sets the `font-size` to `small` and resets all the other shorthand component properties to their initial values.

### Shorthand font declarations

If `font` is specified as a shorthand for several font-related properties, then:

- it must include values for:
  - {{cssxref("font-size")}}
  - {{cssxref("font-family")}}

- it may optionally include values for:
  - {{cssxref("font-style")}}
  - {{cssxref("font-variant")}}
  - {{cssxref("font-weight")}}
  - {{cssxref("font-width")}}
  - {{cssxref("line-height")}}

As with any shorthand property, any of the longhand component properties not specified are set to their initial values, possibly overriding values previously set using non-shorthand properties. In addition, the shorthand resets the following properties to their initial values. The shorthand cannot explicitly set them:

- {{cssxref("font-feature-settings")}}
- {{cssxref("font-kerning")}}
- {{cssxref("font-language-override")}}
- {{cssxref("font-optical-sizing")}}
- {{cssxref("font-size-adjust")}}
- {{cssxref("font-variant-alternates")}}
- {{cssxref("font-variant-caps")}}
- {{cssxref("font-variant-east-asian")}}
- {{cssxref("font-variant-emoji")}}
- {{cssxref("font-variant-ligatures")}}
- {{cssxref("font-variant-numeric")}}
- {{cssxref("font-variant-position")}}
- {{cssxref("font-variation-settings")}}

### Shorthand property order

The order of some of the longhand values within the shorthand `font` declaration must follow a few rules:

- Both the `font-size` and `font-family` components are required (except for [system font declarations](#system_font_declarations)).
- The `font-style`, `font-variant` and `font-weight` components must precede the `font-size` value.
- A `line-height` can only be included if `font-size` is included. If present, the `line-height` must immediately follow the `font-size`, with the two values separated by a forward slash (`/`), for example: `16px / 3`.
- The `font-family` must be the last value specified.

### Components with limited values

For backward compatibility, the valid values of the `font-variant` and `font-width` components do not include all the valid values or the longhand equivalents.

The valid values for the `font-variant` component are limited `normal` or `small-caps`. While no other values are supported, the shorthand `font` declaration resets all the `font-variant-*` longhand properties to `normal`, including {{cssxref("font-variation-settings")}}, {{cssxref("font-variant-position")}}, {{cssxref("font-variant-emoji")}}, {{cssxref("font-variant-caps")}}, {{cssxref("font-variant-ligatures")}}, {{cssxref("font-variant-numeric")}}, {{cssxref("font-variant-east-asian")}}, and {{cssxref("font-variant-alternates")}}.

The valid values for the `font-width` component are limited to keyword values: `normal`, `ultra-condensed`, `extra-condensed`, `condensed`, `semi-condensed`, `semi-expanded`, `expanded`, `extra-expanded`, `ultra-expanded`. The {{cssxref("font-width")}} longhand property also supports {{cssxref("percentage")}} values, which are not valid within the shorthand.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{CSSSyntax}}

## Examples

### Basic usage

This example defines the `font` for all {{htmlelement("p")}} elements. We set the `font-size` to `12px` and the `line-height` to `14px`, separating them with a forward slash (`/`). The declaration also sets the `font-family` to `sans-serif`.

```css
p {
  font: 12px / 14px sans-serif;
}
```

```html hidden
<p>
  This is a paragraph of sans-serif text. The font-size is small, at just 12px.
  If this text wraps, the line height is pretty tight at 14px, so this may be
  difficult to read.
</p>
```

{{ EmbedLiveSample('basic usage','100%', '100')}}

### Multiple properties

In this example, we set the `font-weight` to `bold`, the `font-style` to `italic`, the `font-size` to `large`, the `line-height` to `1.6`, and the `font-family` to `serif`.

```css
p {
  font: bold italic large / 1.6 serif;
}
```

```html hidden
<p>
  In this example, we set the font weight to bold, the font style to italic, the
  font size to large, the line height to 1.6, and the font family to serif.
</p>
```

{{ EmbedLiveSample(' Multiple properties','100%', '100')}}

### System font

This example demonstrates using the `font` property to set a system font.

#### CSS

We set the paragraph's font to have the same `font-family`, `line-height`, `font-size`, etc., as the status bar of the window, then we set the `line-height` to `1.6`.

```css
p {
  font: status-bar;
  line-height: 1.6;
}
```

#### HTML

Our HTML includes a paragraph ({{htmlelement("p")}}) containing a link ({{htmlelement("a")}}) with a convoluted [`href`](/en-US/docs/Web/HTML/Reference/Elements/a#href) attribute value. When you hover over or focus on the rendered link, your browser's status bar should display the value of this `href` attribute.

```html bad
<p>
  <a
    href="/%20The%20font%20should%20be%20the%20same%20
family%20and%20size%20and%20the%20text%20in%20the%20example."
    >Hover or focus this text. The font should be the same family and size and
    the text in your status bar.</a
  >
</p>
```

#### JavaScript

As the URL in our HTML link is not good practice, we include a script that prevents the document from redirecting to a non-existent page when the link is clicked.

```js
const a = document.querySelector("a");
a.addEventListener("click", function (e) {
  e.preventDefault();
  return false;
});
```

#### Result

{{ EmbedLiveSample('System font','100%', '100')}}

Hover or focus the link, then look at your status bar. The font should be the same family and size and the text in your status bar at the bottom of your browser window..

### Shorthand declaration creator

In this live demonstration, you can select different radio buttons to generate different shorthand values, while visualizing the effects of the shorthand declarations you create.

```html hidden
<p>
  Change the radio buttons below to see the generated shorthand and its effect.
</p>
<form action="createShortHand()">
  <div class="cf">
    <div class="setPropCont">
      font-style<br />
      <input
        type="radio"
        id="font-style-none"
        name="font_style"
        checked
        value="" />
      <label for="font-style-none">omit value</label><br />
      <input
        type="radio"
        id="font-style-normal"
        name="font_style"
        value="normal" />
      <label for="font-style-normal">normal</label><br />
      <input
        type="radio"
        id="font-style-italic"
        name="font_style"
        value="italic" />
      <label for="font-style-italic">italic</label><br />
      <input
        type="radio"
        id="font-style-oblique"
        name="font_style"
        value="oblique" />
      <label for="font-style-oblique">oblique</label>
    </div>

    <div class="setPropCont">
      font-variant<br />
      <input
        type="radio"
        id="font-variant-none"
        name="font_variant"
        checked
        value=" " />
      <label for="font-variant-none">omit value</label><br />
      <input
        type="radio"
        id="font-variant-normal"
        name="font_variant"
        value="normal" />
      <label for="font-variant-normal">normal</label><br />
      <input
        type="radio"
        id="font-variant-small-caps"
        name="font_variant"
        value="small-caps" />
      <label for="font-variant-small-caps">small-caps</label>
    </div>

    <div class="setPropCont">
      font-weight<br />
      <input type="radio" id="font-weight-none" name="font_weight" value="" />
      <label for="font-weight-none">omit value</label><br />
      <input
        type="radio"
        id="font-weight-normal"
        checked
        name="font_weight"
        value="400" />
      <label for="font-weight-normal">normal</label><br />
      <input
        type="radio"
        id="font-weight-bold"
        name="font_weight"
        value="700" />
      <label for="font-weight-bold">bold</label>
    </div>

    <div class="setPropCont">
      font-size<br />
      <input type="radio" id="font-size-12px" name="font_size" value="12px" />
      <label for="font-size-12px">12px</label><br />
      <input
        type="radio"
        id="font-size-16px"
        name="font_size"
        value="16px"
        checked />
      <label for="font-size-16px">16px</label><br />
      <input type="radio" id="font-size-24px" name="font_size" value="24px" />
      <label for="font-size-24px">24px</label>
    </div>

    <div class="setPropCont">
      line-height<br />
      <input
        type="radio"
        id="line-height-none"
        name="line_height"
        checked
        value="" />
      <label for="line-height-none">omit value</label><br />
      <input
        type="radio"
        id="line-height-1-2"
        name="line_height"
        value="/1.2" />
      <label for="line-height-1-2">1.2</label><br />
      <input type="radio" id="line-height-3" name="line_height" value="/3" />
      <label for="line-height-3">3</label>
    </div>
    <br />

    <div class="setPropCont fontfamily">
      font-family<br />
      <input
        type="radio"
        id="font-family-courier"
        name="font_family"
        checked
        value="courier" />
      <label for="font-family-courier">courier</label><br />
      <input
        type="radio"
        id="font-family-serif"
        name="font_family"
        value="serif" />
      <label for="font-family-serif">serif</label><br />
      <input
        type="radio"
        id="font-family-sans-serif"
        name="font_family"
        value="sans-serif" />
      <label for="font-family-sans-serif">sans-serif</label><br />
      <input
        type="radio"
        id="font-family-arial"
        name="font_family"
        value="arial" />
      <label for="font-family-arial">Arial</label><br />
      <input
        type="radio"
        id="font-family-monospace"
        name="font_family"
        value="monospace" />
      <label for="font-family-monospace">monospace</label><br />
      <input
        type="radio"
        id="font-family-cursive"
        name="font_family"
        value="cursive" />
      <label for="font-family-cursive">cursive</label><br />
      <input
        type="radio"
        id="font-family-fantasy"
        name="font_family"
        value="fantasy" />
      <label for="font-family-fantasy">fantasy</label><br />
      <input
        type="radio"
        id="font-family-system-ui"
        name="font_family"
        value="system-ui" />
      <label for="font-family-system-ui">system-ui</label><br />
    </div>
  </div>

  <div class="cf propInputs">
    <div class="propInputCont tar">font :</div>
    <div class="propInputCont">
      <input type="text" class="curCss" id="input_font_style" /><br />
      font-style <br />
      optional
    </div>
    <div class="propInputCont">
      <input type="text" class="curCss" id="input_font_variant" /> <br />
      font-variant <br />
      optional
    </div>
    <div class="propInputCont">
      <input type="text" class="curCss" id="input_font_weight" /> <br />
      font-weight <br />
      optional
    </div>
    <div class="propInputCont">
      <input type="text" class="curCss mandatory" id="input_font_size" /> <br />
      font-size <br />
      mandatory
    </div>
    <div class="propInputCont">
      <input type="text" class="curCss" id="input_line_height" /> <br />
      line-height <br />
      optional
    </div>
    <div class="propInputCont">
      <input type="text" class="curCss mandatory" id="input_font_family" />
      <br />
      font-family <br />
      mandatory
    </div>
  </div>
</form>

<div class="fontShortHand">
  This is some sample text.<br />
  This is some more sample text.
</div>
```

```css hidden
body,
input {
  font: 14px "Arial";
  overflow: hidden;
}

.propInputCont {
  float: left;
  text-align: center;
  margin-right: 5px;
  width: 80px;
}

.setPropCont {
  float: left;
  margin-right: 5px;
  width: 120px;
}

.propInputs,
.setPropCont {
  margin-bottom: 1em;
}

.curCss {
  border: none;
  border-bottom: 1px solid black;
  text-align: center;
  width: 80px;
}

.mandatory {
  border-bottom-color: red;
}

.cf::before,
.cf::after {
  content: " ";
  display: table;
}

.cf::after {
  clear: both;
}

.tar {
  width: 40px;
  text-align: right;
}
.fontfamily {
  display: inline-block;
}
```

```js hidden
const textAreas = document.getElementsByClassName("curCss");

function getProperties() {
  return (
    `${getCheckedValue("font_style")} ` +
    `${getCheckedValue("font_variant")} ` +
    `${getCheckedValue("font_weight")} ` +
    `${getCheckedValue("font_size")}` +
    `${getCheckedValue("line_height")} ` +
    `${getCheckedValue("font_family")}`
  );
}

function getCheckedValue(radioName) {
  const radios = document.forms[0].elements[radioName];
  for (const radio of radios) {
    if (radio.checked) {
      const curElemName = `input_${radioName}`;
      const curElem = document.getElementById(curElemName);
      curElem.value = radio.value;

      return radio.value;
    }
  }
}

function setCss() {
  injectCss(getProperties());
}

function injectCss(cssFragment) {
  const old = document.body.getElementsByTagName("style");
  if (old.length > 1) {
    old[1].parentElement.removeChild(old[1]);
  }
  css = document.createElement("style");
  css.textContent = `.fontShortHand{font: ${cssFragment}}`;
  document.body.appendChild(css);
}

setCss();

document.querySelectorAll("input[type='radio']").forEach((el) => {
  el.addEventListener("change", setCss);
});
```

{{ EmbedLiveSample('Shorthand declaration creator','100%', '500px')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("font-style")}}
- {{cssxref("font-weight")}}
- [System font stack](https://css-tricks.com/snippets/css/system-font-stack/) on CSS-Tricks (2017)
