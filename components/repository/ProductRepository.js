import api from "../api";

export default {

    getProducts() {
        var products = [];
        api
            .get("artikel/", {
                params: { count: 50 },
            })
            .then((response) => {
                let artikel = response.data;
                artikel.forEach((a) => {
                    var product = {
                        id: '',
                        title: 'Product 1',
                        description: '',
                        price: '',
                        isAddedToCart: false,
                        isAddedBtn: false,
                        isFavourite: false,
                        quantity: 1
                    };
                    product.id = a.ID;
                    //product.title = a.Name;
                    product.price = a.Preis;
                    product.title = a.Beschreibung;
                    //product.description = a.Beschreibung;
                    products.push(product);
                });
            });
        return products;
    }
}