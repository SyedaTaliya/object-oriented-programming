//------NAIL PAINTS!
let Nailpaints = function (productName, type, number, colors, rupees, charges) {

    {
        this.factoryName = "Golden Rose";

        this.ingredients = ["Plasticizers", "Dyes", "pigments", "Opalescent", "colors"];

        this.nameOfProduct = productName;

        this.typeOfNailpaint = type;

        this.numbersOfProduct = number;

        this.selectColors = colors;

        this.price = rupees;

        this.delCharges = charges;
    }

    nailPaints.prototype.sizeOfBottles = "6ml";

    nailPaints.prototype.note = function () {
        console.log(`Thanks For Purchase, Your order number is 026265 color is ${this.selectColors} your total cost is ${this.price}`)
    }
}


let userDetails = nailPaints(`wow, mate, 07, black`);


//-------ICECREAM

let Icecreams = function (flavour, base, charges, type, scoops, topping, sauce, spoons) {

    this.flavour = flavour;

    this.flavourOFBase = base;

    this.price = charges;

    this.tyepOfBase = type;

    this.noOfScoops = scoops;

    this.topping = topping;

    this.sauces = sauce;

    this.noOfSpoons = spoons;
}

Icecreams.prototype.enjoy = function () {
    console.log(`Enjoy your ${this.flavour} IceCream `)
}

let myIcecream = Icecreams(`chocolate`, `chocolate`, `cone`, 400, 2, `chocolatechip`, `chocolate`, 1)

console.log(myIcecream);

//------- MOBILEPHONE


let MobilePhones = function (name, model, specifications, display, storage, camera, ram, os, color, carrier, condition, payment_option, with_box, whatsinthebox) {

    this.mobileName = name;
    this.mobileModel = model;
    this.mobileSpecifications = specifications;
    this.mobileDisplay = display;
    this.mobileStorage = storage;
    this.mobileCamera = camera;
    this.mobileRam = ram;
    this.mobileOs = os;
    this.mobileColor = color;
    this.mobileCarrier = carrier;
    this.mobileCondition = condition;
    this.mobilePaymentOption = payment_option;
    this.mobileWithBox = with_box;
    this.mobileWhatsinthebox = whatsinthebox;

}


MobilePhones.prototype.message = function () {
    console.log(`Unbox this great ${this.mobileName} and enjoy great experience with this ${this.mobileModel}`);
}

let myMobilePhone = MobilePhones(`Oppo,f11pro,LTPS IPS LCD capacitive touchscreen, 16M colors,128gb,48 & 16mp,Andriod 9.0,AT &T verizon,New,One Time,with Box, handfree charger`); console.log(myMobilePhone);