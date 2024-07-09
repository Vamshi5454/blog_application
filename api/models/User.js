const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: false,
    },
    password: {
      type: String,
      required: true,
    },
    profilePic: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("User", UserSchema);

// const AWS = require("aws-sdk");

// // Configure AWS SDK
// AWS.config.update({
//   region: "us-east-1",
// });

// const dynamoDB = new AWS.DynamoDB();

// const params = {
//   TableName: "",
//   KeySchema: [
//     { AttributeName: "username", KeyType: "HASH" }, // Partition key
//   ],
//   AttributeDefinitions: [
//     { AttributeName: "username", AttributeType: "S" },
//     { AttributeName: "email", AttributeType: "S" },
//   ],
//   ProvisionedThroughput: {
//     ReadCapacityUnits: 5,
//     WriteCapacityUnits: 5,
//   },
// };

// dynamoDB.createTable(params, (err, data) => {
//   if (err) {
//     console.error(
//       "Unable to create table. Error JSON:",
//       JSON.stringify(err, null, 2)
//     );
//   } else {
//     console.log(
//       "Created table. Table description JSON:",
//       JSON.stringify(data, null, 2)
//     );
//   }
// });
