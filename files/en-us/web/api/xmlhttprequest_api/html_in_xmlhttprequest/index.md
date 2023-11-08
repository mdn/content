---
title: HTML in XMLHttpRequest
slug: Web/API/XMLHttpRequest_API/HTML_in_XMLHttpRequest
page-type: guide
browser-compat: api.XMLHttpRequest
---

{{DefaultAPISidebar("XMLHttpRequest API")}}

The W3C {{domxref("XMLHttpRequest")}} specification adds [HTML](/en-US/docs/Web/HTML) parsing support to {{domxref("XMLHttpRequest")}}, which originally supported only {{Glossary("XML")}} parsing. This feature allows Web apps to obtain an HTML resource as a parsed {{Glossary("DOM")}} using `XMLHttpRequest`.

To get an overview of how to use `XMLHttpRequest` in general, see [Using XMLHttpRequest](/en-US/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest).

## Limitations

To discourage the synchronous use of `XMLHttpRequest`, HTML support is not available in the synchronous mode. Also, HTML support is only available if the {{domxref("XMLHttpRequest.responseType", "responseType")}} property has been set to `"document"`. This limitation avoids wasting time parsing HTML uselessly when legacy code uses `XMLHttpRequest` in the default mode to retrieve {{domxref("XMLHttpRequest.responseText", "responseText")}} for `text/html` resources. Also, this limitation avoids problems with legacy code that assumes that {{domxref("XMLHttpRequest.responseXML", "responseXML")}} is `null` for HTTP error pages (which often have a `text/html` response body).

## Usage

Retrieving an HTML resource as a DOM using {{domxref("XMLHttpRequest")}} works just like retrieving an XML resource as a DOM using `XMLHttpRequest`, except you can't use the synchronous mode and you have to explicitly request a document by assigning the string `"document"` to the {{domxref("XMLHttpRequest.responseType", "responseType")}} property of the `XMLHttpRequest` object after calling {{domxref("XMLHttpRequest.open", "open()")}} but before calling {{domxref("XMLHttpRequest.send", "send()")}}.

```js
const xhr = new XMLHttpRequest();
xhr.onload = () => {
  console.log(xhr.responseXML.title);
};
xhr.open("GET", "file.html");
xhr.responseType = "document";
xhr.send();
```

## Feature detection

### Method 1

This method relies on the "force async" nature of the feature. When you try to set `responseType` of an `XMLHttpRequest` object after it is opened as "sync". This throws an error in the browsers that implement the feature and works on others.

```js
function HTMLinXHR() {
  if (!window.XMLHttpRequest) {
    return false;
  }
  const req = new window.XMLHttpRequest();
  req.open("GET", window.location.href, false);
  try {
    req.responseType = "document";
  } catch (e) {
    return true;
  }
  return false;
}
```

[View on JSFiddle](https://jsfiddle.net/HTcKP/1/)

This method is synchronous, does not rely on external assets though it may not be as reliable as method 2 described below since it does not check the actual feature but an indication of that feature.

### Method 2

There are two challenges to detecting exactly if a browser supports HTML parsing in {{domxref("XMLHttpRequest")}}. First, the detection result is obtained asynchronously, because HTML support is only available in the asynchronous mode. Second, you have to actually fetch a test document over HTTP, because testing with a `data:` URL would end up testing `data:` URL support at the same time.

Thus, to detect HTML support, a test HTML file is needed on the server. This test file is small and is not well-formed XML:

```html
<title>&amp;&<</title>
```

If the file is named `detect.html`, the following function can be used for detecting HTML parsing support:

```js
function detectHtmlInXhr(callback) {
  if (!window.XMLHttpRequest) {
    setTimeout(function () {
      callback(false);
    }, 0);

    return;
  }
  let done = false;
  const xhr = new window.XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && !done) {
      done = true;
      callback(
        !!(
          xhr.responseXML &&
          xhr.responseXML.title &&
          xhr.responseXML.title === "&&<"
        ),
      );
    }
  };
  xhr.onabort = xhr.onerror = () => {
    if (!done) {
      done = true;
      callback(false);
    }
  };
  try {
    xhr.open("GET", "detect.html");
    xhr.responseType = "document";
    xhr.send();
  } catch (e) {
    setTimeout(function () {
      if (!done) {
        done = true;
        callback(false);
      }
    }, 0);
  }
}
```

The argument `callback` is a function that will be called asynchronously with `true` as the only argument if HTML parsing is supported and `false` as the only argument if HTML parsing is not supported.

[View on JSFiddle](https://jsfiddle.net/xfvXR/1/)

## Character encoding

If the character encoding is declared in the HTTP {{HTTPHeader("Content-Type")}} header, that character encoding is used. Failing that, if there is a byte order mark, the encoding indicated by the byte order mark is used. Failing that, if there is a {{HTMLElement("meta")}} element that declares the encoding within the first 1024 bytes of the file, that encoding is used. Otherwise, the file is decoded as UTF-8.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("XMLHttpRequest")}}
- [Using XMLHttpRequest](/en-US/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest)
