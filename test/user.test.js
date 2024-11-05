const request = require('supertest');
const app = require('../app'); // assuming app is exported from app.js
const mongoose = require('mongoose');
const User = require('../models/User');

// Connect to the test database before running tests
beforeAll(async () => {
    await mongoose.connect('mongodb://localhost:27017/userdb_test', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
});

// Clean up the database after each test
afterEach(async () => {
    await User.deleteMany({});
});

// Close the connection after all tests
afterAll(async () => {
    await mongoose.connection.close();
});

describe('User API', () => {
    it('POST /users - success', async () => {
        const res = await request(app)
            .post('/users')
            .send({ name: 'John Doe', email: 'john@example.com', phone: '1234567890', password: 'password' });
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('_id');
    });

    it('GET /users - success', async () => {
        await request(app).post('/users').send({ name: 'Jane Doe', email: 'jane@example.com', phone: '1234567890', password: 'password' });
        const res = await request(app).get('/users');
        expect(res.statusCode).toEqual(200);
        expect(res.body.length).toBe(1);
    });

    it('GET /users/:id - success', async () => {
        const user = await request(app)
            .post('/users')
            .send({ name: 'User', email: 'user@example.com', phone: '1234567890', password: 'password' });
        const res = await request(app).get(`/users/${user.body._id}`);
        expect(res.statusCode).toEqual(200);
        expect(res.body.name).toBe('User');
    });

    it('PUT /users/:id - success', async () => {
        const user = await request(app)
            .post('/users')
            .send({ name: 'Old Name', email: 'old@example.com', phone: '1234567890', password: 'password' });
        const res = await request(app)
            .put(`/users/${user.body._id}`)
            .send({ name: 'New Name' });
        expect(res.statusCode).toEqual(200);
        expect(res.body.name).toBe('New Name');
    });

    it('DELETE /users/:id - success', async () => {
        const user = await request(app)
            .post('/users')
            .send({ name: 'To Delete', email: 'delete@example.com', phone: '1234567890', password: 'password' });
        const res = await request(app).delete(`/users/${user.body._id}`);
        expect(res.statusCode).toEqual(204);
    });
});
