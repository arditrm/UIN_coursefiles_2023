

const resources = [
    {
        category: "HTML",
        text: "HTML står for HyperText Markup Language, og er et strukturspråk som brukes til å bygge opp struktureter nettsider og utvlike nettsidene  .",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/html/"
            },
            {
                title: "HTML Living standard",
                url: "https://html.spec.whatwg.org/multipage/"
            },
            {
                title: "HTML.com Tutorials",
                url: "https://html.com/"
            },
        ]
    },
    {
        category: "CSS",
        text: "CSS står for Cascading StyleSheets, og brukes for å sette struktur på html filer.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/css/"
            },
            {
                title: "W3C HTML & CSS Standards",
                url: "https://www.w3.org/standards/webdesign/htmlcss.html"
            },
            {
                title: "W3C CSS Validator",
                url: "https://jigsaw.w3.org/css-validator/"
            },
            {
                title: "CSS Tricks",
                url: "https://css-tricks.com/"
            },
        ]
    },
    {
        category: "JavaScript",
        text: "JavaScript er et scriptspråk basert på EcmaScript. JavaScript slått sammen med hmtl og css brukes til å gjenomføre større byggearbied på nettsider og modrne nettlesere .",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/js/"
            },
            {
                title: "MDN Web Docs",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            },
            {
                title: "How to read JavaScript Documentation",
                url: "https://www.youtube.com/watch?v=O3iR-CIufKM"
            },
        ]
    },
    {
        category: "React",
        text: "React er et rammeverk bygget i JavaScript. React bruker komponenter og dette gjør den får å lage en levende frontend.",
        sources: [
            {
                title: "React documentation",
                url: "https://reactjs.org/docs/getting-started.html"
            },
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/REACT/DEFAULT.ASP"
            },
            {
                title: "How to read JavaScript Documentation",
                url: "https://www.youtube.com/watch?v=O3iR-CIufKM"
            },
        ]
    },
    {
        category: "Sanity and headless CMS",
        text: "Sanity er et headless CMS som står for innholdsadministrasjon. Innhold hentes inn i applikasjoner via GROQ-spørringer.",
        sources: [
            {
                title: "Sanity documentation",
                url: "https://www.sanity.io/docs"
            },
            {
                title: "OnCrawl: a beginners guide to headless CMS",
                url: "https://www.oncrawl.com/technical-seo/beginners-guide-headless-cms/"
            },
            {
                title: "Section.io: Getting started with Sanity CMS",
                url: "https://www.section.io/engineering-education/getting-started-with-sanity-cms/"
            },
        ]
    },
]
let listHTML = ""
function addHTML() {
listHTML = `<h2>${resources[0].category}</h2>`
listHTML += `<p>${resources[0].text}</p><ul>`
resources[0].sources.map(prod => listHTML += `<li><a href ="${prod.url}">${prod.title}</a></li>
`)
listHTML += '</ul>'
document.querySelector("#bodyview").innerHTML = listHTML;
}

function addToBody() {
listHTML = `<h2>${resources[1].category}</h2>`
listHTML += `<p>${resources[1].text}</p><ul>`
resources[0].sources.map(prod => listHTML += `<li><a href ="${prod.url}">${prod.title}</a></li>
`)
listHTML += '</ul>'
document.querySelector("#bodyview").innerHTML = listHTML;
}
function ToJc() {
    listHTML = `<h2>${resources[2].category}</h2>`
    listHTML += `<p>${resources[2].text}</p><ul>`
    resources[0].sources.map(prod => listHTML += `<li><a href ="${prod.url}">${prod.title}</a></li>
    `)
    listHTML += '</ul>'
    document.querySelector("#bodyview").innerHTML = listHTML;
    }
    function ToRt() {
        listHTML = `<h2>${resources[3].category}</h2>`
        listHTML += `<p>${resources[3].text}</p><ul>`
        resources[0].sources.map(prod => listHTML += `<li><a href ="${prod.url}">${prod.title}</a></li>
        `)
        listHTML += '</ul>'
        document.querySelector("#bodyview").innerHTML = listHTML;
        }

        function ToShc() {
            listHTML = `<h2>${resources[4].category}</h2>`
            listHTML += `<p>${resources[4].text}</p><ul>`
            resources[0].sources.map(prod => listHTML += `<li><a href ="${prod.url}">${prod.title}</a></li>
            `)
            listHTML += '</ul>'
            document.querySelector("#bodyview").innerHTML = listHTML;
            }