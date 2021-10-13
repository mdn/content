---
title: Progressive loading
slug: Web/Progressive_web_apps/Loading
tags:
  - Loading
  - PWAs
  - Progressive web apps
  - js13kGames
  - progressive
---
<div>{{PreviousMenu("Web/Progressive_web_apps/Re-engageable_Notifications_Push", "Web/Progressive_web_apps")}}</div>

<p class="summary">In previous articles we covered APIs that help us make our <a href="https://mdn.github.io/pwa-examples/js13kpwa/">js13kPWA</a> example a Progressive Web App: <a href="en-US/docs/Web/Progressive_web_apps/Offline_Service_workers">Service Workers</a>, <a href="/en-US/docs/Web/Progressive_web_apps/Installable_PWAs">Web Manifests</a>, <a href="/en-US/docs/Web/Progressive_web_apps/Re-engageable_Notifications_Push">Notifications and Push</a>. In this article we will go even further and improve the performance of the app by progressively loading its resources.</p>

<h2 id="First_meaningful_paint">First meaningful paint</h2>

<p>It's important to deliver something meaningful to the user as soon as possible — the longer they wait for the page to load, the bigger the chance they will leave before waiting for everything to finish. We should be able to show them at least the basic view of the page they want to see, with placeholders in the places more content will eventually be loaded.</p>

<p>This could be achieved by progressive loading — also known as <a href="https://en.wikipedia.org/wiki/Lazy_loading">Lazy loading</a>. This is all about deferring loading of as many resources as possible (HTML, CSS, JavaScript), and only loading those immediately that are really needed for the very first experience.</p>

<h2 id="Bundling_versus_splitting">Bundling versus splitting</h2>

<p>Many visitors won't go through every single page of a website, yet the usual approach is to bundle every feature we have into one big file. A <code>bundle.js</code> file can be many megabytes, and a single <code>style.css</code> bundle can contain everything from basic CSS structure definitions to all the possible styles of every version of the site: mobile, tablet, desktop, print only, etc.</p>

<p>It is faster to load all that information as one file rather than many small ones, but if the user doesn't need everything at the very beginning, we could load only what's crucial and then manage other resources when needed.</p>

<h2 id="Render-blocking_resources">Render-blocking resources</h2>

<p>Bundling is a problem, because the browser has to load the HTML, CSS, and JavaScript before it can paint their rendered results onto the screen. During the few seconds between initial website access and completion of loading, the user sees a blank page, which is a bad experience.</p>

<p>To fix that we can, for example, add <code>defer</code> to JavaScript files:</p>

<pre class="brush: html">&lt;script src="app.js" defer&gt;&lt;/script&gt;
</pre>

<p>They will be downloaded and executed <em>after</em> the document itself has been parsed, so it won't block rendering the HTML structure. We can also split css files and add media types to them:</p>

<pre class="brush: html">&lt;link rel="stylesheet" href="style.css"&gt;
&lt;link rel="stylesheet" href="print.css" media="print"&gt;
</pre>

<p>This will tell the browser to load them only when the condition is met.</p>

<p>In our js13kPWA demo app, the CSS is simple enough to leave it all in a single file with no specific rules as to how to load them. We could go even further and move everything from <code>style.css</code> to the <code>&lt;style&gt;</code> tag in the <code>&lt;head&gt;</code> of <code>index.html</code> — this would improve performance even more, but for the readability of the example we will skip that approach too.</p>

<h2 id="Images">Images</h2>

<p>Besides JavaScript and CSS, websites will likely contain a number of images. When you include {{htmlelement("img")}} elements in your HTML, then every referenced image will be fetched and downloaded during initial website access. It's not unusual to have megabytes of image data to download before announcing the site is ready, but this again creates a bad perception of performance. We don't need all of the images in the best possible quality at the very beginning of viewing the site.</p>

<p>This can be optimized. First of all, you should use tools or services similar to <a href="https://tinypng.com/">TinyPNG</a>, which will reduce the file size of your images without altering the quality too much. If you're past that point, then you can start thinking about optimizing the image loading using JavaScript. We'll explain this below.</p>

<h3 id="Placeholder_image">Placeholder image</h3>

<p>Instead of having all the screenshots of games referenced in <code>&lt;img&gt;</code> element <code>src</code> attributes, which will force the browser to download them automatically, we can do it selectively via JavaScript. The js13kPWA app uses a placeholder image instead, which is small and lightweight, while the final paths to target images are stored in <code>data-src</code> attributes:</p>

<pre class="brush: html">&lt;img src='data/img/placeholder.png' data-src='data/img/SLUG.jpg' alt='NAME'&gt;
</pre>

<p>Those images will be loaded via JavaScript <em>after</em> the site finishes building the HTML structure. The placeholder image is scaled the same way the original images are, so it will take up the same space and not cause the layout to repaint as the images load.</p>

<h3 id="Loading_via_JavaScript">Loading via JavaScript</h3>

<p>The <code>app.js</code> file processes the <code>data-src</code> attributes like so:</p>

<pre class="brush: js">let imagesToLoad = document.querySelectorAll('img[data-src]');
const loadImages = (image) =&gt; {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () =&gt; {
    image.removeAttribute('data-src');
  };
};</pre>

<p>The <code>imagesToLoad</code> variable contains references to all the images, while the <code>loadImages</code> function moves the path from <code>data-src</code> to <code>src</code>. When each image is actually loaded, we remove its <code>data-src</code> attribute as it's not needed anymore. Then we loop through each image and load it:</p>

<pre class="brush: js">imagesToLoad.forEach((img) =&gt; {
  loadImages(img);
});</pre>

<h3 id="Blur_in_CSS">Blur in CSS</h3>

<p>To make the whole process more visually appealing, the placeholder is blurred in CSS.</p>

<p><img alt="Screenshot of placeholder images in the js13kPWA app." src="js13kpwa-placeholders.png"></p>

<p>We render the images with a blur at the beginning, so a transition to the sharp one can be achieved:</p>

<pre class="brush: css">article img[data-src] {
  filter: blur(0.2em);
}

article img {
  filter: blur(0em);
  transition: filter 0.5s;
}</pre>

<p>This will remove the blur effect within half a second, which looks good enough for the "loading" effect.</p>

<h2 id="Loading_on_demand">Loading on demand</h2>

<p>The image loading mechanism discussed in the above section works OK — it loads the images after rendering the HTML structure, and applies a nice transition effect in the process. The problem is that it still loads <em>all</em> the images at once, even though the user will only see the first two or three upon page load.</p>

<p>This problem can be solved with the new <a href="/en-US/docs/Web/API/Intersection_Observer_API">Intersection Observer API</a> — using this we can ensure that images will be loaded only when they appear in the viewport.</p>

<h3 id="Intersection_Observer">Intersection Observer</h3>

<p>This is a progressive enhancement to the previously working example — <a href="/en-US/docs/Web/API/Intersection_Observer_API">Intersection Observer</a> will load target images only when the user scrolls down, causing them to display in the viewport.</p>

<p>Here's what the relevant code looks like:</p>

<pre class="brush: js">if('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((items, observer) =&gt; {
    items.forEach((item) =&gt; {
      if(item.isIntersecting) {
        loadImages(item.target);
        observer.unobserve(item.target);
      }
    });
  });
  imagesToLoad.forEach((img) =&gt; {
    observer.observe(img);
  });
} else {
  imagesToLoad.forEach((img) =&gt; {
    loadImages(img);
  });
}</pre>

<p>If the {{domxref("IntersectionObserver")}} object is supported, the app creates a new instance of it. The function passed as a parameter is handling the case when one or more items are intersecting with the observer (i.e. is appearing inside the viewport). We can iterate over each case and react accordingly — when an image is visible, we load the correct image and stop observing it as we no longer need to observe it.</p>

<p>Let's reiterate our earlier mention of progressive enhancement — the code is written so that the app will work whether Intersection Observer is supported or not. If it's not, we just load the images using the more basic approach covered earlier.</p>

<h2 id="Improvements">Improvements</h2>

<p>Remember that there are many ways to optimize loading times, and this example is exploring only one of the approaches. You could try to make your apps more bulletproof by making them work without JavaScript — either using {{htmlelement("noscript")}} to show the image with final <code>src</code> already assigned, or by wrapping <code>&lt;img&gt;</code> tags with {{htmlelement("a")}} elements pointing at the target images, so the user can click and access them when desired.</p>

<p>We won't do that because the app itself is dependent on JavaScript — without it, the list of games wouldn't even be loaded, and the Service Worker code wouldn't be executed.</p>

<p>We could rewrite the loading process to load not only the images, but the complete items consisting of full descriptions and links. It would work like an infinite scroll — loading the items on the list only when the user scrolls the page down. That way the initial HTML structure would be minimal, loading time even smaller, and we would have even greater performance benefits.</p>

<h2 id="Conclusion">Conclusion</h2>

<p>Less files to load initially, smaller files split into modules, use of placeholders, and loading more content on demand — this will help achieve faster initial load times, which brings benefits to the app creator and offers a smoother experience to the user.</p>

<p>Remember about the progressive enhancement approach — offer a usable product no matter the device or platform, but be sure to enrich the experience to those using modern browsers.</p>

<h2 id="Final_thoughts">Final thoughts</h2>

<p>That's all for this tutorial series — we went through the <a href="https://github.com/mdn/pwa-examples/tree/master/js13kpwa">source code of the js13kPWA example app</a> and learned about the use of progressive web apps features including an <a href="/en-US/docs/Web/Progressive_web_apps/Introduction">Introduction</a>, <a href="/en-US/docs/Web/Progressive_web_apps/App_structure">PWA structure</a>, <a href="/en-US/docs/Web/Progressive_web_apps/Offline_Service_workers">offline availability with Service Workers</a>, <a href="/en-US/docs/Web/Progressive_web_apps/Installable_PWAs">installable PWAs</a>, and finally notifications. We also explained push with help from the <a href="https://serviceworke.rs/">Service Worker Cookbook</a>. And in this article, we've looked into the concept of progressive loading, including an interesting example that makes use of the <a href="/en-US/docs/Web/API/Intersection_Observer_API">Intersection Observer API</a>.</p>

<p>Feel free to experiment with the code, enhance your existing app with PWA features, or build something entirely new on your own. PWAs give a huge advantage over regular web apps.</p>

<p>{{PreviousMenu("Web/Progressive_web_apps/Re-engageable_Notifications_Push", "Web/Progressive_web_apps")}}</p>

<p>{{QuickLinksWithSubpages("/en-US/docs/Web/Progressive_web_apps/")}}</p>
