---
title: "Project Clouds Animation"
tag: "vfx"
thumbnail: "clouds"
members: {
Date: "May - July 2021",   
Type: "Study",  
Role: "Research, Modelling, Animation, Rendering",
Team: "Martin Kohnle, Moritz Kronberger",
}
headlines: ["Introduction", "Animation", "Research", "Review"]
link: "https://www.youtube.com/watch?v=bUjEX9_8Q0c"
file: "docs/clouds.pdf"
---

# Project Clouds

### Houdini / Substance Painter / Mapbox <br /> <br />

<team :members="members" :link="link" title="Media" type="Animation" :doc="file"></team>

<image-loader height="large_wide" image="vfx/clouds/title"></image-loader>

## Introduction

#### Plot

"It was now the third day that something seemed to be wrong with the evening sky. The clouds were even lower today than the days before. And when nature finally fell silent, the storm set in."
<br /> <br />

#### Interpretation

Aliens arrive on earth by camouflaging themselves in cloud formations.
<br /> <br />

#### Concept

We imagined that the entire scene would take place on a farm field. As the sun goes down, plants and grasses gently blow in the wind. The mood is peaceful, birds chirp in the distance. In the process, the clouds transform and the wind gets stronger. The wind strength is evident through the vegetation. The clouds suddenly produce extrusions that are threateningly approaching the ground.

## Research

#### Study

 We quickly noticed two challenges after we set up the concept. The clouds and field,  are very complex structures. Clouds are strange objects when you think about them, are they more physical or gaseous? You can imagine the field better, but rendering millions of grasses and bushes is a crazy effort. We decided to work separately on clouds and field in order to be able to dive deeper into the areas. Different approaches and implementations were tested for both models. We had to find the sweet spot of acceptable hardware performance and the best optical quality. Nothing easier than that. <br /> <br />

#### Clouds

In the beginning, research had to be done to find out when and where certain cloud formations appear. It is also realistic that formations are visible at different altitudes at the same time.
Check the documentation for detailed information and node structures. We decided on two model concepts, pointy and poly clouds. The development has shown that pointy clouds can be used efficiently for very large, flat and scattered formations which extend over the whole map. The poly clouds are better suited for high and dense cumulus clouds.
<br /> <br />

#### Mapbox

The Mapbox Node can be used to generate landscapes and terrain in Houdini.
Height maps and satellite images are combined to create a realistic landscape.
In addition, the image data is read out in order to match the color of the vegetation.


<image-loader height="medium_portrait" image="vfx/clouds/poly"></image-loader>

## Review

It was quite a challenge for a small team with limited hardware. Again and again, we have reached the limits of what is technically feasible for us. Instead of compromising with the challenges, we invested a lot of time and creativity to find meaningful and efficient solutions. 

<br />
 
[Go to Documentation and Media](#top)