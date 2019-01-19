import CounterStore from "./Counter";
import { RouterStore } from "mobx-react-router";

class Store {
    router  = new RouterStore();
    counter = new CounterStore();
};

export default Store;
