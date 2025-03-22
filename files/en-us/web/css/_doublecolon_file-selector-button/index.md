---
title: ::file-selector-button
slug: Web/CSS/::file-selector-button
page-type: css-pseudo-element
browser-compat: css.selectors.file-selector-button
---

{{CSSRef}}

The **`::file-selector-button`** [CSS](/en-US/docs/Web/CSS) [pseudo-element](/en-US/docs/Web/CSS/Pseudo-elements) represents the button of an {{HTMLElement("input") }} of [`type="file"`](/en-US/docs/Web/HTML/Element/input/file).

{{InteractiveExample("CSS Demo: ::file-selector-button", "tabbed-shorter")}}

```css interactive-example
input {
  margin-top: 1rem;
}

input::file-selector-button {
  font-weight: bold;
  color: dodgerblue;
  padding: 0.5em;
  border: thin solid grey;
  border-radius: 3px;
}
```

```html interactive-example
<label for="avatar">Choose a profile picture:</label><br />

<input id="avatar" type="file" name="avatar" accept="image/png, image/jpeg" />
```

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
  <input type="file" id="fileUpload" />
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
input[type="file"]::file-selector-button {
  border: 2px solid #6c5ce7;
  padding: 0.2em 0.4em;
  border-radius: 0.2em;
  background-color: #a29bfe;
  transition: 1s;
}

input[type="file"]::file-selector-button:hover {
  background-color: #81ecec;
  border: 2px solid #00cec9;
}
```

#### Result

{{EmbedLiveSample("Basic_example", "100%", 150)}}

Note that `::file-selector-button` is a whole element, and as such matches the rules from the UA stylesheet. In particular, fonts and colors won't necessarily inherit from the `input` element.

### Fallback example

#### HTML

```html
<form>
  <label for="fileUpload">Upload file</label>
  <input type="file" id="fileUpload" />
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
input[type="file"]::file-selector-button {
  border: 2px solid #6c5ce7;
  padding: 0.2em 0.4em;
  border-radius: 0.2em;
  background-color: #a29bfe;
  transition: 1s;
}

input[type="file"]::-ms-browse:hover {
  background-color: #81ecec;
  border: 2px solid #00cec9;
}

input[type="file"]::-webkit-file-upload-button:hover {
  background-color: #81ecec;
  border: 2px solid #00cec9;
}

input[type="file"]::file-selector-button:hover {
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
- [File and Directory Entries API](/en-US/docs/Web/API/File_and_Directory_Entries_API)
- [`<input type="file">`](/en-US/docs/Web/HTML/Element/input/file)
