const reducer=(state=0,action)=>{
    console.log(state,action,"testtttttttt");
    switch(action.type){
      case "inc":{return state+1}
      break
      case "dec":{return state-1}
      break
      case "set":{return 0}
      break
      default:return state
     
    }
    }

export default reducer 