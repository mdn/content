---
title: XMLHttpRequest()
slug: Web/API/XMLHttpRequest/XMLHttpRequest
page-type: web-api-constructor
browser-compat: api.XMLHttpRequest.XMLHttpRequest
---

## **XMLHttpRequest()**

The **`XMLHttpRequest()`** constructor
creates a new [`XMLHttpRequest`](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) 

For details about how to use `XMLHttpRequest`, see [Using XMLHttpRequest](/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest).

## Syntax

```js
new XMLHttpRequest()
```

### Parameters

None.

### Return value

A new [`XMLHttpRequest`](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) object. The object must be prepared by at least
calling [`open()`](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/open) 
to initialize it before calling [`send()`](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/send) 
to send the request to the server.

## Non-standard Firefox syntax

Firefox 16 added a non-standard parameter to the constructor that can enable anonymous
mode (see [Webkit bug 692677](https://bugzil.la/692677)). Setting the `mozAnon` flag to `true`
effectively resembles the [`AnonXMLHttpRequest()`](https://www.w3.org/TR/2012/WD-XMLHttpRequest-20120117/#dom-anonxmlhttprequest)
constructor described in older versions of the XMLHttpRequest specification.

```js
const request = new XMLHttpRequest(paramsDictionary);
```

### Parameters (non-standard)

- `objParameters`

  - : One flag you can set:

    - `mozAnon`
      - : Boolean: Setting this flag to `true` will cause the browser not to
        expose the [origin](https://developer.mozilla.org/en-US/docs/Glossary/Origin) and [user credentials](https://www.w3.org/TR/2012/WD-XMLHttpRequest-20120117/#user-credentials) when fetching resources. Most importantly, this means that [cookies](https://developer.mozilla.org/en-US/docs/Glossary/Cookie) 
        will not be sent unless explicitly added using `setRequestHeader`


## Specifications

The XHR specs can be found on [Whatwg.org](https://xhr.spec.whatwg.org)
and also on their [GitHub repo](https://github.com/whatwg/xhr) 

## Browser compatibility

Chrome 1




Edge 12




Firefox 1




Opera 12.1




Safari 3




Chrome Android 18




Firefox Android 4




Opera Android 12.1




Safari 1 on iOS




Samsung Internet 1.0




WebView Android 4.4


## See also

- [Using XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest)
- [HTML in XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/HTML_in_XMLHttpRequest)
