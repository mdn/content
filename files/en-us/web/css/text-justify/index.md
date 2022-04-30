---
title: text-justify
slug: Web/CSS/text-justify
tags:
  - CSS
  - CSS Property
  - CSS Text
  - Reference
  - recipe:css-property
  - text-justify
browser-compat: css.properties.text-justify
---
{{CSSRef}}

The **`text-justify`** CSS property sets what type of justification should be applied to text when {{cssxref("text-align")}}`: justify;` is set on an element.

## Syntax

```css
text-justify: none;
text-justify: auto;
text-justify: inter-word;
text-justify: inter-character;
text-justify: distribute; /* Deprecated value */

/* Global values */
text-justify: inherit;
text-justify: initial;
text-justify: revert;
text-justify: revert-layer;
text-justify: unset;
```

### Values

- `none`
  - : The text justification is turned off. This has the same effect as not setting {{cssxref("text-align")}} at all, although it is useful if you need to turn justification on and off for some reason.
- `auto`
  - : The browser chooses the best type of justification for the current situation based on a balance between performance and quality, but also on what is most appropriate for the language of the text (e.g., English, CJK languages, etc.). This is the default justification used if `text-justify` is not set at all.
- `inter-word`
  - : The text is justified by adding space between words (effectively varying {{cssxref("word-spacing")}}), which is most appropriate for languages that separate words using spaces, like English or Korean.
- `inter-character`
  - : The text is justified by adding space between characters (effectively varying {{cssxref("letter-spacing")}}), which is most appropriate for languages like Japanese.
- `distribute` {{deprecated_inline}}
  - : Exhibits the same behavior as `inter-character`; this value is kept for backwards compatibility.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Demonstration of the different values of text-justify

```html hidden
<p class="none"><code>text-justify: none</code> —<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ornare maximus vehicula. Duis nisi velit, dictum id mauris vitae, lobortis pretium quam. Quisque sed nisi pulvinar, consequat justo id, feugiat leo. Cras eu elementum dui.</p>
<p class="auto"><code>text-justify: auto</code> —<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ornare maximus vehicula. Duis nisi velit, dictum id mauris vitae, lobortis pretium quam. Quisque sed nisi pulvinar, consequat justo id, feugiat leo. Cras eu elementum dui.</p>
<p class="dist"><code>text-justify: distribute</code> —<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ornare maximus vehicula. Duis nisi velit, dictum id mauris vitae, lobortis pretium quam. Quisque sed nisi pulvinar, consequat justo id, feugiat leo. Cras eu elementum dui.</p>
<p class="word"><code>text-justify: inter-word</code> —<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ornare maximus vehicula. Duis nisi velit, dictum id mauris vitae, lobortis pretium quam. Quisque sed nisi pulvinar, consequat justo id, feugiat leo. Cras eu elementum dui.</p>
<p class="char"><code>text-justify: inter-character</code> —<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ornare maximus vehicula. Duis nisi velit, dictum id mauris vitae, lobortis pretium quam. Quisque sed nisi pulvinar, consequat justo id, feugiat leo. Cras eu elementum dui.</p>
```

```css
p {
  font-size: 1.5em;
  border: 1px solid black;
  padding: 10px;
  width: 95%;
  margin: 10px auto;
  text-align: justify;
}

.none {
  text-justify: none;
}

.auto {
  text-justify: auto;
}

.dist {
  text-justify: distribute;
}

.word {
  text-justify: inter-word;
}

.char {
  text-justify: inter-character;
}
```

{{EmbedLiveSample("Examples","100%",400)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("text-align")}}
