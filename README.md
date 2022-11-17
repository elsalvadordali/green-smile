# We got this!

## Running the project

If you don't have npm installed on your computer, you'll need to google how to get it. 

You're going to want to download pull this repo (or download and extract if that's easier)

then, open a terminal and navigate to the directory where the project is.

Run the following command to set everything up:

``` npm install ```

then you can run it with: 

``` npm run dev ```

that will start a server and you can see our progress at:

[http://localhost:5173/](http://localhost:5173/)


## CSS/HTML contributions

please put your project files in the public/parts directory. 

## React contributors

Please translate the css/html parts to react. If you need the google firebase api, DM esd, and I'll get it to you :]

Feel free to just use javascript instead of typescript, but if you do, don't forget to change the file extention from ts/tsx to js/jsx


### Structure

I broke up each screen into files. Most filename are self-explanatory (Login.jsx is the login page), but I wanted to clarify the SeeEntry vs WriteEntry components.

I think we should make them separate because WriteComponent will be a giant textarea that the user edits. Once they post it, I don't think it should be modified, so SeeEntry will just be the text in like <P> or however we style it.

