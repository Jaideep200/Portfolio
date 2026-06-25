const skills = [
    "Python","Linux","AWS","Docker",
    "Git","GitHub","Flask","AI",
    "ML","NLP","SQL","Cloud",
    "EC2","S3","IAM","TensorFlow",
    "Pandas","NumPy","FAISS","LangChain",
    "HTML","CSS","JavaScript","API",
    "Ubuntu","Networking","Cybersecurity",
    "RAG","LLM","OpenAI","Data",
    "Analytics","Streamlit","Jupyter",
    "DevOps","CLI","Bash","JSON"
];


const preloader =
document.getElementById("preloader");

for(let i = 0; i < 70; i++){

    const item =
    document.createElement("div");

    item.classList.add("falling-icon");

    item.textContent =
    skills[
        Math.floor(
            Math.random()*skills.length
        )
    ];

    item.style.left =
    Math.random()*100 + "%";

    item.style.animationDelay =
    Math.random()*3 + "s";

    item.style.animationDuration =
    (2 + Math.random()*4) + "s";

    item.style.fontSize =
    (0.8 + Math.random()*0.7) + "rem";

    preloader.appendChild(item);
}
window.addEventListener("load", () => {

    document.querySelector(".hero-content")
        .animate(
            [
                {
                    opacity:0,
                    transform:"translateY(40px)"
                },
                {
                    opacity:1,
                    transform:"translateY(0)"
                }
            ],
            {
                duration:1000,
                easing:"ease-out",
                fill:"forwards"
            }
        );

});
const observer = new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},
{
threshold:0.15
}
);

document
.querySelectorAll("section")
.forEach(section=>{

section.classList.add("hidden-section");

observer.observe(section);

});
window.addEventListener("load", () => {

    setTimeout(() => {

        document.getElementById("preloader").style.opacity = "0";
        document.getElementById("preloader").style.transition = "0.8s";

        document.getElementById("portfolio-content").style.opacity = "1";
        document.getElementById("portfolio-content").style.transition = "1s";

        setTimeout(() => {
            document.getElementById("preloader").remove();
        }, 800);

    }, 3500);

});
const techWords = [
    "Python",
    "AWS",
    "Linux",
    "Docker",
    "Git",
    "AI",
    "ML",
    "Cloud",
    "NLP",
    "SQL",
    "Flask",
    "LangChain"
];

const bg =
document.getElementById("tech-bg");

for(let i=0;i<30;i++){

    const item =
    document.createElement("div");

    item.className =
    "tech-item";

    item.textContent =
    techWords[
        Math.floor(
            Math.random() *
            techWords.length
        )
    ];

    item.style.left =
    Math.random()*100 + "%";

    item.style.top =
    Math.random()*100 + "%";

    item.style.fontSize =
    (0.8 + Math.random()*1.2)
    + "rem";

    item.style.animationDuration =
    (20 + Math.random()*20)
    + "s";

    bg.appendChild(item);
}