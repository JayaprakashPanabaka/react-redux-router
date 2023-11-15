import { ACTIONS } from "./store"

export const increment = () => {
   return { type: ACTIONS.INCREMENT }
}

export const decrement = () => {
    return { type: ACTIONS.DECREMENT }
 }

 export const reset = () => {
    return { type: ACTIONS.RESET }
 }
