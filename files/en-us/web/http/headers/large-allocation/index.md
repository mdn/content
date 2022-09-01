---
title: Large-Allocation
slug: Web/HTTP/Headers/Large-Allocation
tags:
  - HTTP
  - HTTP Header
  - Reference
  - Response Header
  - header
  - Deprecated
  - Non-standard
browser-compat: http.headers.Large-Allocation
---
{{HTTPSidebar}}{{Deprecated_Header}}{{Non-standard_header}}

The non-standard **`Large-Allocation`** response header tells the browser that the page being loaded is going to want to perform a large allocation.
It's not implemented in current versions of any browser, but is harmless to send to any browser.

[WebAssembly](/en-US/docs/WebAssembly) or asm.js applications can use large
contiguous blocks of allocated memory. For complex games, for example, these allocations
can be quite large, sometimes as large as 1GB. The `Large-Allocation` tells
the browser that the web content in the to-be-loaded page is going to want to perform a
large contiguous memory allocation and the browser can react to this header by starting
a dedicated process for the to-be-loaded document, for example.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>no</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Large-Allocation: 0
Large-Allocation: <megabytes>
```

## Directives

- `0`
  - : 0 is a special value which represents uncertainty as to what the size of the
    allocation is.
- `<megabytes>`
  - : The expected size of the allocation to be performed, in megabytes.

## Examples

```http
Large-Allocation: 0
Large-Allocation: 500
```

## Troubleshooting errors

The `Large-Allocation` header throws warnings or error messages when used
incorrectly. You'll encounter them in the [web console](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html).

- This page was loaded in a new process due to a `Large-Allocation` header.
  - : This message means that the browser saw the `Large-Allocation` header,
    and was able to reload the page into a new process which should have more available
    contiguous memory.
- A `Large-Allocation` header was ignored due to the load being triggered
  by a non-GET request.
  - : When a {{HTTPMethod("POST")}} request is used to load a document, that load cannot
    currently be redirected into a new process. This error is displayed when loading a
    document with a `Large-Allocation` header with a non-GET HTTP method. This
    could be caused due to the document being loaded by a form submission, for example.
- A `Large-Allocation` header was ignored due to the presence of windows
  which have a reference to this browsing context through the frame hierarchy or
  {{domxref("window.opener")}}.

  - : This error means that the document was not loaded at the top level of an
    user-opened or noopener-opened tab or window. It can occur in these situations:

    - The document with the `Large-Allocation` header was loaded in an
      {{HTMLElement("iframe")}}. Firefox cannot move an iframe into a new process
      currently, so the document must load in the current process.
    - The document with the `Large-Allocation` header was loaded in a
      window which was opened by {{domxref("window.open()")}},
      `<a target="_blank">` or other similar methods without
      `rel="noopener"` or the `"noopener"` feature being set.
      These windows must remain in the same process as their opener, as they can
      communicate, meaning that we cannot allow them to switch processes.
    - The document with the `Large-Allocation header` has opened another
      window with {{domxref("window.open()")}}, `<a target="_blank">`
      or other similar methods without `rel="noopener"` or the
      `"noopener"` feature being set. This is for the same reason as above,
      namely that they can communicate and thus we cannot allow them to switch
      processes.

- This page would be loaded in a new process due to a `Large-Allocation`
  header, however `Large-Allocation` process creation is disabled on
  non-Win32 platforms.

  - : Firefox currently only supports the `Large-Allocation` header in our
    32-bit Windows builds, as memory fragmentation is not an issue in 64-bit builds. If
    you are running a non-win32 version of Firefox, this error will appear. This check can
    be disabled with the `dom.largeAllocation.forceEnable` boolean preference in about:config.

## Specifications

Not part of any current specifications. An explainer of the ideas behind this header
can be found in [this document](https://gist.github.com/mystor/5739e222e398efc6c29108be55eb6fe3).

## Browser compatibility

{{Compat}}

## See also

- [WebAssembly](/en-US/docs/WebAssembly)
