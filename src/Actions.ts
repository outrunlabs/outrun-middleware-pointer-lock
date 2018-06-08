export type InputActions =
    | {
          type: "@pointerLock/LOCK_POINTER"
      }
    | {
          type: "@pointerLock/UNLOCK_POINTER"
      }
    | {
          type: "@pointerLock/SET_SENSITIVITY"
          sensitivity: number
      }

export const MouseMoveActionType = "@pointerLock/MOUSE_MOVE"

export type OutputActions = {
    type: "@pointerLock/MOUSE_MOVE"
    deltaX: number
    deltaY: number
}

export namespace ActionCreators {
    export const lockPointer = () => ({ type: "@pointerLock/LOCK_POINTER" })

    export const setSensitivity = (sensitivity: number) => ({
        type: "@pointerLock/SET_SENSITIVITY",
        sensitivity,
    })
}
