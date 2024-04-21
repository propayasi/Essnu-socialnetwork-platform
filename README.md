# Welcome to Basic Social Networking Site

Welcome coders! This is a basic social networking site built using React.js, JavaScript, and MySQL.

## Installation and Setup

### Prerequisites
- Node.js and npm installed on your machine
- MySQL Workbench (version 8.0ce) and MySQL Server (version 8.0) installed

### Steps
1. Clone this repository to your local machine.
2. Install the MySQL schema:
   - Open MySQL Workbench.
   - Import the social.sql schema provided in the repository to your MySQL server.
3. Open the `api` folder in your code editor.
   - Navigate to the `connect.js` file.
   - Update the `db` object with your MySQL server credentials (host, user, password, and database).
4. Install dependencies:
   ```bash
   cd api
   npm install yarn
   yarn
   ```
   If `yarn` is not installed, you can install it with `npm install -g yarn`.
5. Change directory to `client`:
   ```bash
   cd ../client
   npm install yarn
   yarn
   ```
6. Start the backend server:
   ```bash
   cd ../api
   yarn start
   ```
   If you see "api working!", the backend server is ready and ExpressNode is connected.
7. Start the frontend development server:
   ```bash
   cd ../client
   yarn start
   ```
   This will open the development server on your localhost.

## Usage

Once the servers are up and running, you can access the social networking site on your browser by navigating to `http://localhost:3000`.

## Contributing

Contributions are welcome! If you encounter any issues, have suggestions, or would like to contribute to the project, feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
