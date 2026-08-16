// // // // import type {
// // // //   Request,
// // // //   Response,
// // // // } from "express";


// // // // import {
// // // //   createPropertyValidationSchema,
// // // // } from "./property.validation";


// // // // import {
// // // //   createProperty,
// // // // } from "./property.service";



// // // // export const createPropertyController =

// // // // async (

// // // //   req: Request,

// // // //   res: Response

// // // // ) => {


// // // //   try {


// // // //     const validatedData =

// // // //       createPropertyValidationSchema.parse(

// // // //         req.body

// // // //       );



// // // //     const landlordId =

// // // //       req.user?.id;



// // // //     if (!landlordId) {


// // // //       return res.status(401).json({

// // // //         success: false,

// // // //         message:
// // // //           "User not authenticated",

// // // //       });


// // // //     }



// // // //     const property =

// // // //       await createProperty(

// // // //         validatedData,

// // // //         landlordId

// // // //       );



// // // //     res.status(201).json({

// // // //       success: true,

// // // //       message:
// // // //         "Property created successfully",

// // // //       data:
// // // //         property,

// // // //     });



// // // //   } catch (error) {


// // // //     res.status(400).json({

// // // //       success: false,

// // // //       message:

// // // //         error instanceof Error

// // // //           ? error.message

// // // //           : "Something went wrong",

// // // //     });


// // // //   }


// // // // };


// // // import type {
// // //   Request,
// // //   Response,
// // // } from "express";


// // // import {
// // //   createPropertyValidationSchema,
// // // } from "./property.validation";


// // // import {
// // //   createProperty,
// // //   getAllProperties,
// // //   getSingleProperty,
// // // } from "./property.service";




// // // // =======================
// // // // CREATE PROPERTY
// // // // =======================

// // // export const createPropertyController =

// // // async (

// // //   req: Request,

// // //   res: Response

// // // ) => {


// // //   try {


// // //     const validatedData =

// // //       createPropertyValidationSchema.parse(

// // //         req.body

// // //       );



// // //     const landlordId =

// // //       req.user?.id;



// // //     if (!landlordId) {


// // //       return res.status(401).json({

// // //         success:false,

// // //         message:
// // //           "User not authenticated",

// // //       });


// // //     }



// // //     const property =

// // //       await createProperty(

// // //         validatedData,

// // //         landlordId

// // //       );



// // //     res.status(201).json({

// // //       success:true,

// // //       message:
// // //         "Property created successfully",

// // //       data:
// // //         property,

// // //     });



// // //   } catch(error){


// // //     res.status(400).json({

// // //       success:false,

// // //       message:
// // //         error instanceof Error
// // //         ? error.message
// // //         : "Something went wrong",

// // //     });


// // //   }


// // // };







// // // // =======================
// // // // GET ALL PROPERTIES
// // // // =======================

// // // export const getAllPropertiesController =

// // // async (

// // //   req: Request,

// // //   res: Response

// // // ) => {


// // //   try {


// // //     const properties =

// // //       await getAllProperties();



// // //     res.status(200).json({

// // //       success:true,

// // //       message:
// // //         "Properties fetched successfully",

// // //       data:
// // //         properties,

// // //     });



// // //   } catch(error){


// // //     res.status(500).json({

// // //       success:false,

// // //       message:
// // //         "Failed to fetch properties",

// // //     });


// // //   }


// // // };








// // // // =======================
// // // // GET SINGLE PROPERTY
// // // // =======================

// // // export const getSinglePropertyController =

// // // async (

// // //   req: Request,

// // //   res: Response

// // // ) => {


// // //   try {


// // //     const property =

// // //       await getSingleProperty(

// // //         req.params.id

// // //       );



// // //     if(!property){


// // //       return res.status(404).json({

// // //         success:false,

// // //         message:
// // //           "Property not found",

// // //       });


// // //     }



// // //     res.status(200).json({

// // //       success:true,

// // //       message:
// // //         "Property fetched successfully",

// // //       data:
// // //         property,

// // //     });



// // //   } catch(error){


// // //     res.status(500).json({

// // //       success:false,

// // //       message:
// // //         "Failed to fetch property",

// // //     });


// // //   }


// // // };


// // import type {
// //   Request,
// //   Response,
// // } from "express";


// // import {
// //   createPropertyValidationSchema,
// //   updatePropertyValidationSchema,
// // } from "./property.validation";


// // import {
// //   createProperty,
// //   getAllProperties,
// //   getSingleProperty,
// //   updateProperty,
// //   deleteProperty,
// // } from "./property.service";





// // // =======================
// // // CREATE PROPERTY
// // // =======================

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

// //         success:false,

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

// //       success:true,

// //       message:
// //         "Property created successfully",

// //       data:
// //         property,

// //     });



// //   } catch(error) {


// //     res.status(400).json({

// //       success:false,

// //       message:
// //         error instanceof Error
// //         ? error.message
// //         : "Something went wrong",

// //     });


// //   }


// // };








// // // =======================
// // // GET ALL PROPERTIES
// // // =======================

// // export const getAllPropertiesController =

// // async (

// //   req: Request,

// //   res: Response

// // ) => {


// //   try {


// //     const properties =

// //       await getAllProperties();



// //     res.status(200).json({

// //       success:true,

// //       message:
// //         "Properties fetched successfully",

// //       data:
// //         properties,

// //     });



// //   } catch(error) {


// //     res.status(500).json({

// //       success:false,

// //       message:
// //         "Failed to fetch properties",

// //     });


// //   }


// // };









// // // =======================
// // // GET SINGLE PROPERTY
// // // =======================

// // export const getSinglePropertyController =

// // async (

// //   req: Request,

// //   res: Response

// // ) => {


// //   try {


// //     const property =

// //       await getSingleProperty(

// //         req.params.id

// //       );




// //     if(!property) {


// //       return res.status(404).json({

// //         success:false,

// //         message:
// //           "Property not found",

// //       });


// //     }




// //     res.status(200).json({

// //       success:true,

// //       message:
// //         "Property fetched successfully",

// //       data:
// //         property,

// //     });



// //   } catch(error) {


// //     res.status(500).json({

// //       success:false,

// //       message:
// //         "Failed to fetch property",

// //     });


// //   }


// // };










// // // =======================
// // // UPDATE PROPERTY
// // // =======================

// // export const updatePropertyController =

// // async (

// //   req: Request,

// //   res: Response

// // ) => {


// //   try {


// //     const validatedData =

// //       updatePropertyValidationSchema.parse(

// //         req.body

// //       );




// //     const landlordId =

// //       req.user?.id;




// //     if(!landlordId) {


// //       return res.status(401).json({

// //         success:false,

// //         message:
// //           "User not authenticated",

// //       });


// //     }




// //     const updatedProperty =

// //       await updateProperty(

// //         req.params.id,

// //         landlordId,

// //         validatedData

// //       );





// //     res.status(200).json({

// //       success:true,

// //       message:
// //         "Property updated successfully",

// //       data:
// //         updatedProperty,

// //     });




// //   } catch(error) {


// //     res.status(400).json({

// //       success:false,

// //       message:
// //         error instanceof Error
// //         ? error.message
// //         : "Update failed",

// //     });


// //   }


// // };









// // // =======================
// // // DELETE PROPERTY
// // // =======================

// // export const deletePropertyController =

// // async (

// //   req: Request,

// //   res: Response

// // ) => {


// //   try {


// //     const landlordId =

// //       req.user?.id;




// //     if(!landlordId) {


// //       return res.status(401).json({

// //         success:false,

// //         message:
// //           "User not authenticated",

// //       });


// //     }




// //     await deleteProperty(

// //       req.params.id,

// //       landlordId

// //     );





// //     res.status(200).json({

// //       success:true,

// //       message:
// //         "Property deleted successfully",

// //     });





// //   } catch(error) {


// //     res.status(400).json({

// //       success:false,

// //       message:
// //         error instanceof Error
// //         ? error.message
// //         : "Delete failed",

// //     });


// //   }


// // };


// // import type {
// //   Request,
// //   Response,
// // } from "express";


// // import {
// //   createPropertyValidationSchema,
// //   updatePropertyValidationSchema,
// // } from "./property.validation";


// // import {
// //   createProperty,
// //   getAllProperties,
// //   getSingleProperty,
// //   updateProperty,
// //   deleteProperty,
// // } from "./property.service";





// // // CREATE PROPERTY

// // export const createPropertyController =
// // async (
// //   req: Request,
// //   res: Response
// // ) => {


// //   try {


// //     const data =
// //       createPropertyValidationSchema.parse(
// //         req.body
// //       );



// //     const landlordId =
// //       req.user?.id;



// //     if(!landlordId){

// //       return res.status(401).json({

// //         success:false,

// //         message:
// //           "User not authenticated",

// //       });

// //     }




// //     const property =
// //       await createProperty(
// //         data,
// //         landlordId
// //       );



// //     res.status(201).json({

// //       success:true,

// //       message:
// //         "Property created successfully",

// //       data:
// //         property,

// //     });



// //   } catch(error){


// //     res.status(400).json({

// //       success:false,

// //       message:
// //         error instanceof Error
// //         ? error.message
// //         : "Something went wrong",

// //     });


// //   }

// // };








// // // GET ALL PROPERTY

// // export const getAllPropertiesController =
// // async (
// //   req: Request,
// //   res: Response
// // ) => {


// //   try {


// //     const filters = {


// //       location:
// //         req.query.location as string,


// //       minPrice:
// //         req.query.minPrice
// //         ? Number(req.query.minPrice)
// //         : undefined,


// //       maxPrice:
// //         req.query.maxPrice
// //         ? Number(req.query.maxPrice)
// //         : undefined,


// //       bedrooms:
// //         req.query.bedrooms
// //         ? Number(req.query.bedrooms)
// //         : undefined,


// //       page:
// //         req.query.page
// //         ? Number(req.query.page)
// //         : 1,


// //       limit:
// //         req.query.limit
// //         ? Number(req.query.limit)
// //         : 10,


// //     };



// //     const result =
// //       await getAllProperties(
// //         filters
// //       );



// //     res.status(200).json({

// //       success:true,

// //       message:
// //         "Properties fetched successfully",

// //       ...result,

// //     });



// //   } catch(error){


// //     res.status(500).json({

// //       success:false,

// //       message:
// //         "Failed to fetch properties",

// //     });


// //   }


// // };








// // // GET SINGLE PROPERTY

// // export const getSinglePropertyController =
// // async (
// //   req: Request,
// //   res: Response
// // ) => {


// //   try {


// //     const property =
// //       await getSingleProperty(
// //         req.params.id
// //       );



// //     if(!property){

// //       return res.status(404).json({

// //         success:false,

// //         message:
// //           "Property not found",

// //       });

// //     }



// //     res.status(200).json({

// //       success:true,

// //       message:
// //         "Property fetched successfully",

// //       data:
// //         property,

// //     });



// //   }catch(error){


// //     res.status(500).json({

// //       success:false,

// //       message:
// //         "Failed to fetch property",

// //     });


// //   }


// // };








// // // UPDATE PROPERTY

// // export const updatePropertyController =
// // async (
// //   req: Request,
// //   res: Response
// // ) => {


// //   try {


// //     const data =
// //       updatePropertyValidationSchema.parse(
// //         req.body
// //       );



// //     const landlordId =
// //       req.user?.id;



// //     if(!landlordId){

// //       return res.status(401).json({

// //         success:false,

// //         message:
// //           "User not authenticated",

// //       });

// //     }




// //     const property =
// //       await updateProperty(

// //         req.params.id,

// //         landlordId,

// //         data

// //       );



// //     res.status(200).json({

// //       success:true,

// //       message:
// //         "Property updated successfully",

// //       data:
// //         property,

// //     });



// //   }catch(error){


// //     res.status(400).json({

// //       success:false,

// //       message:
// //         error instanceof Error
// //         ? error.message
// //         : "Update failed",

// //     });


// //   }


// // };








// // // DELETE PROPERTY

// // export const deletePropertyController =
// // async (
// //   req: Request,
// //   res: Response
// // ) => {


// //   try {


// //     const landlordId =
// //       req.user?.id;



// //     if(!landlordId){

// //       return res.status(401).json({

// //         success:false,

// //         message:
// //           "User not authenticated",

// //       });

// //     }




// //     await deleteProperty(

// //       req.params.id,

// //       landlordId

// //     );



// //     res.status(200).json({

// //       success:true,

// //       message:
// //         "Property deleted successfully",

// //     });



// //   }catch(error){


// //     res.status(400).json({

// //       success:false,

// //       message:
// //         error instanceof Error
// //         ? error.message
// //         : "Delete failed",

// //     });


// //   }


// // };


// import type {
//   Request,
//   Response,
// } from "express";


// import {
//   createProperty,
//   getAllProperties,
//   getSingleProperty,
//   updateProperty,
//   deleteProperty,
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

//         req.body,

//         landlordId

//       );





//     res.status(201).json({


//       success:true,


//       message:

//         "Property created successfully",



//       data:

//         property,


//     });





//   } catch(error) {


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


//     const filters = {


//       location:

//         req.query.location as string,



//       minPrice:

//         req.query.minPrice

//         ? Number(req.query.minPrice)

//         : undefined,



//       maxPrice:

//         req.query.maxPrice

//         ? Number(req.query.maxPrice)

//         : undefined,



//       bedrooms:

//         req.query.bedrooms

//         ? Number(req.query.bedrooms)

//         : undefined,



//       page:

//         req.query.page

//         ? Number(req.query.page)

//         : 1,



//       limit:

//         req.query.limit

//         ? Number(req.query.limit)

//         : 10,


//     };





//     const result =

//       await getAllProperties(

//         filters

//       );





//     res.status(200).json({


//       success:true,


//       message:

//         "Properties fetched successfully",



//       ...result,


//     });





//   } catch(error) {


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





//   } catch(error) {


//     res.status(500).json({


//       success:false,


//       message:

//         "Failed to fetch property",


//     });


//   }


// };











// // =======================
// // GET MY PROPERTIES
// // LANDLORD
// // =======================

// export const getMyPropertiesController =
// async (

//   req: Request,

//   res: Response

// ) => {


//   try {


//     const landlordId =

//       req.user?.id;





//     if(!landlordId){


//       return res.status(401).json({


//         success:false,


//         message:

//           "User not authenticated",


//       });


//     }





//     const properties =

//       await getAllProperties({

//         landlordId,

//       });





//     res.status(200).json({


//       success:true,


//       message:

//         "My properties fetched successfully",



//       data:

//         properties,


//     });





//   } catch(error) {


//     res.status(500).json({


//       success:false,


//       message:

//         error instanceof Error

//         ? error.message

//         : "Failed to fetch properties",


//     });


//   }


// };











// // =======================
// // UPDATE PROPERTY
// // =======================

// export const updatePropertyController =
// async (

//   req: Request,

//   res: Response

// ) => {


//   try {


//     const landlordId =

//       req.user?.id;





//     if(!landlordId){


//       return res.status(401).json({


//         success:false,


//         message:

//           "User not authenticated",


//       });


//     }





//     const property =

//       await updateProperty(

//         req.params.id,

//         landlordId,

//         req.body

//       );





//     res.status(200).json({


//       success:true,


//       message:

//         "Property updated successfully",



//       data:

//         property,


//     });





//   } catch(error) {


//     res.status(400).json({


//       success:false,


//       message:

//         error instanceof Error

//         ? error.message

//         : "Update failed",


//     });


//   }


// };











// // =======================
// // DELETE PROPERTY
// // =======================

// export const deletePropertyController =
// async (

//   req: Request,

//   res: Response

// ) => {


//   try {


//     const landlordId =

//       req.user?.id;





//     if(!landlordId){


//       return res.status(401).json({


//         success:false,


//         message:

//           "User not authenticated",


//       });


//     }





//     const property =

//       await deleteProperty(

//         req.params.id,

//         landlordId

//       );





//     res.status(200).json({


//       success:true,


//       message:

//         "Property deleted successfully",



//       data:

//         property,


//     });





//   } catch(error) {


//     res.status(400).json({


//       success:false,


//       message:

//         error instanceof Error

//         ? error.message

//         : "Delete failed",


//     });


//   }


// };


import type {
  Request,
  Response,
} from "express";


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

        req.body,

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


    const filters = {


      location:

        req.query.location as string,



      minPrice:

        req.query.minPrice

        ? Number(req.query.minPrice)

        : undefined,



      maxPrice:

        req.query.maxPrice

        ? Number(req.query.maxPrice)

        : undefined,



      bedrooms:

        req.query.bedrooms

        ? Number(req.query.bedrooms)

        : undefined,



      page:

        req.query.page

        ? Number(req.query.page)

        : 1,



      limit:

        req.query.limit

        ? Number(req.query.limit)

        : 10,


    };






    const result =

      await getAllProperties(

        filters

      );






    res.status(200).json({


      success:true,


      message:

        "Properties fetched successfully",



      ...result,


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

        req.params.id as string

      );






    if(!property){


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
// GET MY PROPERTIES
// LANDLORD
// =======================

export const getMyPropertiesController =
async (

  req: Request,

  res: Response

) => {


  try {


    const landlordId =

      req.user?.id;





    if(!landlordId){


      return res.status(401).json({


        success:false,


        message:

          "User not authenticated",


      });


    }







    const properties =

      await getAllProperties({


        landlordId,


      });






    res.status(200).json({


      success:true,


      message:

        "My properties fetched successfully",



      data:

        properties,


    });






  } catch(error) {


    res.status(500).json({


      success:false,


      message:

        error instanceof Error

        ? error.message

        : "Failed to fetch properties",


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


    const landlordId =

      req.user?.id;





    if(!landlordId){


      return res.status(401).json({


        success:false,


        message:

          "User not authenticated",


      });


    }







    const property =

      await updateProperty(

        req.params.id as string,

        landlordId,

        req.body

      );






    res.status(200).json({


      success:true,


      message:

        "Property updated successfully",



      data:

        property,


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





    if(!landlordId){


      return res.status(401).json({


        success:false,


        message:

          "User not authenticated",


      });


    }







    const property =

      await deleteProperty(

        req.params.id as string,

        landlordId

      );






    res.status(200).json({


      success:true,


      message:

        "Property deleted successfully",



      data:

        property,


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