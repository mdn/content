---
title: HTMLScriptElement
slug: Web/API/HTMLScriptElement
page-type: web-api-interface
browser-compat: api.HTMLScriptElement
---

{{APIRef("HTML DOM")}}

HTML {{HTMLElement("script")}} elements expose the **`HTMLScriptElement`** interface, which provides special properties and methods for manipulating the behavior and execution of `<script>` elements (beyond the inherited {{domxref("HTMLElement")}} interface).

JavaScript files should be served with the `text/javascript` [MIME type](/en-US/docs/Web/HTTP/MIME_types), but browsers are lenient and block them only if the script is served with an image type (`image/*`), video type (`video/*`), audio type (`audio/*`), or `text/csv`. If the script is blocked, its element receives an {{domxref("HTMLElement/error_event", "error")}} event; otherwise, it receives a {{domxref("Window/load_event", "load")}} event.

{{InheritanceDiagram}}

## Instance properties

_Inherits properties from its parent, {{domxref("HTMLElement")}}._

- {{domxref("HTMLScriptElement.attributionSrc")}} {{securecontext_inline}} {{experimental_inline}}
  - : Gets and sets the [`attributionsrc`](/en-US/docs/Web/HTML/Element/script#attributionsrc) attribute on an {{htmlelement("script")}} element programmatically, reflecting the value of that attribute. `attributionsrc` specifies that you want the browser to send an {{httpheader("Attribution-Reporting-Eligible")}} header along with the script resource request. On the server-side this is used to trigger sending an {{httpheader("Attribution-Reporting-Register-Source")}} or {{httpheader("Attribution-Reporting-Register-Trigger")}} header in the response, to register a JavaScript-based [attribution source](/en-US/docs/Web/API/Attribution_Reporting_API/Registering_sources#javascript-based_event_sources) or [attribution trigger](/en-US/docs/Web/API/Attribution_Reporting_API/Registering_triggers#javascript-based_attribution_triggers), respectively.
- {{domxref("HTMLScriptElement.async")}}
  - : A boolean value that controls how the script should be executed. For classic scripts, if the `async` property is set to `true`, the external script will be fetched in parallel to parsing and evaluated as soon as it is available. For [module scripts](/en-US/docs/Web/JavaScript/Guide/Modules), if the `async` property is set to `true`, the script and all their dependencies will be fetched in parallel to parsing and evaluated as soon as they are available.
- {{domxref("HTMLScriptElement.blocking")}}
  - : A string indicating that certain operations should be blocked on the fetching of the script. It reflects the `blocking` attribute of the {{HTMLElement("script")}} element.
- `HTMLScriptElement.charset` {{deprecated_inline}}
  - : A string representing the character encoding of an external script. It reflects the [`charset`](/en-US/docs/Web/HTML/Element/script#charset) attribute.
- {{domxref("HTMLScriptElement.crossOrigin")}}
  - : A string reflecting the [CORS setting](/en-US/docs/Web/HTML/Attributes/crossorigin) for the script element. For classic scripts from other [origins](/en-US/docs/Glossary/Origin), this controls if error information will be exposed.
- {{domxref("HTMLScriptElement.defer")}}
  - : A boolean value that controls how the script should be executed. For classic scripts, if the `defer` property is set to `true`, the external script will be executed after the document has been parsed, but before firing {{domxref("Document/DOMContentLoaded_event", "DOMContentLoaded")}} event. For [module scripts](/en-US/docs/Web/JavaScript/Guide/Modules), the `defer` property has no effect.
- `HTMLScriptElement.event` {{deprecated_inline}}
  - : A string; an obsolete way of registering event handlers on elements in an HTML document.
- {{domxref("HTMLScriptElement.fetchPriority")}}
  - : An optional string representing a hint given to the browser on how it should prioritize fetching of an external script relative to other external scripts. If this value is provided, it must be one of the possible permitted values: `high` to fetch at a high priority, `low` to fetch at a low priority, or `auto` to indicate no preference (which is the default). It reflects the `fetchpriority` attribute of the {{HTMLElement("script")}} element.
- {{domxref("HTMLScriptElement.integrity")}}
  - : A string that contains inline metadata that a browser can use to verify that a fetched resource has been delivered without unexpected manipulation. It reflects the `integrity` attribute of the {{HTMLElement("script")}} element.
- {{domxref("HTMLScriptElement.noModule")}}
  - : A boolean value that if true, stops the script's execution in browsers that support [ES modules](/en-US/docs/Web/JavaScript/Guide/Modules) — used to run fallback scripts in older browsers that do _not_ support JavaScript modules.
- {{domxref("HTMLScriptElement.referrerPolicy")}}
  - : A string that reflects the [`referrerPolicy`](/en-US/docs/Web/HTML/Element/script#referrerpolicy) HTML attribute indicating which referrer to use when fetching the script, and fetches done by that script.
- {{domxref("HTMLScriptElement.src")}}
  - : A string representing the URL of an external script; this can be used as an alternative to embedding a script directly within a document. It reflects the `src` attribute of the {{HTMLElement("script")}} element.
- {{domxref("HTMLScriptElement.text")}}

  - : A string that joins and returns the contents of all {{domxref("Text")}} nodes inside the {{HTMLElement("script")}} element (ignoring other nodes like comments) in tree order. On setting, it acts the same way as the {{domxref("Node.textContent")}} property.

    > [!NOTE]
    > When inserted using the {{domxref("Document.write()")}} method, {{HTMLElement("script")}} elements execute (typically synchronously), but when inserted using {{domxref("Element.innerHTML")}} or {{domxref("Element.outerHTML")}}, they do not execute at all.

- {{domxref("HTMLScriptElement.type")}}
  - : A string representing the type of the script. It reflects the `type` attribute of the {{HTMLElement("script")}} element.

## Static methods

- {{domxref("HTMLScriptElement.supports_static", "HTMLScriptElement.supports()")}}
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
For more details, see the [`defer`](/en-US/docs/Web/API/HTMLScriptElement/defer) and [`async`](/en-US/docs/Web/API/HTMLScriptElement/async) properties.

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

{{domxref("HTMLScriptElement.supports_static", "HTMLScriptElement.supports()")}} provides a unified mechanism for checking whether a browser supports particular types of scripts.

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
