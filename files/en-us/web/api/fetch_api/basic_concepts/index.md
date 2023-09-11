---
title: Fetch basic concepts
slug: Web/API/Fetch_API/Basic_concepts
page-type: guide
---

{{DefaultAPISidebar("Fetch API")}}

The [Fetch API](/en-US/docs/Web/API/Fetch_API) provides an interface for fetching resources (including across the network). It will seem familiar to anyone who has used {{domxref("XMLHttpRequest")}}, but it provides a more powerful and flexible feature set. This article explains some of the basic concepts of the Fetch API.

> **Note:** This article will be added to over time. If you find a Fetch concept that you feel needs explaining better, let someone know on the [MDN Web Docs chat rooms](/en-US/docs/MDN/Community/Communication_channels#chat_rooms).

## In a nutshell

At the heart of Fetch are the Interface abstractions of HTTP {{domxref("Request")}}s, {{domxref("Response")}}s, and {{domxref("Headers")}}, along with a {{domxref("fetch()")}} method for initiating asynchronous resource requests. Because the main components of HTTP are abstracted as JavaScript objects, it is easy for other APIs to make use of such functionality.

[Service Workers](/en-US/docs/Web/API/Service_Worker_API) is an example of an API that makes heavy use of Fetch.

Fetch takes the asynchronous nature of such requests one step further. The API is completely {{jsxref("Promise")}}-based.

## Guard

Guard is a feature of {{domxref("Headers")}} objects, with possible values of `immutable`, `request`, `request-no-cors`, `response`, or `none`, depending on where the header is used.

When a new {{domxref("Headers")}} object is created using the {{domxref("Headers.Headers","Headers()")}} {{glossary("constructor")}}, its guard is set to `none` (the default). When a {{domxref("Request")}} or {{domxref("Response")}} object is created, it has an associated {{domxref("Headers")}} object whose guard is set as summarized below:

<table class="standard-table">
  <thead>
    <tr>
      <th scope="row">new object's type</th>
      <th scope="col">creating constructor</th>
      <th scope="col">
        guard setting of associated {{domxref("Headers")}} object
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="2">{{domxref("Request")}}</td>
      <td>{{domxref("Request.Request","Request()")}}</td>
      <td><code>request</code></td>
    </tr>
    <tr>
      <td>
        {{domxref("Request.Request","Request()")}} with
        {{domxref("Request.mode","mode")}} of <code>no-cors</code>
      </td>
      <td><code>request-no-cors</code></td>
    </tr>
    <tr>
      <td rowspan="2">{{domxref("Response")}}</td>
      <td>{{domxref("Response.Response","Response()")}}</td>
      <td><code>response</code></td>
    </tr>
    <tr>
      <td>
        {{domxref("Response.error_static", "Response.error()")}} or
        {{domxref("Response.redirect_static", "Response.redirect()")}} methods
      </td>
      <td><code>immutable</code></td>
    </tr>
  </tbody>
</table>

A header's guard affects the {{domxref("Headers.set","set()")}}, {{domxref("Headers.delete","delete()")}}, and {{domxref("Headers.append","append()")}} methods which change the header's contents. A {{jsxref("TypeError")}} is thrown if you try to modify a {{domxref("Headers")}} object whose guard is `immutable`. However, the operation will work if

- guard is `request` and the header _name_ isn't a {{Glossary("forbidden header name")}} .
- guard is `request-no-cors` and the header _name_/_value_ is a {{Glossary("simple header")}} .
- guard is `response` and the header _name_ isn't a {{Glossary("forbidden response header name")}} .
