"use strict";
// // // // // // import type {
// // // // // //   Request,
// // // // // //   Response,
// // // // // // } from "express";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePropertyController = exports.updatePropertyController = exports.getMyPropertiesController = exports.getSinglePropertyController = exports.getAllPropertiesController = exports.createPropertyController = void 0;
const property_service_1 = require("./property.service");
const apiResponse_1 = require("../../utils/apiResponse");
// =======================
// CREATE PROPERTY
// =======================
const createPropertyController = async (req, res) => {
    try {
        const landlordId = req.user?.id;
        if (!landlordId) {
            return (0, apiResponse_1.sendErrorResponse)(res, 401, "User not authenticated");
        }
        const property = await (0, property_service_1.createProperty)(req.body, landlordId);
        return (0, apiResponse_1.sendResponse)(res, 201, "Property created successfully", property);
    }
    catch (error) {
        return (0, apiResponse_1.sendErrorResponse)(res, 400, error instanceof Error
            ? error.message
            : "Something went wrong");
    }
};
exports.createPropertyController = createPropertyController;
// =======================
// GET ALL PROPERTIES
// SEARCH + FILTER
// PAGINATION + SORTING
// =======================
const getAllPropertiesController = async (req, res) => {
    try {
        const sortBy = req.query.sortBy === "price"
            ? "price"
            :
                req.query.sortBy === "bedrooms"
                    ? "bedrooms"
                    :
                        "createdAt";
        const sortOrder = req.query.sortOrder === "asc"
            ? "asc"
            :
                "desc";
        const filters = {
            search: req.query.search
                ? String(req.query.search)
                : undefined,
            location: req.query.location
                ? String(req.query.location)
                : undefined,
            minPrice: req.query.minPrice
                ? Number(req.query.minPrice)
                : undefined,
            maxPrice: req.query.maxPrice
                ? Number(req.query.maxPrice)
                : undefined,
            bedrooms: req.query.bedrooms
                ? Number(req.query.bedrooms)
                : undefined,
            bathrooms: req.query.bathrooms
                ? Number(req.query.bathrooms)
                : undefined,
            landlordId: req.query.landlordId
                ? String(req.query.landlordId)
                : undefined,
            page: req.query.page
                ? Number(req.query.page)
                : 1,
            limit: req.query.limit
                ? Number(req.query.limit)
                : 10,
            sortBy,
            sortOrder,
        };
        const result = await (0, property_service_1.getAllProperties)(filters);
        return (0, apiResponse_1.sendResponse)(res, 200, "Properties fetched successfully", result.data, result.meta);
    }
    catch (error) {
        return (0, apiResponse_1.sendErrorResponse)(res, 500, error instanceof Error
            ? error.message
            : "Failed to fetch properties");
    }
};
exports.getAllPropertiesController = getAllPropertiesController;
// =======================
// GET SINGLE PROPERTY
// =======================
const getSinglePropertyController = async (req, res) => {
    try {
        const property = await (0, property_service_1.getSingleProperty)(req.params.id);
        if (!property) {
            return (0, apiResponse_1.sendErrorResponse)(res, 404, "Property not found");
        }
        return (0, apiResponse_1.sendResponse)(res, 200, "Property fetched successfully", property);
    }
    catch (error) {
        return (0, apiResponse_1.sendErrorResponse)(res, 500, error instanceof Error
            ? error.message
            : "Failed to fetch property");
    }
};
exports.getSinglePropertyController = getSinglePropertyController;
// =======================
// GET MY PROPERTIES
// LANDLORD
// =======================
const getMyPropertiesController = async (req, res) => {
    try {
        const landlordId = req.user?.id;
        if (!landlordId) {
            return (0, apiResponse_1.sendErrorResponse)(res, 401, "User not authenticated");
        }
        const result = await (0, property_service_1.getAllProperties)({
            landlordId,
            page: 1,
            limit: 10,
            sortBy: "createdAt",
            sortOrder: "desc",
        });
        return (0, apiResponse_1.sendResponse)(res, 200, "My properties fetched successfully", result.data, result.meta);
    }
    catch (error) {
        return (0, apiResponse_1.sendErrorResponse)(res, 500, error instanceof Error
            ? error.message
            : "Failed to fetch properties");
    }
};
exports.getMyPropertiesController = getMyPropertiesController;
// =======================
// UPDATE PROPERTY
// =======================
const updatePropertyController = async (req, res) => {
    try {
        const landlordId = req.user?.id;
        if (!landlordId) {
            return (0, apiResponse_1.sendErrorResponse)(res, 401, "User not authenticated");
        }
        const property = await (0, property_service_1.updateProperty)(req.params.id, landlordId, req.body);
        return (0, apiResponse_1.sendResponse)(res, 200, "Property updated successfully", property);
    }
    catch (error) {
        return (0, apiResponse_1.sendErrorResponse)(res, 400, error instanceof Error
            ? error.message
            : "Update failed");
    }
};
exports.updatePropertyController = updatePropertyController;
// =======================
// DELETE PROPERTY
// =======================
const deletePropertyController = async (req, res) => {
    try {
        const landlordId = req.user?.id;
        if (!landlordId) {
            return (0, apiResponse_1.sendErrorResponse)(res, 401, "User not authenticated");
        }
        const property = await (0, property_service_1.deleteProperty)(req.params.id, landlordId);
        return (0, apiResponse_1.sendResponse)(res, 200, "Property deleted successfully", property);
    }
    catch (error) {
        return (0, apiResponse_1.sendErrorResponse)(res, 400, error instanceof Error
            ? error.message
            : "Delete failed");
    }
};
exports.deletePropertyController = deletePropertyController;
