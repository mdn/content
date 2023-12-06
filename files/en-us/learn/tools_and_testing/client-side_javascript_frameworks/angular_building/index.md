---
title: Building Angular applications and further resources
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_building
page-type: learn-module-chapter
---

{{LearnSidebar}}{{PreviousMenu("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_filtering", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

This final Angular article covers how to build an app ready for production, and provides further resources for you to continue your learning journey.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerequisites:</th>
      <td>
        Familiarity with the core <a href="/en-US/docs/Learn/HTML">HTML</a>,
        <a href="/en-US/docs/Learn/CSS">CSS</a>, and
        <a href="/en-US/docs/Learn/JavaScript">JavaScript</a> languages,
        knowledge of the
        <a
          href="/en-US/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
          >terminal/command line</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Objective:</th>
      <td>To learn how to build your Angular app.</td>
    </tr>
  </tbody>
</table>

## Building your finished application

Now that you are finished developing your application, you can run the Angular CLI `build` command.
When you run the `build` command in your `todo` directory, your application compiles into an output directory named `dist/`.

In the `todo` directory, run the following command at the command line:

```bash
ng build -c production
```

The CLI compiles the application and puts the output in a new `dist` directory.
The `--configuration production`/`-c production` flag with `ng build` gets rid of stuff you don't need for production.

## Deploying your application

To deploy your application, you can copy the contents of the `dist/my-project-name` folder to your web server.
Because these files are static, you can host them on any web server capable of serving files, such as:

- Node.js
- Java
- .NET

You can use any backend such as [Firebase](https://firebase.google.com/docs/hosting), [Google Cloud](https://cloud.google.com/solutions/web-hosting), or [App Engine](https://cloud.google.com/appengine/docs/standard/python/getting-started/hosting-a-static-website).

## What's next

At this point, you've built a basic application, but your Angular journey is just beginning.
You can learn more by exploring the Angular documentation, such as:

- [Tour of Heroes](https://angular.io/tutorial): An in-depth tutorial highlighting Angular features, such as using services, navigation, and getting data from a server.
- The Angular [Components](https://angular.io/guide/component-overview) guides: A series of articles that cover topics such as lifecycle, component interaction, and view encapsulation.
- The [Forms](https://angular.io/guide/forms-overview) guides: Articles that guide you through building reactive forms in Angular, validating input, and building dynamic forms.

## Summary

That's it for now. We hope you had fun with Angular!

{{PreviousMenu("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_filtering", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
