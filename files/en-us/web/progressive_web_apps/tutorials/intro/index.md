---
title: Creating your first PWA
slug: Web/Progressive_web_apps/Tutorials/Intro
---

Progressive web applications, known as PWAs, are a way to build applications for all devices using the web technologies we all know and love: HTML, CSS, and JavaScript.

## PWA benefits

Using the languages of the web, we can create fully functioning applications that work both online and offline, both in the browsers and on the user's operating systems.

### Code once. Install everywhere

Historically, operating system specific applications needed to be written in operating system targeted programming languages, then compiled and packaged based on OS language and application requirement, which differ by operating system, and distributed to users thru downloads, often in proprietary app stores, and then installed by the user.

For an application to be installable on an operating system, such as Windows, iOS, MacOS, Linux, and Android, the application had to be developed in a programming languages, like C#, .Net, Objective C, Swift, Kotlin, Java, or Python. PWAs solve this problem: they use a single code base, written using regular open web technologies.

Historically, in most cases, the application code had to be compiled and packaged using the operating system's SDK into downloadable .exe, .dmg, or other installable files or were made available through a vendor like the Apple App Store, [Google Play](https://play.google.com/store/apps), [Microsoft Store App](https://apps.microsoft.com/store/apps), or similar. PWAs don't have these requirements.

Like regular web sites, PWA are hosted on and downloable from web servers. They don't require any packaging. They can be seamlessly installed on any operating system without the need of app stores (nor app store approval and fees). PWA don't require any additional programming language knowledge, any proprietary SDK, or even an app store.

While PWAs don't require an intermediary, the Play store and App Store do distribute PWAs, undifferentiated from other iOS or Android apps.

### Regular website that's progressively enhanced

PWAs are a way of progressively enhancing websites to make them available on a user's device, even offline. By including a manifest file and service worker, and serving the website over SSL, any website can become a PWA.

By default, PWAs are regular websites. They use the same technologies as regular websites. They are also linkable, discoverable via search engines, and visible in a browser, just like regular websites.

PWA are regular web applications that are progressively enhanced to be able to be installed.

### Compared to OED applications

Once installed, PWAs can be made to appear and act similarly to other applications installed on the user's device:

- Application window

  - : Similar to other installed applications, depending on PWA settings defined by the developer and set with user preferences, the PWA can be made to open in its own application window.

- Application icon
  - : PWAs display an application icon in the same location as other installed applications installed on the users' operating system: this can be an icon on the homescreen, in the toolbar, in the application's folder, or wherever the device displays application icons.
- Works offline
  - : Internet access is initially required to download the application and is also required when syncing data with the server or other users. This is required of all applications, not just PWAs. When [service workers] are set to create an offline experience, the application will keep working should the user lose or not have internet access. As the user makes changes while offline, the application can update local and session storage, and service workers can then sync the data once connectivity is restored. The user doesn't need to be actively engaging with the PWA, in fact, the PWA doesn't even need to be open, for it to send and retrieve server data.

## Creating your first PWA

In this tutorial, we will create "pets unlimited," a basic kitten and puppy viewer progressive web application.

To complete this tutorial, it is helpful to have a basic level of understanding of HTML, CSS, and JavaScript. The tutorial provides instructions on creating the manifest file and initiating the service worker. The tutorial will cover checking for internet access, defining both an online and offline experience.

You will be installing node.js, MAMP, or other local server to create a local secure connection. While the secure connection is a requirement, nodejs, MAMP, or any application other than a text editor and browser is not a requirement for creating a PWA.

The steps include:

- [Basic site](/en-US/Docs/Web/Progressive_web_apps/tutorials/intro/html)
  - : We will create a website that shows a picture of a cat with an installation button, using HTML, CSS, and JavaScript.
- [Icon and appearance](/en-US/Docs/Web/Progressive_web_apps/tutorials/intro/manifest)
  - : A PWA requires a manifest is a JSON file that describes the name, icon, description, and other definitions of how the application works within the operating system on which the PWA is installed. We will create a manifest file that defines the appearance of the application when installed, including which icons should be used depending on the user's device, and parameters for the application viewport.
- [Secure connection](/en-US/Docs/Web/Progressive_web_apps/tutorials/intro/secure)
  - : While no frameworks are needed to create a PWA, we will link to options for creating a secure localhost connection so you can test your application and install it.
- [Service worker](/en-US/Docs/Web/Progressive_web_apps/tutorials/intro/service_worker)
  - : The service worker enables the application to work offline. With the secure connection in the previous step, On the very first visit to a web page that installs a new service worker, the initial visit to a page provides its baseline functionality while the service worker downloads. After a service worker is installed and activated, it controls the page to offer improved reliability and speed.
- [Offline experience](/en-US/Docs/Web/Progressive_web_apps/tutorials/intro/offline)
  - : With JavaScript, we will determine whether the user in online or offline. When offline, they will be shown an offline experience that informs the user they are offline. When online, the experience will be similar to the website, but the installation button will not be visible.
- [Session storage](/en-US/Docs/Web/Progressive_web_apps/tutorials/intro/storage)
  - : Will take a look at service workers and session storage, using JavaScript to enhance the PWA with a counter of how many cat pictures have been shown.

## See Also

Possible other introductory level tutorial topics:

- [Splash page](/en-US/Docs/Web/Progressive_web_apps/tutorials/intro/splash)
