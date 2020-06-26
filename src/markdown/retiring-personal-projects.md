---
path: "/blog/retiring-personal-projects"
date: "2020-05-30"
title: "Retiring Personal Projects"
type: "Opinion"
backupImage: "optimized/autumn.jpeg"
backupImageAlt: "Autumn Day"
---
I am in a number of technical discord and forum channels. In most you'll see users self-promoting, talking about the projects that they are developing their skills with. Today I saw something a little bit different.

A user in this channel was talking about how his project was ending. It hadn't gone the way that he and his collaborators originally wanted. And he was losing interest in the development. For me, the weirdest part of this was how the message was being displayed. The maintainer and his collaborators were incredibly happy even though the project had just been cancelled.

This idea really caught me off guard. They discussed what they hated about the project, but more importantly they discussed the positive effect that it had on their lives regardless of the outcome. I think we should all be taking a look at what is happening especially in the worst software that we write. Your best software's quality increases with the insights gathered accross your biggest blunders.

Instead of letting the project become your next new albatross, ditch it. (One of my favourite videos on this discusses the 'monkey on your back problem' that the sunk cost fallacy allows us to buy into. Adam Butcher talks about this in [The Game That Time Forgot](https://www.youtube.com/watch?v=2b0tSu0QDQ0).) If you are having second thoughts about your architecture, stack, or even field of study, swap it! You aren't beholden to your previous decisions. Everyone is familiar with looking at something you wrote a week ago and hating it.

Just because you are abandoning a project, doesn't mean it _wasn't worth your time_. Most of my abandonware still rests on my github for the day that I can apply the same solutions to different problems. One of a developer's super powers is their ability to search and document. With the help of simple scripts you can mine your old work for pieces that don't need abandoning, and the time spent along the way can be repurposed.

So, today I retire [ganymede](https://github.com/ColeyG/ganymede). Over the last few months I've been attempting to write my own C++ game engine. In an attempt to better my game programming skills I picked up C++ just over six months ago, and I thought that this game could provide an outlet to that. I was dead wrong. There really isn't much casual to writing multiplatform code in C++. Outside of _actual work_, game programming is something I want to stick to, so I've decided to try to repurpose this knowledge of C++ into a game built with [Godot](https://godotengine.org/). Godot bills itself as "The Game Engine you waited for", so hopefully I can pivot to an ecosystem where I won't have to write boutique OS-specific boilerplate anymore.

Who knows, maybe if the build system for C++ improves or my skill to handle the quirks of CMake improves, I'll revisit the project. But for know, Windows compilation and dependency management sucks with C++, and introduces too much unneeded complexity to game creation.

_I also plan on using [this course](https://www.youtube.com/watch?v=UM5nuVkDfLg) to learn Godot. Perhaps I'll review the learning afterwards._
