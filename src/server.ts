// import app from "./app";


// const port = 5000;


// app.listen(port, () => {
//   console.log(`RentNest server running on port ${port}`);
// });


// import app from "./app";

// const port = 5000;

// app.listen(port, () => {
//   console.log(`RentNest server running on port ${port}`);
// });


import app from "./app";


import {
  env,
} from "./config/env.validation";







// =======================
// START SERVER
// =======================


app.listen(

  env.PORT,

  () => {


    console.log(

      `RentNest server running on port ${env.PORT}`

    );


    console.log(

      `Environment: ${env.NODE_ENV}`

    );


  }

);