# FAQ

Hello! My name is **Thierry Pitela Santos**, fullstack developer willing to learn new technologies, and it is a great pleasure to hear from you. Below are descriptions of the backend and frontend application development process and the flows for running the applications.

**WARNING: due to some instabilities, it is possible that sometimes the request fails with status 500, but after requesting it again it recovers the values ​​as if nothing had happened. So don't judge me xD**

# Frontend

Developed with **Vite**, known for its incredibly fast development server. It uses native ES modules (ESM) to deliver our code directly to modern browsers, which significantly reduces build time and allows for near-instant reloads during development.

for stylization, I chose the **stitches** library, as it speed up the process of creating variants, as well as being a much more user-friendly option for manipulating properties.

for the icons i chose the phospor-icons library.

To run the frontend application just navigate to the folder with the same name and run the script

```js
npm run dev
```

# Backend

The backend was developed with **NODE.JS** using the zod library to validate request data structure, in addition to express to make HTTP calls.

The biggest difference in the project is the structure focused on SOLID practices. Despite not implementing libraries aimed at error handling or repositories, I left a defined structure that allows segmenting and modularizing requests by functionality.

To run the backendapplication just navigate to the folder with the same name and run the script

```js
npm run dev
```

## Considerations

My intention was to implement unit tests on the features, as well as create a design system to document the frontend. However, due to the time provided, these features ended up not being implemented.

Even so, I appreciate the opportunity and I am available to answer any questions.
