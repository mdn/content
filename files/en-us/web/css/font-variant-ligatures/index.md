---
title: font-variant-ligatures
slug: Web/CSS/font-variant-ligatures
page-type: css-property
browser-compat: css.properties.font-variant-ligatures
---

{{CSSRef}}

The **`font-variant-ligatures`** CSS property controls which {{Glossary("ligature", "ligatures")}} and {{Glossary("contextual forms")}} are used in textual content of the elements it applies to. This leads to more harmonized forms in the resulting text.

{{EmbedInteractiveExample("pages/css/font-variant-ligatures.html")}}

## Syntax

```css
/* Keyword values */
font-variant-ligatures: normal;
font-variant-ligatures: none;
font-variant-ligatures: common-ligatures; /* <common-lig-values> */
font-variant-ligatures: no-common-ligatures; /* <common-lig-values> */
font-variant-ligatures: discretionary-ligatures; /* <discretionary-lig-values> */
font-variant-ligatures: no-discretionary-ligatures; /* <discretionary-lig-values> */
font-variant-ligatures: historical-ligatures; /* <historical-lig-values> */
font-variant-ligatures: no-historical-ligatures; /* <historical-lig-values> */
font-variant-ligatures: contextual; /* <contextual-alt-values> */
font-variant-ligatures: no-contextual; /* <contextual-alt-values> */

/* Global values */
font-variant-ligatures: inherit;
font-variant-ligatures: initial;
font-variant-ligatures: revert;
font-variant-ligatures: revert-layer;
font-variant-ligatures: unset;
```

The `font-variant-ligatures` property is specified as one of the keyword values listed below.

### Values

- `normal`
  - : This keyword leads to the activation of the usual ligatures and contextual forms needed for correct rendering. The ligatures and forms activated depend on the font, language and kind of script. This is the default value.
- `none`
  - : This keyword specifies that all ligatures and contextual forms are disabled, even common ones.
- _`<common-lig-values>`_

  - : These values control the most common ligatures, like for `fi`, `ffi`, `th` or similar. They correspond to the OpenType values `liga` and `clig`. Two values are possible:

    - `common-ligatures` activating these ligatures. Note that the keyword `normal` activates these ligatures.
    - `no-common-ligatures` deactivating these ligatures.

- _`<discretionary-lig-values>`_

  - : These values control specific ligatures, specific to the font and defined by the type designer. They correspond to the OpenType values `dlig`. Two values are possible:

    - `discretionary-ligatures` activating these ligatures.
    - `no-discretionary-ligatures` deactivating the ligatures. Note that the keyword `normal` usually deactivates these ligatures.

- _`<historical-lig-values>`_

  - : These values control the ligatures used historically, in old books, like the German tz digraph being displayed as ꜩ. They correspond to the OpenType values `hlig`. Two values are possible:

    - `historical-ligatures` activating these ligatures.
    - `no-historical-ligatures` deactivating the ligatures. Note that the keyword `normal` usually deactivates these ligatures.

- _`<contextual-alt-values>`_

  - : These values control whether letters adapt to their context—that is, whether they adapt to the surrounding letters. These values correspond to the OpenType values `calt`. Two values are possible:

    - `contextual` specifies that the contextual alternates are to be used. Note that the keyword `normal` usually activates these ligatures too.
    - `no-contextual` prevents their use.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting font ligatures and contextual forms

#### HTML

```html
<link href="//fonts.googleapis.com/css?family=Lora" rel="stylesheet" />
<p class="normal">
  normal<br />
  if fi ff tf ft jf fj
</p>
<p class="none">
  none<br />
  if fi ff tf ft jf fj
</p>
<p class="common-ligatures">
  common-ligatures<br />
  if fi ff tf ft jf fj
</p>
<p class="no-common-ligatures">
  no-common-ligatures<br />
  if fi ff tf ft jf fj
</p>
<p class="discretionary-ligatures">
  discretionary-ligatures<br />
  if fi ff tf ft jf fj
</p>
<p class="no-discretionary-ligatures">
  no-discretionary-ligatures<br />
  if fi ff tf ft jf fj
</p>
<p class="historical-ligatures">
  historical-ligatures<br />
  if fi ff tf ft jf fj
</p>
<p class="no-historical-ligatures">
  no-historical-ligatures<br />
  if fi ff tf ft jf fj
</p>
<p class="contextual">
  contextual<br />
  if fi ff tf ft jf fj
</p>
<p class="no-contextual">
  no-contextual<br />
  if fi ff tf ft jf fj
</p>
```

#### CSS

```css
p {
  font-family: Lora, serif;
}
.normal {
  font-variant-ligatures: normal;
}

.none {
  font-variant-ligatures: none;
}

.common-ligatures {
  font-variant-ligatures: common-ligatures;
}

.no-common-ligatures {
  font-variant-ligatures: no-common-ligatures;
}

.discretionary-ligatures {
  font-variant-ligatures: discretionary-ligatures;
}

.no-discretionary-ligatures {
  font-variant-ligatures: no-discretionary-ligatures;
}

.historical-ligatures {
  font-variant-ligatures: historical-ligatures;
}

.no-historical-ligatures {
  font-variant-ligatures: no-historical-ligatures;
}

.contextual {
  font-variant-ligatures: contextual;
}

.no-contextual {
  font-variant-ligatures: no-contextual;
}
```

#### Result

{{ EmbedLiveSample('Setting font ligatures and contextual forms', '', '700') }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`font-variant`](/en-US/docs/Web/CSS/font-variant)
- [`font-variant-caps`](/en-US/docs/Web/CSS/font-variant-caps)
- [`font-variant-emoji`](/en-US/docs/Web/CSS/font-variant-emoji)
- [`font-variant-east-asian`](/en-US/docs/Web/CSS/font-variant-east-asian)
- [`font-variant-numeric`](/en-US/docs/Web/CSS/font-variant-numeric)
- [`font-variant-position`](/en-US/docs/Web/CSS/font-variant-position)
- [CSS fonts module](/en-US/docs/Web/CSS/CSS_fonts)
