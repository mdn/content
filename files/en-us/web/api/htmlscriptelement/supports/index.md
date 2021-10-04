---
title: HTMLScriptElement.supports()
slug: Web/API/HTMLScriptElement/supports
tags:
  - API
  - HTMLScriptElement
  - Method
  - Reference
  - supports
  - Experimental
  - Feature detection
browser-compat: api.HTMLScriptElement.supports
---
{{APIRef}}{{SeeCompatTable}}

The **`supports()`** static method of the {{domxref("HTMLScriptElement")}} interface provides a simple and consistent method to feature-detect what types of scripts are supported by the user agent.

The method is expected to return `true` for classic and module scripts, which are supported by most modern browsers.

## Syntax

```js
HTMLScriptElement.supports(type)
```

### Parameters

- `type`
  - : A string literal that indicates the type of script for which support is to be checked.
      Supported values are case sensitive, and include:
  
    - `"classic"`: Test if _classic scripts_ are supported.
      "Classic" scripts are the normal/traditional JavaScript files that predate module scripts.
    - `"module"`: Test if [module scripts](/en-US/docs/Web/JavaScript/Guide/Modules) are supported.

    Any other value will cause the method to return `false`.
    

### Return value

Returns `true` if the indicated script type is supported and `false` otherwise.

## Examples

The code below shows how to check if `HTMLScriptElement.supports()` is defined, and if so, to use it to test whether particular types of scripts are supported.

```html hidden
<textarea id="log" rows="5" cols="110"></textarea>
```

```js
if (typeof HTMLScriptElement.supports == 'undefined') {
  //Check if method is defined
  log.textContent+="HTMLScriptElement.supports() method is not supported\n";
}
else
{
  //Returns true for the supported values
  log.textContent+="HTMLScriptElement.supports('module'): " + HTMLScriptElement.supports('module') +"\n";
  log.textContent+="HTMLScriptElement.supports('classic'): " + HTMLScriptElement.supports('classic') +"\n";

  //Returns false for any other values
  log.textContent+="HTMLScriptElement.supports('anything else'): " + HTMLScriptElement.supports('anything else') +"\n";
}
```

{{ EmbedLiveSample('Examples') }}


### Unsupported browsers

Browsers that do not support `HTMLScriptElement.supports()` can simply assume that classic scripts are supported.

Module support can be checked using the `noModule` attribute:
```js
function checkModuleSupport() {
  if ('supports' in HTMLScriptElement) {
    return HTMLScriptElement.supports('module');
  }
  return 'noModule' in document.createElement('script');
}
```

You can also use the {{HTMLElement("script")}} element `nomodule` attribute to [fallback to classic scripts when loading modules](/en-US/docs/Web/HTML/Element/script#module_fallback) if needed:
```html
<script type="module" src="app.mjs"></script>
<script nomodule defer src="classic-app-bundle.js"></script>
```


## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLScriptElement")}}
- {{HTMLElement("script")}}
- [JavaScript modules](/en-US/docs/Web/JavaScript/Guide/Modules)
- {{domxref("Worker/Worker","Worker")}} constructor