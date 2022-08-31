---
title: Ajax
slug: Web/Guide/AJAX
tags:
  - AJAX
  - DOM
  - JSON
  - JavaScript
  - References
  - XMLHttpRequest
---
## Getting Started

**Asynchronous JavaScript and XML**, while not a technology in itself, is a term coined in 2005 by Jesse James Garrett, that describes a "new" approach to using a number of existing technologies together, including [HTML](/en-US/docs/Web/HTML) or [XHTML](/en-US/docs/Glossary/XHTML), [CSS](/en-US/docs/Web/CSS), [JavaScript](/en-US/docs/Web/JavaScript), [DOM](/en-US/docs/Web/API/Document_Object_Model), [XML](/en-US/docs/Web/XML), [XSLT](/en-US/docs/Web/XSLT), and most importantly the {{domxref("XMLHttpRequest")}} object.
When these technologies are combined in the Ajax model, web applications are able to make quick, incremental updates to the user interface without reloading the entire browser page. This makes the application faster and more responsive to user actions.

Although X in Ajax stands for XML, {{glossary("JSON")}} is preferred over XML nowadays because of its many advantages such as being a part of JavaScript, thus being lighter in size. Both JSON and XML are used for packaging information in the Ajax model.

## Documentation

- [Getting Started](/en-US/docs/Web/Guide/AJAX/Getting_Started)
  - : This article guides you through the Ajax basics and gives you two simple hands-on examples to get you started.
- [Using the `XMLHttpRequest` API](/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest)

  - : The {{domxref("XMLHttpRequest")}} API is the core of Ajax. This article will explain how to use some Ajax techniques, like:

    - [Analyzing and manipulating the response of the server](/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest#handling_responses)
    - [Monitoring the progress of a request](/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest#monitoring_progress)
    - [Submitting forms and upload binary files](/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest#submitting_forms_and_uploading_files) – in _pure_ Ajax, or using {{domxref("FormData")}} objects
    - Using Ajax within [Web workers](/en-US/docs/Web/API/Worker)

- [Fetch API](/en-US/docs/Web/API/Fetch_API)
  - : The Fetch API provides an interface for fetching resources. It will seem familiar to anyone who has used {{domxref("XMLHTTPRequest")}}, but this API provides a more powerful and flexible feature set.
- [Server-sent events](/en-US/docs/Web/API/Server-sent_events)
  - : Traditionally, a web page has to send a request to the server to receive new data; that is, the page requests data from the server. With server-sent events, it's possible for a server to send new data to a web page at any time, by pushing messages to the web page. These incoming messages can be treated as _[Events](/en-US/docs/Web/API/Event) + data_ inside the web page. See also: [Using server-sent events](/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events).
- [_Pure-Ajax_ navigation example](/en-US/docs/Web/API/History_API/Example)
  - : This article provides a working (minimalist) example of a _pure-Ajax_ website composed only of three pages.
- [Sending and Receiving Binary Data](/en-US/docs/Web/API/XMLHttpRequest/Sending_and_Receiving_Binary_Data)
  - : The `responseType` property of the `XMLHttpRequest` object can be set to change the expected response type from the server. Possible values are the empty string (default), `arraybuffer`, `blob`, `document`, `json`, and `text`. The `response` property will contain the entity body according to `responseType`, as an `ArrayBuffer`, `Blob`, `Document`, `JSON`, or string. This article will show some Ajax I/O techniques.
- [XML](/en-US/docs/Web/XML)
  - : The **Extensible Markup Language (XML)** is a W3C-recommended general-purpose markup language for creating special-purpose markup languages. It is a simplified subset of SGML, capable of describing many different kinds of data. Its primary purpose is to facilitate the sharing of data across different systems, particularly systems connected via the Internet.
- [Parsing and serializing XML](/en-US/docs/Web/Guide/Parsing_and_serializing_XML)
  - : How to parse an XML document from a string, a file or via JavaScript and how to serialize XML documents to strings, JavaScript Object trees (JXON) or files.
- [XPath](/en-US/docs/Web/XPath)
  - : XPath stands for **X**ML **Path** Language, it uses a non-XML syntax that provides a flexible way of addressing (pointing to) different parts of an [XML](/en-US/docs/Web/XML) document. As well as this, it can also be used to test addressed nodes within a document to determine whether they match a pattern or not.
- {{domxref("FileReader")}} API
  - : The `FileReader` API lets web applications asynchronously read the contents of files (or raw data buffers) stored on the user's computer, using {{domxref("File")}} or {{domxref("Blob")}} objects to specify the file or data to read. File objects may be obtained from a {{domxref("FileList")}} object returned as a result of a user selecting files using the {{HTMLElement("input")}} element, or from a drag and drop operation's {{domxref("DataTransfer")}} object.
- [HTML in XMLHttpRequest](/en-US/docs/Web/API/XMLHttpRequest/HTML_in_XMLHttpRequest)
  - : The [XMLHttpRequest](https://xhr.spec.whatwg.org/) specification adds HTML parsing support to {{domxref("XMLHttpRequest")}}, which originally supported only XML parsing. This feature allows Web apps to obtain an HTML resource as a parsed DOM using `XMLHttpRequest`.

## Tools

- [axios](https://github.com/axios/axios)
  - : {{jsxref("Promise")}} based {{glossary("HTTP")}} client, which uses `XMLHttpRequest` internally.

## See also

- [Ajax: A New Approach to Web Applications](https://www.semanticscholar.org/paper/Ajax%3A-A-New-Approach-to-Web-Applications-Garrett/c440ae765ff19ddd3deda24a92ac39cef9570f1e?p2df)
  - : Jesse James Garrett, of Adaptive Path, wrote this article in February 2005, introducing Ajax and its related concepts.
- [XMLHttpRequest Specification](https://xhr.spec.whatwg.org/)
  - : WHATWG Living Standard
