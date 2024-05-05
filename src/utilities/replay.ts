import { CONSTANTS } from "thrpy-parser"

export function appendStartingStage(replay: any): object {
    switch (replay.game) {
        case CONSTANTS.GAME.TH06.ID:
        case CONSTANTS.GAME.TH07.ID:
        case CONSTANTS.GAME.TH08.ID:
        case CONSTANTS.GAME.TH10.ID: {
            let newIdx = -1
            for (const stageInstance of replay.stages)
                [stageInstance.stage, newIdx] = [newIdx, stageInstance.stage]

            replay.stages.push({
                stage: newIdx,
                score: replay.score
            })
            break
        }
        default:
            break
    }
    return replay
}