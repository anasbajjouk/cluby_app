# Welcome to StackEdit!

Hi! This is an app made for CLUBY - the idea behind it, is display the data from the endpoint given, store some additional data and have a good control over the actions, error handling, UI responsiveness etc...


# Technologies & libraries used:

 - React 
 - React Router 
 - Axios 
 - Formik 
 - Yup (for validation) 
 - Font Awesome
 - React-toastify 
 - Styled Components

# Folder structure
```
•
└── src
    ├── 🗂api
    ├── 🗂assets
    ├── 🗂common
    ├── 🗂components   
    ├── 🗂pages
    ├── 🗂router
    ├── index.js
```

## api

Where the API calls and Error Handling  are implemented -  such as 404, 500 etc...

## assets

All type of assets go here, images, global css, audio files etc...

## common

All common functions, constants and configs - AKA `utils`

## components

Where you can keep your components.

## pages

Where you keep your pages and specific files for the each page, these are also includes smart components. 

## router

Where you keep routing setup files. 

# Performance
Using LightHouse on incognito tab **(recommended as few to 0 extensions are usually active - that help lighthouse to give more precise report)**

```mermaid
graph LR
A[Performance] --> B((98))
C[Best Practices] --> D((100))
E[SEO] --> F((100))
G[Accessibility] --> H((85))