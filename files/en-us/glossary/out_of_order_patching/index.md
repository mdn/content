---
title: Out-of-order patching
slug: Glossary/out_of_order_patching
page-type: glossary-definition
sidebar: glossarysidebar
---

Out-of-order patching refers to the concept of delivering HTML content in a different order that the sequential, top-to-bottom manner that HTML is traditionally delivered in when seen as one single document.

This allows for improved perceived performance by not holding up the initial content waiting on slower components that may take time to generate or send. This is often the case with dynamic content that requires extra processing to generate the content as was popularized by [the island architecture pattern](https://jasonformat.com/islands-architecture/).

Out-of-order patching has traditionally required removing content from the initial HTML document completely, and adding it to the DOM through JavaScript. [`<template for>` out-of-order patching](/en-US/docs/Web/HTML/Reference/Elements/template#out-of-order_patching) allows this to be done without JavaScript in the initial HTML by using marker placeholders updated with `<template for>` elements streamed in later in the HTML.

## See also

- [`<template for>` out of order patching](/en-US/docs/Web/HTML/Reference/Elements/template#out-of-order_patching)
