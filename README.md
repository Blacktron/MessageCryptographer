# Elliptic Curve Message Cryptographer

### Prerequisites
1. Download and install Node.js (LTS version preferably) from [here](https://nodejs.org/en/download)
2. Verify the installation is completed by executing the following commands after restarting the computer. You should see version numbers for both.
   - **node -v**
   - **npm -v**
3. Download the files from the repository (or clone it). If you downloaded the archive - unpack it in a selected directory.

### How to run and use the application
1. Open a Terminal or Command Prompt in Windows
2. Navigate to the directory where you placed the files from the repository
3. Execute command **npm install** to download all the dependencies
4. Execute command **node .\src\app.js**
5. Once you see the message *Server is running on port 3000* you can access the application through a browser (or Postman for example)
   with the following URL: **http://localhost:3000**
6. When the home page loads, provide a message in the input field and click the Sign button. On submition a call will be executed to the /v1/sign endpoint
7. The signature will be returned as response and displayed on the page next to the Sign button
   
