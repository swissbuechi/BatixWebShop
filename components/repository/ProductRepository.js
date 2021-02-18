import api from "../api";

export default {

    //gebinde: 17618507373

    order() {
        let json = {
            kunde: this.bestellung_kunde,
            status: this.bestellung_status,
            gebinde: this.bestellung_gebinde,
            material: this.bestellung_material,
            artikel: this.bestellung_artikel,
            // preis: this.bestellung_preis,
            anzahl: this.bestellung_anzahl,
        };

        api
            // https://external.abbts.ch:50102/abbts/api/ --> Muss nicht angegeben sein, da über ".env" geholt wird.
            // .get("bestellung/",
            //     {params: {id: 1}}
            //     // // "https://26-great-windy-clams.batix.cloud/api/v1/bestellung/",
            //     // "https://external.abbts.ch:50102/api/Bestellung/",
            //     // json
            // )
            .post(
                // "https://26-great-windy-clams.batix.cloud/api/v1/bestellung/",
                "bestellung/",
                json
            )

            .then((response) => {
                json.ID = response.data;
                // json.Bestelldatum = "2021-01-01";
                this.bestellungen.push(json);
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