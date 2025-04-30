---
title: How do you host your website on Google App Engine?
slug: Learn_web_development/Howto/Tools_and_setup/How_do_you_host_your_website_on_Google_App_Engine
page-type: learn-faq
sidebar: learn-how-to
---

[Google App Engine](https://cloud.google.com/appengine) is a powerful platform that lets you build and run applications on Google's infrastructure — whether you need to build a multi-tiered web application from scratch or host a static website. Here's a step-by-step guide to hosting your website on Google App Engine.

## Creating a Google Cloud Platform project

To use Google's tools for your own site or app, you need to create a new project on Google Cloud Platform. This requires having a Google account.

1. Go to the [App Engine dashboard](https://console.cloud.google.com/projectselector/appengine) on the Google Cloud Platform Console and press the _Create_ button.
2. If you've not created a project before, you'll need to select whether you want to receive email updates or not, agree to the Terms of Service, and then you should be able to continue.
3. Enter a name for the project, edit your project ID and note it down. For this tutorial, the following values are used:

   - Project Name: _GAE Sample Site_
   - Project ID: _gaesamplesite_

4. Click the _Create_ button to create your project.

## Creating an application

Each Cloud Platform project can contain one App Engine application. Let's prepare an app for our project.

1. We'll need a sample application to publish. If you've not got one to use, download and unzip this [sample app](https://gaesamplesite.appspot.com/downloads.html).
2. Have a look at the sample application's structure — the `website` folder contains your website content and `app.yaml` is your application configuration file.

   - Your website content must go inside the `website` folder, and its landing page must be called `index.html`, but apart from that it can take whatever form you like.
   - The `app.yaml` file is a configuration file that tells App Engine how to map URLs to your static files. You don't need to edit it.

## Publishing your application

Now that we've got our project made and sample app files collected together, let's publish our app.

1. Open [Google Cloud Shell](https://shell.cloud.google.com/).
2. Drag and drop the `sample-app` folder into the left pane of the code editor.
3. Run the following in the command line to select your project:

   ```bash
   gcloud config set project gaesamplesite
   ```

4. Then run the following command to go to your app's directory:

   ```bash
   cd sample-app
   ```

5. You are now ready to deploy your application, i.e., upload your app to App Engine:

   ```bash
   gcloud app deploy
   ```

6. Enter a number to choose the region where you want your application located.
7. Enter `Y` to confirm.
8. Now navigate your browser to _your-project-id_.appspot.com to see your website online. For example, for the project ID _gaesamplesite_, go to [_gaesamplesite_.appspot.com](https://gaesamplesite.appspot.com/).

## See also

To learn more, see [Google App Engine Documentation](https://cloud.google.com/appengine/docs/).
