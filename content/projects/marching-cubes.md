---
title: "Marching Cubes"
tag: "science"
thumbnail: "marching"
members: {
Date: "April - August 2021",
Type: "Study",         
Role: "*",
}
link: "https://github.com/kohnmart/marching-algorithm"
file: "docs/marching.pdf"
---

# Marching Algorithm

### Unity / Visual Studio / Processing <br /> <br />

<team :members="members" :link="link" :doc="file"></team>

## Introduction

Terrain visualization with the Marching Cubes algorithm. <br /> <br />

#### Polygon
In today's computer graphics there are different approaches to modeling three-dimensional objects. One of the most popular is the creation of a polygon mesh (wireframe model). In this procedure, triangles are connected at their corner points and combined to form surfaces. A disadvantage is the difficult modeling of enormously large and arbitrary objects such as terrain fields. For such challenges, the visualization of a volumetric voxel data set offers better results.   <br /> <br />

#### Voxel
The system iterates through a 3D grid and takes a density or color value at certain intervals. The voxel representation has very interesting aspects, however also many disadvantages. The storage and computation requirements are significantly higher and the subsequent processing of a model is very complex. The reason for this is mainly because graphics cards are only optimized for polygon calculation.  <br /> <br />


#### Marching
The Marching Cubes algorithm follows the approach to combine to benefits of both systems. The unwieldy voxel models are replaced by the simpler polygon Meshes and procedural generation is enabled.


## Processing 

#### Marching Squares
2D map generation. Static, animation and interaction.

<image-loader height="medium_wide" image="science/marching/processing"></image-loader>


## Unity

#### Marching Cubes
3D, static map generation.

<image-loader height="medium_wide" image="science/marching/unity"></image-loader>
