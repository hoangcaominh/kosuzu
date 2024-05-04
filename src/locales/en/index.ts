import spells from "./spells"

export default {
    messages: {
        table: {
            labels: {
                game: "Game",
                difficulty: "Difficulty",
                shot: "Shottype",
                score: "Score",
                date: "Date",
                name: "Name",
                slowdown: "Slowdown",
                type: "Replay type",
                spell_card_id: "Spell card id",
                stages: "Stages",
            },
            values: {
                th06: {
                    title: "The Embodiment of Scarlet Devil",
                },
                th07: {
                    title: "Perfect Cherry Blossom",
                },
                th08: {
                    title: "Imperishable Night",
                    shot: [
                        "Border Team",
                        "Magic Team",
                        "Scarlet Team",
                        "Ghost Team",
                        "Solo Reimu",
                        "Solo Yukari",
                        "Solo Marisa",
                        "Solo Alice",
                        "Solo Sakuya",
                        "Solo Remilia",
                        "Solo Youmu",
                        "Solo Yuyuko",
                    ],
                    spell_card_id: spells
                },
                difficulty: [
                    "Easy",
                    "Normal",
                    "Hard",
                    "Lunatic",
                    "Extra",
                    "Phantasm",
                ],
                type: [
                    "Full game",
                    "Stage practice",
                    "Spell practice",
                    "Versus",
                ]
            },
        },
    },
}