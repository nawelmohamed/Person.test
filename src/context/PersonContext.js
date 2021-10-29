import CreateDataContext from "./CreateDataContext";
import airtable from "../API/airtable";



const personReducer = (state,action)=> {
   switch (action.type){
       case "get_persons":
           return action.payload;
   
       default:
           return state ;
    }
};

const getPersons = dispatch => {
    return async ()=> {
        const response= await airtable.get('/person')
        dispatch({type: "get_persons", payload: response.data["records"]})
    }
}

export const {Context, Provider}= CreateDataContext(
    personReducer, 
    {getPersons},
    []
    );
