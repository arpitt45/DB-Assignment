const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  desc: { type: String },
  SKU: { type: String, unique: true, required: true },
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'ProductCategory', required: true },
  inventory: { type: mongoose.Schema.Types.ObjectId, ref: 'Inventory' },  
  price: { type: Number, required: true },
  discount: { type: mongoose.Schema.Types.ObjectId, ref: 'Discount' }, 
  created_at: { type: Date, default: Date.now },
  modified_at: { type: Date, default: Date.now },
  deleted_at: { type: Date }
});

const productCategorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  desc: { type: String },
  created_at: { type: Date, default: Date.now },
  modified_at: { type: Date, default: Date.now },
  deleted_at: { type: Date }
});

module.exports = {
  Product: mongoose.model('Product', productSchema),
  ProductCategory: mongoose.model('ProductCategory', productCategorySchema)
};

/*this code defnes two schemas
1.productSchema
2.productCategorySchema
*/