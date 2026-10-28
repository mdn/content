---
title: Publishing your website
short-title: Publishing
slug: Learn_web_development/Getting_started/Your_first_website/Publishing_your_website
page-type: tutorial-chapter
sidebar: learnsidebar
---

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/Adding_interactivity", "Learn_web_development/Getting_started/Web_standards", "Learn_web_development/Getting_started/Your_first_website")}}

Once you finish writing the code and organizing the files that make up your website, you need to put it all online so people can find it. This article explains how to get [your sample website](/en-US/docs/Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like) online.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerequisites:</th>
      <td>
        Basic familiarity with your computer operating system, the basic software you will use to build a website, and file systems.
      </td>
    </tr>
    <tr>
      <th scope="row">Learning outcomes:</th>
      <td>
        <ul>
          <li>The basic tools and concepts involved in publishing a website — hosting, domains, FTP programs.</li>
          <li>What alternative hosting options are available, for example GitHub and CodePen.</li>
          <li>Publishing a website using GitHub Pages.</li>
          <li>Hosting, how to purchase it, and how to put a website online.</li>
          <li>How to register a domain.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## What are the options?

Publishing a website is a complex topic because there are many ways to go about it. This article explains the most common approaches:

- Getting hosting and a domain name (low cost for small projects)
- Using a web-based IDE (free for basic sites)
- Using an online publishing tool (free for basic sites)

## Getting hosting and a domain name

To have more control over content and website appearance, most professionals/businesses choose to buy web hosting and a domain name:

- Web hosting is rented file space on a hosting company's [web server](/en-US/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_web_server). You put website files on the web server. The web server provides website content to website visitors. Some web hosting services are free for basic static file hosting, while others cost a small amount per month (say $5-10).
- A [domain name](/en-US/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name) is the unique web address where people find your website, such as `https://www.mozilla.org` or `https://www.bbc.co.uk`. You can rent your domain name for as many years as you want from a **domain registrar**. The domain name usually costs $5-15 per year. This cost varies depending on:
  - Top-level domain registry: top-level domain names (TLDs) like `.com`, `.org`, and `.io` are managed by different registries that set fees for registrars. Some countries use registry fees as a revenue stream and set high prices; popular TLDs like `.io` and `.ai` can also be much more expensive than standard `.com`.
  - Registrar markup: Some registrars may charge more for certain domain names. For example, the same TLD may be more expensive depending on supply and demand, and some "premium" domain names may be more expensive, especially short names like `ai.com`.
  - Services associated with the domain name: Some registrars provide additional options such as a promotional price in the first year that goes up after renewal or registrar-provided email services.

If you get your web hosting _and_ domain name from the same company, they are configured to talk to one another automatically. However, if you get them from separate companies, or want to change your hosting, you need to point the domain name to the correct server so people see your website when they navigate to that web address. Your hosting provider either gives you a public IP address — or one under their domain like my-app.pages.dev or my-app.github.io — and you configure your DNS records to add an A record or a CNAME record.

### Tips for finding hosting and domains

- MDN does not promote specific commercial hosting companies or domain name registrars. To find hosting companies and registrars, just search for "web hosting" and "domain names". All registrars will have a feature to allow you to check if the domain name you want is available.
- Your home or office {{Glossary("ISP", "internet service provider")}} may provide some limited hosting for a small website. The available feature set will be limited, but it might be perfect for your first experiments.
- There are also free services available like [Neocities](https://neocities.org/), [Google Sites](https://sites.google.com/), and [WordPress](https://wordpress.com/). Such services can be limited in scope, but they are good enough for initial experiments.

## Publishing to your server

Companies use various mechanisms to transfer static files to their web servers. Many will have more than one option; typical options include using an [(S)FTP client](/en-US/docs/Glossary/FTP) or [RSync](https://en.wikipedia.org/wiki/Rsync), or keeping your website source code in a [GitHub repo](https://github.com/) and granting the hosting company access so they can fetch the source, build it if necessary, and publish it.

In the following subsections we'll look at (S)FTP and RSync in more detail.

### (S)FTP

Each operating system includes an (S)FTP client as part of its file manager. Windows Explorer, Nautilus (a common Linux file manager), and the Mac Finder all include this functionality. However, people often choose dedicated (S)FTP clients to display local or remote directories side-by-side and store server passwords.

If you want to install an (S)FTP client, there are several reliable and free options: for example, [FileZilla](https://filezilla-project.org/) for all platforms, [WinSCP](https://winscp.net/eng/index.php) for Windows, [Cyberduck](https://cyberduck.io/) for Mac or Windows.

In general, you'll get some instructions from your hosting provided like these for connecting via FTP:

> - SFTP server: `sftp://demozilla.examplehostingprovider.net`
> - Username: `demozilla`
> - Password: `quickbrownfox`
> - Port: `5548`
> - To publish on the web, put your files into the `Public/htdocs` directory.

To find out where to enter this information on your chosen client, see the client's documentation.

Once connected, (S)FTP clients generally give you either a one-pane view that shows the remote FTP server filesystem, or a two-pane view that shows the remote FTP server filesystem on one side and the local file system on the other side. Whichever way the information is presented, you generally have to drag and drop your local site files onto the remote FTP view to put them in the right place. As hinted above, the default location (at least for static files) is usually `Public/htdocs`.

### Rsync

{{Glossary("Rsync")}} is a local-to-remote file synchronizing tool. It is seen as a more advanced tool than (S)FTP because it is typically used on the command line, although GUI clients do exist, such as [Acrosync](https://acrosync.com/mac.html) for Windows and macOS and [Grsync](https://www.opbyte.it/grsync/) for all platforms.

A basic command looks like this:

```bash
rsync [-options] -e "ssh [SSH DETAILS GO HERE]" SOURCE user@x.x.x.x:DESTINATION
```

- `-options` is a dash followed by one or more letters, for example, `-v` for verbose error messages, and `-b` to make backups. You can see the full list at the [rsync man page](https://linux.die.net/man/1/rsync) (search for "Options summary").
- `-e "ssh [SSH DETAILS GO HERE]"` includes SSH details to provide a secure connection.
- `SOURCE` is the path to the local file or directory that you want to copy files over from.
- `user@` is the credentials of the user on the remote server you want to copy files over to.
- `x.x.x.x` is the IP address of the remote server.
- `DESTINATION` is the path to the location you want to copy your directory or files to on the remote server.

Your hosting provider provides such details.

For more information and further examples:

- See [How to Use Rsync to Copy/Sync Files Between Servers](https://www.atlantic.net/vps-hosting/how-to-use-rsync-copy-sync-files-servers/).
- You can find more details of what is needed at [How To Copy Files With Rsync Over SSH](https://www.digitalocean.com/community/tutorials/how-to-copy-files-with-rsync-over-ssh).

## Using a web-based IDE such as CodePen

There are a number of web apps that emulate a website development environment, allowing you to write HTML, CSS and JavaScript, which is then rendered and displayed in an output pane. Generally speaking, these tools are easy to use, great for learning, good for sharing code (for example, if you want to share a technique with or ask for debugging help from colleagues in a different office), and free (for basic features). They host your rendered page at a unique web address. However, the features are limited, and these apps often don't provide hosting space for assets (like images).

Try playing with some of these examples to find out which one works best for you:

- [Scrimba](https://scrimba.com/new?via=mdn) <sup>[_MDN learning partner_](/en-US/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>
- [JSFiddle](https://jsfiddle.net/)
- [JSBin](https://jsbin.com/)
- [CodePen](https://codepen.io/)

## Using an online publishing tool

Some tools let you publish your website online:

- [GitHub](https://github.com/) is a "social coding" site. It allows you to upload code repositories for storage in the [Git](https://git-scm.com/) **version control system.** You can then collaborate on code projects, and the system is open-source by default, meaning that anyone in the world can find your GitHub code, use it, learn from it, and improve on it. GitHub has a very useful feature called [GitHub Pages](https://pages.github.com/), which allows you to expose website code live on the web.
- [Netlify](https://www.netlify.com/) is a web hosting platform that provides hosting for static websites directly from your GitHub repository. It also provides several additional features such as deployment preview, serverless functions, and form handling.

These options are generally free with a limited feature set.

## What approach would we recommend?

If you are just getting started, we'd recommend GitHub Pages for its ease of use.

1. If you don't already have an account, [sign up for GitHub](https://github.com/).
2. Create a repository to store your site, following the steps at [Creating a repository for your site](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site#creating-a-repository-for-your-site).
3. Upload your site files to your new repository using the GitHub UI. You can find instructions on how to do so at [Adding a file to a repository on GitHub](https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository#adding-a-file-to-a-repository-on-github).
4. Set up your repository to publish its contents using GitHub Pages. To do this, see the instructions at [Publishing from a branch](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#publishing-from-a-branch).
5. After a short while, you should see a message saying "Your site is live at https://username.github.io/repositoryname/", for example, "Your site is live at https://bobsmith.github.io/my-first-website/" if your name is bobsmith and your repository is called my-first-website. A "Visit site" button should appear that you can click to view your site.

> [!NOTE]
> If you've got your own domain, and want it to point to a GitHub Pages site, see [Configure a custom domain for your GitHub Pages site](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site) for guidance.

## Further reading

- [What is a web server](/en-US/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_web_server)
- [Understanding domain names](/en-US/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name)
- [Deploy a Website](https://www.codecademy.com/learn/deploy-a-website): A nice tutorial from Codecademy that goes a bit further and shows some additional techniques.

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/Adding_interactivity", "Learn_web_development/Getting_started/Web_standards", "Learn_web_development/Getting_started/Your_first_website")}}
