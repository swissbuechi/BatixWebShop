import api from "../api";
import store from "../../store";

export default {

    //kunde Moritz Bühler: 177B64458D0
    //status Bestellung erhalten: 177A5357E69
    //gebinde Kiste 4x4x4: 17618507373

    order(productsAdded) {

        console.log("Products Added: " + productsAdded)
        productsAdded.forEach((el) => {
            console.log("Products Added Nr: " + el.nr)
        })
        let tempArtikelListe = productsAdded;
        let tempArtikel;
        tempArtikelListe.forEach((el) => {
            console.log("Artikel im Warenkorb: " + el.id)
            if (el.id === 0) {
                console.log("Artikel für Bestellung: " + el.nr)
                tempArtikel = el;
            }
        })
        let json = {
            kunde: "177B64458D0",
            status: "177A5357E69",
            gebinde: "17618507373",
            artikel: tempArtikel.nr,
            anzahl: tempArtikel.quantity,
        };
        return api
            .post(
                "bestellung/",
                json
            )
            .then((response) => {
                let order = response.data;
                console.log("Bestellung ID: " + order.ID)
                return order.ID;
            });
    },

    getProducts() {
        return api
            .get("artikel/", {
                params: { count: 50 },
            })
            .then((response) => {
                let tempProducts = [];
                let artikel = response.data;
                let nr = 0;
                artikel.forEach((a) => {
                    let tempProduct = {};
                    tempProduct.id = nr++;
                    tempProduct.nr = a.ID;
                    //product.title = a.Name;
                    tempProduct.price = a.Preis;
                    tempProduct.title = a.Beschreibung;
                    tempProduct.isAddedToCart = false;
                    tempProduct.isAddedBtn = false;
                    tempProduct.isFavourite = false;
                    tempProduct.quantity = 1;

                    tempProducts.push(tempProduct);
                });
                return tempProducts;
            });
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