
class UrlBuilder {

    baseUrl = {};
    children = [];

    constructor(baseUrl){
        this.baseUrl = baseUrl;
    }

    withChild(child) {
        this.children.push(child);
    }

    build() {
        const finalUrl = this.baseUrl;

        if(this.children && this.children.length > 0){
            finalUrl.concat(this.children);
        }

        return finalUrl;
    }
}

export default UrlBuilder;