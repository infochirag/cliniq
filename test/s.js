/* const uuidv1 = require('uuid/v1');
const axios = require('axios')
var uuid = uuidv1()
console.log(uuid)
//https://cliniq-graphql.herokuapp.com/v1alpha1/graphql


// update medicine and 

/* var query = "mutation update_article {update_data (where: {key:{_eq:\"33e94570-16b8-11e9-ad87-11daa0bdde10\"}},_set: {prescription:"+this.prescription+",notes:"+this.notes+") {affected_rows returning { key prescription notes } } }"
*/
/* 
var query = "mutation insert_article { insert_data( objects: [ { key:\""+uuid+"\"}]) { returning { key } }}" 

axios({
    method: 'post',
    url: 'https://cliniq-graphql.herokuapp.com/v1alpha1/graphql',
    data: {
      query: query
    }
  }).then(data=>console.log(data.data.data.insert_data.returning[0].key)).catch(err=>console.error(err))
      

 */

var query="{ data(where: {key:{_eq:\""+this.code+"\"}}) {prescription}}"

console.log(query)