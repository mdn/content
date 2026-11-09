---
title: Out-of-order patching
slug: Glossary/out_of_order_patching
page-type: glossary-definition
sidebar: glossarysidebar
---

Out-of-order patching refers to delivering HTML content in an order different from the sequential, top-to-bottom flow of a single document.

This improves perceived performance by not holding up the initial content while waiting for slower components that may take time to generate or send. This is typical with dynamic content generation that requires extra processing, as popularized by [the island architecture pattern](https://jasonformat.com/islands-architecture/).

Out-of-order patching has traditionally required removing content from the initial HTML document completely and adding it to the DOM via JavaScript. [`<template for>` out-of-order patching](/en-US/docs/Web/HTML/Reference/Elements/template#out-of-order_patching) enables this without JavaScript in the initial HTML by using marker placeholders updated with `<template for>` elements streamed in later in the HTML.

## See also

- [`<template for>` out of order patching](/en-US/docs/Web/HTML/Reference/Elements/template#out-of-order_patching)
