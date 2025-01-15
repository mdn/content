---
title: autocapitalize
slug: Web/HTML/Global_attributes/autocapitalize
page-type: html-attribute
browser-compat: html.global_attributes.autocapitalize
---

{{HTMLSidebar("Global_attributes")}}

The **`autocapitalize`** [global attribute](/en-US/docs/Web/HTML/Global_attributes) is an [enumerated](/en-US/docs/Glossary/Enumerated) attribute that controls whether inputted text is automatically capitalized and, if so, in what manner. This is relevant to:

- {{htmlelement("input")}} and {{htmlelement("textarea")}} elements.
- Any element with [`contenteditable`](/en-US/docs/Web/HTML/Global_attributes/contenteditable) set on it.

`autocapitalize` doesn't affect behavior when typing on a physical keyboard. It affects the behavior of other input mechanisms such as virtual keyboards on mobile devices and voice input. This can assist users by making data entry quicker and easier, for example by automatically capitalizing the first letter of each sentence.

## Value

Possible values are:

- `none` or `off`
  - : Do not automatically capitalize any text.
- `sentences` or `on`
  - : Automatically capitalize the first character of each sentence.
- `words`
  - : Automatically capitalize the first character of each word.
- `characters`
  - : Automatically capitalize every character.

## Usage notes

- `autocapitalize` can be set on `<input>` and `<textarea>` elements, _and_ on their containing {{htmlelement("form")}} elements. When `autocapitalize` is set on a `<form>` element, it sets the autocapitalize behavior for all contained `<input>`s and `<textarea>`s, overriding any `autocapitalize` values set on contained elements.
- `autocapitalize` has no effect on the `url`, `email`, or `password` `<input>` types, where autocapitalization is never enabled.
- Where `autocapitalize` is not specified, the adopted default behavior varies between browsers. For example:
  - Chrome and Safari default to `on`/`sentences`
  - Firefox defaults to `off`/`none`.

## Examples

### HTML

```html
<p>Form to test different autocapitalize settings:</p>

<form>
  <div>
    <label>
      Default: no autocapitalize set
      <input type="text" name="default" />
    </label>
  </div>
  <div>
    <label>
      autocapitalize="off"
      <input type="text" name="off" autocapitalize="off" />
    </label>
  </div>
  <div>
    <label>
      autocapitalize="none"
      <input type="text" name="none" autocapitalize="none" />
    </label>
  </div>
  <div>
    <label>
      autocapitalize="on"
      <input type="text" name="on" autocapitalize="on" />
    </label>
  </div>
  <div>
    <label>
      autocapitalize="sentences"
      <input type="text" name="sentences" autocapitalize="sentences" />
    </label>
  </div>
  <div>
    <label>
      autocapitalize="words"
      <input type="text" name="words" autocapitalize="words" />
    </label>
  </div>
  <div>
    <label>
      autocapitalize="characters"
      <input type="text" name="characters" autocapitalize="characters" />
    </label>
  </div>
  <div>
    <label>
      autocapitalize="characters" on textarea
      <textarea name="characters-ta" autocapitalize="characters"></textarea>
    </label>
  </div>
</form>

<hr />

<p contenteditable autocapitalize="characters">
  This is a `&lt;p&gt;' with content that is editable and has
  autocapitalize="characters" set on it
</p>
```

```css hidden
div {
  margin-bottom: 20px;
}
```

## Result

Test the effect on each input using a virtual keyboard or voice entry (keyboard entry will not work).

{{ EmbedLiveSample("Examples", "100%", "500") }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
