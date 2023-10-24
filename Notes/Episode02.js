/* 
Initialize git repo -- git init
Create Main branch -- git branch -M main
To add all files/ specific file into repo -- git add. / git add 'specific file' 
To commit code to git -- git commit -m '--message--'
To setup our local initialized repo into github -- git remote add origin https://github.com/Asawari123-coder/namaste-react.git
The above command only at one time if you are facing any problem please configure your SSH properly
To push our code to remote -- git push origin branch-name 

Episode2
** Iginiting our APP **
This code is not optimized code and there is random comments in this code. We want to minify our code 
We have to bundle our code. bundle/compress files , optimize images
Before going to Production
-  Bundling files
-  Code Splitting
- Chunking
- Image optimization
- Remove comments
- minify code
- compress files

NPM - Node Package Manager 
It is standard repository for all packages. When you create react app by default it manages npm

Package.json - It is configuration of npm 

Bundler - do all files and bundled and compressed and cleaned together thats work of bundler
ex: Webpack, vet, parcel
create-react-app uses webpack 
Parcel - ignite our app. Give it strength to our app
npm install -D parcel 
^2.9.3 : ^ If tomorrow new minor version 2.9.4 will come when you put caret parcel automatically upgrade 
~2.9.3 : ~ it supports major version of package

package-lock.json : Are these files are same? Keeps the record of exact version that packages and all dependencies
node_modules : is database like for dependencies. Fetches all code for all dependencies. It contains transitive
dependencies. parcel -> babel -> browser list -> ...
It contains dependency trees

node_modules: bulky, should I put on github, production? No. So put inside in your gitIgnore file
Should I put my package.json and package.lock.json on git ?
Yes. Exact version of it. You can recreate node_modules

npx parcel index.html
npm means installing package
npx means execute package 

CDN is not preferred way to use react in your app
Using npm : It is easier to manage of version 
or browser automatically reload once you saved it is done by parcel (HMR)

#PARCEL
-Dev Build
-Local Server
-HMR (Hot Module Replacement) - it uses File watching algorithm written in c++
-Image Optimization 
-Minification
-Bundling
-Compressing files
-Consistent Hashing
-Code splitting
-Differential bundling - support older browsers
-Diagnostics
-Error Handling
-Tree Shaking - remove unused code 
parceljs.org : Read Document
different build for dev and production
How to create production build using parcel : npx parcel build index.html 
When you hit this command you will face one error remove "main" entry from package.json

Put dist, parcel-cache into gitignore

broweserlist : browserlist.dev




















*/