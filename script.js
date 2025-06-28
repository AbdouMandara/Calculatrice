const boutons = [...document.querySelectorAll(".btn")] //pour récupérer tous mes btns sous forme de Array car il y a plus de méthodes dispo sur array qu'on va leur appliquer or par défraut ils sont sur forme de node on réalise celà avec le spray operator
const liste_des_key_code = boutons.map(btn => btn.dataset.key) // pour récuperer les key codes (en quelque sorte les id) de chaque btn ou touuche de clavier reconnus par le DOM on va recuperer ces key codes en accédant au valeur des data-key mis dans le HTML
let ecran = document.querySelector(".ecran")

document.addEventListener("keydown", (ev)=>{
    const valeur = ev.key
    calcul(valeur)
})

document.addEventListener("click", (ev)=>{
    const valeur = ev.target.dataset.key
    calcul(valeur)
})

/**
 * Cette fonction sert à recupérer les valeurs entrées à partir du clavier ou celles choisient avec la souris 
 *Desc 1: la fonction l'argument et regarde si la clé de l'argument qu'elle récupère fait partie de la liste des clés qu'on a qui correspond au touches sur lesquelles on doit cliquer (ex : =, +, 8 etc...)
 *Desc 2: Ensuite si la touche sur laquelle on a cliqué ou selectionné avec la souris est différent du bouton "efrfacer" et "Enter" alors on regarde l'index de cette touche dans la liste des key code quand on retrouve sa clé qui renvoie à l'indice de cette touche dans le tableau des boutons il me donne la valeur et on l'ajoute/affiche à l'écran
*Desc 3 : Si on clique sur "=" ou "Enter" alors on utilse la fonction eval () pour calculer le contenu de ce qui est affiché à l'écran alors que c'est une string çà va parser celà en "number" et retourné le total à l'écran
 * @param {number} param 
 */
const  calcul = (param) =>{
    if (liste_des_key_code.includes(param)) {
        switch (param) {
            case "Backspace":
                ecran.textContent -= btn_appuye.outerHTML
                // ecran.textContent=""
                break;
            case "=":
                const  resultat_du_contenu = eval(ecran.textContent)
                ecran.textContent=resultat_du_contenu
                break;
        
            default:
                let index_de_key = liste_des_key_code.indexOf(param)
                let btn_appuye = boutons[index_de_key]
                ecran.textContent += btn_appuye.innerHTML
        }
    }
}
