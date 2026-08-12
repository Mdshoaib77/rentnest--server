// // import type {
// //   Request,
// //   Response,
// // } from "express";


// // import {
// //   createPropertyValidationSchema,
// // } from "./property.validation";


// // import {
// //   createProperty,
// // } from "./property.service";



// // export const createPropertyController =

// // async (

// //   req: Request,

// //   res: Response

// // ) => {


// //   try {


// //     const validatedData =

// //       createPropertyValidationSchema.parse(

// //         req.body

// //       );



// //     const landlordId =

// //       req.user?.id;



// //     if (!landlordId) {


// //       return res.status(401).json({

// //         success: false,

// //         message:
// //           "User not authenticated",

// //       });


// //     }



// //     const property =

// //       await createProperty(

// //         validatedData,

// //         landlordId

// //       );



// //     res.status(201).json({

// //       success: true,

// //       message:
// //         "Property created successfully",

// //       data:
// //         property,

// //     });



// //   } catch (error) {


// //     res.status(400).json({

// //       success: false,

// //       message:

// //         error instanceof Error

// //           ? error.message

// //           : "Something went wrong",

// //     });


// //   }


// // };


// import type {
//   Request,
//   Response,
// } from "express";


// import {
//   createPropertyValidationSchema,
// } from "./property.validation";


// import {
//   createProperty,
//   getAllProperties,
//   getSingleProperty,
// } from "./property.service";




// // =======================
// // CREATE PROPERTY
// // =======================

// export const createPropertyController =

// async (

//   req: Request,

//   res: Response

// ) => {


//   try {


//     const validatedData =

//       createPropertyValidationSchema.parse(

//         req.body

//       );



//     const landlordId =

//       req.user?.id;



//     if (!landlordId) {


//       return res.status(401).json({

//         success:false,

//         message:
//           "User not authenticated",

//       });


//     }



//     const property =

//       await createProperty(

//         validatedData,

//         landlordId

//       );



//     res.status(201).json({

//       success:true,

//       message:
//         "Property created successfully",

//       data:
//         property,

//     });



//   } catch(error){


//     res.status(400).json({

//       success:false,

//       message:
//         error instanceof Error
//         ? error.message
//         : "Something went wrong",

//     });


//   }


// };







// // =======================
// // GET ALL PROPERTIES
// // =======================

// export const getAllPropertiesController =

// async (

//   req: Request,

//   res: Response

// ) => {


//   try {


//     const properties =

//       await getAllProperties();



//     res.status(200).json({

//       success:true,

//       message:
//         "Properties fetched successfully",

//       data:
//         properties,

//     });



//   } catch(error){


//     res.status(500).json({

//       success:false,

//       message:
//         "Failed to fetch properties",

//     });


//   }


// };








// // =======================
// // GET SINGLE PROPERTY
// // =======================

// export const getSinglePropertyController =

// async (

//   req: Request,

//   res: Response

// ) => {


//   try {


//     const property =

//       await getSingleProperty(

//         req.params.id

//       );



//     if(!property){


//       return res.status(404).json({

//         success:false,

//         message:
//           "Property not found",

//       });


//     }



//     res.status(200).json({

//       success:true,

//       message:
//         "Property fetched successfully",

//       data:
//         property,

//     });



//   } catch(error){


//     res.status(500).json({

//       success:false,

//       message:
//         "Failed to fetch property",

//     });


//   }


// };


import type {
  Request,
  Response,
} from "express";


import {
  createPropertyValidationSchema,
  updatePropertyValidationSchema,
} from "./property.validation";


import {
  createProperty,
  getAllProperties,
  getSingleProperty,
  updateProperty,
  deleteProperty,
} from "./property.service";





// =======================
// CREATE PROPERTY
// =======================

export const createPropertyController =

async (

  req: Request,

  res: Response

) => {


  try {


    const validatedData =

      createPropertyValidationSchema.parse(

        req.body

      );



    const landlordId =

      req.user?.id;



    if (!landlordId) {


      return res.status(401).json({

        success:false,

        message:
          "User not authenticated",

      });


    }




    const property =

      await createProperty(

        validatedData,

        landlordId

      );




    res.status(201).json({

      success:true,

      message:
        "Property created successfully",

      data:
        property,

    });



  } catch(error) {


    res.status(400).json({

      success:false,

      message:
        error instanceof Error
        ? error.message
        : "Something went wrong",

    });


  }


};








// =======================
// GET ALL PROPERTIES
// =======================

export const getAllPropertiesController =

async (

  req: Request,

  res: Response

) => {


  try {


    const properties =

      await getAllProperties();



    res.status(200).json({

      success:true,

      message:
        "Properties fetched successfully",

      data:
        properties,

    });



  } catch(error) {


    res.status(500).json({

      success:false,

      message:
        "Failed to fetch properties",

    });


  }


};









// =======================
// GET SINGLE PROPERTY
// =======================

export const getSinglePropertyController =

async (

  req: Request,

  res: Response

) => {


  try {


    const property =

      await getSingleProperty(

        req.params.id

      );




    if(!property) {


      return res.status(404).json({

        success:false,

        message:
          "Property not found",

      });


    }




    res.status(200).json({

      success:true,

      message:
        "Property fetched successfully",

      data:
        property,

    });



  } catch(error) {


    res.status(500).json({

      success:false,

      message:
        "Failed to fetch property",

    });


  }


};










// =======================
// UPDATE PROPERTY
// =======================

export const updatePropertyController =

async (

  req: Request,

  res: Response

) => {


  try {


    const validatedData =

      updatePropertyValidationSchema.parse(

        req.body

      );




    const landlordId =

      req.user?.id;




    if(!landlordId) {


      return res.status(401).json({

        success:false,

        message:
          "User not authenticated",

      });


    }




    const updatedProperty =

      await updateProperty(

        req.params.id,

        landlordId,

        validatedData

      );





    res.status(200).json({

      success:true,

      message:
        "Property updated successfully",

      data:
        updatedProperty,

    });




  } catch(error) {


    res.status(400).json({

      success:false,

      message:
        error instanceof Error
        ? error.message
        : "Update failed",

    });


  }


};









// =======================
// DELETE PROPERTY
// =======================

export const deletePropertyController =

async (

  req: Request,

  res: Response

) => {


  try {


    const landlordId =

      req.user?.id;




    if(!landlordId) {


      return res.status(401).json({

        success:false,

        message:
          "User not authenticated",

      });


    }




    await deleteProperty(

      req.params.id,

      landlordId

    );





    res.status(200).json({

      success:true,

      message:
        "Property deleted successfully",

    });





  } catch(error) {


    res.status(400).json({

      success:false,

      message:
        error instanceof Error
        ? error.message
        : "Delete failed",

    });


  }


};