---
title: "Marching Algorithms"
tag: "science"
thumbnail: "marching"
stack: ["Unity", "C#", "Processing"]
info: {
Date: ["April - August 2021"],
Type: ["Study"],         
Role: ["Study", "Implementation"],
}

links: {
    Code: ["https://github.com/kohnmart/marching-algorithm"],
    Documentation: ["docs/marching.pdf"]
}

---

# Marching Algorithm 

<tech-stack :stack="stack"></tech-stack>

<team :info="info" :links="links"></team>

<br />

## Introduction


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
