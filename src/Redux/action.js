import { ADDTO,DELETETO,DONETO} from "./types"




export const addingtodo=(newtodo)=>{
    return{
        type:ADDTO,
        payload:newtodo

    }
}
export const deletingtodo= (id)=>{
    return(
        type:DELETETO,
         payload:id
    )
}
 
export const doneto= (id)=>{
    return(
        type:DONETO,
        payload:id
    )
}