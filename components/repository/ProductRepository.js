import api from "../api";

export default {

    getProducts() {
        let tempProducts = [];
        api
            .get("artikel/", {
                params: { count: 50 },
            })
            .then((response) => {
                let artikel = response.data;
                let nr = 0;
                artikel.forEach((a) => {
                    let tempProduct = {};
                    tempProduct.id = nr++;
                    tempProduct.nr = a.ID;
                    //product.title = a.Name;
                    tempProduct.price = a.Preis;
                    tempProduct.title = a.Beschreibung;
                    //product.description = a.Beschreibung;
                    tempProduct.isAddedToCart = false;
                    tempProduct.isAddedBtn = false;
                    tempProduct.isFavourite = false;
                    tempProduct.quantity = 1;

                    tempProducts.push(tempProduct);
                });
            });
        //console.log(products)
        return tempProducts;
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