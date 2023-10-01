# MyWalletBack

Design of a wallet manager application (for mobile) ! With the right to register, login and many libraries !

<img src="./src/assets/MyWallet.gif" />

Try it out now at https://my-wallet-front-jao45gg.vercel.app
Check out the FrontEnd on https://github.com/jao45gg/MyWalletFront

## About

This is the Back-end of my first full-stack web application ! With data persistence using MongoDB ! It's mainly mobile and made to manage money. Below are the implemented features:

- Sign Up
- Login
- LogOut
- List all money that goes in and out for a user
- Add input of money
- Add output of money

By using this app any user can keep track of their money !

## Technologies
The following tools and frameworks were used in the construction of the project, you can find the full list on the package.json:<br>
<p>
  <img style='margin: 5px;' src='https://img.shields.io/badge/Node.js-339933.svg?style=for-the-badge&logo=nodedotjs&logoColor=white'>
  <img style='margin: 5px;' src='https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)'>
  <img style='margin: 5px;' src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white"/>
  <img style='margin: 5px;' src="https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD"/>
  <img style='margin: 5px;' src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/>
  <img style='margin: 5px;' src="https://img.shields.io/badge/markdown-%23000000.svg?style=for-the-badge&logo=markdown&logoColor=white"/>
  <img style='margin: 5px;' src="https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white"/>

  
</p>

## How to run

1. Clone this repository
2. Install dependencies
```bash
npm i
```
3. Create a .env file on the root of the project with the following variables
```bash
DATABASE_URL=yourDataBaseURL
PORT=YourBackEndPORT
```
3. Run the back-end with
```bash
npm start
```
4. You can optionally run the project with auto reload after changes
```bash
npm run dev
```
5. Finally send a request to http://localhost:YourBackEndPORT/SomeRouteImplemented and see it running !
