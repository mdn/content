---
title: "Clipboard: clipboardchange event"
slug: Web/API/Clipboard/clipboardchange_event
page-type: web-api-event
browser-compat: api.Clipboard.clipboardchange_event
---

{{APIRef("HTML DOM")}}

The **`clipboardchange`** event of the {{domxref("Clipboard")}} interface is fired when the system clipboard contents are changed in any way, for example via a system copy command, or via an API method such as {{domxref("Clipboard.writeText()")}}.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js-nolint
addEventListener("clipboardchange", (event) => { })

onclipboardchange = (event) => { }
```

## Event type

A {{domxref("ClipboardChangeEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("ClipboardChangeEvent")}}

## Examples

### Listening for system copy commands

This example shows how to listen for system copy commands and display the content that was copied to the clipboard.

#### HTML

The HTML consists of three {{htmlelement("p")}} elements — one to display the clipboard contents and two containing sample text to copy.

```html live-sample___basic-usage
<p id="output">Copied text:</p>

<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a mattis purus.
  Donec at ipsum libero. Maecenas at dictum turpis. Vivamus eget aliquet augue.
  Aenean tempor dictum posuere. Vestibulum vehicula, nulla ac convallis feugiat,
  tortor velit lobortis est, vitae convallis velit libero vel urna. Suspendisse
  potenti. In bibendum ex et pellentesque gravida. Phasellus magna risus,
  euismod vitae sem in, viverra venenatis lacus. Sed dignissim risus eu congue
  consequat. Vestibulum nec feugiat libero. Maecenas quis sodales lorem, eu
  luctus nisl. Cras vel diam sed lacus finibus elementum sed sed nunc.
</p>

<p>
  Nam ac metus eget est bibendum pulvinar. Nunc a venenatis lorem. Lorem ipsum
  dolor sit amet, consectetur adipiscing elit. In dignissim, arcu ornare luctus
  pharetra, dui velit faucibus leo, ac posuere ipsum risus vel ligula. Morbi
  varius, felis et ornare efficitur, tortor erat imperdiet lacus, non rhoncus
  lectus sapien sit amet augue. Suspendisse potenti. Sed fringilla mi augue, at
  laoreet felis varius in. Donec venenatis gravida lacus ut rutrum. Donec
  suscipit egestas justo. Proin semper nibh tortor, sit amet elementum metus
  placerat quis. Sed consectetur leo sed lorem varius, sit amet ultrices sem
  tincidunt. Vivamus facilisis at velit eget commodo.
</p>
```

```css hidden live-sample___basic-usage
body {
  margin: 0 5px;
}
#output {
  font-family: Arial, Helvetica, sans-serif;
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 5px;
}
```

#### JavaScript

In our script, we first grab a reference to the output `<p>` element. We then define a `clipboardchange` event handler on the browser's {{domxref("Clipboard")}} object. When the event fires, we invoke the {{domxref("Clipboard.readText()")}} method to read the text that was just copied to the clipboard. When the result is returned, we set it as the value of the output paragraph's `textContent`.

```js live-sample___basic-usage
const outputPara = document.querySelector("#output");

navigator.clipboard.addEventListener("clipboardchange", (event) => {
  navigator.clipboard
    .readText()
    .then((text) => (outputPara.textContent = `Copied text: ${text}`));
});
```

#### Result

The rendered example is as follows:

{{EmbedLiveSample("basic-usage", '100%', "350px", "", "", "", "clipboard-read")}}

Try selecting some text from the example and then copying it to the clipboard using <kbd>Ctrl</kbd> + <kbd>C</kbd> (or <kbd>Cmd</kbd> + <kbd>C</kbd> if you are using a Mac). On your first attempt, you will see a permission prompt asking you to allow permission to read the clipboard contents. After that (or immediately, on subsequent attempts), you should see the text that you copied printed to the output paragraph at the top of the UI.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("ClipboardChangeEvent")}}
- [Clipboard API](/en-US/docs/Web/API/Clipboard_API)
