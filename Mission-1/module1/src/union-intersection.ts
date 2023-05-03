type NoobDevloper = {
    name:string;
};

// type JuniorDevloper = {
//     name:string;
//     expertise: string;
//     experience: number;
// }

type JuniorDevloper = NoobDevloper & {
    name:string;
    expertise: string;
    experience: number;
}

// enum Level {
//     junior='junior',
//     mid='mid',
//     senior='senior',
// }

type NextLevelDevloper = JuniorDevloper & {
    leadershipExperience: number;
    level:"junior" | "mid" | "senior";
};

const newDevloper: NoobDevloper | JuniorDevloper = {
    name: "Moznuu Mia",
    expertise: "Javascript",
    experience: 1,

}

const developer: NextLevelDevloper = {
    name: "Allen Shopon",
    expertise: "Typescript",
    experience:2,
    leadershipExperience:1,
    level:mid,
};