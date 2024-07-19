import Chat from "./chat/Chat"
import "./main.css"
// import Messages from "./messages/Messages"
export function Main1(props) {
    return(
        <div>
        This is the main1 answers: {props.number}
        <Chat/>
        {/* <Messages></Messages> */}
    </div>
    )

}
export function Main2(props) {
    const {name1,name2} = props
    return(
        <div>
        This is the main2 <span>{name1}, {name2}</span>
    </div>
    )

}