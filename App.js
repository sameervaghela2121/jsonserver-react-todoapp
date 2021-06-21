import axios from "../my-api/node_modules/axios";

axios.get("http://localhost:3006/task")
.then(res=>{console.log(res)})