---
title: HTMLScriptElement
slug: Web/API/HTMLScriptElement
tags:
  - API
  - HTML DOM
  - Interface
  - NeedsNewLayout
  - Reference
browser-compat: api.HTMLScriptElement
---
{{APIRef("HTML DOM")}}

HTML {{HTMLElement("script")}} elements expose the **`HTMLScriptElement`** interface, which provides special properties and methods for manipulating the behavior and execution of `<script>` elements (beyond the inherited {{domxref("HTMLElement")}} interface).

JavaScript files should be served with the `application/javascript` [MIME type](/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types), but browsers are lenient and block them only if the script is served with an image type (`image/*`), video type (`video/*`), audio type (`audio/*`), or `text/csv`. If the script is blocked, its element receives an {{event("error")}} event; otherwise, it receives a {{event("load")}} event.

{{InheritanceDiagram(600, 120)}}

## Properties

_Inherits properties from its parent, {{domxref("HTMLElement")}}._

- {{domxref("HTMLScriptElement.type")}}
  - : Is a {{domxref("DOMString")}} representing the MIME type of the script. It reflects the {{htmlattrxref("type","script")}} attribute.
- {{domxref("HTMLScriptElement.src")}}
  - : Is a {{domxref("DOMString")}} representing the URL of an external script. It reflects the {{htmlattrxref("src","script")}} attribute.
- {{domxref("HTMLScriptElement.event")}} {{deprecated_inline}}
  - : Is a {{domxref("DOMString")}}; an obsolete way of registering event handlers on elements in an HTML document.
- {{domxref("HTMLScriptElement.charset")}} {{deprecated_inline}}
  - : Is a {{domxref("DOMString")}} representing the character encoding of an external script. It reflects the {{htmlattrxref("charset","script")}} attribute.
- {{domxref("HTMLScriptElement.async")}}, {{domxref("HTMLScriptElement.defer")}}

  - : The `async` and `defer` attributes are boolean attributes that control how the script should be executed. **The `defer` and `async` attributes must not be specified if the `src` attribute is absent.**

    There are three possible execution modes:

    1.  If the `async` attribute is present, then the script will be executed asynchronously as soon as it downloads.
    2.  If the `async` attribute is absent but the `defer` attribute is present, then the script is executed when [the page has finished parsing](/en-US/docs/Web/API/Window/DOMContentLoaded_event).
    3.  If neither attribute is present, then the script is fetched and executed immediately, blocking further parsing of the page.

    The `defer` attribute may be specified with the `async` attribute, so legacy browsers that only support `defer` (and not `async`) fall back to the `defer` behavior instead of the default blocking behavior.

    > **Note:** The exact processing details for these attributes are complex, involving many different aspects of HTML, and therefore are scattered throughout the specification. [These algorithms](https://www.w3.org/html/wg/drafts/html/master/scripting-1.html#prepare-a-script) describe the core ideas, but they rely on the parsing rules for {{HTMLElement("script")}} [start](https://www.w3.org/html/wg/drafts/html/master/syntax.html#scriptTag) and [end](https://www.w3.org/html/wg/drafts/html/master/syntax.html#scriptEndTag) tags in HTML, [in foreign content](https://www.w3.org/html/wg/drafts/html/master/syntax.html#scriptForeignEndTag), and [in XML](https://www.w3.org/html/wg/drafts/html/master/the-xhtml-syntax.html#scriptTagXML); the rules for the [`document.write()`](/en-US/docs/Web/API/Document/write) method; the handling of [scripting](https://www.w3.org/html/wg/drafts/html/master/webappapis.html#scripting); and so on.

- {{domxref("HTMLScriptElement.crossOrigin")}} {{experimental_inline}}
  - : Is a {{domxref("DOMString")}} reflecting the [CORS setting](/en-US/docs/Web/HTML/Attributes/crossorigin) for the script element. For scripts from other [origins](/en-US/docs/Glossary/Origin), this controls if error information will be exposed.
- {{domxref("HTMLScriptElement.text")}}

  - : Is a {{domxref("DOMString")}} that joins and returns the contents of all [`Text` nodes](/en-US/docs/Web/API/Text) inside the {{HTMLElement("script")}} element (ignoring other nodes like comments) in tree order. On setting, it acts the same way as the [`textContent`](/en-US/docs/Web/API/Node/textContent) IDL attribute.

    > **Note:** When inserted using the [`document.write()`](/en-US/docs/Web/API/Document/write) method, {{HTMLElement("script")}} elements execute (typically synchronously), but when inserted using [`innerHTML`](/en-US/docs/Web/API/Element/innerHTML) or [`outerHTML`](/en-US/docs/Web/API/Element/outerHTML), they do not execute at all.

- {{domxref("HTMLScriptElement.noModule")}}
  - : Is a boolean value that if true, stops the script's execution in browsers that support [ES2015 modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/) — used to run fallback scripts in older browsers that do _not_ support JavaScript modules.
- {{domxref("HTMLScriptElement.referrerPolicy")}}
  - : Is a {{domxref("DOMString")}} that reflects the {{htmlattrxref("referrerPolicy", "script")}} HTML attribute indicating which referrer to use when fetching the script, and fetches done by that script.


## Static methods

- {{domxref("HTMLScriptElement.supports()")}}
  - : Returns `true` if the browser supports scripts of the specified type and `false` otherwise.
     This method provides a simple and unified method for script-related feature detection.

## Methods

_No specific methods; inherits methods from its parent, {{domxref("HTMLElement")}}._

## Examples

### Dynamically importing scripts

Let's create a function that imports new scripts within a document creating a {{HTMLElement("script")}} node _immediately before_ the {{HTMLElement("script")}} that hosts the following code (through {{domxref("document.currentScript")}}).
These scripts will be **asynchronously** executed.
For more details, see the [`defer`](#defer_property) and [`async`](#async_property) properties.

```js
function loadError(oError) {
  throw new URIError("The script " + oError.target.src + " didn't load correctly.");
}

function prefixScript(url, onloadFunction) {
  var newScript = document.createElement("script");
  newScript.onerror = loadError;
  if (onloadFunction) { newScript.onload = onloadFunction; }
  document.currentScript.parentNode.insertBefore(newScript, document.currentScript);
  newScript.src = url;
}
```

This next function, instead of prepending the new scripts immediately before the {{domxref("document.currentScript")}} element, appends them as children of the {{HTMLElement("head")}} tag.

```js
function loadError(oError) {
  throw new URIError("The script " + oError.target.src + " didn't load correctly.");
}

function affixScriptToHead(url, onloadFunction) {
  var newScript = document.createElement("script");
  newScript.onerror = loadError;
  if (onloadFunction) { newScript.onload = onloadFunction; }
  document.head.appendChild(newScript);
  newScript.src = url;
}
```

Sample usage:

```js
affixScriptToHead("myScript1.js");
affixScriptToHead("myScript2.js", function () { alert("The script \"myScript2.js\" has been correctly loaded."); });
```

### Checking if a script type is supported

{{domxref("HTMLScriptElement.supports()")}} provides a unified mechanism for checking whether a browser supports particular types of scripts.

The example below shows how to check for module support, using the existance of the `noModule` attribute as a fallback.
```js
function checkModuleSupport() {
  if ('supports' in HTMLScriptElement) {
    return HTMLScriptElement.supports('module');
  }
  return 'noModule' in document.createElement('script');
}
```

Classic scripts are assumed to be supported on all browsers.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- HTML {{HTMLElement("script")}} element
- HTML {{HTMLElement("noscript")}} element
- {{domxref("document.currentScript")}}
- [Web Workers](/en-US/docs/Web/API/Web_Workers_API/Using_web_workers) (code snippets similar to scripts but executed in [another global context](/en-US/docs/Web/API/DedicatedWorkerGlobalScope))
- [Ryan Grove's \<script> and \<link> node event compatibility chart](https://pieisgood.org/test/script-link-events/)
