---
title: "HTML attribute: pattern"
short-title: pattern
slug: Web/HTML/Attributes/pattern
page-type: html-attribute
browser-compat: html.elements.input.pattern
---

{{HTMLSidebar}}

The **`pattern`** attribute specifies a [regular expression](/en-US/docs/Web/JavaScript/Guide/Regular_expressions) the form control's value should match. If a non-`null` value doesn't conform to the constraints set by the `pattern` value, the {{domxref('ValidityState')}} object's read-only {{domxref('ValidityState.patternMismatch','patternMismatch')}} property will be true.

{{EmbedInteractiveExample("pages/tabbed/attribute-pattern.html", "tabbed-shorter")}}

## Overview

The `pattern` attribute is an attribute of the {{HTMLElement("input/text", "text")}}, {{HTMLElement("input/tel", "tel")}}, {{HTMLElement("input/email", "email")}}, {{HTMLElement("input/url", "url")}}, {{HTMLElement("input/password", "password")}}, and {{HTMLElement("input/search", "search")}} input types.

The `pattern` attribute, when specified, is a regular expression which the input's [`value`](/en-US/docs/Web/HTML/Element/input#value) must match for the value to pass [constraint validation](/en-US/docs/Web/HTML/Constraint_validation). It must be a valid JavaScript regular expression, as used by the {{jsxref("RegExp")}} type, and as documented in our [guide on regular expressions](/en-US/docs/Web/JavaScript/Guide/Regular_expressions).

The pattern's regular expression is compiled with the [`'v'` flag](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Character_class#v-mode_character_class). This makes the regular expression [unicode-aware](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode), and also changes how character classes are interpreted. This allows character class set intersection and subtraction operations, and in addition to `]` and `\`, the following characters must be escaped using a `\` backslash if they represent literal characters: `(`, `)`, `[`, `{`, `}`, `/`, `-`, `|`. Before mid-2023, the `'u'` flag was specified instead; If you're updating older code, [this document outlines the differences](https://github.com/tc39/proposal-regexp-v-flag#how-is-the-v-flag-different-from-the-u-flag).

The pattern's regular expression must match the entire input's `value`, rather than matching a substring - as if a `^(?:` were implied at the start of the pattern and `)$` at the end.

No forward slashes should be specified around the pattern text. No regular expression is applied if the attribute value is absent, an empty string, or invalid.

Some of the input types supporting the pattern attribute, notably the {{HTMLElement("input/email", "email")}} and {{HTMLElement("input/url", "url")}} input types, have expected value syntaxes that must be matched. If the pattern attribute isn't present, and the value doesn't match the expected syntax for that value type, the {{domxref('ValidityState')}} object's read-only {{domxref('ValidityState.typeMismatch','typeMismatch')}} property will be true.

### Constraint validation

If the input's value is not the empty string and the value does not match the entire regular expression, there is a constraint violation reported by the {{domxref('ValidityState')}} object's {{domxref('ValidityState.patternMismatch','patternMismatch')}} property being `true`.

> [!NOTE]
> If the `pattern` attribute is specified with no value, its value is implicitly the empty string. Thus, **any non-empty** input `value` will result in constraint violation.

### Usability and accessibility considerations

When including a `pattern`, provide a description of the pattern in visible text near the control. Additionally, include a [`title`](/en-US/docs/Web/HTML/Element/input#title) attribute which gives a description of the pattern. User agents may use the title contents during constraint validation to tell the user that the pattern is not matched. Some browsers show a tooltip with title contents, improving usability for sighted users. Additionally, assistive technology may read the title aloud when the control gains focus, but this should not be relied upon for accessibility.

Only relying on the `title` attribute for the visual display of text content is discouraged, as many user agents do not expose the attribute in an accessible manner. Although some browsers show a tooltip when an element with a title is hovered, that leaves out keyboard-only and touch-only users. This is one of the several reasons you must include information informing users how to fill out the control to match the requirements.

While `title`s are used by some browsers to populate error messaging, because browsers sometimes also show the title as text on hover, it therefore shows in non-error situations, so be careful not to word titles as if an error has occurred.

## Examples

### Matching a phone number

Given the following:

```html
<p>
  <label>
    Enter your phone number in the format (123) - 456 - 7890 (<input
      name="tel1"
      type="tel"
      pattern="[0-9]{3}"
      placeholder="###"
      aria-label="3-digit area code"
      size="2" />) -
    <input
      name="tel2"
      type="tel"
      pattern="[0-9]{3}"
      placeholder="###"
      aria-label="3-digit prefix"
      size="2" />
    -
    <input
      name="tel3"
      type="tel"
      pattern="[0-9]{4}"
      placeholder="####"
      aria-label="4-digit number"
      size="3" />
  </label>
</p>
```

Here we have 3 sections for a north American phone number with an implicit label encompassing all three components of the phone number, expecting 3-digits, 3-digits and 4-digits respectively, as defined by the `pattern` attribute set on each.

If the values are too long or too short, or contain characters that aren't digits, the `patternMismatch` will be true. When `true`, the element matches the {{cssxref(":invalid")}} CSS pseudo-classes.

```css
input:invalid {
  border: red solid 3px;
}
```

{{EmbedLiveSample("Matching_a_phone_number", 300, 80)}}

If we had used [`minlength`](/en-US/docs/Web/HTML/Attributes/minlength) and [`maxlength`](/en-US/docs/Web/HTML/Attributes/maxlength) attributes instead, we may have seen {{domxref('validityState.tooLong')}} or {{domxref('validityState.tooShort')}} being true.

### Specifying a pattern

You can use the [`pattern`](/en-US/docs/Web/HTML/Element/input#pattern) attribute to specify a regular expression that the inputted value must match in order to be considered valid (see [Validating against a regular expression](/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation#validating_against_a_regular_expression) for a crash course on using regular expressions to validate inputs).

The example below restricts the value to 4-8 characters and requires that it contain only lower-case letters.

```html
<form>
  <div>
    <label for="uname">Choose a username: </label>
    <input
      type="text"
      id="uname"
      name="name"
      required
      size="45"
      pattern="[a-z]{4,8}"
      title="4 to 8 lowercase letters" />
    <span class="validity"></span>
    <p>Usernames must be lowercase and 4-8 characters in length.</p>
  </div>
  <div>
    <button>Submit</button>
  </div>
</form>
```

```css hidden
div {
  margin-bottom: 10px;
  position: relative;
}

p {
  font-size: 80%;
  color: #999;
}

input + span {
  padding-right: 30px;
}

input:invalid + span::after {
  position: absolute;
  content: "✖";
  padding-left: 5px;
}

input:valid + span::after {
  position: absolute;
  content: "✓";
  padding-left: 5px;
}
```

This renders like so:

{{ EmbedLiveSample('Specifying_a_pattern', 600, 110) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Constraint validation](/en-US/docs/Web/HTML/Constraint_validation)
- [Forms: Data form validation](/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Regular Expressions](/en-US/docs/Web/JavaScript/Guide/Regular_expressions)
