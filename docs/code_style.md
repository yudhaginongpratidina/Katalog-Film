# SETUP
```
npx eslint --init
```
* **How would you like to use ESLint?** -> To check, find problems, and enforce code style.
* **What type of modules does your project use?** -> JavaScript modules (import/export).
* **Which framework does your project use?** -> None of these
* **Does your project use TypeScript?** -> N.
* **Where does your code run?** -> Browser, Node.
* **How would you like to define a style for your project?** -> Use a popular style guide.
* **Which style guide do you want to follow?** -> AirBnB
* **What format do you want your config file to be in?** -> JSON
* **Would you like to …… (rest of questions)** -> Y

# RULES
```
  "rules": {
    "import/no-extraneous-dependencies": 0,
    "no-console": 0,
    "no-underscore-dangle": 0,
    "no-restricted-globals": 0,
    "linebreak-style": 0
  }
```