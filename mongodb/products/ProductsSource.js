import {MongoDataSource} from "apollo-datasource-mongodb";
import {ObjectId} from "mongodb";

export default class ProductsSource extends MongoDataSource {
    async getProductsByIds(productsIds) {
        if (!productsIds || productsIds.length === 0) return []
        return await this.collection.find({
            _id: {"$in": productsIds}
        }).toArray();
    }

    //create product
    async createProduct(product) {
        const {insertedId} = await this.collection.insertOne(product);
        return insertedId;
    }

}