---
title: HTMLScriptElement
slug: Web/API/HTMLScriptElement
page-type: web-api-interface
browser-compat: api.HTMLScriptElement
---

{{APIRef("HTML DOM")}}

HTML {{HTMLElement("script")}} elements expose the **`HTMLScriptElement`** interface, which provides special properties and methods for manipulating the behavior and execution of `<script>` elements (beyond the inherited {{domxref("HTMLElement")}} interface).

JavaScript files should be served with the `application/javascript` [MIME type](/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types), but browsers are lenient and block them only if the script is served with an image type (`image/*`), video type (`video/*`), audio type (`audio/*`), or `text/csv`. If the script is blocked, its element receives an {{domxref("HTMLElement/error_event", "error")}} event; otherwise, it receives a {{domxref("Window/load_event", "load")}} event.

{{InheritanceDiagram}}

## Instance properties

_Inherits properties from its parent, {{domxref("HTMLElement")}}._

- {{domxref("HTMLScriptElement.type")}}
  - : A string representing the MIME type of the script. It reflects the [`type`](/en-US/docs/Web/HTML/Element/script#type) attribute.
- {{domxref("HTMLScriptElement.src")}}
  - : A string representing the URL of an external script. It reflects the [`src`](/en-US/docs/Web/HTML/Element/script#src) attribute.
- {{domxref("HTMLScriptElement.event")}} {{deprecated_inline}}
  - : A string; an obsolete way of registering event handlers on elements in an HTML document.
- {{domxref("HTMLScriptElement.charset")}} {{deprecated_inline}}
  - : A string representing the character encoding of an external script. It reflects the [`charset`](/en-US/docs/Web/HTML/Element/script#charset) attribute.
- {{domxref("HTMLScriptElement.async")}}, {{domxref("HTMLScriptElement.defer")}}

  - : The `async` and `defer` attributes are boolean attributes that control how the script should be executed. **The `defer` and `async` attributes must not be specified if the `src` attribute is absent.**

    There are three possible execution modes:

    1. If the `async` attribute is present, then the script will be executed asynchronously as soon as it downloads.
    2. If the `async` attribute is absent but the `defer` attribute is present, then the script is executed when [the page has finished parsing](/en-US/docs/Web/API/Document/DOMContentLoaded_event).
    3. If neither attribute is present, then the script is fetched and executed immediately, blocking further parsing of the page.

    The `defer` attribute may be specified with the `async` attribute, so legacy browsers that only support `defer` (and not `async`) fall back to the `defer` behavior instead of the default blocking behavior.

    > **Note:** The exact processing details for these attributes are complex, involving many different aspects of HTML, and therefore are scattered throughout the specification. [These algorithms](https://html.spec.whatwg.org/multipage/scripting.html) describe the core ideas, but they rely on the parsing rules for {{HTMLElement("script")}} [start](https://html.spec.whatwg.org/multipage/syntax.html#start-tags) and [end](https://html.spec.whatwg.org/multipage/syntax.html#end-tags) tags in HTML, [in foreign content](https://html.spec.whatwg.org/multipage/syntax.html#foreign-elements), and [in XML](https://html.spec.whatwg.org/multipage/xhtml.html); the rules for the [`document.write()`](/en-US/docs/Web/API/Document/write) method; the handling of [scripting](https://html.spec.whatwg.org/multipage/webappapis.html); and so on.

- {{domxref("HTMLScriptElement.crossOrigin")}}
  - : A string reflecting the [CORS setting](/en-US/docs/Web/HTML/Attributes/crossorigin) for the script element. For scripts from other [origins](/en-US/docs/Glossary/Origin), this controls if error information will be exposed.
- {{domxref("HTMLScriptElement.text")}}

  - : A string that joins and returns the contents of all [`Text` nodes](/en-US/docs/Web/API/Text) inside the {{HTMLElement("script")}} element (ignoring other nodes like comments) in tree order. On setting, it acts the same way as the [`textContent`](/en-US/docs/Web/API/Node/textContent) IDL attribute.

    > **Note:** When inserted using the [`document.write()`](/en-US/docs/Web/API/Document/write) method, {{HTMLElement("script")}} elements execute (typically synchronously), but when inserted using [`innerHTML`](/en-US/docs/Web/API/Element/innerHTML) or [`outerHTML`](/en-US/docs/Web/API/Element/outerHTML), they do not execute at all.

- {{domxref("HTMLScriptElement.fetchPriority")}} {{Experimental_Inline}}
  - : An optional string representing a hint given to the browser on how it should prioritize fetching of an external script relative to other external scripts. If this value is provided, it must be one of the possible permitted values: `high` to fetch at a high priority, `low` to fetch at a low priority, or `auto` to indicate no preference (which is the default).
- {{domxref("HTMLScriptElement.noModule")}}
  - : A boolean value that if true, stops the script's execution in browsers that support [ES modules](/en-US/docs/Web/JavaScript/Guide/Modules) — used to run fallback scripts in older browsers that do _not_ support JavaScript modules.
- {{domxref("HTMLScriptElement.referrerPolicy")}}
  - : A string that reflects the [`referrerPolicy`](/en-US/docs/Web/HTML/Element/script#referrerpolicy) HTML attribute indicating which referrer to use when fetching the script, and fetches done by that script.

## Static methods

- {{domxref("HTMLScriptElement.supports()")}}
  - : Returns `true` if the browser supports scripts of the specified type and `false` otherwise.
    This method provides a simple and unified method for script-related feature detection.

## Instance methods

_No specific methods; inherits methods from its parent, {{domxref("HTMLElement")}}._

## Events

_No specific events; inherits events from its parent, {{domxref("HTMLElement")}}._

## Examples

### Dynamically importing scripts

Let's create a function that imports new scripts within a document creating a {{HTMLElement("script")}} node _immediately before_ the {{HTMLElement("script")}} that hosts the following code (through {{domxref("document.currentScript")}}).
These scripts will be **asynchronously** executed.
For more details, see the [`defer`](#defer_property) and [`async`](#async_property) properties.

```js
function loadError(oError) {
  throw new URIError(`The script ${oError.target.src} didn't load correctly.`);
}

function prefixScript(url, onloadFunction) {
  const newScript = document.createElement("script");
  newScript.onerror = loadError;
  if (onloadFunction) {
    newScript.onload = onloadFunction;
  }
  document.currentScript.parentNode.insertBefore(
    newScript,
    document.currentScript,
  );
  newScript.src = url;
}
```

This next function, instead of prepending the new scripts immediately before the {{domxref("document.currentScript")}} element, appends them as children of the {{HTMLElement("head")}} tag.

```js
function loadError(oError) {
  throw new URIError(`The script ${oError.target.src} didn't load correctly.`);
}

function affixScriptToHead(url, onloadFunction) {
  const newScript = document.createElement("script");
  newScript.onerror = loadError;
  if (onloadFunction) {
    newScript.onload = onloadFunction;
  }
  document.head.appendChild(newScript);
  newScript.src = url;
}
```

Sample usage:

```js
affixScriptToHead("myScript1.js");
affixScriptToHead("myScript2.js", () => {
  alert('The script "myScript2.js" has been correctly loaded.');
});
```

### Checking if a script type is supported

{{domxref("HTMLScriptElement.supports()")}} provides a unified mechanism for checking whether a browser supports particular types of scripts.

The example below shows how to check for module support, using the existence of the `noModule` attribute as a fallback.

```js
function checkModuleSupport() {
  if ("supports" in HTMLScriptElement) {
    return HTMLScriptElement.supports("module");
  }
  return "noModule" in document.createElement("script");
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
