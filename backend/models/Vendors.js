const mongoose = require('mongoose');

const VendorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  role: {type: String, required: true, enum: ["admin", "vendor", "user"]},
    password: {type: String, required: true},
    phone: { type: String, required: true},
  type: { type: String, required: true },  // Type of vendor (catering, photography, etc.)
  location: { type: String, required: true },
});

const VendorModel = mongoose.model('Vendor', VendorSchema);

module.exports = VendorModel;
