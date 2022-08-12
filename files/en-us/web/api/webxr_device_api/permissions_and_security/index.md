---
title: WebXR permissions and security
slug: Web/API/WebXR_Device_API/Permissions_and_security
page-type: guide
---
{{DefaultAPISidebar("WebXR Device API")}}

The [WebXR Device API](/en-US/docs/Web/API/WebXR_Device_API) has several areas of security to contend with, from establishing feature-policy to ensuring the user intends to use the mixed reality presentation before activating it. Among other things, you need to confirm access to device features such as the microphone and/or camera, get permission to use immersive VR mode (if applicable), and so forth. The variety of hardware and software involved in XR brings multiple APIs and technologies into play. In this guide, we'll cover how to ensure your app has the permissions it needs to provide a secure and private XR experience.

## Introduction

The WebXR Device API is subject to a number of permission and security controls. While not onerous, they are worth being aware of. These mostly revolve around the fully-immersive `immersive-vr` session mode, but there are things to be aware of when setting up an AR session, as well.

## Immersive presentation of VR

First, any requests to activate the `immersive-vr` mode are rejected if the domain issuing the request does not have permission to enable an immersive session. This permission comes from the `xr-spatial-tracking` [feature policy](/en-US/docs/Web/HTTP/Feature_Policy).

Once that check is passed, the request to enter `immersive-vr` mode is allowed if all of the following are true:

- The `requestSession()` call was issued by code executing within the handler for a user event, or the from the startup code for a user-launched [web application](/en-US/docs/Web/Progressive_web_apps).
- The document is considered trustworthy, in that it is responsible and is both currently active and has focus.
- The user's intent to enter immersive VR mode is well understood; see [User intent](#user_intent) below for details.

If all of that is true, the promise returned by `requestSession()` is resolved, and the new {{domxref("XRSession")}} object is passed into the fulfillment handler. Otherwise, an appropriate exception is thrown, such as `SecurityError` if the document doesn't have permission to enter immersive mode.

## Inline presentation

When you request an {{domxref("XRSession")}} with the mode set to `inline`, and any features are required or requested, the browser will only allow the session to be created if the call to {{domxref("XRSystem/requestSession", "requestSession()")}} was made by code which is executing expressly due to **user intent**.

Specifically:

- If the `requestSession()` call isn't coming from within the handler executed in response to a user event, and is not being issued while launching a web application, the request is denied and `false` is delivered to the promise's fulfillment handler.
- If the document making the request isn't the one which is responsible for the script, the request is denied.
- If the document making the request isn't trustworthy, the request is denied and `false` is returned through the promise's fulfillment routine. A trustworthy document is one which is both responsible and active, and which currently has focus.
- If the user's intent to open an inline XR presentation is not well understood, the request is denied. Understanding of the [user's intent](#user_intent) may be either implicit or explicit.

> **Note:** Additional requirements may be put into effect due to the specific features requested by the options object when calling `requestSession()`.

## User intent

**User intent** is the concept of whether or not an action being performed by code is being performed because of something the user intends to do or not. There are two kinds of user intent: **implicit** and **explicit**.

**Explicit user intent** (explicit user consent) is granted when the user has specifically and expressly been asked for permission to perform an action.

**Implicit user intent** (implicit user consent) is assumed if either of the following scenarios is the case:

- The user has interacted with the document in some way which has in turn caused your request to occur. For example, if you have an "Enter XR mode" button, and the user clicks it, calling `requestSession()` from the button's {{domxref("Element.click_event", "click")}} event handler will permitted.
- If your code is executing during the launch of a web application, the runtime may consider the act of launching your web application to qualify as user intent.
