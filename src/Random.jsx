import { words } from "./words";
export default function Getrandom(){
    const randomIndex = Math.floor(Math.random()*words.length)
    return words[randomIndex]
}