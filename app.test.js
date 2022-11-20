const request = require('supertest');

const app = require('./app');

describe('GET /', () => {
  it('GET / => array of items', () => {
    return request(app)
      .get('/')

      .expect('Content-Type', /json/)

      .expect(200)

      .then((response) => {
        expect(response.body).toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              id: expect.any(String),

              name: expect.any(String),

              inStock: expect.any(Boolean),
            }),
          ])
        );
      });
  });
});