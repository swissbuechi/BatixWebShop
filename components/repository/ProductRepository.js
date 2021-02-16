import api from "../api";

export default {

    getProducts() {
        let products = [];
        api
            .get("artikel/", {
                params: { count: 50 },
            })
            .then((response) => {
                let artikel = response.data;
                artikel.forEach((a) => {
                    let product = {};
                    product.id = a.ID;
                    //product.title = a.Name;
                    product.price = a.Preis;
                    product.title = a.Beschreibung;
                    //product.description = a.Beschreibung;
                    product.isAddedToCart = false;
                    product.isAddedBtn = false;
                    product.isFavourite = false;
                    product.quantity = 1;

                    products.push(product);
                });
            });
        //console.log(products)
        return products;
    }
    ,
    getProductsTest() {
        return [
            {
                id: 4,
                title: "Product 4",
                description: "Hans",
                price: 50,
                ratings: 3,
                reviews: 5,
                isAddedToCart: false,
                isAddedBtn: false,
                isFavourite: false,
                quantity: 1,
            },
            {
                id: 5,
                title: "Product 5",
                description: "Peter",
                price: 35,
                ratings: 5,
                reviews: 10,
                isAddedToCart: false,
                isAddedBtn: false,
                isFavourite: false,
                quantity: 1,
            },
        ];
    }

}