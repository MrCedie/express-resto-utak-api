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
exports.getCategories = void 0;
const firebaseConfig_1 = __importDefault(require("../_shared/config/firebaseConfig"));
const getCategories = () => __awaiter(void 0, void 0, void 0, function* () {
    const snapshot = yield firebaseConfig_1.default.ref("category").once("value");
    const categories = [];
    snapshot.forEach((childSnapshot) => {
        const category = childSnapshot.val();
        category.id = childSnapshot.key; // Add the ID to each category
        categories.push(category);
    });
    return categories;
});
exports.getCategories = getCategories;
