---
path: "/blog/gatsby-node"
date: "2020-09-09"
title: "My Favourite file in Gatsby"
type: "Tech"
backupImage: "autumn.jpeg"
backupImageAlt: "Autumn Day"
---
I find myself turning to Gatsby for little mini projects. And I want to show people why. The methodology of ingested data into queryable graphQl nodes is one that I hope to see elsewhere.

So I don't want to leave anyone hanging, the file is `gatsby-node.js`. For those that don't know, it is where you bind the data that your site is going to use into the site. But the way that this happens is arbitrary, so you can throw whatever you want in there and make a site out of it.

Over the last weekend I've been tinkering with the idea of deleting of all Facebook related social media in a non-professional sense. So, I've been trying to replicate tiny pieces of functionality that I'd miss from leaving those sites here, on my personal site. I want to self host the difference so to speak. The only thing I'd really miss from both of these sites is their albums that you can share with anyone. And being a techy guy I said "Hey, I think I could add a little micro add-on that plugs into my photos and makes a library of them for this site".

So I wanted to create [gats-photo](https://github.com/ColeyG/gats-photo). An open source, self hosted photo static site generator. This project is still revision 0.0.1 but I think it is cool how well Gatsby molds to these problems. And I love how the "loosely coupled" data stream of Gatsby gets you there a little quicker.

In building the site, I've just tied the graphQl data to bind with the photos in a directory. In this way, transforming a set of data into, well, more data to query out on the other side. But with a build command, plopping out a site becomes super easy. So long as your data set isn't too big and doesn't change too often, Gatsby is your framework.

In the [gatsby-node.js](https://github.com/ColeyG/gats-photo/blob/master/gatsby-node.js) of that project, I just take pngs, jpegs, and jpgs, and throw them into the graphQl bucket. Then style, and enjoy. :)

_Eventually, once the plugin/site is done, I'll host a link showing the final product and my photo library in the footer. Also, feel free to take a look at the repo and make a copy/contribution yourself!_
