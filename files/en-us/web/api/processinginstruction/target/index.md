---
title: "ProcessingInstruction: target property"
short-title: target
slug: Web/API/ProcessingInstruction/target
page-type: web-api-instance-property
browser-compat: api.ProcessingInstruction.target
---

{{ApiRef("DOM")}}

The read-only **`target`** property of the {{domxref("ProcessingInstruction")}} interface
represent the application to which the `ProcessingInstruction` is targeted.

For example:

```html
<?xml version="1.0"?>
```

is a processing instruction whose `target` is `xml`.

## Value

A string containing the name of the application.

## Example

### In an XML document

```html hidden
<output></output>
```

```js
let parser = new DOMParser();
const doc = parser.parseFromString(
  '<?xml version="1.0"?><test/>',
  "application/xml",
);
const pi = doc.createProcessingInstruction(
  "xml-stylesheet",
  'href="mycss.css" type="text/css"',
);
doc.insertBefore(pi, doc.firstChild);

const output = document.querySelector("output");
output.textContent = `This processing instruction's target is: ${doc.firstChild.target}`;
```

{{EmbedLiveSample("In an XML document", "100%", 50)}}

### In an HTML document

The processing instruction line will be considered, and represented, as a {{domxref("Comment")}} object.

```html
<?xml version="1.0"?>
<pre></pre>
```

```js
const node = document.querySelector("pre").previousSibling.previousSibling;
const result = `Node with the processing instruction: ${node.nodeName}: ${node.nodeValue}\n`;
document.querySelector("pre").textContent = result;
```

{{EmbedLiveSample("In an HTML document", "100%", 50)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [DOM API](/en-US/docs/Web/API/Document_Object_Model)
