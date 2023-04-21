const contactsService = require("./db");
const argv = require("yargs").argv;

// const invokeAction = async ({ action, id, name, email, phone }) => {
//   switch (action) {
//     case "list":
//       const allContacts = await contactsService.listContacts();
//       return console.log(allContacts);
//     case "get":
//       const oneContact = await contactsService.getContactById(id);
//       return console.log(oneContact);
//     case "add":
//       const newContact = await contactsService.addContact({
//         name,
//         email,
//         phone,
//       });
//       return console.log(newContact);
//     case "remove":
//       const removeContact = await contactsService.removeContact(id);
//       return console.log(removeContact);
//   }
// };

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const allContacts = await contactsService.listContacts();
      console.log(allContacts);
      break;

    case "get":
      const oneContact = await contactsService.getContactById(id);
      console.log(oneContact);
      break;

    case "add":
      const newContact = await contactsService.addContact({
        name,
        email,
        phone,
      });
      console.log(newContact);
      break;

    case "remove":
      const removeContact = await contactsService.removeContact(id);
      console.log(removeContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);

//invokeAction({ action: "list" });
// invokeAction({ action: "get", id: "qdggE76Jtbfd9eWJHrssH" });
// invokeAction({
//   action: "add",
//   name: "hanna",
//   email: "ann@gmail.com",
//   phone: "0000000000",
// });
// invokeAction({
//   action: "remove",
//   id: "AeHIrLTr6JkxGE6SN-0Rw",
// });

const actionIndex = process.argv.indexOf("--action");
if (actionIndex !== -1) {
  const action = process.argv[actionIndex + 1];
  invokeAction({ action });
}
