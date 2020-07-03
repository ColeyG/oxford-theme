---
path: "/blog/gameboy-advance-demo"
date: "2020-07-03"
title: "Gameboy Advance Demo"
type: "Tech"
backupImage: "froggers.png"
backupImageAlt: "Gameboy Advance Game"
---
So I have an ongoing problem.

Game development is boring.

I'm not sure why I don't love it. And I don't mean in an "I hate coding, or art, or music" sort of way. It is more like the act of actually creating a game isn't fun, even if the game is. I _love_ programming, and I _love_ video games, so why my first few forays into _video game programming_ were so unsuccessful is beyond me. It seems like most game development stacks aren't interested in producing good code. Most tools for intro game development are so "magic" that I don't ever understand what goes into the software. I'd like to write a video game like a programmer would. Perhaps the Gameboy Advance (GBA) could bring back some programming love for me.

Outside of the small toolchain that compiles your game, the GBA is all in the programmers hands. I/O and system information are just simple memory registers that are queried. Rendering isn't complex, pixels and sprites are just drawn to a vram register. And logic is handled via subroutines written _all_ by the programmers.

Programming like this is obviously not scalable, but it is **SO** fun! The only times that I've been satisfied with the outcome are when I have very intimate control over what happens in the game. Sure, a game would be easier to create if I've abstracted away all of the collisions, physics, and sound effects, but then I don't have artistic control. So why bother?

That is why I find myself writing for the weirdest stacks. Even if it is just a demo, I know so much more about the software here than I would have ever If I had chose Unity or Godot (I still like those platforms to tell the truth). So, I tried writing a little C. Following the guide [by reinterpretcast.com](https://www.reinterpretcast.com/writing-a-game-boy-advance-game) I started understanding my toolchain. Thankfully, a large number of Nintendo devkits for older hardware are really easy to use. In specifically the GBA, the compiler really just adds context information to your program, like memory addresses of I/O and the linker links your program for the GBA.

// TODO: Image Here

Even if it is just for the Gameboy, I'd suggest that everyone that is at least mildly interested in programming or games to take a stab at something like this. I think a lot of programming introductions happen these days with high abstractions and without proper context some coding skills seem to be lost. I hope that eventually some stack comes around that feels the same way some day. [Amethyst](https://github.com/amethyst/amethyst) seems promising.
