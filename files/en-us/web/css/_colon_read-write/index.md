---
title: :read-write
slug: Web/CSS/:read-write
page-type: css-pseudo-class
browser-compat: css.selectors.read-write
sidebar: cssref
---

The **`:read-write`** [CSS](/en-US/docs/Web/CSS) [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes) represents an element (such as `input` or `textarea`) that is editable by the user.

{{InteractiveExample("CSS Demo: :read-write", "tabbed-shorter")}}

```css interactive-example
label,
input[type="submit"] {
  display: block;
  margin-top: 1em;
}

*:read-write {
  background-color: ivory;
  border: 2px solid darkorange;
  border-radius: 5px;
}
```

```html interactive-example
<p>Please fill in your details:</p>

<form>
  <label for="email">Email Address:</label>
  <input id="email" name="email" type="email" value="test@example.com" />

  <label for="note">Short note about yourself:</label>
  <textarea id="note" name="note">Don't be shy</textarea>

  <label for="pic">Your picture:</label>
  <input id="pic" name="pic" type="file" />

  <input type="submit" value="Submit form" />
</form>
```

## Syntax

```css
:read-write {
  /* ... */
}
```

## Examples

### Confirming form information in read-only/read-write controls

One use of `readonly` form controls is to allow the user to verify information that have entered earlier (for example, their address), and submit that information with the rest of the form.
In the example below, the `:read-write` pseudo-class provides a way to style the editable `<textarea>`, and the `:read-only` pseudo-class is used to remove the styling that makes the `<textarea>` with a `readonly` attribute look like a regular paragraph:

```css hidden
body {
  font-family: "Josefin Sans", sans-serif;
  margin: 10px auto;
}

legend {
  color: white;
  background: black;
  padding: 5px 10px;
}

fieldset > div {
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
}

button,
label,
textarea {
  display: block;
  font-family: inherit;
  font-size: 100%;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  padding: 5px;
  height: 30px;
}

textarea {
  width: 50%;
}

textarea {
  height: 70px;
  resize: none;
}

label {
  width: 40%;
}
```

```css
textarea:read-only {
  border: 0;
}

textarea:read-write {
  box-shadow: inset 1px 1px 3px #ccc;
  border-radius: 5px;
}
```

```html
<form>
  <fieldset>
    <legend>Confirm details</legend>
    <div>
      <label for="address">Address:</label>
      <textarea id="address" name="address" readonly>
123 Choco Mountain,
Awesome Ridge,
CA</textarea
      >
    </div>
    <div>
      <label for="instructions">Delivery instructions</label>
      <textarea id="instructions" name="instructions"></textarea>
    </div>
  </fieldset>
  <button type="submit">Confirm</button>
</form>
```

{{embedlivesample("", , "300")}}

### Styling read-write non-form controls

This selector doesn't just select {{htmlElement("input")}}/{{htmlElement("textarea")}} elements — it will select _any_ element that can be edited by the user, such as a {{htmlelement("p")}} element with [`contenteditable`](/en-US/docs/Web/HTML/Reference/Global_attributes/contenteditable) set on it.

```html
<p contenteditable>This paragraph is editable; it is read-write.</p>

<p>This paragraph is not editable; it is read-only.</p>
```

```css
body {
  font-family: sans-serif;
}

p {
  font-size: 150%;
  padding: 5px;
  border-radius: 5px;
}

p:read-only {
  background-color: red;
  color: white;
}

p:read-write {
  background-color: lime;
}
```

{{EmbedLiveSample('Styling_read-write_non-form_controls')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref(":read-only")}}
- HTML [`contenteditable`](/en-US/docs/Web/HTML/Reference/Global_attributes/contenteditable) attribute
