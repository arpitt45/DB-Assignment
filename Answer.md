## Answers

# 1. Explain the relationship between the "Product" and "Product_Category" entities from the above diagram.

```
Product: This entity represents a product sold by the e-commerce store. It has attributes such as:

id: unique identifier for the product
name: name of the product
desc: description of the product
SKU: unique identifier for the product item 
category_id: foreign key referencing the id field of the Product_Category entity
inventory_id: foreign key referencing the id field of the Inventory entity 
price: price of the product
discount_id: foreign key referencing the id field of the Discount entity 
created_at: timestamp of when the product record was created
modified_at: timestamp of when the product record was last modified
deleted_at: timestamp of when the product record was soft-deleted 


Product_Category: This entity represents a category that a product can belong to. It has attributes such as:

id: unique identifier for the product category
name: name of the product category
desc: description of the product category
created_at: timestamp of when the product category record was created
modified_at: timestamp of when the product category record was last modified
deleted_at: timestamp of when the product category record was soft-deleted

The relationship between these two entities is one-to-many. A product can belong to one category (represented by the category_id foreign key in the Product table), but a category can have many products. This is a common relationship in e-commerce systems, where products can be grouped into categories to help customers browse and find products more easily.


```


# 2. How could you ensure that each product in the "Product" table has a valid category assigned to it?

```
Making sure that every product in the "Product" table has a legitimate category assigned to it can be done in a few different ways:

1.Foreign Key Constraint: The most common approach is to define a foreign key constraint on the category_id field in the Product table. This constraint would reference the primary key (id) of the Product_Category table. The database would then enforce data integrity, preventing products from being saved with an invalid category ID (one that doesn't exist in the Product_Category table).

2.Validation on Entry: During product creation or update within the e-commerce application, implement validation logic. This logic can check if the chosen category ID exists in the Product_Category table before saving the product record. If the category is invalid, display an error message to the user and prevent them from saving the product with an invalid category.