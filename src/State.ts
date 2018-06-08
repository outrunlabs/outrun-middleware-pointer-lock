import { InputActions } from "./Actions"
import { InternalActions } from "./InternalActions"

export interface PointerLockState {
    sensitivity: number
    isLocked: boolean
}

export const DefaultPointerLockState: PointerLockState = {
    sensitivity: 0.002,
    isLocked: false,
}

export const reducer = (
    state: PointerLockState = DefaultPointerLockState,
    actions: InternalActions | InputActions,
) => {
    switch (actions.type) {
        case "@pointerLock/LOCK_STATUS_CHANGE":
            return {
                ...state,
                isLocked: actions.isLocked,
            }
        case "@pointerLock/SET_SENSITIVITY":
            return {
                ...state,
                sensitivity: actions.sensitivity,
            }
        default:
            return state
    }
}
