---
title: syntax
slug: Web/CSS/@property/syntax
page-type: css-at-rule-descriptor
browser-compat: css.at-rules.property.syntax
---

{{CSSRef}}

The **`syntax`** descriptor of the {{cssxref("@property")}} [at-rule](/en-US/docs/Web/CSS/CSS_syntax/At-rule) defines the allowed value types for the registered [CSS custom property](/en-US/docs/Web/CSS/--*).
It controls how the property's specified value is processed to derive the {{cssxref("computed_value","computed value")}}.
It is a required descriptor; if missing or invalid, the entire `@property` rule is invalid and ignored.

## Syntax

```css
/* A data type name */
syntax: "<color>";

/* A '|' combinator for multiple data types */
syntax: "<length> | <percentage>";

/* Space-separated list of values */
syntax: "<color>+";

/* Comma-separated list of values */
syntax: "<length>#";

/* Keywords */
syntax: "small | medium | large";

/* Combination of data type and keyword */
syntax: "<length> | auto";

/* Universal syntax value */
syntax: "*";
```

### Values

A string (known as the syntax string) that defines the allowed values.
It can be one of the following:

- One or more syntax component names, which can be:
  - Data type names (written with angle brackets, such as `<color>` or `<length>`)
  - Keywords (written without angle brackets, such as `auto` or `none`)
- The universal syntax `*`, which accepts any valid CSS value.
  It cannot be multiplied or combined with other syntax components.

The syntax component names can be used alone or multiplied and combined in different ways:

- The `+` (space-separated) and `#` (comma-separated) multipliers indicate that a list of values is expected.
  For example, `<color>#` means a comma-separated list of `<color>` values is the expected syntax.

- The vertical line (`|`) combinator can create "or" conditions for the expected syntax.
  For example, `<length> | auto` accepts `<length>` or `auto`, and `<color># | <integer>#` expects a comma-separated list of `<color>` values or a comma-separated list of `<integer>` values.

The following syntax component names are supported:

- `"<angle>"`
  - : Accepts any valid {{cssxref("&lt;angle&gt;")}} value.
- `"<color>"`
  - : Accepts any valid {{cssxref("&lt;color&gt;")}} value.
- `"<custom-ident>"`
  - : Accepts any valid {{cssxref("&lt;custom-ident&gt;")}} value.
- `"<image>"`
  - : Accepts any valid {{cssxref("&lt;image&gt;")}} value.
- `"<integer>"`
  - : Accepts any valid {{cssxref("&lt;integer&gt;")}} value.
- `"<length>"`
  - : Accepts any valid {{cssxref("&lt;length&gt;")}} value.
- `"<length-percentage>"`
  - : Accepts any valid {{cssxref("&lt;length&gt;")}} or {{cssxref("&lt;percentage&gt;")}} value and any valid {{cssxref("calc", "calc()")}} expression combining `<length>` and `<percentage>` values.
- `"<number>"`
  - : Accepts any valid {{cssxref("&lt;number&gt;")}} value.
- `"<percentage>"`
  - : Accepts any valid {{cssxref("&lt;percentage&gt;")}} value.
- `"<resolution>"`
  - : Accepts any valid {{cssxref("&lt;resolution&gt;")}} value.
- `"<string>"`
  - : Accepts any valid {{cssxref("&lt;string&gt;")}} value.
- `"<time>"`
  - : Accepts any valid {{cssxref("&lt;time&gt;")}} value.
- `"<transform-function>"`
  - : Accepts any valid {{cssxref("&lt;transform-function&gt;")}} value.
- `"<transform-list>"`
  - : Accepts a list of valid {{cssxref("&lt;transform-function&gt;")}} values. It is equivalent to `"<transform-function>+"`.
- `"<url>"`
  - : Accepts any valid {{cssxref("url_value", "&lt;url&gt;")}} value.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Registering a custom property with type checking

This example shows how to define a custom property `--my-color` that allows only `<color>` values:

```css
@property --my-color {
  syntax: "<color>";
  inherits: false;
  initial-value: #c0ffee;
}
```

Using [JavaScript](/en-US/docs/Web/JavaScript) {{domxref('CSS.registerProperty_static', 'CSS.registerProperty()')}}:

```js
window.CSS.registerProperty({
  name: "--my-color",
  syntax: "<color>",
  inherits: false,
  initialValue: "#c0ffee",
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Other {{cssxref("@property")}} descriptors: {{cssxref("@property/inherits","inherits")}} and {{cssxref("@property/initial-value", "initial-value")}}
- [CSS Properties and Values API](/en-US/docs/Web/API/CSS_Properties_and_Values_API)
- [CSS Painting API](/en-US/docs/Web/API/CSS_Painting_API)
- [CSS Typed Object Model](/en-US/docs/Web/API/CSS_Typed_OM_API)
- [Houdini APIs](/en-US/docs/Web/API/Houdini_APIs)
