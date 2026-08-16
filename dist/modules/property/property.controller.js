"use strict";
// // // // import type {
// // // //   Request,
// // // //   Response,
// // // // } from "express";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePropertyController = exports.updatePropertyController = exports.getMyPropertiesController = exports.getSinglePropertyController = exports.getAllPropertiesController = exports.createPropertyController = void 0;
const property_service_1 = require("./property.service");
// =======================
// CREATE PROPERTY
// =======================
const createPropertyController = async (req, res) => {
    try {
        const landlordId = req.user?.id;
        if (!landlordId) {
            return res.status(401).json({
                success: false,
                message: "User not authenticated",
            });
        }
        const property = await (0, property_service_1.createProperty)(req.body, landlordId);
        res.status(201).json({
            success: true,
            message: "Property created successfully",
            data: property,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: error instanceof Error
                ? error.message
                : "Something went wrong",
        });
    }
};
exports.createPropertyController = createPropertyController;
// =======================
// GET ALL PROPERTIES
// =======================
const getAllPropertiesController = async (req, res) => {
    try {
        const filters = {
            location: req.query.location,
            minPrice: req.query.minPrice
                ? Number(req.query.minPrice)
                : undefined,
            maxPrice: req.query.maxPrice
                ? Number(req.query.maxPrice)
                : undefined,
            bedrooms: req.query.bedrooms
                ? Number(req.query.bedrooms)
                : undefined,
            page: req.query.page
                ? Number(req.query.page)
                : 1,
            limit: req.query.limit
                ? Number(req.query.limit)
                : 10,
        };
        const result = await (0, property_service_1.getAllProperties)(filters);
        res.status(200).json({
            success: true,
            message: "Properties fetched successfully",
            ...result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch properties",
        });
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
            return res.status(404).json({
                success: false,
                message: "Property not found",
            });
        }
        res.status(200).json({
            success: true,
            message: "Property fetched successfully",
            data: property,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch property",
        });
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
            return res.status(401).json({
                success: false,
                message: "User not authenticated",
            });
        }
        const properties = await (0, property_service_1.getAllProperties)({
            landlordId,
        });
        res.status(200).json({
            success: true,
            message: "My properties fetched successfully",
            data: properties,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error instanceof Error
                ? error.message
                : "Failed to fetch properties",
        });
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
            return res.status(401).json({
                success: false,
                message: "User not authenticated",
            });
        }
        const property = await (0, property_service_1.updateProperty)(req.params.id, landlordId, req.body);
        res.status(200).json({
            success: true,
            message: "Property updated successfully",
            data: property,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: error instanceof Error
                ? error.message
                : "Update failed",
        });
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
            return res.status(401).json({
                success: false,
                message: "User not authenticated",
            });
        }
        const property = await (0, property_service_1.deleteProperty)(req.params.id, landlordId);
        res.status(200).json({
            success: true,
            message: "Property deleted successfully",
            data: property,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: error instanceof Error
                ? error.message
                : "Delete failed",
        });
    }
};
exports.deletePropertyController = deletePropertyController;
