# How to Contribute

## Step 1: Clone the Project

If you don't have npm installed on your computer, you'll need to google how to get it.
You're going to want to download pull this repo (or download and extract if that's easier)
then, open a terminal and navigate to the directory where the project is.

## Step 2: Running the project

Run the following command to set everything up:

`npm install`

then you can run it with:

`npm run dev`

that will start a server and you can see our progress at:

[http://localhost:5173/](http://localhost:5173/)

### Step 3: Make your changes

Now you can see all the files in your local system and begin making changes.

## CSS/HTML contributions

please put your project files in the public/parts directory.

## React contributors

Please translate the css/html parts to react. If you need the google firebase api, DM [TJ](https://github.com/elsalvadordali), and She'll get it to you :]

Feel free to just use javascript instead of typescript, but if you do, don't forget to change the file extention from ts/tsx to js/jsx

### Structure

We broke up each screen into files. Most filename are self-explanatory (Login.jsx is the login page).

### Step 4: Commit your changes

- Track your changes:

```
git status
```

```
git add .
```

- Commit your changes

```
git commit -m "Relevant message"
```

- Push the committed changes in your feature branch to your remote repo.

```
git push origin <your_branch_name>
```

### Step 5: Create Pull Request

Now visit `green-smile` repository.

- To create a pull request, click on `Create pull request`. Please ensure you compare your feature branch to the desired branch of the repo you are suppose to make a PR to.
- Add appropriate title and description to your pull request explaining your changes and efforts done. Best practice is to include an image of the changes that were made if changes were visual.
- Click on `Create Pull Request`.

## You have made a PR! Sit back patiently and relax while your PR is reviewed and merged. Thank you for your contribution!

### To update your local repository on your local machine:

```
git pull origin main
```
