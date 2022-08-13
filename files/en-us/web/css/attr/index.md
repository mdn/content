---
title: attr()
slug: Web/CSS/attr
tags:
  - CSS
  - CSS Function
  - Function
  - Layout
  - Reference
  - Web
  - attr
browser-compat: css.types.attr
---
{{CSSRef}}

> **Note:** The `attr()` function can be used with any CSS property, but support for properties other than {{CSSxRef("content")}} is experimental, and support for the type-or-unit parameter is sparse.

The **`attr()`** [CSS](/en-US/docs/Web/CSS) [function](/en-US/docs/Web/CSS/CSS_Functions) is used to retrieve the value of an attribute of the selected element and use it in the stylesheet. It can also be used on [pseudo-elements](/en-US/docs/Web/CSS/Pseudo-elements), in which case the value of the attribute on the pseudo-element's originating element is returned.

```css
/* Simple usage */
attr(data-count);
attr(title);

/* With type */
attr(src url);
attr(data-count number);
attr(data-width px);

/* With fallback */
attr(data-count number, 0);
attr(src url, "");
attr(data-width px, inherit);
attr(data-something, "default");
```

## Syntax

### Values

- `attribute-name`
  - : The name of an attribute on the HTML element referenced in the CSS.
- `<type-or-unit>` {{Experimental_Inline}}

  - : A keyword representing either the type of the attribute's value, or its unit, as in HTML some attributes have implicit units. If the use of `<type-or-unit>` as a value for the given attribute is invalid, the `attr()` expression will be invalid too. If omitted, it defaults to `string`. The list of valid values are:

    - `string`

      - : The attribute value is treated as a CSS {{CSSxRef("&lt;string&gt;")}}. It is NOT reparsed, and in particular the characters are used as-is instead of CSS escapes being turned into different characters.

        Default value: an empty string.

    - `color` {{Experimental_Inline}}

      - : The attribute value is parsed as a hash (3- or 6-value hash) or a keyword. It must be a valid CSS {{CSSxRef("&lt;string&gt;")}} value. Leading and trailing spaces are stripped.

        Default value: `currentcolor`.

    - `url` {{Experimental_Inline}}

      - : The attribute value is parsed as a string that is used inside a CSS `url()` function.
        Relative URL are resolved relatively to the original document, not relatively to the style sheet.
        Leading and trailing spaces are stripped.

        Default value: the URL `about:invalid` that points to a non-existent document with a generic error condition.

    - `integer` {{Experimental_Inline}}

      - : The attribute value is parsed as a CSS {{CSSxRef("&lt;integer&gt;")}}. If it is not valid, that is not an integer or out of the range accepted by the CSS property, the default value is used.
        Leading and trailing spaces are stripped.

        Default value: `0`, or, if `0` is not a valid value for the property, the property's minimum value.

    - `number` {{Experimental_Inline}}

      - : The attribute value is parsed as a CSS {{CSSxRef("&lt;number&gt;")}}. If it is not valid, that is not a number or out of the range accepted by the CSS property, the default value is used.
        Leading and trailing spaces are stripped.

        Default value: `0`, or, if `0` is not a valid value for the property, the property's minimum value.

    - `length` {{Experimental_Inline}}

      - : The attribute value is parsed as a CSS {{CSSxRef("&lt;length&gt;")}} dimension, that is including the unit (e.g. `12.5em`). If it is not valid, that is not a length or out of the range accepted by the CSS property, the default value is used.
        If the given unit is a relative length, `attr()` computes it to an absolute length.
        Leading and trailing spaces are stripped.

        Default value: `0`, or, if `0` is not a valid value for the property, the property's minimum value.

    - `em`, `ex`, `px`, `rem`, `vw`, `vh`, `vmin`, `vmax`, `mm`, `cm`, `in`, `pt`, or `pc` {{Experimental_Inline}}

      - : The attribute value is parsed as a CSS {{CSSxRef("&lt;number&gt;")}}, that is without the unit (e.g. `12.5`), and interpreted as a {{CSSxRef("&lt;length&gt;")}} with the specified unit. If it is not valid, that is not a number or out of the range accepted by the CSS property, the default value is used.
        If the given unit is a relative length, `attr()` computes it to an absolute length.
        Leading and trailing spaces are stripped.

        Default value: `0`, or, if `0` is not a valid value for the property, the property's minimum value.

    - `angle` {{Experimental_Inline}}

      - : The attribute value is parsed as a CSS {{CSSxRef("&lt;angle&gt;")}} dimension, that is including the unit (e.g. `30.5deg`). If it is not valid, that is not an angle or out of the range accepted by the CSS property, the default value is used.
        Leading and trailing spaces are stripped.

        Default value: `0deg`, or, if `0deg` is not a valid value for the property, the property's minimum value.

    - `deg`, `grad`, `rad` {{Experimental_Inline}}

      - : The attribute value is parsed as a CSS {{CSSxRef("&lt;number&gt;")}}, that is without the unit (e.g. `12.5`), and interpreted as an {{CSSxRef("&lt;angle&gt;")}} with the specified unit. If it is not valid, that is not a number or out of the range accepted by the CSS property, the default value is used.
        Leading and trailing spaces are stripped.

        Default value: `0deg`, or, if `0deg` is not a valid value for the property, the property's minimum value.

    - `time` {{Experimental_Inline}}

      - : The attribute value is parsed as a CSS {{CSSxRef("&lt;time&gt;")}} dimension, that is including the unit (e.g. `30.5ms`). If it is not valid, that is not a time or out of the range accepted by the CSS property, the default value is used.
        Leading and trailing spaces are stripped.

        Default value: `0s`, or, if `0s` is not a valid value for the property, the property's minimum value.

    - `s`, `ms` {{Experimental_Inline}}

      - : The attribute value is parsed as a CSS {{CSSxRef("&lt;number&gt;")}}, that is without the unit (e.g. `12.5`), and interpreted as an {{CSSxRef("&lt;time&gt;")}} with the specified unit. If it is not valid, that is not a number or out of the range accepted by the CSS property, the default value is used.
        Leading and trailing spaces are stripped.

        Default value: `0s`, or, if `0s` is not a valid value for the property, the property's minimum value.

    - `frequency` {{Experimental_Inline}}

      - : The attribute value is parsed as a CSS {{CSSxRef("&lt;frequency&gt;")}} dimension, that is including the unit (e.g. `30.5kHz`). If it is not valid, that is not a frequency or out of the range accepted by the CSS property, the default value is used.

        Default value: `0Hz`, or, if `0Hz` is not a valid value for the property, the property's minimum value.

    - `Hz`, `kHz` {{Experimental_Inline}}

      - : The attribute value is parsed as a CSS {{CSSxRef("&lt;number&gt;")}}, that is without the unit (e.g. `12.5`), and interpreted as a {{CSSxRef("&lt;frequency&gt;")}} with the specified unit. If it is not valid, that is not a number or out of the range accepted by the CSS property, the default value is used.
        Leading and trailing spaces are stripped.

        Default value: `0Hz`, or, if `0Hz` is not a valid value for the property, the property's minimum value.

    - `%` {{Experimental_Inline}}

      - : The attribute value is parsed as a CSS {{CSSxRef("&lt;number&gt;")}}, that is without the unit (e.g. `12.5`), and interpreted as a {{CSSxRef("&lt;percentage&gt;")}}. If it is not valid, that is not a number or out of the range accepted by the CSS property, the default value is used.
        If the given value is used as a length, `attr()` computes it to an absolute length.
        Leading and trailing spaces are stripped.

        Default value: `0%`, or, if `0%` is not a valid value for the property, the property's minimum value.

- `<fallback>` {{Experimental_Inline}}
  - : The value to be used if the associated attribute is missing or contains an invalid value. If not set, CSS will use the default value defined for each `<type-or-unit>`.

### Formal syntax

{{CSSSyntax}}

## Examples

### content property

#### HTML

```html
<p data-foo="hello">world</p>
```

#### CSS

```css
[data-foo]::before {
  content: attr(data-foo) " ";
}
```

#### Result

{{EmbedLiveSample("content_property", "100%", 50)}}

### color value

{{SeeCompatTable}}

#### HTML

```html
<div class="background" data-background="lime">background expected to be red if your browser does not support advanced usage of attr()</div>
```

#### CSS

```css hidden
.background {
  height: 100vh;
}
```

```css
.background {
  background-color: red;
}

.background[data-background] {
  background-color: attr(data-background color, red);
}
```

#### Result

{{EmbedLiveSample("color_value", "100%", 50)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Attribute selectors](/en-US/docs/Web/CSS/Attribute_selectors)
- [HTML `data-*` attributes](/en-US/docs/Web/HTML/Global_attributes/data-*)
- [SVG `data-*` attributes](/en-US/docs/Web/SVG/Attribute/data-*)
