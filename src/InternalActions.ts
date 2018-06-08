export type InternalActions = {
    type: "@pointerLock/LOCK_STATUS_CHANGE"
    isLocked: boolean
}

export namespace InternalActionCreators {
    export const lockStatusChange = (isLocked: boolean) => ({
        type: "@pointerLock/LOCK_STATUS_CHANGE",
        isLocked,
    })
}
