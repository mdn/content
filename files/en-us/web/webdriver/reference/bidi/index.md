---
title: WebDriver BiDi reference
short-title: BiDi
slug: Web/WebDriver/Reference/BiDi
page-type: landing-page
sidebar: webdriver
---

WebDriver BiDi is a bidirectional protocol for browser automation that provides event-driven communication between the local end (the automation client) and the remote end (the browser).
Unlike the HTTP request-response model of [WebDriver classic](/en-US/docs/Web/WebDriver/Reference/Classic), BiDi enables real-time events and supports advanced automation scenarios through WebSocket-based communication.
This reference documents the modules, commands, events, capabilities, and errors available in WebDriver BiDi.

- [Modules](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules)
  - : Collections of related commands and events pertaining to specific aspects of browser automation.
- Commands
  - : Asynchronous operations to inspect and control the behavior of browsers, manage browser sessions and contexts, execute scripts, monitor network activity, and interact with DOM elements.
- Events
  - : Notifications sent by the remote end (the browser) signaling that something of interest has occurred.
- Capabilities
  - : Configuration options used to communicate the features supported by a session and to define which features the driver must satisfy when creating a new session.
- Errors
  - : Error codes that commands can return.
