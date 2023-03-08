// import connectToDB from "./mongoose";

// import PasswordModel from "./models/passwordModel";

// connectToDB();

// export const addItemToDB = async ({ title, creds }) => {
//   const { user, password } = creds;
//   if (!user || !password) return;
//   console.log(typeof PasswordModel);

//   try {
//     const entry = await PasswordModel.findOne({ title });
//     if (entry) {
//       await PasswordModel.findByIdAndUpdate(entry._id, {
//         $push: { entries: { user, password } },
//       });
//     } else {
//       const entryObj = { title, entries: [{ ...creds }] };
//       const passwordEntry = new PasswordModel(entryObj);
//       await passwordEntry.save();
//       console.log("entry saved");
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };
