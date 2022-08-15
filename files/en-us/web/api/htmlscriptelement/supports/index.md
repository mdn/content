---
title: HTMLScriptElement.supports()
slug: Web/API/HTMLScriptElement/supports
page-type: web-api-static-method
tags:
  - API
  - HTMLScriptElement
  - Method
  - Reference
  - supports
  - Feature detection
browser-compat: api.HTMLScriptElement.supports
---
{{APIRef}}

The **`supports()`** static method of the {{domxref("HTMLScriptElement")}} interface provides a simple and consistent method to feature-detect what types of scripts are supported by the user agent.

The method is expected to return `true` for classic and module scripts, which are supported by most modern browsers.

## Syntax

```js
supports(type)
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
      - : Test if import maps are supported.
    - `"speculationrules"`
      - : Test if speculation rules are supported and enabled.

    Any other value will cause the method to return `false`.

### Return value

Returns `true` if the indicated script type is supported and `false` otherwise.

## Examples

The code below shows how to check if `HTMLScriptElement.supports()` is defined, and if so, to use it to test whether particular types of scripts are supported.

```html hidden
<textarea id="log" rows="5" cols="110"></textarea>
```

```js
if (typeof HTMLScriptElement.supports === 'undefined') {
  //Check if method is defined
  console.log("HTMLScriptElement.supports() method is not supported");
}
else
{
  //Returns true for the supported values
  console.log(`HTMLScriptElement.supports('module'): ${HTMLScriptElement.supports('module')}`);
  console.log(`HTMLScriptElement.supports('classic'): ${HTMLScriptElement.supports('classic')}`);
  console.log(`HTMLScriptElement.supports('importmap'): ${HTMLScriptElement.supports('importmap')}`);
  console.log(`HTMLScriptElement.supports('speculationrules'): ${HTMLScriptElement.supports('speculationrules')}`);

  //Returns false for any other values
  console.log(`HTMLScriptElement.supports('anything else'): ${HTMLScriptElement.supports('anything else')}`);
}
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
