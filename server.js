const app = require("./app");

const PROT = process.env.PORT || 3000;

app.listen(PROT, () => {
  console.log(`Server running on port ${PROT}`);
});
