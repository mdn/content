---
title: "HTMLScriptElement: supports() static method"
short-title: supports()
slug: Web/API/HTMLScriptElement/supports_static
page-type: web-api-static-method
browser-compat: api.HTMLScriptElement.supports_static
---

{{APIRef("HTML DOM")}}

The **`supports()`** static method of the {{domxref("HTMLScriptElement")}} interface provides a simple and consistent method to feature-detect what types of scripts are supported by the user agent.

The method is expected to return `true` for classic and module scripts, which are supported by most modern browsers.

## Syntax

```js-nolint
HTMLScriptElement.supports(type)
```

### Parameters

- `type`

  - : A string literal that indicates the type of script for which support is to be checked.
    Supported values are case sensitive, and include:

    - `"classic"`
      - : Test if _classic scripts_ are supported.
        "Classic" scripts are the normal/traditional JavaScript files that predate module scripts.
    - `"module"`
      - : Test if [module scripts](/en-US/docs/Web/JavaScript/Guide/Modules) are supported.
    - `"importmap"`
      - : Test if [import maps](/en-US/docs/Web/HTML/Element/script/type/importmap) are supported.
    - `"speculationrules"`
      - : Test if [speculation rules](/en-US/docs/Web/API/Speculation_Rules_API) are supported and enabled.

    Any other value will cause the method to return `false`.

### Return value

Returns `true` if the indicated script type is supported and `false` otherwise.

## Examples

The code below shows how to check if `HTMLScriptElement.supports()` is defined, and if so, to use it to test whether particular types of scripts are supported.

```js
const log = document.getElementById("log");

function checkSupport(type) {
  const result = HTMLScriptElement.supports(type) ? "true" : "false";
  log.textContent += `HTMLScriptElement.supports('${type}') is ${result}\n`;
}

if (typeof HTMLScriptElement.supports === "undefined") {
  log.textContent = "HTMLScriptElement.supports() method is not supported";
} else {
  // Check if various script types are supported
  checkSupport("module");
  checkSupport("classic");
  checkSupport("importmap");
  checkSupport("speculationrules");
  // Any other value will cause the method to return false
  checkSupport("anything else");
}
```

```html hidden
<textarea id="log" rows="6" cols="80"></textarea>
```

{{ EmbedLiveSample('Examples') }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLScriptElement")}}
- {{HTMLElement("script")}}
- [JavaScript modules](/en-US/docs/Web/JavaScript/Guide/Modules)
- {{domxref("Worker/Worker","Worker")}} constructor
