const beers = {
    id: "beers",
    logo: "Best Beers",
    button: "details",
    cards: [
        {
            title: "Mango Bay",
            sub: "Mad Scientist Beer",
            text: "Pale Ale - American"
        },
        {
            title: "Távoli Galaxis",
            sub: "Rothbeer Brewery",
            text: "IPA - American"
        },
        {
            title: "Flying Rabbit AIPA",
            sub: "MONYO Brewing Co.",
            text: "IPA - American"
        },
        {
            title: "Liquid Cocaine",
            sub: "Mad Scientist Beer",
            text: "IPA - Imperial"
        },
        {
            title: "Organic Chocolate Stout",
            sub: "Samuel Smith Old Brewery",
            text: "Stout - English"
        },
        {
            title: "Bracia",
            sub: "Thornbridge Brewery",
            text: "Strong Ale - English"
        },
        {
            title: "Oatmeal Stout",
            sub: "Samuel Smith Old Brewery",
            text: "Stout - Oatmeal"
        },
        {
            title: "Black Tokyo Horizon",
            sub: "BrewDog",
            text: "Stout - American Imperial"
        },
        {
            title: "Vintage Ale",
            sub: "Fuller's",
            text: "Old Ale"
        },
        {
            title: "All the Leaves are Brown",
            sub: "Tempest Brewing Company",
            text: "Brown Ale - American"
        },
    ]
}

const cards = beers.cards

const main = document.querySelector("main")

for (let i = 0; i < cards.length; i++) {
    main.innerHTML +=
        `
        <section class="card">
            <div class="num">${i + 1}</div>
            <h2>${cards[i].title}</h2>
            <p>${cards[i].sub}</p>
            <b>${cards[i].text}</b>
            <button>
                details
                <span class="material-symbols-outlined"> arrow_forward </span>
            </button>
        </section>
        `
}