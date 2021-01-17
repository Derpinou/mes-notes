const EcoleDirecte = require("node-ecole-directe");
const session = new EcoleDirecte.Session();
(async () => {
    const compte = await session.connexion("identifiant", "mot-de-passe");
    compte.eleves[0].fetchNotes().then((notes) => {
        const semestre = notes.periodes.find((periode) => periode.periode === '1er Semestre');
        const annee = notes.periodes.find((periode) => periode.periode === 'Année');
        //console.log(moyenneGeneraleClasse)
        let arr = []
        arr.push(semestre.ensembleMatieres.disciplines.find(x => x.id === 17))
        arr.push(semestre.ensembleMatieres.disciplines.find(x => x.id === 18))
        console.log("semestre 1")
        console.log("Professeur Principale", semestre.ensembleMatieres.nomPP)
        //console.log(arr)
        arr.forEach(y => {
            console.log(`\nDiscipline: ${y.discipline}\nMa Moyenne: ${y.moyenne}\nMoyenne de la classe: ${y.moyenneClasse}\nMoyenne min: ${y.moyenneMin}\nMoyenne Max: ${y.moyenneMax}\nRang: ${y.rang}\n`)
        })
        console.log(`\nMoyenne des 2:\nMa Moyenne: ${(parseFloat(arr[0].moyenne)+parseFloat(arr[1].moyenne))/2}\nMoyenne de la classe: ${(parseFloat(arr[0].moyenneClasse)+parseFloat(arr[1].moyenneClasse))/2}\nMoyenne min: ${(parseFloat(arr[0].moyenneMin)+parseFloat(arr[1].moyenneMin))/2}\nMoyenne Max: ${(parseFloat(arr[0].moyenneMax)+parseFloat(arr[1].moyenneMax))/2}\n`)
    })
})()