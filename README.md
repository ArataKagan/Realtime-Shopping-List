# Realtime-Shopping-List
Real time shopping list app made with Node/Express, React, MySQL 

### Technologies
- Frontend: React 
- Backend: Node.js/Express 
- Database: MySQL
- Test Framework: Jasmine 

### Prerequisites

* npm
  ```sh
  npm install npm@latest -g
  ```
* MySQL
  - Intsall MySQL [https://dev.mysql.com/doc/mysql-installation-excerpt/5.7/en/](link)
  - (Optional) MySQL Workbench for the GUI interface [https://dev.mysql.com/downloads/workbench/](link)
 
### Installation

**Creating Dockerfile is my next step**

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

![caption](https://github.com/ArataKagan/Realtime-Shopping-List/blob/master/shopping-list-app-recording.gif)


<!-- ROADMAP -->
## Roadmap

- Create Dockerfile 
- Add WebSocket to enable real-time update 
- Add Edit item feature
- Design UI
