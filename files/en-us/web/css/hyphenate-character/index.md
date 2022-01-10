---
title: hyphenate-character
slug: Web/CSS/hyphenate-character
tags:
  - CSS
  - CSS Property
  - Reference
browser-compat: css.properties.hyphenate-character
---
{{CSSRef}}

The **`hyphenate-character`** [CSS](/en-US/docs/Web/CSS) property sets the character (or string) used at the end of a line before a hyphenation break.

<!--

{{EmbedInteractiveExample("pages/css/text-overflow.html")}}

-->

Both automatic and soft hyphens are displayed according to the specified hyphenate-character value.


## Syntax

The value either sets the string to use instead of a "hyphen", or indicates that the user agent should select an appropriate string based on the current typographic conventions.

```css
hyphenate-character: auto;
hyphenate-character: <string>;
```

### Values

- `auto`
  - : The user-agent selects an appropriate string based on the content language’s typographic conventions.
- `<string>`
  - : The {{cssxref("&lt;string&gt;")}} to use at the end of the line before a hyphenation break.
    The user agent may truncate this value if too many characters are used.


## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Examples

EXPERIMENT!

#### HTML

```html
<div id="examplecontainer">
  <p id="nochar" lang="en">nochar Extremely long lines. Superc&shy;alifragilisticexpialidocious </p>
  <p id="breakauto" lang="en">auto Extremely long lines. Superc&shy;alifragilisticexpialidocious </p>
  <p id="breakequals" lang="en">equals Extremely long lines. Superc&shy;alifragilisticexpialidocious</p>
  <p id="webauto" lang="en">webauto Extremely long lines. Superc&shy;alifragilisticexpialidocious </p>
  <p id="webequals" lang="en">webequalsExtremely long lines.Superc&shy;alifragilisticexpialidocious </p> 
</div>
```

#### CSS

```css
#examplecontainer  {
  width: 75px;
  border: 1px solid black;
  hyphens: auto;
 }
#nochar {
  /* hyphenate-character: "="; */
}
#breakauto {
  hyphenate-character: auto;
}
#breakequals {
  hyphenate-character: "=";

}
#webequals {
  -webkit-hyphenate-character: "᐀";
}
#webauto {
  -webkit-hyphenate-character: auto;
}

```

#### Result

{{EmbedLiveSample("Examples", "100%", 490)}}


## Specifications

{{Specifications}}


## Browser compatibility

{{Compat}}

## See also

- Related CSS properties: {{cssxref("hyphens")}}, {{cssxref("overflow-wrap")}}.
