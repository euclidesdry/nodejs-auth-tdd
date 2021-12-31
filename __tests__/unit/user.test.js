const bcrypt = require("bcryptjs");

const { User } = require("../../src/app/models");
const truncate = require("../utils/truncate");

describe("User", () => {
  beforeEach(() => truncate());

  it("should encrypt user password", async () => {
    const user = await User.create({
      name: "Euclides",
      email: "euclidesdry@gmaail.com",
      password: "123456",
    });

    const hash = await bcrypt.hash("123456", 8);
    const compareHash = await bcrypt.compare("123456", user.password_hash);

    expect(compareHash).toBe(true);
  });
});
