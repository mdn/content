---
title: Changing the Priority of HTTP Requests
slug: Mozilla/Firefox/Releases/1.5/Changing_the_priority_of_HTTP_requests
tags:
  - HTTP
---
{{FirefoxSidebar}}

### Introduction

In [Firefox 1.5](/en-US/docs/Mozilla/Firefox/Releases/1.5) (Gecko 1.8), an API was added to support changing the priority of [HTTP](/en-US/docs/Web/HTTP) requests. Prior to this, there was no way to directly indicate that a request was of a different priority. The API is defined in [nsISupportsPriority](/en-US/docs/nsISupportsPriority), but is defined in very generic terms so that any object can implement this interface to enable the concept of priority. This article deals specifically with using that interface to change the priority of HTTP requests.

At the time of this writing, changing the priority of an HTTP request only affects the order in which connection attempts are made. This means that the priority only has an effect when there are more connections (to a server) than are allowed.

The examples in this document are all written in [JavaScript](/en-US/docs/Web/JavaScript) using [XPCOM](/en-US/docs/XPCOM).

### Using the API

It should be noted that the value of the `priority` attribute follows UNIX conventions, with smaller numbers (including negative numbers) having higher priority.

#### Accessing priority from an nsIChannel

To change the priority of an HTTP request, you need access to the [nsIChannel](/en-US/docs/XPCOM_Interface_Reference/nsIChannel) that the request is being made on. If you do not have an existing channel, then you can create one as follows:

    var ios = Components.classes["@mozilla.org/network/io-service;1"]
                        .getService(Components.interfaces.nsIIOService);
    var ch = ios.newChannel("https://www.example.com/", null, null);

Once you have an [nsIChannel](/en-US/docs/XPCOM_Interface_Reference/nsIChannel), you can access the priority as follows:

    if (ch instanceof Components.interfaces.nsISupportsPriority) {
      ch.priority = Components.interfaces.nsISupportsPriority.PRIORITY_LOWEST;
    }

For convenience, the interface defines several standard priority values that you can use, ranging from `PRIORITY_HIGHEST` to `PRIORITY_LOWEST`.

#### Getting an nsIChannel from XMLHttpRequest

If you are programming in [JavaScript](/en-US/docs/Web/JavaScript), you will probably want to use [XMLHttpRequest](/en-US/docs/Web/API/XMLHttpRequest), a much higher level abstraction of an HTTP request. You can access the `channel` member of an [XMLHttpRequest](/en-US/docs/Web/API/XMLHttpRequest) once you have called the `open` method on it, as follows:

    var req = new XMLHttpRequest();
    req.open("GET", "https://www.example.com", false);
    if (req.channel instanceof Components.interfaces.nsISupportsPriority) {
      req.channel.priority = Components.interfaces.nsISupportsPriority.PRIORITY_LOWEST;
    }
    req.send(null);

> **Note:** This example uses a synchronous [XMLHttpRequest](/en-US/docs/Web/API/XMLHttpRequest), which you should not use in practice.

#### Adjusting priority

[nsISupportsPriority](/en-US/docs/nsISupportsPriority#adjustPriority) includes a convenience method named `adjustPriority`. You should use this if you want to alter the priority of a request by a certain amount. For example, if you would like to make a request have slightly higher priority than it currently has, you could do the following:

    // assuming we already have a nsIChannel from above
    if (ch instanceof Components.interfaces.nsISupportsPriority) {
      ch.adjustPriority(-1);
    }

Remember that lower numbers mean higher priority, so adjusting by a negative number will serve to increase the request's priority.
