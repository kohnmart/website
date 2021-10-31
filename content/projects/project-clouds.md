---
title: "Project Clouds Animation"
tag: "vfx"
thumbnail: "vfx/clouds/title/title.png"
highlight: "true"
members: {
Date: "May - July 2021",   
Type: "Study",  
Martin Kohnle: "Research, Clouds, Skybox, Animation, Modelling, Rendering",
Moritz Kronberger: "Research, Field, Extrusions, Modelling, Animation"
}
headlines: ["Introduction", "Animation", "Research", "Review"]
link: "https://www.youtube.com/watch?v=bUjEX9_8Q0c"
file: "docs/clouds.pdf"
---

# Project Clouds

### Houdini / Substance Painter / Mapbox <br /> <br />

<team :members="members" :link="link" title="Media" type="Video" :doc="file"></team> <br /> <br />

<image-loader height="overview_image_wide" image="vfx/clouds/title"></image-loader>

## Introduction

#### Plot

"It was now the third day that something seemed to be wrong with the evening sky. The clouds were even lower today than the days before. And when nature finally fell silent, the storm set in."
<br /> <br />

#### Interpretation

Aliens arrive on earth by camouflaging themselves in cloud formations.
<br /> <br />

#### Concept

We imagined that the entire scene would take place on a farm field. As the sun goes down, plants and grasses gently blow in the wind. The mood is peaceful, birds chirp in the distance. In the process, the clouds transform and the wind gets stronger. The wind strength is evident through the vegetation. The clouds suddenly produce extrusions that are threateningly approaching the ground.
<br /> <br />

## Animation  

<youtube-loader link="https://www.youtube.com/embed/bUjEX9_8Q0c"></youtube-loader>

## Research

#### Study

After we set up the concept, we quickly noticed that with the clouds and field, we encountered two very complex structures. Clouds are strange objects when you think about them, are they more physical or gaseous? You can imagine the field better, but rendering millions of grasses and bushes is a crazy effort. We decided to work separately on clouds and fields in order to be able to dive deeper into the areas. Different approaches and implementations were tested for both models. We had to find the sweet spot of acceptable hardware performance and the best optical quality. Nothing easier than that. <br /> <br />

#### Clouds

At the beginning, research had to be done to find out when and where certain cloud formations appear. It is also realistic that formations are visible at different altitudes at the same time.
Check the documentation for detailed information and node structures. For the final work, we decided on two model concepts, pointy and poly. The development has shown that pointy clouds can be used efficiently for very large, flat and scattered formations which extend over the whole map. In contrast, the poly clouds are better suited for high and dense cumulus clouds.
<br /> <br />

#### Mapbox

The Mapbox Node can be used to generate landscapes and terrain in Houdini.
Height maps and satellite images are combined to create a realistic landscape.
In addition, the image data is read out in order to match the color of the vegetation.

<br /> <br />

<image-loader height="overview_image_ws" image="vfx/clouds/poly"></image-loader>

## Review

For a team of two with limited hardware, it was quite a challenge. Again and again we have reached the limits of what is technically feasible (for us). Instead of compromising with the problems, we invested a lot of time and creativity to find meaningful and efficient solutions.
A great side effect is that I was able to find out a lot about clouds and their formation.
