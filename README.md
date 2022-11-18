# Currency Exchange

#### Converts currency between all available currency types


#### By Anton Ch

## Technologies Used

- _HTML_
- _CSS_
- _JavaScript_
- _Markdown_
- _jQuery_
- _Bootstrap_
- _Webpack_
- _ESLint_
- _Babel_
- _ExchangeRate-API_



## Description

Currency Exchanger converts currency between all available currency types. A user can type in an amount and then choose which currency it should be converted from and to.

## Setup/Installation Requirements

- Click on or copy and paste this [GitHub Page](https://anton3ch.github.io/currency-exchange/) into your preferred browser:<br>https://anton3ch.github.io/currency-exchange/

  **_OR_**

- Clone this repository to your Desktop:
  1. Your computer will need to have GIT installed. If you do not currently have GIT installed, follow [these](https://docs.github.com/en/get-started/quickstart/set-up-git) directions for installing and setting up GIT.
  2. Once GIT is installed, clone this repository by typing following commands in your command line:
     ```
     ~ $ cd Desktop
     ~/Desktop $ git clone https://github.com/anton3ch/currency-exchange.git
     ~/Desktop $ cd currency-exchange
     ```
  3. Get API key:
     - Visit the [ExchangeRate-API](https://www.exchangerate-api.com/) site. Input your email address and click the "Get Free Key" button.
     - You will be prompted to create an account with your email, first name and a password. Agree to the terms of use and click "Get Started!"
     - You will get an email with activation link. Click the link in the email.
     - Get to the [Dashboard](https://app.exchangerate-api.com/dashboard), and copy your API key.
  4. Create .env file with your API key:
     ```
      ~/Desktop/currency-exchange $ touch .env
      ~/Desktop/currency-exchange $ echo "API_KEY={YOUR API KEY}" > .env
     ```
     Replace {YOUR API KEY} with your API key, remove curly brackets.
  5. Make sure you have ".env" in your .gitignore file. If not, type following command in your command line:
     ```
      ~/Desktop/currency-exchange $ echo ".env" >> .gitignore
     ```
  6. (Optional) If you are planing to push your repository to the GitHub, push .gitignore file to your GitHub repository first:
     ```
      ~/Desktop/currency-exchange $ git init
      ~/Desktop/currency-exchange $ git remote add origin https://github.com/{your github username}/{your repository name}.git
      ~/Desktop/currency-exchange $ git add .gitignore
      ~/Desktop/currency-exchange $ git commit -m "add .gitignore"
      ~/Desktop/currency-exchange $ git push origin main
     ```
     Replace {your github username} with your github username, {your repository name} with your repository name, remove curly brackets.
  7. Install necessary dependencies:
     ```
     ~/Desktop/currency-exchange $ npm install
     ```
  8. Run:
     ```
     ~/Desktop/currency-exchange $ npm run start
     ```

## Known Bugs

* _Any known issues_
* _should go here_

## License

MIT

Copyright (c) 11/18/2022 Anton Ch

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.