---
title: content
slug: Web/CSS/content
page-type: css-property
browser-compat: css.properties.content
---

{{CSSRef}}

The **`content`** [CSS](/en-US/docs/Web/CSS) property replaces an element with a generated value. Objects inserted using the `content` property are **anonymous [replaced elements](/en-US/docs/Web/CSS/Replaced_element)**.

{{EmbedInteractiveExample("pages/tabbed/content.html", "tabbed-shorter")}}

## Syntax

```css
/* Keywords that cannot be combined with other values */
content: normal;
content: none;

/* <image> values */
content: url("http://www.example.com/test.png");
content: linear-gradient(#e66465, #9198e5);
content: image-set("image1x.png" 1x, "image2x.png" 2x);

/* alt text for generated content, added in the Level 3 specification */
content: url("http://www.example.com/test.png") / "This is the alt text";

/* <string> value */
content: "prefix";

/* list of content values */
content: "prefix" url("http://www.example.com/test.png");
content: "prefix" url("http://www.example.com/test.png") "suffix" /
  "This is some alt text";

/* <counter> values, optionally with <list-style-type> */
content: counter(chapter_counter);
content: counter(chapter_counter, upper-roman);
content: counters(section_counter, ".");
content: counters(section_counter, ".", decimal-leading-zero);

/* attr() value linked to the HTML attribute value */
content: attr(value string);

/* Language- and position-dependent keywords */
content: open-quote;
content: close-quote;
content: no-open-quote;
content: no-close-quote;

/* Except for normal and none, several values can be used simultaneously */
content: open-quote counter(chapter_counter);

/* Global values */
content: inherit;
content: initial;
content: revert;
content: revert-layer;
content: unset;
```

### Values

- `none`
  - : When applied to a pseudo-element, the pseudo-element is not generated. If applied to an element, the value has no effect.
- `normal`
  - : Computes to `none` for the `::before` and `::after` pseudo-elements.
- {{cssxref("&lt;string&gt;")}}
  - : Specifies the "alt text" for the element. This value can be any number of text characters. Non-Latin characters must be encoded using their Unicode escape sequences: for example, `\000A9` represents the copyright symbol.
- `<content-list>`
  - : A list of anonymous inline boxes that will replace the content of the selected element (in the specified order).
    This list can include strings, images, counters, and so on.
- {{cssxref("&lt;image&gt;")}}
  - : An {{cssxref("&lt;image&gt;")}}, denoted by the {{cssxref("url", "url()")}} or {{cssxref("image/image-set", "image-set()")}} or {{cssxref("&lt;gradient&gt;")}} data type, or part of the webpage, defined by the {{cssxref("element", "element()")}} function, denoting the content to display.
- {{cssxref("counter", "counter()")}}

  - : The value of a [CSS counter](/en-US/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters), generally a number produced by computations defined by {{cssxref("&lt;counter-reset&gt;")}} and {{cssxref("&lt;counter-increment&gt;")}} properties. It can be displayed using either the {{cssxref("counter", "counter()")}} or {{cssxref("counters", "counters()")}} function.

    The {{cssxref("counter", "counter()")}} function has two forms: 'counter(_name_)' or 'counter(_name_, style)'. The generated text is the value of the innermost counter of the given name in scope at the given pseudo-element. It is formatted in the specified {{cssxref("&lt;list-style-type&gt;")}} (`decimal` by default).

    The {{cssxref("counters", "counters()")}} function also has two forms: 'counters(_name_, _string_)' or 'counters(_name_, _string_, _style_)'. The generated text is the value of all counters with the given name in scope at the given pseudo-element, from outermost to innermost, separated by the specified string. The counters are rendered in the indicated {{cssxref("&lt;list-style-type&gt;")}} (`decimal` by default).

- `attr(x)`
  - : The value of the element's attribute `x` as a string. If there is no attribute `x`, an empty string is returned. The case-sensitivity of attribute names depends on the document language.
- `open-quote` | `close-quote`
  - : These values are replaced by the appropriate string from the {{cssxref("quotes")}} property.
- `no-open-quote` | `no-close-quote`
  - : Introduces no content, but increments (decrements) the level of nesting for quotes.
- `<content-list> / "Alternative text"`
  - : Alternative text may be specified for an image (or list of content items) by appending a forward slash and then the text.
    The alternative text is intended for speech output by screen-readers, but may also be displayed in some browsers.
    Note that if the browser does not support alternative text, neither the content or alternative text will be used.

## Accessibility concerns

CSS-generated content is not included in the [DOM](/en-US/docs/Web/API/Document_Object_Model/Introduction). Because of this, it will not be represented in the [accessibility tree](/en-US/docs/Learn/Accessibility/What_is_accessibility#accessibility_apis) and certain assistive technology/browser combinations will not announce it. If the content conveys information that is critical to understanding the page's purpose, it is better to include it in the main document.

- [Accessibility support for CSS generated content – Tink](https://tink.uk/accessibility-support-for-css-generated-content/)
- [Explanation of WCAG, Guideline 1.3 – MDN](/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.3_%e2%80%94_create_content_that_can_be_presented_in_different_ways)
- [Understanding Success Criterion 1.3.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html)

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Headings and quotes

This example inserts quotation marks around quotes, and adds the word "Chapter" before headings.

#### HTML

```html
<h1>5</h1>
<p>
  According to Sir Tim Berners-Lee,
  <q cite="http://www.w3.org/People/Berners-Lee/FAQ.html#Internet">
    I was lucky enough to invent the Web at the time when the Internet already
    existed - and had for a decade and a half.
  </q>
  We must understand that there is nothing fundamentally wrong with building on
  the contributions of others.
</p>

<h1>6</h1>
<p>
  According to the Mozilla Manifesto,
  <q cite="http://www.mozilla.org/en-US/about/manifesto/">
    Individuals must have the ability to shape the Internet and their own
    experiences on the Internet.
  </q>
  Therefore, we can infer that contributing to the open web can protect our own
  individual experiences on it.
</p>
```

#### CSS

```css
q {
  color: blue;
}

q::before {
  content: open-quote;
}

q::after {
  content: close-quote;
}

h1::before {
  content: "Chapter "; /* The trailing space creates separation
                          between the added content and the
                          rest of the content */
}
```

#### Result

{{EmbedLiveSample('Headings_and_quotes', '100%', 200)}}

### Image combined with alternative text

This example inserts an image before the link and provides alternative text that a screen reader can output as speech.
Some browsers may also display the alternative text.

#### HTML

```html
<a href="https://www.mozilla.org/en-US/">Mozilla Home Page</a>
```

#### CSS

The CSS to show the image and set the alternative text is shown below.
This also sets the font and color for the content.
This will only be used on browsers that _display_ the alternative text.

```css
a::before {
  content: url("https://mozorg.cdn.mozilla.net/media/img/favicon.ico") /
    " MOZILLA: ";
  font:
    x-small Arial,
    sans-serif;
  color: gray;
}
```

#### Result

The browser should display the icon before the link below.
If using a screen reader, it should speak the word "MOZILLA" when it reaches the image.

{{EmbedLiveSample('Image_combined_with_text', '100%', 60)}}

Note that on a browser that does not support the alternative text syntax, the whole line is invalid.
In this case neither the image or alternative text will be used!
You could partially address this issue by including CSS that adds the image before the line with them both.

### Targeting classes

This example inserts additional text after special items in a list.

#### HTML

```html
<h2>Paperback Best Sellers</h2>
<ol>
  <li>Political Thriller</li>
  <li class="new-entry">Halloween Stories</li>
  <li>My Biography</li>
  <li class="new-entry">Vampire Romance</li>
</ol>
```

#### CSS

```css
.new-entry::after {
  content: " New!"; /* The leading space creates separation
                       between the added content and the
                       rest of the content */
  color: red;
}
```

#### Result

{{EmbedLiveSample('Targeting_classes', '100%', 160)}}

### Images and element attributes

This example inserts an image before each link, and adds its `id` attribute after.

#### HTML

```html
<ul>
  <li><a id="moz" href="https://www.mozilla.org/">Mozilla Home Page</a></li>
  <li>
    <a id="mdn" href="https://developer.mozilla.org/">
      Mozilla Developer Network
    </a>
  </li>
</ul>
```

#### CSS

```css
a {
  text-decoration: none;
  border-bottom: 3px dotted navy;
}

a::after {
  content: " (" attr(id) ")";
}

#moz::before {
  content: url("https://mozorg.cdn.mozilla.net/media/img/favicon.ico");
}

#mdn::before {
  content: url("mdn-favicon16.png");
}

li {
  margin: 1em;
}
```

#### Result

{{EmbedLiveSample('Images_and_element_attributes', '100%', 160)}}

### Element replacement with `url()`

This example replaces an element's content with an image {{cssxref("url", "url()")}}. Content added with `::before` or `::after` will not be generated as the contents of the element have been replaced.

#### HTML

```html
<div id="replaced">Mozilla</div>
```

#### CSS

```css
#replaced {
  content: url("mdn.svg");
}

/* will not show if element replacement is supported */
#replaced::after {
  content: " (" attr(id) ")";
}
```

#### Result

{{EmbedLiveSample('Element_replacement_with_url', '100%', 200)}}

### Element replacement with `<gradient>`

This example replaces an element's content with a {{cssxref("gradient/linear-gradient" ,"linear-gradient()")}}.

#### HTML

```html
<div id="replaced">Mozilla</div>
```

#### CSS

```css hidden
div {
  width: 100px;
  height: 100px;
  border: 1px solid lightgrey;
}
```

```css
#replaced {
  content: linear-gradient(purple, yellow);
}
```

#### Result

{{EmbedLiveSample('Element_replacement_with_gradient', '100%', 110)}}

### Element replacement with `image-set()`

This example replaces an element's content with a {{cssxref("image/image-set" ,"image-set()")}}. If the users display has normal resolution the `1x.png` will be displayed screens with a higher resolution will display the `2x.png` image.

#### HTML

```html
<div id="replaced">Mozilla</div>
```

#### CSS

```css hidden
div {
  width: 100px;
  border: 1px solid lightgrey;
}
```

```css-nolint
#replaced {
  content: image-set(
    "1x.png" 1x,
    "2x.png" 2x
  );
}
```

#### Result

{{EmbedLiveSample('Element_replacement_with_image-set', '100%', 110)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Replaced elements](/en-US/docs/Web/CSS/Replaced_element)
- {{Cssxref("::after")}}
- {{Cssxref("::before")}}
- {{Cssxref("::marker")}}
- {{Cssxref("contain")}}
- {{Cssxref("quotes")}}
- {{cssxref("gradient", "&lt;gradient&gt;")}}
- {{cssxref("image/image-set", "image-set()")}} function
- {{cssxref("url", "url()")}} function
