const { User } = require('../../src/app/models');

describe('Authentication', () => {
  it("insert a User", async () => {
    const user = await User.create({ name: 'Euclides', email: 'euclidesdry@gmail.com', password_hash: 'u3028150910935j312' });

    console.log(user);

    expect(user.email).toBe('euclidesdry@gmail.com');
  });
});
