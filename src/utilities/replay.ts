export function appendStartingStage(replay: any): object {
    let newIdx = -1
    for (const stageInstance of replay.stages)
        [stageInstance.stage, newIdx] = [newIdx, stageInstance.stage]

    replay.stages.push({
        stage: newIdx,
        score: replay.score
    })
    return replay
}