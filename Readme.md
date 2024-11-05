<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    
</head>
<body>

<h1>RIDER EVEE</h1>

<p>This is a simple User Management API built with Node.js, Express, and MongoDB. It provides CRUD (Create, Read, Update, Delete) functionality for user management.</p>

<h2>Features</h2>
<ul>
    <li>Create a new user</li>
    <li>Retrieve all users</li>
    <li>Retrieve a user by ID</li>
    <li>Update a user</li>
    <li>Delete a user</li>
</ul>

<h2>Technologies Used</h2>
<ul>
    <li>Node.js</li>
    <li>Express.js</li>
    <li>MongoDB</li>
    <li>Mongoose</li>
    <li>Jest (for testing)</li>
    <li>Supertest (for API testing)</li>
</ul>

<h2>Getting Started</h2>

<h3>Prerequisites</h3>
<ul>
    <li>Node.js (v14 or higher)</li>
    <li>MongoDB (local or MongoDB Atlas)</li>
</ul>

<h3>Installation</h3>
<ol>
    <li>Clone the repository:</li>
    <pre><code>git clone https://github.com/yourusername/CRUD-OPERATION-.git
cd CRUD-OPERATION-</code></pre>
    <li>Install dependencies:</li>
    <pre><code>npm install</code></pre>
    <li>Set up your MongoDB connection:</li>
    <p>Open the <code>app.js</code> file and update the MongoDB connection string with your own.</p>
    <pre><code>mongoose.connect('mongodb://localhost:27017/userdb', {
});</code></pre>
</ol>

<h3>Running the Application</h3>
<ol>
    <li>Start the server:</li>
    <pre><code>node app.js</code></pre>
    <p>The server will run on <code>http://localhost:3000</code>.</p>
</ol>

<h2>API Endpoints</h2>
<ul>
    <li><strong>Create a User</strong><br>
        <code>POST /users</code><br>
        Request Body: <code>{ "name": "your_name", "email": "your_email", "phone": "1234567890", "password": "password" }</code>
    </li>
    <li><strong>Get All Users</strong><br>
        <code>GET /users</code>
    </li>
    <li><strong>Get a User by ID</strong><br>
        <code>GET /users/:id</code>
    </li>
    <li><strong>Update a User</strong><br>
        <code>PUT /users/:id</code><br>
        Request Body: <code>{ "name": "New Name" }</code>
    </li>
    <li><strong>Delete a User</strong><br>
        <code>DELETE /users/:id</code>
    </li>
</ul>

<h3>Running Tests</h3>
<p>To run the tests, use the following command:</p>
<pre><code>npm test</code></pre>
<p>This will run the test suite using Jest and Supertest to ensure that all API endpoints work correctly.</p>

<h2>License</h2>
<p>This project is licensed under the MIT License - see the <code>LICENSE</code> file for details.</p>

<h2>Author</h2>
<p><a href="https://github.com/sonamkavi">Sonam Kumari</a></p>

<h2>Acknowledgements</h2>
<p>Thanks to the Node.js and Express communities for their excellent resources and documentation.</p>

</body>
</html>
