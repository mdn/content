---
title: manifest
slug: Web/HTML/Element/html/manifest
page-type: html-attribute
status:
  - deprecated
  - non-standard
browser-compat: html.elements.html.manifest
---

{{securecontext_header}}{{Deprecated_Header}}{{Non-standard_Header}}

The **`manifest`** attribute of the `<html>` element specifies a URL of an application cache manifest that is downloaded in the early stages of page load.

> **Note:** manifest-based caching mechanism has been deprecated. Use [service workers](/en-US/docs/Web/API/Service_Worker_API) instead.

The `manifest` attribute only had an effect during early stages of page load, thus changing it via regular DOM interfaces had no effect. The deprecated {{domxref("Window.applicationCache")}} interface was used instead. The attribute functionality has been superceded by the [web app manifest](/en-US/docs/Web/Manifest), an external JSON file associated with the HTML file through a {{HTMLElement("link")}} with [`rel="manifest"`](/en-US/docs/Web/HTML/Attributes/rel).

## Browser compatibility

{{Compat}}

## See also

- [Service Worker API](/en-US/docs/Web/API/Service_Worker_API)
- [`manifest.json`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json)
- [Web app manifests](/en-US/docs/Web/Manifest)
- [Making PWAs installable](/en-US/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable)
