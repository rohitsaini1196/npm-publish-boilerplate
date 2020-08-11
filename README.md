# NPM Publish Boilerplate
All you need to know for publishing a React or any JavaScript component/hook to NPM registry.

If you want to test this package,
run

```Bash
 npm i my-cool-package-name
``` 

### Steps: 

1. Clone this Repo.

2. Modify   ```  /src ``` 
            folder or overwrite 
            ``` index.js   ``` according to your package's need.

3. Install all Dependencies by running: 

```properties
npm install
```  

4. Build it by running:
```properties
npm run build
```  

5. Login into to your NPM account using terminal/cmd.

6. Publish it

```properties
npm publish
```  



#### Src Code Snippets

##### What is actually published: A basic example

 ```  /src/index.js ```
 
 In Index.js just add `prop type` others are exactly same.

```js
import React from 'react'
import PropTypes from "prop-types"

function MyPackage(props) {
  return (
      <div>
          <h3>Hello {props.name}</h3>
          <p>I hope this helped you :)</p>       
      </div>
  )
}

MyPackage.propTypes = {
    name: PropTypes.string
};

export default MyPackage
```

 ```  package.json ```
 
In package.json file, we changed the `"main"` and `webpack` build script.

 ```js
 {
  "name": "my-cool-package-name",
  "version": "1.0.0",
  "description": "A demo for publishing cool packages to npm registry",
  "main": "./build/index.js",
  "scripts": {
    "build": "webpack"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/rohitsaini1196/npm-publish-boilerplate.git"
  },
  "keywords": [
    "npm",
    "publish",
    "reactjs",
    "es6",
    "package"
  ],
  "author": "Rohit Saini",
  "license": "ISC",
  "devDependencies": {
    "@babel/core": "^7.7.5",
    "@babel/preset-env": "^7.7.6",
    "@babel/preset-react": "^7.7.4",
    "babel-loader": "^8.0.6",
    "css-loader": "^3.3.0",
    "style-loader": "^1.0.1",
    "webpack": "^4.41.2",
    "webpack-cli": "^3.3.10"
  },
  "dependencies": {
    "prop-types": "^15.7.2",
    "react": "^16.12.0"
  },
  "bugs": {
    "url": "https://github.com/rohitsaini1196/npm-publish-boilerplate/issues"
  },
  "homepage": "https://github.com/rohitsaini1196/npm-publish-boilerplate#readme"
}
 ```


>Ask me if you have any doubt.



___
[Rohit Saini ](https://stillthristy.in/)

