---
title: How does the Internet work?
slug: Learn/Common_questions/How_does_the_Internet_work
tags:
  - Beginner
  - Tutorial
  - WebMechanics
---
{{LearnSidebar}}

This article discusses what the Internet is and how it works.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerequisites:</th>
      <td>
        None, but we encourage you to read the
        <a href="/en-US/docs/Learn/Common_questions/Thinking_before_coding"
          >Article on setting project goals</a
        >
        first
      </td>
    </tr>
    <tr>
      <th scope="row">Objective:</th>
      <td>
        You will learn the basics of the technical infrastructure of the Web and
        the difference between Internet and the Web.
      </td>
    </tr>
  </tbody>
</table>

## Summary

The **Internet** is the backbone of the Web, the technical infrastructure that makes the Web possible. At its most basic, the Internet is a large network of computers which communicate all together.

[The history of the Internet is somewhat obscure](https://en.wikipedia.org/wiki/Internet#History). It began in the 1960s as a US-army-funded research project, then evolved into a public infrastructure in the 1980s with the support of many public universities and private companies. The various technologies that support the Internet have evolved over time, but the way it works hasn't changed that much: Internet is a way to connect computers all together and ensure that, whatever happens, they find a way to stay connected.

## Active Learning

- [How the internet Works in 5 minutes](https://www.youtube.com/watch?v=7_LPdttKXPc): A 5 minute video to understand the very basics of Internet by Aaron Titus.
- [How does the Internet work?](https://www.youtube.com/watch?v=x3c1ih2NJEg) Detailed well visualized 9 minute video.

## Deeper dive

### A simple network

When two computers need to communicate, you have to link them, either physically (usually with an [Ethernet cable](https://en.wikipedia.org/wiki/Ethernet_crossover_cable)) or wirelessly (for example with [Wi-Fi](https://en.wikipedia.org/wiki/WiFi) or [Bluetooth](https://en.wikipedia.org/wiki/Bluetooth) systems). All modern computers can sustain any of those connections.

> **Note:** For the rest of this article, we will only talk about physical cables, but wireless networks work the same.

![Two computers linked together](internet-schema-1.png)

Such a network is not limited to two computers. You can connect as many computers as you wish. But it gets complicated quickly. If you're trying to connect, say, ten computers, you need 45 cables, with nine plugs per computer!

![Ten computers all together](internet-schema-2.png)

To solve this problem, each computer on a network is connected to a special tiny computer called a _router_. This _router_ has only one job: like a signaler at a railway station, it makes sure that a message sent from a given computer arrives at the right destination computer. To send a message to computer B, computer A must send the message to the router, which in turn forwards the message to computer B and makes sure the message is not delivered to computer C.

Once we add a router to the system, our network of 10 computers only requires 10 cables: a single plug for each computer and a router with 10 plugs.

![Ten computers with a router](internet-schema-3.png)

### A network of networks

So far so good. But what about connecting hundreds, thousands, billions of computers? Of course a single _router_ can't scale that far, but, if you read carefully, we said that a _router_ is a computer like any other, so what keeps us from connecting two _routers_ together? Nothing, so let's do that.

![Two routers linked together](internet-schema-4.png)

By connecting computers to routers, then routers to routers, we are able to scale infinitely.

![Routers linked to routers](internet-schema-5.png)

Such a network comes very close to what we call the Internet, but we're missing something. We built that network for our own purposes. There are other networks out there: your friends, your neighbors, anyone can have their own network of computers. But it's not really possible to set cables up between your house and the rest of the world, so how can you handle this? Well, there are already cables linked to your house, for example, electric power and telephone. The telephone infrastructure already connects your house with anyone in the world so it is the perfect wire we need. To connect our network to the telephone infrastructure, we need a special piece of equipment called a _modem_. This _modem_ turns the information from our network into information manageable by the telephone infrastructure and vice versa.

![A router linked to a modem](internet-schema-6.png)

So we are connected to the telephone infrastructure. The next step is to send the messages from our network to the network we want to reach. To do that, we will connect our network to an Internet Service Provider (ISP). An ISP is a company that manages some special _routers_ that are all linked together and can also access other ISPs' routers. So the message from our network is carried through the network of ISP networks to the destination network. The Internet consists of this whole infrastructure of networks.

![Full Internet stack](internet-schema-7.png)

### Finding computers

If you want to send a message to a computer, you have to specify which one. Thus any computer linked to a network has a unique address that identifies it, called an "IP address" (where IP stands for _Internet Protocol_). It's an address made of a series of four numbers separated by dots, for example: `192.168.2.10`.

That's perfectly fine for computers, but we human beings have a hard time remembering that sort of address. To make things easier, we can alias an IP address with a human readable name called a _domain name_. For example (at the time of writing; IP addresses can change) `google.com` is the domain name used on top of the IP address `142.250.190.78`. So using the domain name is the easiest way for us to reach a computer over the Internet.

![Show how a domain name can alias an IP address](dns-ip.png)

### Internet and the web

As you might notice, when we browse the Web with a Web browser, we usually use the domain name to reach a website. Does that mean the Internet and the Web are the same thing? It's not that simple. As we saw, the Internet is a technical infrastructure which allows billions of computers to be connected all together. Among those computers, some computers (called _Web servers_) can send messages intelligible to web browsers. The _Internet_ is an infrastructure, whereas the _Web_ is a service built on top of the infrastructure. It is worth noting there are several other services built on top of the Internet, such as email and {{Glossary("IRC")}}.

### Intranets and Extranets

Intranets are _private_ networks that are restricted to members of a particular organization.
They are commonly used to provide a portal for members to securely access shared resources, collaborate and communicate.
For example, an organization's intranet might host web pages for sharing department or team information, shared drives for managing key documents and files,
portals for performing business administration tasks, and collaboration tools like wikis, discussion boards, and messaging systems.

Extranets are very similar to Intranets, except they open all or part of a private network to allow sharing and collaboration with other organizations.
They are typically used to safely and securely share information with clients and stakeholders who work closely with a business.
Often their functions are similar to those provided by an intranet: information and file sharing, collaboration tools, discussion boards, etc.

Both intranets and extranets run on the same kind of infrastructure as the Internet, and use the same protocols.
They can therefore be accessed by authorized members from different physical locations.

![Graphical Representation of how Extranet and Intranet work](internet-schema-8.png)

## Next steps

- [How the Web works](/en-US/docs/Learn/Getting_started_with_the_web/How_the_Web_works)
- [Understanding the difference between a web page, a web site, a web server and a search engine](/en-US/docs/Learn/Common_questions/Pages_sites_servers_and_search_engines)
- [Understanding domain names](/en-US/docs/Learn/Common_questions/What_is_a_domain_name)
