- every react element in an object like js.
-React.createElement dont create html, it create js object that will be render with root.render() function.

- react is library as it just built-in methds written in js by fb devs. it an be applied to any part /element of webpage, no need to write entire app like any other framework.

- React.createElement( ,{}, ), will create out custom element.
- ReactDom.createRoot(element on dom) will fetch element on webpage for us.

root.render will take dom object and render on webpage.

- NPM.
    -  is not node pkg manager, is package manager for js libraries maintained by npm.inc.
	- it it default pkg mgr for JS runtime environment.
	- node.js installer comes as feature.
	
	
- package.json
   - it is default configuration for NPM.
   
 Webpack/parcel/yarn :
  bundler for js pkg do minimisation, sanitisation, cleanup and ship your code to deployment.
  
type of depenedanncies :

 - dev-depenedanncies = while you developing an app.
 - depenedanncies = also when app goes live.
 
 Transitive depenedancies
   - we use some depenedancies and they use another , it's called transitive depenedancies.
   
   
 - pckg.json and pckg.lock.json will install your node_modules again even id they're not there or deleted.
 
 - npx = execute pkg.
 
=================================================================================================
parcel (webpack)

- Dev and Prod build
- Local sever
- HMR
- File watching algo written in C++
- Caching -faster build
- img optimisation
- MInification
- Bundling
- Compress
- Consistent Hashing
- Code splitting
- Differntial Bundling - supports older browsers
- Diagnostics
- Error Handling
- HTTPs
- Tree shaking

======================================================


Babel = JSX to React.
   Transpiler

npm run === npm

- jsx is not HTML inside JS, it is HTML like syntax.


- Attributes inside JSX are camelcase.,  tabIndex, className
