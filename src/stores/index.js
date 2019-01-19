import CounterStore from "./Counter";
import { RouterStore } from "mobx-react-router";

class Stores {
    router  = new RouterStore();
    counter = new CounterStore();
};

const stores = new Stores();

export default stores;
