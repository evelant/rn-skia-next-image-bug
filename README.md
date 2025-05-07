# react-native-skia 2.0.0-next.3 image bug

Run the example app (only tested on iOS). You will see the following strange behavior with images:

- Images in the first example don't render until a re-render is triggered
- Images in the second example don't render at all, the only difference being a sort of the array
- Images in the second example will only render after a fast refresh

The behavior seems strange and inconsistent. I'm unsure whether this nails down an exact reproduction but it is as simple as I could make it.

In my actual app I have a similar component rendering a bunch of images layered on top of each other so they can be snapshot as a single png.

Everything worked on 1.12.4 on expo 52 and the old arch. This issue appeared with upgrade to 2.0.0-next.x, expo 53, and enabling the new arch.

Perhaps a clue: In my app I can snapshot the canvas with the missing images and the snapshot is correct as if the images were displayed. I guess that means they're only visually missing but are correctly rendered in memory in skia.
