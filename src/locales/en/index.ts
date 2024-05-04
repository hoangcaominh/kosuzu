import spells from "./spells"

export default {
    messages: {
        table: {
            labels: {
                game: "Game",
                difficulty: "Difficulty",
                shot: "Shottype",
                route: "Route",
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
                    shot: [ "ReimuA", "ReimuB", "MarisaA", "MarisaB" ],
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
                th09: {
                    title: "Phantasmagoria of Flower View",
                    shot: [
                        "Reimu",
                        "Marisa",
                        "Sakuya",
                        "Youmu",
                        "Reisen",
                        "Cirno",
                        "Lyrica",
                        "Mystia",
                        "Tewi",
                        "Yuuka",
                        "Aya",
                        "Medicine",
                        "Komachi",
                        "Eiki",
                        "Merlin",
                        "Lunasa"
                    ]
                },
                th10: {
                    title: "Mountain of Faith",
                    shot: [ "Reimu", "Marisa" ],
                    subshot: [ "A", "B", "C" ]
                },
                th11: {
                    title: "Subterranean Animism",
                    shot: [ "Reimu", "Marisa" ],
                    subshot: [ "A", "B", "C" ]
                },
                th12: {
                    title: "Undefined Fantastic Object",
                    shot: [ "Reimu", "Marisa", "Sanae" ],
                    subshot: [ "A", "B" ]
                },
                th128: {
                    title: "Great Fairy Wars",
                    route: [
                        "A-1",
                        "A-2",
                        "B-1",
                        "B-2",
                        "C-1",
                        "C-2",
                        "Ex"
                    ]
                },
                th13: {
                    title: "Ten Desires",
                    shot: [ "Reimu", "Marisa", "Sanae", "Youmu" ]
                },
                th14: {
                    title: "Double Dealing Character",
                    shot: [ "Reimu", "Marisa", "Sakuya" ],
                    subshot: [ "A", "B" ]
                },
                th15: {
                    title: "Legacy of Lunatic Kingdom",
                    shot: [ "Reimu", "Marisa", "Sanae", "Reisen" ]
                },
                th16: {
                    title: "Hidden Star in Four Seasons",
                    shot: [ "Reimu", "Cirno", "Aya", "Marisa" ],
                    season: [ "Spring", "Summer", "Autumn", "Winter" ]
                },
                th17: {
                    title: "Wily Beast and Weakest Creature",
                    shot: [ "Reimu", "Marisa", "Youmu" ],
                    subshot: [ "Wolf", "Otter", "Eagle" ]
                },
                th18: {
                    title: "Unconnected Marketeers",
                    shot: [ "Reimu", "Marisa", "Sakuya", "Sanae" ]
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