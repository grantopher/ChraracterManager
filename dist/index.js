"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const RandomCharacter_1 = require("./lib/RandomCharacter");
const app = express_1.default();
const port = 8080; // default port to listen
// define a route handler for the default home page
app.get("/", (req, res) => {
    res.send("Hello world!");
});
app.get("/randomChar", (req, res) => __awaiter(this, void 0, void 0, function* () {
    const char = RandomCharacter_1.RandomCharacter.make();
    res.send(JSON.stringify(char));
}));
// start the Express server
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.info(`server started at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map