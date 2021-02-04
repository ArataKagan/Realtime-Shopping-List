# Realtime-Shopping-List
Real time shopping list app made with Node/Express, React, MySQL 

### Technologies
Frontend: React
Backend: Node.js/Express 
Database: MySQL
Test Framework: Jasmine 

### Prerequisites

* npm
  ```sh
  npm install npm@latest -g
  ```
* MySQL
  - Intsall MySQL [https://dev.mysql.com/doc/mysql-installation-excerpt/5.7/en/](link)
  - (Optional) MySQL Workbench for the GUI interface [https://dev.mysql.com/downloads/workbench/](link)
 
### Installation

1. Create db at MySQL 
2. Clone the repo
   ```sh
   git clone https://github.com/ArataKagan/Realtime-Shopping-List
   ```
3. Install NPM packages 
   ```sh
   npm install && cd client && npm install 
   ```
4. Create .env file at the root and insert your username and password for MySQL database
5. Run test
  ```sh
   npm run test
   ```
5. Run the app locally 
   ```sh
   npm run dev
   ```

<!-- USAGE EXAMPLES -->
## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_



<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/othneildrew/Best-README-Template/issues) for a list of proposed features (and known issues).


### Features 
1. Add shopping item
2. List added items
3. Delete items 
4. Modify names of items
5. Increase quantity 
6. Data is updated realtime 

### API Endpoints

GET /shopping-list <br>
POST /shopping-list
