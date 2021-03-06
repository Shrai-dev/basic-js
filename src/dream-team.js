const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members) || members === null)
    return false;
  members = members.filter(member => {
   return typeof member === "string"
  });

for (let i = 0; i < members.length; i++) {
  if (typeof members[i] === "string") {
    members[i] = members[i].split(' ').join('').toUpperCase();
  }
}
members = members.sort();
const dreamTeam = members.map(member => {
  return member[0];
});
return dreamTeam.join('');
};
