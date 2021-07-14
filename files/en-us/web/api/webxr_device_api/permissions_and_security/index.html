---
title: WebXR permissions and security
slug: Web/API/WebXR_Device_API/Permissions_and_security
---
<p>{{DefaultAPISidebar("WebXR Device API")}}{{Draft}}</p>

<p>The <a href="/en-US/docs/Web/API/WebXR_Device_API">WebXR Device API</a> has several areas of security to contend with, from establishing feature-policy to ensuring the user intends to use the mixed reality presentation before activating it. Among other things, you need to confirm access to device features such as the microphone and/or camera, get permission to use immersive VR mode (if applicable), and so forth. <span class="seoSummary">The variety of hardware and software involved in XR brings multiple APIs and technologies into play. In this guide, we'll cover how to ensure your app has the permissions it needs to provide a secure and private XR experience.</span></p>

<h2 id="Introduction">Introduction</h2>

<p>The WebXR Device API is subject to a number of permission and security controls. While not onerous, they are worth being aware of. These mostly revolve around the fully-immersive <code>immersive-vr</code> session mode, but there are things to be aware of when setting up an AR session, as well.</p>

<h2 id="Immersive_presentation_of_VR">Immersive presentation of VR</h2>

<p>First, any requests to activate the <code>immersive-vr</code> mode are rejected if the domain issuing the request does not have permission to enable an immersive session. This permission comes from the <code>xr-spatial-tracking</code> <a href="/en-US/docs/Web/HTTP/Feature_Policy">feature policy</a>.</p>

<p>Once that check is passed, the request to enter <code>immersive-vr</code> mode is allowed if all of the following are true:</p>

<ul>
 <li>The <code>requestSession()</code> call was issued by code executing within the handler for a user event, or the from the startup code for a user-launched <a href="/en-US/docs/Web/Progressive_web_apps">web application</a>.</li>
 <li>The document is considered trustworthy, in that it is responsible and is both currently active and has focus.</li>
 <li>The user's intent to enter immersive VR mode is well understood; see {{anch("User intent")}} below for details.</li>
</ul>

<p>If all of that is true, the promise returned by <code>requestSession()</code> is resolved, and the new {{domxref("XRSession")}} object is passed into the fulfillment handler. Otherwise, an appropriate exception is thrown, such as <code>SecurityError</code> if the document doesn't have permission to enter immersive mode.</p>

<h2 id="Inline_presentation">Inline presentation</h2>

<p>When you request an {{domxref("XRSession")}} with the mode set to <code>inline</code>, and any features are required or requested, the browser will only allow the session to be created if the call to {{domxref("XRSystem/requestSession", "requestSession()")}} was made by code which is executing expressly due to <strong>user intent</strong>.</p>

<p>Specifically:</p>

<ul>
 <li>If the <code>requestSession()</code> call isn't coming from within the handler executed in response to a user event, and is not being issued while launching a web application, the request is denied and <code>false</code> is delivered to the promise's fulfillment handler.</li>
 <li>If the document making the request isn't the one which is responsible for the script, the request is denied.</li>
 <li>If the document making the request isn't trustworthy, the request is denied and <code>false</code> is returned through the promise's fulfillment routine. A trustworthy document is one which is both responsible and active, and which currently has focus.</li>
 <li>If the user's intent to open an inline XR presentation is not well understood, the request is denied. Understanding of the {{anch("User intent", "user's intent")}} may be either implicit or explicit.</li>
</ul>

<div class="notecard note">
<p><strong>Note:</strong> Additional requirements may be put into effect due to the specific features requested by the options object when calling <code>requestSession()</code>.</p>
</div>

<h2 id="User_intent">User intent</h2>

<p><strong>User intent</strong> is the concept of whether or not an action being performed by code is being performed because of something the user intends to do or not. There are two kinds of user intent: <strong>implicit</strong> and <strong>explicit</strong>.</p>

<p><strong>Explicit user intent</strong> (explicit user consent) is granted when the user has specifically and expressly been asked for permission to perform an action.</p>

<p><strong>Implicit user intent</strong> (implicit user consent) is assumed if either of the following scenarios is the case:</p>

<ul>
 <li>The user has interacted with the document in some way which has in turn caused your request to occur. For example, if you have an "Enter XR mode" button, and the user clicks it, calling <code>requestSession()</code> from the button's {{domxref("Element.click_event", "click")}} event handler will permitted.</li>
 <li>If your code is executing during the launch of a web application, the runtime may consider the act of launching your web application to qualify as user intent.</li>
</ul>
