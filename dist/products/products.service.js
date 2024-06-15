"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProduct = exports.removeProduct = exports.addProduct = exports.getProductsById = exports.getProducts = void 0;
const firebaseConfig_1 = __importDefault(require("../_shared/config/firebaseConfig"));
const uuid_1 = require("uuid");
const getProducts = () => __awaiter(void 0, void 0, void 0, function* () {
    const snapshot = yield firebaseConfig_1.default.ref("product").once("value");
    const products = [];
    snapshot.forEach((childSnapshot) => {
        const product = childSnapshot.val();
        product.id = childSnapshot.key;
        products.push(product);
    });
    return products;
});
exports.getProducts = getProducts;
const getProductsById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const snapshot = yield firebaseConfig_1.default.ref("product").child(id).once("value");
    if (!snapshot.exists())
        return null;
    return Object.assign({ id }, snapshot.val());
});
exports.getProductsById = getProductsById;
const addProduct = (formData) => __awaiter(void 0, void 0, void 0, function* () {
    const id = (0, uuid_1.v4)();
    yield firebaseConfig_1.default
        .ref("product")
        .child(id)
        .set(Object.assign(Object.assign({}, formData), { id }));
    const snapshot = yield (0, exports.getProductsById)(id);
    return snapshot;
});
exports.addProduct = addProduct;
const removeProduct = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield (0, exports.getProductsById)(id);
    if (!product)
        return null;
    yield firebaseConfig_1.default.ref("product").child(id).remove();
    return { id };
});
exports.removeProduct = removeProduct;
const updateProduct = (id, formData) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield (0, exports.getProductsById)(id);
    if (!product)
        return null;
    yield firebaseConfig_1.default.ref("product").child(id).update(formData);
    const snapshot = yield (0, exports.getProductsById)(id);
    return snapshot;
});
exports.updateProduct = updateProduct;
