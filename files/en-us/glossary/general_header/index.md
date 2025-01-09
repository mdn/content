---
title: General header
slug: Glossary/General_header
page-type: glossary-definition
---

{{GlossarySidebar}}

**General header** is an outdated term used to refer to an {{glossary('HTTP_header', 'HTTP header')}} that can be used in both request and response messages, but which doesn't apply to the content itself (a header that applied to the content was called an {{glossary("entity header")}}). Depending on the context they are used in, general headers might either be {{glossary("Response header", "response")}} or {{glossary("request header", "request headers")}} (e.g. {{HTTPheader("Cache-Control")}}).

> [!NOTE]
> Current versions of the HTTP/1.1 specification do not specifically categorize headers as "general headers". These are now simply referred to as {{glossary("Response header", "response")}} or {{glossary("request header", "request headers")}} depending on context.

> [!NOTE]
> Use [advanced search in GitHub:MDN](https://github.com/search?q=repo%3Amdn%2Fcontent+%22%5C%22Request+header%5C%22%22+%22%5C%22Response+header%5C%22%22&type=code) to list insection of Request&Response headers
> some of them(e.g. {{HTTPHeader("Want-Repr-Digest")}}) is not implemented by Apache or Nginx offically

```js
$$=$$ ; $=$ 
a=[],user="mdn/content"; (pgNext=()=>{a.push(...$$(`[title^="${user}"]`).map(e=>/([^/]*)\/[^/]*$/.exec(e.innerText)[1])); $('[rel=next]')?.click (setTimeout(pgNext,1000))})()
```

- content-length
- content-type
- date
- keep-alive
- cache-control
- accept-encoding
- transfer-encoding
- accept
- via
- link
- content-digest
- want-content-digest
- want-repr-digest
- content-disposition
- priority
- repr-digest
- upgrade(websockets)
- trailer
- connection

## See also

- {{Glossary("Representation header")}}
