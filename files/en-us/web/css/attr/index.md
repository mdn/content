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
attr(data-count)
attr(href)

/* With type */
attr(data-width px)
attr(data-size rem)
attr(data-name string)
attr(id type(<custom-ident>))
attr(data-count type(<number>))
attr(data-size type(<length> | <percentage>))

/* With fallback */
attr(data-count type(<number>), 0)
attr(data-width px, inherit)
attr(data-something, "default")
```

### Parameters

The `attr()` function's syntax is as follows:

```plain
attr(<attr-name> <attr-type>? , <fallback-value>?)
```

The parameters are:

- `<attr-name>`
  - : The attribute name whose value should be retrieved from the selected HTML element(s).
- `<attr-type>`

  - : Specifies how the attribute value is parsed into a CSS value. This can be the `string` keyword, a `type()` function, or a CSS dimension unit. When omitted, it defaults to `string`.

    - The `string` keyword parses the value into a CSS string.

      ```css
      attr(data-name string, "stranger")
      ```

    - The `type()` function takes a `<syntax>` as its argument that specifies what [data type](/en-US/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) to parse the value into. The `<syntax>` can be {{CSSxRef("&lt;angle&gt;")}}, {{CSSxRef("&lt;color&gt;")}}, {{CSSxRef("&lt;custom-ident&gt;")}}, {{CSSxRef("&lt;image&gt;")}}, {{CSSxRef("&lt;integer&gt;")}}, {{CSSxRef("&lt;length&gt;")}}, {{CSSxRef("&lt;length-percentage&gt;")}}, {{CSSxRef("&lt;number&gt;")}}, {{CSSxRef("&lt;percentage&gt;")}}, {{CSSxRef("&lt;resolution&gt;")}}, {{CSSxRef("&lt;string&gt;")}}, {{CSSxRef("&lt;time&gt;")}}, {{CSSxRef("&lt;transform-function&gt;")}}, or a combination thereof.

      ```css
      attr(id type(<custom-ident>), none)
      attr(data-count type(<number>), 0)
      ```

      To accept multiple types, list all allowed `<syntax>`es in the `type()` function, separated by a `|`.

      ```css
      attr(data-size type(<length> | <percentage>), 0px)
      ```

      For [security reasons](#limitations_and_security) {{CSSxRef("url_value", "&lt;url&gt;")}} is not allowed as a `<syntax>`.

    - The `<attr-unit>` identifier specifies the unit a numeric value should have (if any). It can be the `%` character (percentage) or a [CSS distance unit](/en-US/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types#distance_units) such as `px`, `rem`, `deg`, `s`, etc.

      ```css
      attr(data-size rem)
      attr(data-width px, inherit)
      attr(data-rotation deg)
      ```

- `<fallback-value>`
  - : The value to be used if the specified attribute is missing or contains an invalid value.

### Return value

The return value of `attr()` is the value of the HTML attribute whose name is `<attr-name>` parsed as the given `<attr-type>` or parsed as a CSS string.

When an `<attr-type>` is set, `attr()` will try to parse the attribute into that specified `<attr-type>` and return it. If the attribute cannot be parsed into the given `<attr-type>`, the `<fallback-value>` will be returned instead. When no `<attr-type>` is set, the attribute will be parsed into a CSS string.

If no `<fallback-value>` is set, the return value will default to an empty string when no `<attr-type>` is set or the [guaranteed-invalid value](/en-US/docs/Glossary/guaranteed_invalid_value) when an `<attr-type>` is set.

## Description

### Limitations and security

The `attr()` function can reference attributes that were never intended by the page author to be used for styling, and might contain sensitive information (for example, a security token used by scripts on the page). In general, this is fine, but it can become a security threat when used in URLs. You therefore can't use `attr()` to dynamically construct URLs.

```html
<!-- This won't work! -->
<span data-icon="https://example.org/icons/question-mark.svg">help</span>
<style>
  span[data-icon] {
    background-image: url(attr(data-icon));
  }
</style>
```

Values that use `attr()` get marked as _"`attr()`-tainted"_. Using an `attr()`-tainted value as or in a `<url>` makes a declaration become ["invalid at computed value time" or IACVT for short](https://brm.us/iacvt)

### Backwards compatibility

Generally speaking, the modern `attr()` syntax is backwards-compatible because the old way of using it — without specifying an `<attr-type>` — behaves the same as before. Having `attr(data-attr)` in your code is the same as writing `attr(data-attr type(<string>))` or the simpler `attr(data-attr string))`.

However, there are two edge cases where the modern `attr()` syntax behaves differently from the old syntax.

In the following snippet, browsers that don't support the modern `attr()` syntax will discard the second declaration because they cannot parse it. The result in those browsers is `"Hello World"`.

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

In browsers with support for the modern syntax, the output will be … nothing. Those browsers will successfully parse the second declaration but, because it is invalid content for the `content` property, the declaration becomes ["invalid at computed value time" or IACVT for short](https://brm.us/iacvt).

To prevent this kind of situation, [feature detection](#feature_detection) is recommended.

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

Browsers without support for modern syntax display the text `"foo"`. In browsers with modern `attr()` support there is no output.

This is because `attr()` — similar to custom properties that use the `var()` function — get substituted at [computed value time](https://brm.us/iacvt/#custom-properties). With the modern behavior, `--x` first tries to read the `data-attr` attribute from the `#parent` element, which results in an empty string because there is no such attribute on `#parent`. That empty string then gets inherited by the `#child` element, resulting in a `content: ;` declaration being set.

To prevent this sort of situation, don't pass inherited `attr()` values onto children unless you explicitly want to.

### Feature detection

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

### Using a fallback value

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

{{EmbedLiveSample("color_value", "100%", 50)}}

### Using dimension units

{{SeeCompatTable}}

In this example the `data-rotation` attribute is parsed into a `deg` unit, which specifies the element's rotation.

#### HTML

```html
<div data-rotation="-3">I am rotated by -3 degrees</div>
<div data-rotation="2">And I by 2 degrees</div>
<div>And so am I, using the fallback value of 1.5deg</div>
```

#### CSS

```css hidden
body {
  min-height: 100svh;
  display: grid;
  place-content: center;
  gap: 1em;
}
div {
  margin: 0 auto;
  border: 1px solid;
  border-radius: 0.25em;
  padding: 0.5em;
}
```

```css
div {
  width: fit-content;
  transform-origin: 50% 50%;
  rotate: attr(data-rotation deg, 1.5deg);
}
```

#### Result

{{EmbedLiveSample("using_dimension_units", "100%", 300)}}

### Parsing `attr()` values as `<custom-ident>`s

{{SeeCompatTable}}

In this example, the values for the {{cssxref("view-transition-name")}} property are derived from the `id` attribute of the element. The attribute gets parsed into a {{CSSxRef("&lt;custom-ident&gt;")}}, which is what {{cssxref("view-transition-name")}} accepts as a value.

The resulting values for {{cssxref("view-transition-name")}} are `card-1`, `card-2`, `card-3`, etc.

#### HTML

The HTML contains four cards with different `id` attributes and a "Shuffle cards" `<button>`, which shuffles the cards.

```html
<div class="cards">
  <div class="card" id="card-1">1</div>
  <div class="card" id="card-2">2</div>
  <div class="card" id="card-3">3</div>
  <div class="card" id="card-4">4</div>
</div>
<button>Shuffle cards</button>
```

```html hidden
<div class="warning">
  <p>
    You browser does not support advanced <code>attr()</code>. As a result, this
    demo won’t do anything.
  </p>
</div>
```

#### CSS

The cards are laid out in a flex container:

```css
.cards {
  display: flex;
  flex-direction: row;
  gap: 1em;
  padding: 1em;
}
```

```css hidden
:root {
  view-transition-name: none;
}
::view-transition {
  pointer-events: none;
}

@supports (x: attr(x type(*))) {
  .warning {
    display: none;
  }
}

@layer layout {
  .card {
    border-radius: 0.25em;
    width: 20vw;
    max-width: 5em;
    aspect-ratio: 1 / 1.6;
    background: lightgrey;

    display: grid;
    place-content: center;
    font-size: 2em;
  }

  * {
    box-sizing: border-box;
  }

  body {
    min-height: 100svh;
    display: grid;
    place-content: center;
  }

  button {
    justify-self: center;
  }
}

@layer warning {
  .warning {
    padding: 1em;
    border: 1px solid #ccc;
    background: rgba(255 255 205 / 0.8);
    text-align: center;
    order: -1;
    margin: 1em;
  }

  .warning > :first-child {
    margin-top: 0;
  }
  .warning > :last-child {
    margin-bottom: 0;
  }
}
```

On each card, the `attr()` function gets the `id` attribute and parses it into a {{CSSxRef("&lt;custom-ident&gt;")}}, which is used as the value for the {{cssxref("view-transition-name")}} property. When there is no `id` set on a card, the fallback value `none` is used instead.

```css
.card {
  view-transition-name: attr(id type(<custom-ident>), none);
  view-transition-class: card;
}
```

#### JavaScript

When the `<button>` is pressed the cards are shuffled. This is done by randomizing the order of an array containing references to all the cards and then updating the {{CSSxRef("order")}} property of each card to its new array index position.

To animate each card to its new position, [View Transitions](/en-US/docs/Web/API/View_Transition_API/Using) are used. This is done by wrapping the `order` update in a call to [`document.startViewTransition`](/en-US/docs/Web/API/Document/startViewTransition).

```js
const shuffle = (array) => {
  for (let i = array.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

document.querySelector("button").addEventListener("click", (e) => {
  const $cards = Array.from(document.querySelectorAll(".card"));
  shuffle($cards);
  document.startViewTransition(() => {
    $cards.forEach(($card, i) => {
      $card.style.setProperty("order", i);
    });
  });
});
```

#### Result

{{EmbedLiveSample("parsing_attr_values_as_custom-idents", "100%", 400)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Attribute selectors](/en-US/docs/Web/CSS/Attribute_selectors)
- [HTML `data-*` attributes](/en-US/docs/Web/HTML/Global_attributes/data-*)
- [SVG `data-*` attributes](/en-US/docs/Web/SVG/Attribute/data-*)
