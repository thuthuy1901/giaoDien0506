const obj = {
    name: "Javascript basic",
    getName : () => {
        return this.name;
    }
}

console.log(obj.getName());