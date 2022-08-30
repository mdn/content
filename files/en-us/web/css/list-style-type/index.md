---
title: list-style-type
slug: Web/CSS/list-style-type
tags:
  - CSS
  - CSS Lists
  - CSS Property
  - Reference
  - recipe:css-property
browser-compat: css.properties.list-style-type
---
{{CSSRef}}

The **`list-style-type`** [CSS](/en-US/docs/Web/CSS) property sets the marker (such as a disc, character, or custom counter style) of a list item element.

{{EmbedInteractiveExample("pages/css/list-style-type.html")}}

The [color](/en-US/docs/Web/CSS/color_value) of the marker will be the same as the computed color of the element it applies to.

Only a few elements ({{HTMLElement("li")}} and {{HTMLElement("summary")}}) have a default value of `display: list-item`. However, the `list-style-type` property may be applied to any element whose {{cssxref("display")}} value is set to `list-item`. Moreover, because this property is inherited, it can be set on a parent element (commonly {{HTMLElement("ol")}} or {{HTMLElement("ul")}}) to make it apply to all list items.

## Syntax

```css
/* Partial list of types */
list-style-type: disc;
list-style-type: circle;
list-style-type: square;
list-style-type: decimal;
list-style-type: georgian;
list-style-type: trad-chinese-informal;
list-style-type: kannada;

/* <string> value */
list-style-type: '-';

/* Identifier matching an @counter-style rule */
list-style-type: custom-counter-style;

/* Keyword value */
list-style-type: none;

/* Global values */
list-style-type: inherit;
list-style-type: initial;
list-style-type: revert;
list-style-type: revert-layer;
list-style-type: unset;
```

The `list-style-type` property may be defined as any one of:

- a `<custom-ident>` value
- a `symbols()` value
- a `<string>` value
- the keyword `none`.

Note that:

- Some types require a suitable font installed to display as expected.
- The `cjk-ideographic` is identical to `trad-chinese-informal`; it exists for legacy reasons.

### Values

- {{cssxref("custom-ident", "&lt;custom-ident&gt;")}}
  - : A identifier matching the value of a {{cssxref("@counter-style")}} or one of the predefined styles:
- {{cssxref("symbols", "symbols()")}}
  - : Defines an anonymous style of the list.
- {{cssxref("&lt;string&gt;")}}
  - : The specified string will be used as the item's marker.
- `none`
  - : No item marker is shown.
- `disc`
  - : A filled circle (default value).
- `circle`
  - : A hollow circle.
- `square`
  - : A filled square.
- `decimal`
  - : Decimal numbers, beginning with 1.
- `cjk-decimal`
  - : Han decimal numbers.
- `decimal-leading-zero`
  - : Decimal numbers, padded by initial zeros.
- `lower-roman`
  - : Lowercase roman numerals.
- `upper-roman`
  - : Uppercase roman numerals.
- `lower-greek`
  - : Lowercase classical Greek.
- `lower-alpha`, `lower-latin`
  - : Lowercase ASCII letters.
- `upper-alpha`, `upper-latin`
  - : Uppercase ASCII letters.
- `arabic-indic`, `-moz-arabic-indic`
  - : Arabic-Indic numbers.
- `armenian`
  - : Traditional Armenian numbering.
- `bengali`, `-moz-bengali`
  - : Bengali numbering.
- `cambodian`/`khmer`
  - : Cambodian/Khmer numbering.
- `cjk-earthly-branch`, `-moz-cjk-earthly-branch`
  - : Han "Earthly Branch" ordinals.
- `cjk-heavenly-stem`, `-moz-cjk-heavenly-stem`
  - : Han "Heavenly Stem" ordinals.
- `cjk-ideographic`
  - : Identical to `trad-chinese-informal`.
- `devanagari`, `-moz-devanagari`
  - : Devanagari numbering.
- `ethiopic-numeric`
  - : Ethiopic numbering.
- `georgian`
  - : Traditional Georgian numbering.
- `gujarati`, `-moz-gujarati`
  - : Gujarati numbering.
- `gurmukhi`, `-moz-gurmukhi`
  - : Gurmukhi numbering.
- `hebrew`
  - : Traditional Hebrew numbering
- `hiragana`
  - : Dictionary-order hiragana lettering.
- `hiragana-iroha`
  - : [Iroha-order](https://en.wikipedia.org/wiki/Iroha) hiragana lettering
- `japanese-formal`
  - : Japanese formal numbering to be used in legal or financial documents. The kanjis are designed so that they can't be modified to look like another correct one.
- `japanese-informal`
  - : Japanese informal numbering.
- `kannada`, `-moz-kannada`
  - : Kannada numbering.
- `katakana`
  - : Dictionary-order katakana lettering
- `katakana-iroha`
  - : [Iroha-order](https://en.wikipedia.org/wiki/Iroha) katakana lettering
- `korean-hangul-formal`
  - : Korean hangul numbering.
- `korean-hanja-formal`
  - : Formal Korean Han numbering.
- `korean-hanja-informal`
  - : Korean hanja numbering.
- `lao`, `-moz-lao`
  - : Laotian numbering.
- `lower-armenian`
  - : Lowercase Armenian numbering.
- `malayalam`, `-moz-malayalam`
  - : Malayalam numbering.
- `mongolian`
  - : Mongolian numbering.
- `myanmar`, `-moz-myanmar`
  - : Myanmar (Burmese) numbering.
- `oriya`, `-moz-oriya`
  - : Oriya numbering.
- `persian`, `-moz-persian`
  - : Persian numbering
- `simp-chinese-formal`
  - : Simplified Chinese formal numbering.
- `simp-chinese-informal`
  - : Simplified Chinese informal numbering.
- `tamil`, `-moz-tamil`
  - : Tamil numbering.
- `telugu`, `-moz-telugu`
  - : Telugu numbering.
- `thai`, `-moz-thai`
  - : Thai numbering.
- `tibetan`
  - : Tibetan numbering.
- `trad-chinese-formal`
  - : Traditional Chinese formal numbering.
- `trad-chinese-informal`
  - : Traditional Chinese informal numbering.
- `upper-armenian`
  - : Traditional uppercase Armenian numbering.
- `disclosure-open`
  - : Symbol indicating that a disclosure widget such as {{HTMLElement("details")}} is opened.
- `disclosure-closed`
  - : Symbol indicating that a disclosure widget, like {{HTMLElement("details")}} is closed.

### Non-standard extensions

A few more predefined types are provided by Mozilla (Firefox), Blink (Chrome and Opera) and WebKit (Safari) to support list types in other languages. See the compatibility table to check which browsers supports which extension.

- `-moz-ethiopic-halehame`
- `-moz-ethiopic-halehame-am`
- `ethiopic-halehame-ti-er`, `-moz-ethiopic-halehame-ti-er`
- `ethiopic-halehame-ti-et`, `-moz-ethiopic-halehame-ti-et`
- `hangul`, `-moz-hangul`
- `hangul-consonant`, `-moz-hangul-consonant`
- `urdu`, `-moz-urdu`

## Accessibility concerns

The [VoiceOver](https://help.apple.com/voiceover/info/guide/) screen reader has an issue where unordered lists with a `list-style-type` value of `none` applied to them will not be announced as a list. To address this, add a [zero-width space](https://en.wikipedia.org/wiki/Zero-width_space) as [pseudo content](/en-US/docs/Web/CSS/content) before each list item to ensure the list is announced properly. This ensures the design is unaffected by the bug fix and that list items are not improperly described.

```css
ul {
  list-style: none;
}

ul li::before {
  content: "\200B";
}
```

- [VoiceOver and list-style-type: none](https://gerardkcohen.me/writing/2017/voiceover-list-style-type.html)
- [MDN Understanding WCAG, Guideline 1.3 explanations](/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.3_%E2%80%94_Create_content_that_can_be_presented_in_different_ways)
- [Understanding Success Criterion 1.3.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html)

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting list item markers

#### HTML

```html
List 1
<ol class="normal">
  <li>Hello</li>
  <li>World</li>
  <li>What's up?</li>
</ol>

List 2
<ol class="shortcut">
  <li>Looks</li>
  <li>Like</li>
  <li>The</li>
  <li>Same</li>
</ol>
```

#### CSS

```css
ol.normal {
  list-style-type: upper-alpha;
}

/* or use the shortcut "list-style": */
ol.shortcut {
  list-style: upper-alpha;
}
```

#### Result

{{EmbedLiveSample("Setting_list_item_markers","200","300")}}

### All list style types

#### HTML

```html
<ol>
  <li>Apollo</li>
  <li>Hubble</li>
  <li>Chandra</li>
  <li>Cassini-Huygens</li>
  <li>Spitzer</li>
</ol>

<h2>Choose a list style type:</h2>

<div class="container">

  <label for="disc">
    <input type="radio" id="disc" name="type" value="disc">disc
  </label>

  <label for="circle">
    <input type="radio" id="circle" name="type" value="circle">circle
  </label>

  <label for="square">
    <input type="radio" id="square" name="type" value="square">square
  </label>

  <label for="decimal">
    <input type="radio" id="decimal" name="type" value="decimal">decimal
  </label>

  <label for="cjk-decimal">
    <input type="radio" id="cjk-decimal" name="type" value="cjk-decimal">cjk-decimal
  </label>

  <label for="decimal-leading-zero">
    <input type="radio" id="decimal-leading-zero" name="type" value="decimal-leading-zero">decimal-leading-zero
  </label>

  <label for="lower-roman">
    <input type="radio" id="lower-roman" name="type" value="lower-roman">lower-roman
  </label>

  <label for="upper-roman">
    <input type="radio" id="upper-roman" name="type" value="upper-roman">upper-roman
  </label>

  <label for="lower-greek">
    <input type="radio" id="lower-greek" name="type" value="lower-greek">lower-greek
  </label>

  <label for="lower-alpha">
    <input type="radio" id="lower-alpha" name="type" value="lower-alpha">lower-alpha, lower-latin
  </label>

  <label for="upper-alpha">
    <input type="radio" id="upper-alpha" name="type" value="upper-alpha">upper-alpha, upper-latin
  </label>

  <label for="arabic-indic">
    <input type="radio" id="arabic-indic" name="type" value="arabic-indic">arabic-indic
  </label>

  <label for="armenian">
    <input type="radio" id="armenian" name="type" value="armenian">armenian
  </label>

  <label for="bengali">
    <input type="radio" id="bengali" name="type" value="bengali">bengali
  </label>

  <label for="cambodian">
    <input type="radio" id="cambodian" name="type" value="cambodian">cambodian
  </label>

  <label for="cjk-earthly-branch">
    <input type="radio" id="cjk-earthly-branch" name="type" value="cjk-earthly-branch">cjk-earthly-branch
  </label>

  <label for="cjk-heavenly-stem">
    <input type="radio" id="cjk-heavenly-stem" name="type" value="cjk-heavenly-stem">cjk-heavenly-stem
  </label>

  <label for="cjk-ideographic">
    <input type="radio" id="cjk-ideographic" name="type" value="cjk-ideographic">cjk-ideographic
  </label>

  <label for="devanagari">
    <input type="radio" id="devanagari" name="type" value="devanagari">devanagari
  </label>

  <label for="ethiopic-numeric">
    <input type="radio" id="ethiopic-numeric" name="type" value="ethiopic-numeric">ethiopic-numeric
  </label>

  <label for="georgian">
    <input type="radio" id="georgian" name="type" value="georgian">georgian
  </label>

  <label for="gujarati">
    <input type="radio" id="gujarati" name="type" value="gujarati">gujarati
  </label>

  <label for="gurmukhi">
    <input type="radio" id="gurmukhi" name="type" value="gurmukhi">gurmukhi
  </label>

  <label for="hebrew">
    <input type="radio" id="hebrew" name="type" value="hebrew">hebrew
  </label>

  <label for="hiragana">
    <input type="radio" id="hiragana" name="type" value="hiragana">hiragana
  </label>

  <label for="hiragana-iroha">
    <input type="radio" id="hiragana-iroha" name="type" value="hiragana-iroha">hiragana-iroha
  </label>

  <label for="japanese-formal">
    <input type="radio" id="japanese-formal" name="type" value="japanese-formal">japanese-formal
  </label>

  <label for="japanese-informal">
    <input type="radio" id="japanese-informal" name="type" value="japanese-informal">japanese-informal
  </label>

  <label for="kannada">
    <input type="radio" id="kannada" name="type" value="kannada">kannada
  </label>

  <label for="katakana">
    <input type="radio" id="katakana" name="type" value="katakana">katakana
  </label>

  <label for="katakana-iroha">
    <input type="radio" id="katakana-iroha" name="type" value="katakana-iroha">katakana-iroha
  </label>

  <label for="khmer">
    <input type="radio" id="khmer" name="type" value="khmer">khmer
  </label>

  <label for="korean-hangul-formal">
    <input type="radio" id="korean-hangul-formal" name="type" value="korean-hangul-formal">korean-hangul-formal
  </label>

  <label for="korean-hanja-formal">
    <input type="radio" id="korean-hanja-formal" name="type" value="korean-hanja-formal">korean-hanja-formal
  </label>

  <label for="korean-hanja-informal">
    <input type="radio" id="korean-hanja-informal" name="type" value="korean-hanja-informal">korean-hanja-informal
  </label>

  <label for="lao">
    <input type="radio" id="lao" name="type" value="lao">lao
  </label>

  <label for="lower-armenian">
    <input type="radio" id="lower-armenian" name="type" value="lower-armenian">lower-armenian
  </label>

  <label for="malayalam">
    <input type="radio" id="malayalam" name="type" value="malayalam">malayalam
  </label>

  <label for="mongolian">
    <input type="radio" id="mongolian" name="type" value="mongolian">mongolian
  </label>

  <label for="myanmar">
    <input type="radio" id="myanmar" name="type" value="myanmar">myanmar
  </label>

  <label for="oriya">
    <input type="radio" id="oriya" name="type" value="oriya">oriya
  </label>

  <label for="persian">
    <input type="radio" id="persian" name="type" value="persian">persian
  </label>

  <label for="simp-chinese-formal">
    <input type="radio" id="simp-chinese-formal" name="type" value="simp-chinese-formal">simp-chinese-formal
  </label>

  <label for="simp-chinese-informal">
    <input type="radio" id="simp-chinese-informal" name="type" value="simp-chinese-informal">simp-chinese-informal
  </label>

  <label for="tamil">
    <input type="radio" id="tamil" name="type" value="tamil">tamil
  </label>

  <label for="telugu">
    <input type="radio" id="telugu" name="type" value="telugu">telugu
  </label>

  <label for="thai">
    <input type="radio" id="thai" name="type" value="thai">thai
  </label>

  <label for="tibetan">
    <input type="radio" id="tibetan" name="type" value="tibetan">tibetan
  </label>

  <label for="trad-chinese-formal">
    <input type="radio" id="trad-chinese-formal" name="type" value="trad-chinese-formal">trad-chinese-formal
  </label>

  <label for="trad-chinese-informal">
    <input type="radio" id="trad-chinese-informal" name="type" value="trad-chinese-informal">trad-chinese-informal
  </label>

  <label for="upper-armenian">
    <input type="radio" id="upper-armenian" name="type" value="upper-armenian">upper-armenian
  </label>

  <label for="disclosure-open">
    <input type="radio" id="disclosure-open" name="type" value="disclosure-open">disclosure-open
  </label>

  <label for="disclosure-closed">
    <input type="radio" id="disclosure-closed" name="type" value="disclosure-closed">disclosure-closed
  </label>

  <label for="-moz-ethiopic-halehame">
    <input type="radio" id="-moz-ethiopic-halehame" name="type" value="-moz-ethiopic-halehame">-moz-ethiopic-halehame
  </label>

  <label for="-moz-ethiopic-halehame-am">
    <input type="radio" id="-moz-ethiopic-halehame-am" name="type" value="-moz-ethiopic-halehame-am">-moz-ethiopic-halehame-am
  </label>

  <label for="ethiopic-halehame-ti-er">
    <input type="radio" id="ethiopic-halehame-ti-er" name="type" value="ethiopic-halehame-ti-er">ethiopic-halehame-ti-er
  </label>

  <label for="ethiopic-halehame-ti-et">
    <input type="radio" id="ethiopic-halehame-ti-et" name="type" value="ethiopic-halehame-ti-et">ethiopic-halehame-ti-et
  </label>

  <label for="hangul">
    <input type="radio" id="hangul" name="type" value="hangul">hangul
  </label>

  <label for="hangul-consonant">
    <input type="radio" id="hangul-consonant" name="type" value="hangul-consonant">hangul-consonant
  </label>

  <label for="urdu">
    <input type="radio" id="urdu" name="type" value="urdu">urdu
  </label>

  <label for="-moz-ethiopic-halehame-ti-er">
    <input type="radio" id="-moz-ethiopic-halehame-ti-er" name="type" value="-moz-ethiopic-halehame-ti-er">-moz-ethiopic-halehame-ti-er
  </label>

  <label for="-moz-ethiopic-halehame-ti-et">
    <input type="radio" id="-moz-ethiopic-halehame-ti-et" name="type" value="-moz-ethiopic-halehame-ti-et">-moz-ethiopic-halehame-ti-et
  </label>

  <label for="-moz-hangul">
    <input type="radio" id="-moz-hangul" name="type" value="-moz-hangul">-moz-hangul
  </label>

  <label for="-moz-hangul-consonant">
    <input type="radio" id="-moz-hangul-consonant" name="type" value="-moz-hangul-consonant">-moz-hangul-consonant
  </label>

  <label for="-moz-urdu">
    <input type="radio" id="-moz-urdu" name="type" value="-moz-urdu">-moz-urdu
  </label>

</div>
```

#### CSS

```css
ol {
  font-size: 1.2rem;
}

.container {
  column-count: 3;
}

label {
  display: block;
}

input {
  margin: .4rem;
}
```

#### JavaScript

```js
const container = document.querySelector(".container");
container.addEventListener("change", (event) => {
  const list = document.querySelector("ol");
  list.setAttribute("style", `list-style-type: ${event.target.value}`);
});
```

#### Result

{{EmbedLiveSample("All_list_style_types", "600", "800")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{Cssxref("list-style")}}, {{Cssxref("list-style-image")}}, {{Cssxref("list-style-position")}}
