---
title: '::file-selector-button'
slug: Web/CSS/::file-selector-button
tags:
  - CSS
  - Non-standard
  - Pseudo-element
  - Reference
  - Selector
  - WebKit
browser-compat: css.selectors.file-selector-button
---
{{CSSRef}}

The **`::file-selector-button`** [CSS](/en-US/docs/Web/CSS) [pseudo-element](/en-US/docs/Web/CSS/Pseudo-elements) represents the button of an {{HTMLElement("input") }} of  [`type="file"`](/en-US/docs/Web/HTML/Element/input/file).

> **Note:** Older versions of WebKit/Blink compatible browsers like Chrome, Opera and Safari (indicated by the `-webkit` prefix) supported a non-standard pseudo-element `::-webkit-file-upload-button`.
>
> Legacy Edge and later versions of IE supported a non-standard pseudo-element `::-ms-browse`.
>
> Both of these pseudo-elements serve the same purpose as `::file-selector-button`.

## Syntax

```css
selector::file-selector-button
```

## Examples

### Basic example

#### HTML

```html
<form>
  <label for="fileUpload">Upload file</label>
  <input type="file" id="fileUpload">
</form>
```

#### CSS

```css hidden
form {
  display: flex;
  gap: 1em;
  align-items: center;
}
```

```css
input[type=file]::file-selector-button {
  border: 2px solid #6c5ce7;
  padding: .2em .4em;
  border-radius: .2em;
  background-color: #a29bfe;
  transition: 1s;
}

input[type=file]::file-selector-button:hover {
  background-color: #81ecec;
  border: 2px solid #00cec9;
}
```

#### Result

{{EmbedLiveSample("Basic_example", "100%", 150)}}

Example with fallback for older browsers supporting the `-webkit` and `-ms` prefixes. Note that as a selector you will need to write out the whole code block twice, as an unrecognized selector invalidates the whole list.

Note that `::file-selector-button` is a whole element, and as such matches the rules from the UA stylesheet. In particular, fonts and colors won't necessarily inherit from the `input` element.

### Fallback example

#### HTML

```html
<form>
  <label for="fileUpload">Upload file</label>
  <input type="file" id="fileUpload">
</form>
```

#### CSS

```css hidden
form {
  display: flex;
  gap: 1em;
  align-items: center;
}
```

```css
input[type=file]::-ms-browse {
  border: 2px solid #6c5ce7;
  padding: .2em .4em;
  border-radius: .2em;
  background-color: #a29bfe;
}

input[type=file]::-webkit-file-upload-button {
  border: 2px solid #6c5ce7;
  padding: .2em .4em;
  border-radius: .2em;
  background-color: #a29bfe;
  transition: 1s;
}

input[type=file]::file-selector-button {
  border: 2px solid #6c5ce7;
  padding: .2em .4em;
  border-radius: .2em;
  background-color: #a29bfe;
  transition: 1s;
}

input[type=file]::-ms-browse:hover {
  background-color: #81ecec;
  border: 2px solid #00cec9;
}

input[type=file]::-webkit-file-upload-button:hover {
  background-color: #81ecec;
  border: 2px solid #00cec9;
}

input[type=file]::file-selector-button:hover {
  background-color: #81ecec;
  border: 2px solid #00cec9;
}
```

#### Result

{{EmbedLiveSample("Fallback_example", "100%", 150)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebKit CSS extensions](/en-US/docs/Web/CSS/WebKit_Extensions)
- [Microsoft CSS extensions](/en-US/docs/Web/CSS/Microsoft_Extensions)
- [File and Directory Entries API](/en-US/docs/Web/API/File_and_Directory_Entries_API)
- [File and Directory Entries API support in Firefox](/en-US/docs/Web/API/File_and_Directory_Entries_API/Firefox_support)
- [`<input type="file">`](/en-US/docs/Web/HTML/Element/input/file)
