"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("./App.css");
const Home_1 = __importDefault(require("./components/Home"));
function App() {
    return (<div className="App">
      <Home_1.default />
      <h1>hello</h1>
    </div>);
}
exports.default = App;
