class Model {
    constructor(state = []) {
        this.state = state;
    }

    getItem(id) {
        return this.state.find(item => item.id === id);
    }

    addItem(item) {
        this.state.push(item);
    }

    updateItem(id, data) {
        let item = this.getItem(id);
        Object.keys(data).forEach(prop => item[prop] = data[prop]);
    }

    removeItem(id) {

    }
}