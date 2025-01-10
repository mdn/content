---
title: attr()
slug: Web/CSS/attr
page-type: css-function
browser-compat: css.types.attr
---

{{CSSRef}}

> [!NOTE]
> The `attr()` function can be used with any CSS property, but support for properties other than {{CSSxRef("content")}} is experimental.

The **`attr()`** [CSS](/en-US/docs/Web/CSS) [function](/en-US/docs/Web/CSS/CSS_Functions) is used to retrieve the value of an attribute of the selected element and use it in a property value, similar to how the {{cssxref("var", "var()")}} function substitutes a custom property value. It can also be used with [pseudo-elements](/en-US/docs/Web/CSS/Pseudo-elements), in which case the attribute's value on the pseudo-element's originating element is returned.

{{EmbedInteractiveExample("pages/tabbed/function-attr.html", "tabbed-shorter")}}

## Syntax

```css
/* Basic usage */
attr(data-count);
attr(title);

/* With type */
attr(id type(<custom-ident>));
attr(data-count type(<number>));
attr(data-width px);
attr(data-name string);

/* With fallback */
attr(data-count type(<number>), 0);
attr(data-width px, inherit);
attr(data-something, "default");
```

### Parameters

The `attr()` function's syntax is as follows:

```plain
attr(<attr-name> <attr-type>? , <declaration-value>?)

<attr-name> = [ <ident-token>? '|' ]? <ident-token>
<attr-type> = type( <syntax> ) | string | <attr-unit>
```

The parameters are:

- `<attr-name>`
  - : The attribute name whose value should be retrieved from the selected HTML element(s).
- `<attr-type>`
  - : Specifies how the attribute value is parsed into a CSS value.
- `<declaration-value>`
  - : The value to be used if the associated attribute is missing or contains an invalid value. If not set, CSS will default to an empty string when no `<attr-type>` is set or the guaranteed-invalid value.

### Return value

By default attributes will be parsed into a CSS string but you can change that with the optional `<attr-type>`. You can set `<attr-type>` to one of the following:

- The `string` keyword which parses the value into a CSS string. This has the same outcome as omitting the `<attr-type>`.
- The `type()` function, which takes a `<syntax>` as its argument that specifies what [data type](/en-US/docs/Web/CSS/CSS_Types) to parse the value into. The `<syntax>` can be {{CSSxRef("&lt;angle&gt;")}}, {{CSSxRef("&lt;color&gt;")}}, {{CSSxRef("&lt;custom-ident&gt;")}}, {{CSSxRef("&lt;image&gt;")}}, {{CSSxRef("&lt;integer&gt;")}}, {{CSSxRef("&lt;length&gt;")}}, {{CSSxRef("&lt;length-percentage&gt;")}}, {{CSSxRef("&lt;number&gt;")}}, {{CSSxRef("&lt;percentage&gt;")}}, {{CSSxRef("&lt;resolution&gt;")}}, {{CSSxRef("&lt;string&gt;")}}, {{CSSxRef("&lt;time&gt;")}}, and {{CSSxRef("&lt;transform-function&gt;")}}, or a combination thereof. Excluded from this list is {{CSSxRef("&lt;url&gt;")}} for [security reasons](#limitations_and_security)
- A `<attr-unit>` which is any identifier that matches a [CSS distance unit](/docs/Web/CSS/CSS_Values_and_Units#distance_units), such as `px`, or the `%` character.

## Formal syntax

{{CSSSyntax}}

## Examples

### content property

In this example, we prepend the value of the `data-foo` [`data-*`](/en-US/docs/Web/HTML/Global_attributes/data-*) [global attribute](/en-US/docs/Web/HTML/Global_attributes) to the contents of the {{HTMLElement("p")}} element.

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

In this example, we set the CSS value of {{CSSXRef("background-color")}} to the value of the `data-background` [`data-*`](/en-US/docs/Web/HTML/Global_attributes/data-*) [global attribute](/en-US/docs/Web/HTML/Global_attributes) assigned to the {{HTMLElement("div")}} element.

#### HTML

```html
<div class="background" data-background="lime">
  background expected to be red if your browser does not support advanced usage
  of attr()
</div>
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
  background-color: attr(data-background type(<color>), red);
}
```

#### Result

// TODO: This live Example needs to be adjusted
{{EmbedLiveSample("color_value", "100%", 50)}}

### using fallback

{{SeeCompatTable}}

In this example, we append the value of `data-browser` [`data-*`](/en-US/docs/Web/HTML/Global_attributes/data-*) [global attribute](/en-US/docs/Web/HTML/Global_attributes) to the {{HTMLElement("p")}} element. If the `data-browser` attribute is missing from the {{HTMLElement("p")}} element, we append the _fallback_ value of "**Unknown**".

#### HTML

```html
<p data-browser="Firefox">My favorite browser is:</p>
<p>Your favorite browser is:</p>
```

#### CSS

```css
p::after {
  content: " " attr(data-browser, "Unknown");
  color: tomato;
}
```

#### Result

{{EmbedLiveSample("using_fallback", "100%", 90)}}

### `<custom-ident>`

In this example the values for the {{cssxref("view-transition-name")}} property are dereived from the `id` attribute of the element. The attribute gets parsed into a {{CSSxRef("&lt;custom-ident&gt;")}} which is what {{cssxref("view-transition-name")}} needs.

The resulting values for {{cssxref("view-transition-name")}} are `card-1`, `card-2`, `card-3`, etc.

#### HTML

```html
<div class="cards">
  <div class="card" id="card-1"></div>
  <div class="card" id="card-2"></div>
  <div class="card" id="card-3"></div>
  <div class="card" id="card-4"></div>
</div>
```

#### CSS

```css
.card[id] {
  view-transition-name: attr(id type(<custom-ident>), none);
  view-transition-class: card;
}
```

### dimension unit

In this example the `data-size` attribute gets parsed into a pixel value.

#### HTML

```html
<div data-size="10">test</div>
```

#### CSS

```css
div {
  font-size: attr(data-size px);
}
```

## TODO: Title for this section

### Limitations and Security

The `attr()` function can reference attributes that were never intended by the page to be used for styling, and might contain sensitive information (for example, a security token used by scripts on the page). In general this is fine, but it can become a security threat when used in URLs. Therefore you can't use `attr()` to dynamically construct URLs.

```html
<!-- This won't work! -->
<span data-icon="https://example.org/icons/question-mark.svg">help</span>
<style>
  span[data-icon] {
    background-image: url(attr(data-icon));
  }
</style>
```

Values that use get marked as _"`attr()`-tained"_. Using an `attr()`-tainted value as or in a `<url>` makes a declaration become ["invalid at computed value time" or IACVT for short](https://brm.us/iacvt)

### Backwards compatibility

Generally speaking `attr()` is pretty much backwards compatible because the old way of using it–the one without specifying an `<attr-type>`–behaves the same as before. Having `attr(data-attr)` in your code is the same as writing `attr(data-attr type(<string>))` or the simpler `attr(data-attr string))`.

However, there are two edge cases where the modern `attr()` syntax behaves differently from the old syntax.

In the following snippet, browsers with no advanced `attr()` support will discard the second declaration because it cannot parse it. Therefore the result in those browsers is `"Hello World"`.

```html
<div text="Hello"></div>
```

```css
div::before {
  content: attr(text) " World";
}
div::before {
  content: attr(text) 1px;
}
```

In browsers with advanced `attr()` support the output will be … nothing. Those browsers will successfully parse the second declaration but because it is gibberish content for the `content` property, the declaration becomes ["invalid at computed value time" or IACVT for short](https://brm.us/iacvt).

To prevent this sort of situation, we suggest to use [feature detection](#feature_detection).

A second edge case is the following:

```html
<div id="parent"><div id="child" data-attr="foo"></div></div>
```

```css
#parent {
  --x: attr(data-attr);
}
#child::before {
  content: var(--x);
}
```

In browsers with no advanced `attr()` support the text `"foo"` gets displayed. In browsers with `attr()` support there is no output.

That is because `attr()`–similar to custom properties that use the `var()` function–get substituted at [computed value time](https://brm.us/iacvt/#custom-properties). With the new behavior, `--x` first tries to read the `data-attr` attribute from the `#parent` element, which results in an empty string because there is no such attribute on `#parent`. That empty string then gets inherited onto the `#child` element, resulting in a `content: ;` declaration being set.

To prevent this sort of situation, make sure you don't pass inherited `attr()` values onto children, unless you explicitly want to.

### Feature Detection

You can feature detect support for modern `attr()` syntax using the {{CSSxRef("@supports")}} at-rule. In the test, try to assign advanced `attr()` to a (non-custom) CSS property.

For example:

```css
@supports (x: attr(x type(*))) {
  /* Browser has modern attr() support */
}

@supports not (x: attr(x type(*))) {
  /* Browser does not have modern attr() support */
}
```

We can perform the same check in JavaScript with [`CSS.supports()`](/en-US/docs/Web/API/CSS/supports_static):

```js
if (CSS.supports("x: attr(x type(*))")) {
  /* Browser has modern attr() support */
}

if (!CSS.supports("x: attr(x type(*))")) {
  /* Browser does not have modern attr() support */
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Attribute selectors](/en-US/docs/Web/CSS/Attribute_selectors)
- [HTML `data-*` attributes](/en-US/docs/Web/HTML/Global_attributes/data-*)
- [SVG `data-*` attributes](/en-US/docs/Web/SVG/Attribute/data-*)
