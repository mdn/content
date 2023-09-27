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

/* <content-replacement>: <image> values */
content: url("http://www.example.com/test.png");
content: linear-gradient(#e66465, #9198e5);
content: image-set("image1x.png" 1x, "image2x.png" 2x);

/* speech output: alternative text after a "/"  */
content: url("../img/test.png") / "This is the alt text";

/* <string> value */
content: "unparsed text";

/* <counter> values, optionally with <list-style-type> */
content: counter(chapter_counter);
content: counter(chapter_counter, upper-roman);
content: counters(section_counter, ".");
content: counters(section_counter, ".", decimal-leading-zero);

/* attr() value linked to the HTML attribute value */
content: attr(href);

/* <quote> values */
content: open-quote;
content: close-quote;
content: no-open-quote;
content: no-close-quote;

/* list of content values */
/* Except for normal and none, several values can be used simultaneously */
content: "prefix" url(http://www.example.com/test.png);
content: "prefix" url("/img/test.png") "suffix" / "Alt text";
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

  - : The default value. Computes to `none` for the {{cssxref("::before")}} and {{cssxref("::after")}} pseudo-elements. For other pseudo-elements, `normal` the content will be the initial, or normal, content expected for that {{cssxref("::marker")}}, {{cssxref("::placeholder")}}, or {{cssxref("::file-selector-button")}}.

- `<content-list>`

  - : A list of anonymous inline boxes that will replace the content of the selected element (in the specified order). Each `<content-list>` item is either content or of type [`<string>`](#string), [`<image>`](#image), [`<counter>`](#counter), [`<quote>`](#quote), [`<target>`](#target), or [`<leader()>`](#leader).

- {{cssxref("&lt;string&gt;")}}

  - : A sequence of characters enclosed in matching single or double quotes. Multiple string values will be concatenated (there is no concatenation operator in CSS).

- {{cssxref("&lt;image&gt;")}}

  - : An {{cssxref("&lt;image&gt;")}}, denoted by the {{cssxref("url", "url()")}} or {{cssxref("image/image-set", "image-set()")}} or {{cssxref("&lt;gradient&gt;")}} data type, or part of the webpage, defined by the {{cssxref("element", "element()")}} function, denoting the content to display.

- `<counter>`

  - : The `<counter>` value is a [CSS counter](/en-US/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters), generally a number produced by computations defined by {{cssxref("&lt;counter-reset&gt;")}} and {{cssxref("&lt;counter-increment&gt;")}} properties. It can be displayed using either the {{cssxref("counter", "counter()")}} or {{cssxref("counters", "counters()")}} function.
    - {{cssxref("counter", "counter()")}}
      - : The {{cssxref("counter", "counter()")}} function has two forms: 'counter(_name_)' or 'counter(_name_, style)'. The generated text is the value of the innermost counter of the given name in scope at the given pseudo-element. It is formatted in the specified {{cssxref("&lt;list-style-type&gt;")}} (`decimal` by default).
    - {{cssxref("counters", "counters()")}}
      - : The {{cssxref("counters", "counters()")}} function also has two forms: 'counters(_name_, _string_)' or 'counters(_name_, _string_, _style_)'. The generated text is the value of all counters with the given name in scope at the given pseudo-element, from outermost to innermost, separated by the specified string. The counters are rendered in the indicated {{cssxref("&lt;list-style-type&gt;")}} (`decimal` by default).

- `<quote>`

  - : The `<quote>` data type includes language- and position-dependent keywords:
    - `open-quote` and `close-quote`
      - : These values are replaced by the appropriate string from the {{cssxref("quotes")}} property.
    - `no-open-quote` | `no-close-quote`
      - : Introduces no content, but increments (decrements) the level of nesting for quotes.

- `<target>` {{Experimental_Inline}}

  - : The `<target>` data type includes three target functions, `<target-counter()>`, `<target-counters()>`, and `<target-text()>` that create cross-reference obtained from the target end of a link. See [Formal syntax](#formal_syntax).

- `<leader()>` {{Experimental_Inline}}

  - : The `<leader()>` data type inclues a leader function: `leader( <leader-type> )`. This function accepts the keyword values `dotted`, `solid`, or `space` (equal to `leader(".")`, `leader("_")`, and `leader(" ")`, respectively), or a `<string>` as a parameter. When used as a value for `content`, the leader-type provided will be inserted as a repeating pattern visually connecting content across a horizontal line.

- `attr(x)`

  - : The `attr(x)` CSS function retrieves the value of an attribute of the selected element or pseudo-element's originating element. The value of the element's attribute `x` as an unparsed string. If there is no attribute `x`, an empty string is returned. The case-sensitivity of attribute name parameter depends on the document language.

- `<content-list> / "<string> or <counter>"`
  - : Alternative text may be specified for an image , or any of the `<content-list>` items, by appending a forward slash and then the string text or counter. The alternative text is intended for speech output by screen-readers, but may also be displayed in some browsers. Note that if the browser does not support alternative text, the `content` declaration will be considered invalid and will be ignored. The {{cssxref("string", "/ &lt;string>")}} or {{cssxref("counter", "/ &lt;counter>")}} specifies the "alt text" for the element.

## Accessibility concerns

CSS-generated content is not included in the [DOM](/en-US/docs/Web/API/Document_Object_Model/Introduction). Because of this, it will not be represented in the [accessibility tree](/en-US/docs/Learn/Accessibility/What_is_accessibility#accessibility_apis) and certain assistive technology/browser combinations will not announce it. If the content conveys information that is critical to understanding the page's purpose, it is better to include it in the main document.

If inserted content is not decorative, check that the information is provided to assistive technologies and is also available when CSS is turned off.

- [Accessibility support for CSS generated content – Tink](https://tink.uk/accessibility-support-for-css-generated-content/) (2015)
- [WCAG, Guideline 1.3: Create content that can be presented in different ways](/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.3_—_create_content_that_can_be_presented_in_different_ways)
- [Understanding Success Criterion 1.3.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html)
- [Failure of Success Criterion 1.3.1: inserting non-decorative generated content](https://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/F87) Techniques for WCAG 2.0

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Adding text to list item counters

This example combines the counters function and text to prepend all list items with a more detailed counter. We set the content of the the list marker to be a concatenated content-list containing a counter between two strings.

#### HTML

```html
<ol>
  <li>Dogs</li>
  <li>Cats</li>
  <li>
    Birds
    <ol>
      <li>Owls</li>
      <li>Ducks</li>
      <li>Flightless</li>
    </ol>
  </li>
</ol>
```

#### CSS

```css
ol {
  counter-reset: items;
}
li {
  counter-increment: items;
}
li::marker {
  content: "item " counters(items, ".", numeric) ": ";
}
```

#### Result

{{EmbedLiveSample('Adding_text_to_list_item_counters', '100%', 200)}}

The `counter()` function created a numeric `items` counter in which nested numbers are separated with a period (`.`).

### Strings with attribute values

This example adds a string of text after every fully qualified secure link. The text is the value of the `href` attribute, prepended by "URL:", followed by a space, all in parentheses.

#### HTML

```html
<ul>
  <li><a href="https://mozilla.com">Mozilla</a></li>
  <li><a href="/">MDN</a></li>
  <li><a href="https://openwebdocs.org">OpenWebDocs</a></li>
</ul>
```

#### CSS

```css
a[href^="https://"]::after
{
  content: " (URL: " attr(href) ")";
}
```

#### Result

{{EmbedLiveSample('Strings_with_attribute_values', '100%', 200)}}

### Quotes

This example inserts quotation marks around quotes.

#### HTML

```html
<p>
  According to Sir Tim Berners-Lee,
  <q cite="http://www.w3.org/People/Berners-Lee/FAQ.html#Internet">
    I was lucky enough to invent the Web at the time when the Internet already
    existed - and had for a decade and a half.
  </q>
  We must understand that there is nothing fundamentally wrong with building on
  the contributions of others.
</p>
<p lang="fr-fr">
  Mais c'est Magritte qui a dit,
  <q lang="fr-fr"> Ceci n'est pas une pipe. </q>.
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
```

#### Result

{{EmbedLiveSample('Quotes', '100%', 200)}}

Note the type of quotes generated is language dependent.

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

### Element replacement with `url()`

This example replaces a regular element's contents with an image {{cssxref("url", "url()")}}. The `id` of the element, generated on `::after`, is not displayed if the element is replaced.

#### HTML

```html
<div id="replaced">I disappear</div>
<hr />
<div id="notReplaced">I am not replaced</div>
```

#### CSS

```css
div {
  min-height: 50px;
  background: palegoldenrod;
}

#replaced {
  content: url("mdn.svg");
}

/* will not show if element is replaced */
div::after {
  content: " (" attr(id) ")";
}
```

#### Result

{{EmbedLiveSample('Element_replacement_with_url', '100%',400)}}

When generating content on regular elements (rather than just on pseudo-elements), the entire element is replaced; `::before` or `::after` pseudo-elements are not generated on replaced elements. In other words, only of the two CSS declarations is applied to each `<div>`.

### Element replacement with `<gradient>`

This example demonstrates how an element's contents can be replaced by any type of `<image>`, in this case, a CSS gradient. The first element's contents are replaced with a {{cssxref("gradient/linear-gradient" ,"linear-gradient()")}}. The second element, which is not replaced, includes generated text set on `::after`. This generated text includes a gradient image as a background.

#### HTML

```html
<div id="replaced">I disappear</div>
<hr />
<div id="notReplaced">I am not replaced</div>
```

#### CSS

```css
div {
  width: 75%;
  height: 75px;
  border: 1px solid lightgrey;
}

#replaced {
  content: linear-gradient(purple, yellow);
}
/* will not show if the element is replaced */
div::after {
  content: " (Check the browser compatibility. A browser may support CSS gradients, but not as a `content` value)";
  background: linear-gradient(to right, yellow, pink);
}
```

#### Result

{{EmbedLiveSample('Element_replacement_with_gradient', '100%', 200)}}

Check the [browser compatibility chart](#browser-compatibility). All browsers support gradients and all browsers support replacing elements with images, but not all browsers correctly render gradients when set as a `content` value.

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

- [CSS generated content](/en-US/docs/Web/CSS/CSS_generated_content) module
- [Replaced elements](/en-US/docs/Web/CSS/Replaced_element)
- {{Cssxref("::after")}}
- {{Cssxref("::before")}}
- {{Cssxref("::marker")}}
- {{Cssxref("contain")}}
- {{Cssxref("quotes")}}
- {{cssxref("gradient", "&lt;gradient&gt;")}}
- {{cssxref("image/image-set", "image-set()")}} function
- {{cssxref("url", "url()")}} function
