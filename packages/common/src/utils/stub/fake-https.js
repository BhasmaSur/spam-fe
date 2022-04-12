import { data } from "@spammetwice/common"
async function fakeHttpRequests(){
    await sleep(5000)
    return data
    
}
const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }

export default fakeHttpRequests;