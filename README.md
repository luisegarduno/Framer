# [Frontend Project] Digital Flipbook Player

## Please read this before starting the Digital Flipbook Player project

This is a mach Frontend interview assignment. It is meant to display the following:
- General knowledge of browsers and the web platform
- Proficiency using JavaScript / React / HTML / CSS to build UI components
- Sense of visual design and attention to detail

---

## Problem

A video is to be shown in this web app by calling an API endpoint to get the video. The API endpoint is returning an array of image URLs where each image is a frame of the video instead of a full video. This is intentional; find a way to stitch the images together to create a flipbook that mimics a video

## Requirements

The flipbook player must have the following core features:
1. Support playing and pausing the flipbook.
2. The flipbook should run at at-least 30 frames-per-second (fps).
3. The images must be loaded over the network.
   - Cannot download them and then load them locally.

### optional features:

1. A navigation bar that lets the user jump to different parts of the flipbook.
2. Ability to customize the frame rate (10 fps, 30 fps, 60 fps).
3. Ability to zoom in/out and pan.
4. Another product feature shows a similar level of complexity.

### Other Requirements

- Code must use React and be written with Javascript or Typescript.
- May use external libraries and packages as long as they do not make meeting the project requirements trivial. major pieces of logic and styling are custom. (For example, it may use the Bootstrap CSS framework but some custom styling with stylesheets should be present)
- The project must be be installable and runnable from the command line without any additional software required beyond NodeJS and Yarn.

### How the projet is evaluated

This project is designed to reflect the day-to-day work a frontend software engineer may do. As such, considering the user experience, the overall functionality, and the readability of code are important criteria.

- Functionality
  Does the app work smoothly? Are there no obvious or glaring bugs? For example, what happens if a user uses keyboard navigation and presses the spacebar while using the flipbook?
- Software engineering
  Does the project show good understanding and use of the selected framework? Is good software engineering practices being followed? Is the code logically structured and easy to read? Does the project show understanding of how to handle application state, respond to user input, and/or correctly utilize APIs?
- Design
  More interested in user experience than polished visual design. Information should be easily understandable. In other words, the design emphasis is on information architecture, not visual design. For example, instead of displaying a blank loading screen with a sharp transition, can an informative loading screen with a smooth transition be used?
