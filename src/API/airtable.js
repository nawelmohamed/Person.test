import axios from "axios";


export default axios.create({
   baseURL : 'https://api.airtable.com/v0/appFOk92GJ8hGNZz9/',
   headers:{
       'Authorization': 'Bearer keykXvfeztfqnWzad'
   }
   
});