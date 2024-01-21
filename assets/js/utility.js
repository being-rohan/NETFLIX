


const cl = console.log;

const baseurl = `https://api.themoviedb.org/3`

const apikey = `4d924971c8663bc1db4a5859d08abbac`





const makeapicall = async (apiurl, methodname, msgbody = null) => {
    let res = await fetch(apiurl, {
        body: msgbody,
        method: methodname
    })
    return res.json()

}
