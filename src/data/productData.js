import manInBlackTshirt from "../assets/products/men/man-in-black-tshirt.webp";
import manInPinkTshirt from "../assets/products/men/man-in-pink-tshirt.webp";
import manInPlainWhiteTee from "../assets/products/men/man-in-plainwhite-tee.webp";
import manInRedShirt from "../assets/products/men/man-in-redshirt.webp";
import manInWhiteTshirt from "../assets/products/men/man-in-whitetshirt.webp";
import womanInBlackTshirt from "../assets/products/women/woman-in-blacktshirt.webp";
import womanInMaroonBodyconTop from "../assets/products/women/woman-in-maroonbodycon-top.webp";
import womanInPinkShirt from "../assets/products/women/woman-in-pinkshirt.webp";
import womanInRedShirt from "../assets/products/women/woman-in-redshirt.webp";
import womanInWhiteTshirt from "../assets/products/women/woman-in-whiteshirt.webp";

export const products = [
    {
        id: 1,
        image: manInBlackTshirt,
        category: "MEN",
        title: "Oxidian Shirt",
        price: 10_000,
        colorAvailable: ["black", "pink", "red", "white"],
        size: ["XS", "S", "M", "L"]
    },
    {
         id: 2,
        image: womanInBlackTshirt,
        category: "WOMEN",
        title: "Serena T-Shirt",
        price: 10_000,  
        colorAvailable: ["black", "pink", "white"],
        size: ["XS", "S", "M", "L"]
    },
    {
        id: 3,
        image: manInPlainWhiteTee,
        category: "MEN",
        title: "Simple Slawn Tee",
        price: 8_000,
        colorAvailable: ["white", "pink"],
        size: ["XS", "S", "M", "L"]
    },
    {
        id: 4,
        image: womanInPinkShirt,
        category: "WOMEN",
        title: "Lilia Shirt",
        price: 12_000,
        colorAvailable: ["pink", "white"],
        size: ["XS", "S", "M", "L"]
    },
    {
        id: 5,
        image: manInWhiteTshirt,
        category: "MEN",
        title: "Zaron Shirt",
        price: 10_000,
        colorAvailable: ["white", "blue"],
        size: ["XS", "S", "M", "L"]
    },
    {
        id: 6,
        image: manInPinkTshirt,
        category: "MEN",
        title: "Lily Shirt",
        price: 12_000,
        colorAvailable: ["pink", "red", "white"],
        size: ["XS", "S", "M", "L"]
       
    },
    {
        id: 7,
        image: womanInMaroonBodyconTop,
        category: "WOMEN",
        title: "Rhelia Top",
        price: 12_000,
        colorAvailable: ["maroon", "black", "white"],
        size: ["XS", "S", "M", "L"]
    },
    {
        id: 8,
        image: manInRedShirt,
        category: "MEN",
        title: "Slayer Shirt",
        price: 15_000,
        colorAvailable: ["red", "black"],
        size: ["XS", "S", "M", "L"]
    },
    {
        id: 9,
        image: womanInRedShirt,
        category: "WOMEN",
        title: "Rhea Shirt",
        price: 15_000,
        colorAvailable: ["red", "black"],
        size: ["XS", "S", "M", "L"]
    },
    {
        id: 10,
        image: womanInWhiteTshirt,
        category: "WOMEN",
        title: "Zara Shirt",
        price: 10_000,
        colorAvailable: ["white", "black"],
        size: ["XS", "S", "M", "L"]
    }

]   