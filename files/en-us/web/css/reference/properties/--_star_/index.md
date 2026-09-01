---
title: "Custom properties (--*): CSS variables"
slug: Web/CSS/Reference/Properties/--*
page-type: css-property
browser-compat: css.properties.custom-property
sidebar: cssref
---

Property names that are prefixed with `--`, like `--example-name`, represent _custom properties_ that contain a value that can be used in other declarations using the {{cssxref("var()")}} function.

Custom properties are scoped to the element(s) they are declared on, and participate in the cascade: the value of such a custom property is that from the declaration decided by the cascading algorithm.

{{CSSInfo}}

## Syntax

```css
--some-keyword: left;
--some-color: #123456;
--some-complex-value: 3px 6px rgb(20 32 54);
```

- `<declaration-value>`
  - : This value matches any sequence of one or more tokens, so long as the sequence does not contain any disallowed token. It represents the entirety of what a valid declaration can have as its value.

> [!NOTE]
> Custom property names are case sensitive — `--my-color` will be treated as a separate custom property to `--My-color`.

## Example

### Basic example

#### HTML

```html
<p id="firstParagraph">
  This paragraph should have a blue background and yellow text.
</p>
<p id="secondParagraph">
  This paragraph should have a yellow background and blue text.
</p>
<div id="container">
  <p id="thirdParagraph">
    This paragraph should have a green background and yellow text.
  </p>
</div>
```

#### CSS

```css
:root {
  --first-color: #1166ff;
  --second-color: #ffff77;
}

#firstParagraph {
  background-color: var(--first-color);
  color: var(--second-color);
}

#secondParagraph {
  background-color: var(--second-color);
  color: var(--first-color);
}

#container {
  --first-color: #229900;
}

#thirdParagraph {
  background-color: var(--first-color);
  color: var(--second-color);
}
```

#### Result

{{EmbedLiveSample('basic example', 500, 130)}}

### Registering custom properties with @property

In this example, we use the {{cssxref("@property")}} at-rule to register a custom property.

#### HTML

Our HTML includes an ordered list ({{htmlelement("ol")}}) containing three list items ({{htmlelement("li")}}).

```html
<ol>
  <li class="one">Item one</li>
  <li class="two">Item two</li>
  <li class="three">Item three</li>
</ol>
```

#### CSS

We use the {{cssxref("@property")}} at-rule to register two custom properties.

```css
@property --itemSize {
  syntax: "<length> | <percentage>";
  inherits: true;
  initial-value: 200px;
}

@property --borderWidth {
  syntax: "<length>";
  inherits: false;
  initial-value: 10px;
}
```

We try to override the custom property values. The values set on `.two` are valid while the values set on `.three` are invalid.

```css
ol {
  --itemSize: 100px;
  --borderWidth: 1px;
}
.two {
  --itemSize: initial;
  --borderWidth: inherit;
}
.three {
  --itemSize: large;
  --borderWidth: 3%;
}
```

We use the two custom properties to style the items, setting the border and width for all the items at once:

```css
li {
  width: var(--itemSize);
  border: var(--borderWidth) solid red;
  background-color: yellow;
  margin-bottom: 10px;
}
```

#### Results

{{EmbedLiveSample('Registering custom properties with @property', 500, 130)}}

The `--itemSize` property is inheritable; the `--borderWidth` is not. The properties are set on the `ol` parent, overriding the default values defined in their registration. Item one inherits the size but not the border width from the OL. The global keywords, declared for `.two`, are valid for `<length>`, so are used. The values in `.three` are invalid ("large" is not a `<length-percentage>` and `3%` is not a `<length>`). See

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{cssxref("var()")}} function
- {{cssxref("@property")}} at-rule
- [Using CSS custom properties (variables)](/en-US/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties) guide
- [Registering CSS custom properties](/en-US/docs/Web/CSS/Guides/Properties_and_values_API/Registering_properties) guide
- [CSS custom properties for cascading variables](/en-US/docs/Web/CSS/Guides/Cascading_variables) module
