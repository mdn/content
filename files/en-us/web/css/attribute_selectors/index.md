---
title: Attribute selectors
slug: Web/CSS/Attribute_selectors
page-type: css-selector
browser-compat: css.selectors.attribute
---

{{CSSRef}}

The CSS **attribute selector** matches elements based on the element having a given attribute explicitly set, with options for defining an attribute value or substring value match.

The case sensitivity of attribute names and values depends on the document language. In HTML, attribute names are case insensitive, as are spec-defined {{glossary("enumerated")}} values. The [case-insensitive HTML attribute values](https://html.spec.whatwg.org/multipage/semantics-other.html#case-sensitivity-of-selectors) are listed in the HTML spec. For these attributes, the attribute value in the selector is case-insensitive, regardless of whether the value is invalid or the attribute for the element on which it is set is invalid.

If the attribute value is case sensitive, like [`class`](/en-US/docs/Web/HTML/Global_attributes/class), [`id`](/en-US/docs/Web/HTML/Global_attributes/id), and [`data-*`](/en-US/docs/Web/HTML/Global_attributes/data-*) attributes, the attribute selector value match is case-sensitive. Attributes defined outside of the HTML specification, like [`role`](/en-US/docs/Web/Accessibility/ARIA/Roles) and [`aria-*`](/en-US/docs/Web/Accessibility/ARIA/Attributes) attributes, are also case-sensitive. Normally case-sensitive attribute selectors can be made case-insensitive with the inclusion of the case-insensitive modifier (`i`).

```css
/* <a> elements with a title attribute */
a[title] {
  color: purple;
}

/* <a> elements with an href matching "https://example.org" */
a[href="https://example.org"]
{
  color: green;
}

/* <a> elements with an href containing "example" */
a[href*="example"] {
  font-size: 2em;
}

/* <a> elements with an href ending ".org", case-insensitive */
a[href$=".org" i] {
  font-style: italic;
}

/* <a> elements whose class attribute contains the word "logo" */
a[class~="logo"] {
  padding: 2px;
}
```

## Syntax

- `[attr]`
  - : Represents elements with an attribute name of _attr_.
- `[attr=value]`
  - : Represents elements with an attribute name of _attr_ whose value is exactly _value_.
- `[attr~=value]`
  - : Represents elements with an attribute name of _attr_ whose value is a whitespace-separated list of words, one of which is exactly _value_.
- `[attr|=value]`
  - : Represents elements with an attribute name of _attr_ whose value can be exactly _value_ or can begin with _value_ immediately followed by a hyphen, `-` (U+002D). It is often used for language subcode matches.
- `[attr^=value]`
  - : Represents elements with an attribute name of _attr_ whose value is prefixed (preceded) by _value_.
- `[attr$=value]`
  - : Represents elements with an attribute name of _attr_ whose value is suffixed (followed) by _value_.
- `[attr*=value]`
  - : Represents elements with an attribute name of _attr_ whose value contains at least one occurrence of _value_ within the string.
- `[attr operator value i]`
  - : Adding an `i` (or `I`) before the closing bracket causes the value to be compared case-insensitively (for characters within the {{Glossary("ASCII")}} range).
- `[attr operator value s]` {{Experimental_Inline}}
  - : Adding an `s` (or `S`) before the closing bracket causes the value to be compared case-sensitively (for characters within the ASCII range).

## Examples

### Links

#### CSS

```css
a {
  color: blue;
}

/* Internal links, beginning with "#" */
a[href^="#"] {
  background-color: gold;
}

/* Links with "example" anywhere in the URL */
a[href*="example"] {
  background-color: silver;
}

/* Links with "insensitive" anywhere in the URL,
   regardless of capitalization */
a[href*="insensitive" i] {
  color: cyan;
}

/* Links with "cAsE" anywhere in the URL,
with matching capitalization */
a[href*="cAsE" s] {
  color: pink;
}

/* Links that end in ".org" */
a[href$=".org"] {
  color: red;
}

/* Links that start with "https://" and end in ".org" */
a[href^="https://"][href$=".org"]
{
  color: green;
}
```

#### HTML

```html
<ul>
  <li><a href="#internal">Internal link</a></li>
  <li><a href="http://example.com">Example link</a></li>
  <li><a href="#InSensitive">Insensitive internal link</a></li>
  <li><a href="http://example.org">Example org link</a></li>
  <li><a href="https://example.org">Example https org link</a></li>
</ul>
```

#### Result

{{EmbedLiveSample("Links")}}

### Languages

#### CSS

```css
/* All divs with a `lang` attribute are bold. */
div[lang] {
  font-weight: bold;
}

/* All divs without a `lang` attribute are italicized. */
div:not([lang]) {
  font-style: italic;
}

/* All divs in US English are blue. */
div[lang~="en-us"] {
  color: blue;
}

/* All divs in Portuguese are green. */
div[lang="pt"] {
  color: green;
}

/* All divs in Chinese are red, whether
   simplified (zh-Hans-CN) or traditional (zh-Hant-TW). */
div[lang|="zh"] {
  color: red;
}

/* All divs with a Traditional Chinese
   `data-lang` are purple. */
/* Note: You could also use hyphenated attributes
   without double quotes */
div[data-lang="zh-Hant-TW"] {
  color: purple;
}
```

#### HTML

```html
<div lang="en-us en-gb en-au en-nz">Hello World!</div>
<div lang="pt">Olá Mundo!</div>
<div lang="zh-Hans-CN">世界您好！</div>
<div lang="zh-Hant-TW">世界您好！</div>
<div data-lang="zh-Hant-TW">世界您好！</div>
```

#### Result

{{EmbedLiveSample("Languages")}}

### HTML ordered lists

The HTML specification requires the [`type`](/en-US/docs/Web/HTML/Element/input#type) attribute to be matched case-insensitively because it is primarily used in the {{HTMLElement("input")}} element.
Note that if a modifier is not supported by the user agent, then the selector will not match.

#### CSS

```css
/* Case-sensitivity depends on document language */
ol[type="a"] {
  list-style-type: lower-alpha;
  background: red;
}

ol[type="b" s] {
  list-style-type: lower-alpha;
  background: lime;
}

ol[type="B" s] {
  list-style-type: upper-alpha;
  background: grey;
}

ol[type="c" i] {
  list-style-type: upper-alpha;
  background: green;
}
```

#### HTML

```html
<ol type="A">
  <li>
    Red background for case-insensitive matching (default for the type selector)
  </li>
</ol>
<ol type="b">
  <li>Lime background if `s` modifier is supported (case-sensitive match)</li>
</ol>
<ol type="B">
  <li>Grey background if `s` modifier is supported (case-sensitive match)</li>
</ol>
<ol type="C">
  <li>
    Green background if `i` modifier is supported (case-insensitive match)
  </li>
</ol>
```

#### Result

{{EmbedLiveSample("HTML_ordered_lists")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{CSSxRef("attr")}}
- Selecting a single element: {{DOMxRef("Document.querySelector()")}}, {{DOMxRef("DocumentFragment.querySelector()")}}, or {{DOMxRef("Element.querySelector()")}}
- Selecting all matching elements: {{DOMxRef("Document.querySelectorAll()")}}, {{DOMxRef("DocumentFragment.querySelectorAll()")}}, or {{DOMxRef("Element.querySelectorAll()")}}
- [Case-insensitive attribute selector values](https://html.spec.whatwg.org/multipage/semantics-other.html#case-sensitivity-of-selectors) on WHATWG
