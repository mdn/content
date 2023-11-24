---
title: CSS custom properties for cascading variables
slug: Web/CSS/CSS_cascading_variables
page-type: css-module
browser-compat:
  - css.properties.custom-property
  - css.properties.custom-property.var
---

{{CSSRef}}

The **CSS custom properties for cascading variables** module adds support for cascading variables in for CSS properties and lets you create custom properties to define these variables.

Custom properties are defined using [two dashes (`--`)](/en-US/docs/Web/CSS/--*) and are subject to the [cascade](/en-US/docs/Web/CSS/Cascade), so they inherit their value from their parent.
The purpose of custom properties is to help manage complex CSS stylesheets by allowing you to define a property's value in one place and reuse that value in multiple declarations across a project.

A benefit of custom properties is improved readability and semantics.
For example, `--dark-grey-text` and `--dark-footer` are easier to understand than hexadecimal colors such as `#00ff00`, and the context of their use is much more apparent.

## Example

The following example shows a

```html
<div class="container">
  <div class="one">
    <p>One</p>
  </div>
  <div class="two">
    <p>Two</p>
    <div class="three">
      <p>Three</p>
    </div>
  </div>
</div>
```

```css hidden
body {
  font-family: sans-serif;
}

div,
input,
textarea {
  border: 2px black solid;
  padding: 4px;
  margin: 4px;
}

.container {
  display: grid;
  gap: 10px;
}
```

```css
/* Define --main-bg-color here */
.container {
  --main-bg-color: cornflowerblue;
}

/* For each class, set some colors */
.one {
  background-color: var(--main-bg-color);
}
.two {
  color: black;
  background-color: aquamarine;
}
.three {
  background-color: var(--main-bg-color);
}
```

{{EmbedLiveSample("",600,360)}}

## Reference

### Properties

- {{cssxref("--*")}}

### Functions

- {{cssxref("var")}}

## Guides

- [Using CSS custom properties (variables)](/en-US/docs/Web/CSS/Using_CSS_custom_properties)

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [CSS cascade and inheritance](/en-US/docs/Web/CSS/CSS_cascade)
- [CSS Properties and Values API](/en-US/docs/Web/CSS/CSS_properties_and_values_API) module
- [CSS `env()`](Web/CSS/env)
- [CSS Typed Object Model](/en-US/docs/Web/API/CSS_Typed_OM_API)
- [CSS Houdini](/en-US/docs/Web/Guide/Houdini)
