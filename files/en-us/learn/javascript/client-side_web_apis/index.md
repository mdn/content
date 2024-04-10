---
title: Client-side web APIs
slug: Learn/JavaScript/Client-side_web_APIs
page-type: learn-module
---

{{LearnSidebar}}

When writing client-side JavaScript for websites or applications, you will quickly encounter **Application Programming Interfaces** (**APIs**). APIs are programming features for manipulating different aspects of the browser and operating system the site is running on, or manipulating data from other websites or services. In this module, we will explore what APIs are, and how to use some of the most common APIs you'll come across often in your development work.

## Prerequisites

To get the most out of this module, you should have worked your way through the previous JavaScript modules in the series ([First steps](/en-US/docs/Learn/JavaScript/First_steps), [Building blocks](/en-US/docs/Learn/JavaScript/Building_blocks), and [JavaScript objects](/en-US/docs/Learn/JavaScript/Objects)). Those modules typically involve simple API usage, as it is often difficult to write client-side JavaScript examples without them. For this tutorial, we will assume that you are knowledgeable about the core JavaScript language, and we will explore common Web APIs in a bit more detail.

Basic knowledge of [HTML](/en-US/docs/Learn/HTML) and [CSS](/en-US/docs/Learn/CSS) would also be useful.

> **Note:** If you are working on a device where you don't have the ability to create your own files, you could try out (most of) the code examples in an online coding program such as [JSBin](https://jsbin.com/) or [Glitch](https://glitch.com/).

## Guides

- [Introduction to web APIs](/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Introduction)
  - : First up, we'll start by looking at APIs from a high level — what are they, how do they work, how do you use them in your code, and how are they structured? We'll also take a look at what the different main classes of APIs are, and what kind of uses they have.
- [Manipulating documents](/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents)
  - : When writing web pages and apps, one of the most common things you'll want to do is manipulate web documents in some way. This is usually done by using the Document Object Model (DOM), a set of APIs for controlling HTML and styling information that makes heavy use of the {{domxref("Document")}} object. In this article, we'll look at how to use the DOM in detail, along with some other interesting APIs that can alter your environment in interesting ways.
- [Fetching data from the server](/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data)
  - : Another very common task in modern websites and applications is retrieving individual data items from the server to update sections of a webpage without having to load an entirely new page. This seemingly small detail has had a huge impact on the performance and behavior of sites. In this article, we'll explain the concept, and look at technologies that make it possible, such as {{domxref("XMLHttpRequest")}} and the [Fetch API](/en-US/docs/Web/API/Fetch_API).
- [Third party APIs](/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Third_party_APIs)
  - : The APIs we've covered so far are built into the browser, but not all APIs are. Many large websites and services such as Google Maps, Facebook, PayPal, etc. provide APIs allowing developers to make use of their data or services (e.g. displaying custom Google Maps on your site, or using Facebook login to log in your users). This article looks at the difference between browser APIs and 3rd party APIs and shows some typical uses of the latter.
- [Drawing graphics](/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Drawing_graphics)
  - : The browser contains some very powerful graphics programming tools, from the Scalable Vector Graphics ([SVG](/en-US/docs/Web/SVG)) language, to APIs for drawing on HTML {{htmlelement("canvas")}} elements, (see [The Canvas API](/en-US/docs/Web/API/Canvas_API) and [WebGL](/en-US/docs/Web/API/WebGL_API)). This article provides an introduction to the Canvas API, and further resources to allow you to learn more.
- [Video and audio APIs](/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Video_and_audio_APIs)
  - : HTML comes with elements for embedding rich media in documents — {{htmlelement("video")}} and {{htmlelement("audio")}} — which in turn come with their own APIs for controlling playback, seeking, etc. This article shows you how to do common tasks such as creating custom playback controls.
- [Client-side storage](/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Client-side_storage)
  - : Modern web browsers feature a number of different technologies that allow you to store data related to websites and retrieve it when necessary allowing you to persist data long term, save sites offline, and more. This article explains the very basics of how these work.
