const { encode, compare } = require("../auth/pwd");

const baconHashed =
  "$2a$05$d7uK3TP/zyM2CMCKJ/DnBesHYWyEnVvxzgWxULKKA0tAtcb/Unqma";

test("encoded hash is defined", () => {
  return encode("bacon").then(hash => {
    console.log('hash : ', hash);
    return expect(hash).toBeDefined()
  });
});

test("compare return true for bacon", () => {
  return compare("bacon", baconHashed).then(
    bool => {
      return expect(bool).toBe(true);
    }
  );
})

test("compare return false for baaaacon", () => {
  return compare("baaaacon", baconHashed).then(
    bool => {
      return expect(bool).toBe(false);
    }
  );
});
