'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserTypes = Object.freeze({
    Customer: 'Customer',
    Transporter: 'Transporter',
    Admin:"Admin"
});
const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, default: '123456' },
    Address: { type: String },
    city: { type: String },
    profile_image: { type: String },
    aadhar_image: { type: String },
    profileName: { type: String },
    phone: { type: String },
    teleNo: { type: String },
    status: { type: String, enum: ['Active', 'Inactive'], default: 'Active' },
    role_id: { type: Schema.Types.ObjectId, ref: 'Role' },
    userType: { type: String, enum: Object.values(UserTypes) },   // need to remove later
    deleted: { type: Boolean, default: false },
    access_token: { type: String },
    selectedLanguage: { type: String }, 
    isVerified: { type: Boolean, default: true },
    isLoggedIn: { type: Boolean, default: false },
    loggedInTime: { type: Date },
    lastActivityTime: { type: Date },
    licenseNumber: { type: String },
    salt: { type: String },
    otp: { type: Number, required: true },
}, {
    timestamps: true,
    toObject: {
        virtuals: true
    },
    toJSON: {
        virtuals: true
    }
});

const User = mongoose.model('Users', UserSchema);
module.exports = User;

