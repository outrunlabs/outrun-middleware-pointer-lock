import { Game } from "outrun-game-core"

import { DefaultPointerLockState, reducer } from "./State"
import { InternalActionCreators } from "./InternalActions"

export * from "./Actions"

export const activate = (game: Game): void => {
    const onPointerLockChange = () => {
        game.dispatch(InternalActionCreators.lockStatusChange(!!document.pointerLockElement))
    }

    document.addEventListener("pointerlockchange", onPointerLockChange)

    const pointerLockError = () => alert("error setting pointer lock")

    document.addEventListener("pointerlockerror", pointerLockError, false)
    document.addEventListener("mozpointerlockerror", pointerLockError, false)
    document.addEventListener("webkitpointerlockerror", pointerLockError, false)

    const boundModel = game.createModel("@pointerLock", DefaultPointerLockState, reducer)

    const updateMousePosition = (mouseEvent: MouseEvent) => {
        if (game && boundModel && (boundModel.selector(game.getWorld()) as any).isLocked) {
            game.dispatch({
                type: "@pointerLock/MOUSE_MOVE",
                deltaX: mouseEvent.movementX * 0.002,
                deltaY: mouseEvent.movementY * 0.002,
            })
        }
    }

    game.onAction.subscribe(action => {
        if (action.type === "@pointerLock/LOCK_POINTER") {
            // document.body.requestPointerLock()
            // document.body.style.cursor = "hidden"
            // document.addEventListener("mousemove", updateMousePosition, false)
        } else if (action.type === "@pointerLock/UNLOCK_POINTER") {
            document.exitPointerLock()
            document.removeEventListener("mousemove", updateMousePosition, false)
        }
    })

    document.body.addEventListener("click", () => {
        document.body.requestPointerLock()
        document.body.style.cursor = "hidden"
        document.addEventListener("mousemove", updateMousePosition, false)
    })
}
