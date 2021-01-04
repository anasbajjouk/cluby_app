# Welcome to StackEdit!

Hi! This is an app made for CLUBY - the idea behind it, is display the data from the endpoint given, store some additional data and have a good control over the actions, error handling, UI responsiveness etc...

# Keep in mind:
`To run the project in localhost, do not forget to create a .env file where you have to add the env variables, in this case it will be "REACT_APP_API_KEY" and "REACT_APP_URI"`

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

## Api

Where the API calls and Error Handling  are implemented -  such as 404, 500 etc...

## Assets

All type of assets go here, images, global css, audio files etc...

## Common

All common functions, constants and configs - AKA `utils`

## Components

Where you can keep your components.

## Pages

Where you keep your pages and specific files for the each page, these are also includes smart components. 

## Router

Where you keep routing setup files. 

# Performance
Using LightHouse on incognito tab **(recommended as few to 0 extensions are usually active - that help lighthouse to give more precise report)**

```mermaid
graph LR
A[Performance] --> B((98))
C[Best Practices] --> D((100))
E[SEO] --> F((100))
G[Accessibility] --> H((85))