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
    <label for="default">Default: no autocapitalize set</label>
    <input type="text" id="default" name="default" />
  </div>
  <div>
    <label for="off">autocapitalize="off"</label>
    <input type="text" id="off" name="off" autocapitalize="off" />
  </div>
  <div>
    <label for="none">autocapitalize="none"</label>
    <input type="text" id="none" name="none" autocapitalize="none" />
  </div>
  <div>
    <label for="on">autocapitalize="on"</label>
    <input type="text" id="on" name="on" autocapitalize="on" />
  </div>
  <div>
    <label for="sentences">autocapitalize="sentences"</label>
    <input
      type="text"
      id="sentences"
      name="sentences"
      autocapitalize="sentences" />
  </div>
  <div>
    <label for="words">autocapitalize="words"</label>
    <input type="text" id="words" name="words" autocapitalize="words" />
  </div>
  <div>
    <label for="characters">autocapitalize="characters"</label>
    <input
      type="text"
      id="characters"
      name="characters"
      autocapitalize="characters" />
  </div>
  <div>
    <label for="characters-ta">autocapitalize="characters" on textarea</label>
    <textarea
      type="text"
      id="characters-ta"
      name="characters-ta"
      autocapitalize="characters">
    </textarea>
  </div>
</form>

<hr />

<p contenteditable autocapitalize="characters">
  This content is editable and has autocapitalize="characters" set on it
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
