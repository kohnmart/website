---
title: "Project Clouds Animation"
tag: "vfx"
thumbnail: "vfx/clouds/title/title.png"
highlight: "true"
---


## Project Clouds Animation

### Houdini / Substance Painter / Mapbox

Date: July 2021 <br />
Team: Martin Kohnle, Moritz Kronberger <br />
Role: Research, Cloud Modelling, Rendering <br />
<br /> <br />

<image-loader height="overview_image_400" image="vfx/clouds/title"></image-loader>
<br /> <br />

#### Plot

"It was now the third day that something seemed to be wrong with the evening sky. The clouds were even lower today than the days before. And when nature finally fell silent, the storm set in."
<br /> <br />

#### Interpretation

Aliens arrive on earth by camouflaging themselves in cloud formations.
<br /> <br />

#### Concept

We imagined that the entire scene would take place on a farm field. As the sun goes down, plants and grasses gently blow in the wind. The mood is peaceful, Birds chirp in the distance. In the process, the clouds in the sky transform and the wind gets stronger. The wind strength is evident through the vegetation. The clouds suddenly produce extrusions that are threateningly approaching the ground.
<br /> <br />

<youtube-loader link="https://www.youtube.com/embed/bUjEX9_8Q0c"></youtube-loader>

#### Study

After we set up the concept, we quickly noticed that with the clouds and field, we encountered two very complex structures. Clouds are strange objects when you think about them, are they more physical or gaseous? You can imagine the field better, but rendering millions of grasses and bushes is a crazy effort. We decided to work separately on clouds and fields in order to be able to dive deeper into the areas. Different approaches and implementations were tested for both models. We had to find the sweet spot of acceptable hardware performance and the best optical quality. Nothing easier than that. <br /> <br />

#### Clouds

At the beginning, a research had to be done to find out when and where certain cloud formations appeare. It is also realistic that formations are visible at different altitudes at the same time.
Check the documentation for detailed informations and node structures. For the final work, we decided on two model concepts, Pointy and Poly. The development has shown that pointy clouds can be used efficiently for very large, flat and scattered formations which extend over the whole map. In contrast, the polyclouds are better suited for high and dense cumulus clouds.
<br /> <br />

<image-loader height="overview_image_200" image="vfx/clouds/poly"></image-loader>

#### Review

For a team of two with limited hardware, it was quite a challenge. Again and again we have reached the limits of what is technically feasible (for us). Instead of compromising with the problems, we invested a lot of time and creativity to find meaningful and efficient solutions. <br />
A great side effect is that I was able to find out a lot about clouds and their formation.
<br /> <br />

Download the complete documentation:
<pdf-loader doc="docs/clouds.pdf"></pdf-loader>
