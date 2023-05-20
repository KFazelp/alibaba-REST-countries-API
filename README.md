# Get Started

  [**Project Demo**](https://test.kfazel.com/)

- ## Requirements
  | Requirement | Version          |
  | ----------- | ---------------- |
  | Node js     | 14.17.0          |
  | npm         | 8.1.0            |
  | yarn        | 1.22.18 or newer |

- ## Project Setup and Run  
  >Project Setup and instalation: `yarn install`  
  >Compiles and hot-reloads for development: `yarn serve`  
  >Compiles and minifies for production: `yarn build`  
  >Lints and fixes files: `yarn lint`
  

- ## Project Configurations
  The project's main configuration is in ***vue.config*** file in the root.  
  `chainWebpack` hook will chain addon codes to the Webpack configuration file.

</br>
<!-- ------------------------------------------------ -->

# Structure and Architecture

- ## Project Core
  
  * ### Plugins and Packages
    In this project, I used some plugins whose configurations are in the ***plugins*** directory under to ***core***. Here is a summary and description of each package.

    - [**Axios**](https://axios-http.com/docs/intro)  
      Axios js is a popular package to create an HTTP request. I used Axios in this project to create an API service to fetch data.  
      BaseUrl is in the config file.
    
    - [**Vuetify**](https://vuetifyjs.com/en/getting-started/installation/)  
      Vuetify is a UI framework based on the Material Design system.  
      The Vuetify components' names start with `v-` and you can read more about their props, events, etc. in [Vuetify Documentation](https://vuetifyjs.com/en/components/application/).  
      SASS variables configuration is in ***variables.scss*** file under the ***sass*** directory.  
      [Typography and theme color](#ui-kit) configurations are in ***config*** and ***variables*** files.
    

  * ### Types and Interfaces
    Application states and data interfaces are defined in the ***interfaces*** directory under ***core***.
  
  * ### Services
    - **API Service**  
      `apiService` is synchronizing function to fetch data with the back-end using Axios. The function's main arguments are *method (default is GET), URL and data (optional)*.  
      API URLs are defined as methods that return URL's string based on inputs in the ***urls*** directory.
      
    - **Cache Service**  
      `cacheService` is a service that provides reading, writing and destroying user data in browser local storage. In this project, I used it to save the user-preferred theme in local storage.

    - **Router Service**  
      Router service is the main Vue router configuration. The routes are imported from the ***routes.ts*** file under the root. 

    - **Storage Service**  
      Store service is created by using Vuex. It has a modular design that divides the store down into some parts based on the views tree. 
      The Module files contain four parts, here is a little description for each of them:  
      *note: please read the [Vuex Documentation](https://vuex.vuejs.org/guide/) for more information.*  
      - **State** define module states and initialize its values.
      - **Getters** are methods that return the state value, They can be used with the `mapGetters` method in the ***computed*** section of Vue files to update the state value in view every time it changes.
      - **Actions** are functions to calculate or fetch data with APIs. They can be called with `dispatch` method in the store files or with the `$store.dispatch` prototype from views.
      - **Mutations** are methods that update the State value. we can reach them by `commit` method or `$store.commit` in view files just like Actions.
    
      I set Action and Mutation's names as exported constants with uppercase letters so they could be imported into other files to reach their names and prevent spelling mistakes.


  * ### Enumeration
    Project enums are defined in the ***enums*** directory in core.
  
  
- ## <div id="ui-kit">UI Components and Styles</div>
  * ### Project UI kit  
    This project uses *Material Design System* as the main UI kit. 

  * ### Components
    Components are the global parts of views that could be shared between them, so I decided to store them in different directory.

  
- ## Fonts and Icons
  * ### Fonts  
    Project main font is `Nunito Sans`.  
    I used Google Fonts API to add the font to the project.

  * ### Icons  
    This project uses the [***Material Design Icons***](https://materialdesignicons.com/) as the main icon package with the `v-icon` tags.
  
- ## Views and Pages
  Each Page of the sitemap has its own directory. I broke down view files into multiple fragments. The fragments are also stored in the page directory.