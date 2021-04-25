module.exports = function (remotePath, name) {
  return `promise new Promise((res, rej) => {
    async function INTERNAL_LOAD() {
      return {
        init: async () => {},
        get: async () => () => name => console.log('hello workd'),
      }
    }
    const mod = INTERNAL_LOAD;
    mod.default.then(res, rej);
  })`
}

// module.exports = function (remotePath, name) {
//   return `promise new Promise(res => {
//           let remote
//           const remotePath = "${remotePath}"
//           try {
//           remote = require(remotePath)['${name}']
//           console.log('remotePath', remotePath,remote,name)
//           } catch (e) {
//           delete require.cache[remotePath]
//           remote = require(remotePath)['${name}']
//           }

//           if(!remote || !remote.get) {
//             return new Promise(function(delayResolve){
//               var interval = setInterval(function(){
//                  delete require.cache[remotePath]
//                  remote = require(remotePath);
//                 if(require(remotePath)) {
//                   delayResolve(require(remotePath)['${name}']);
//                   clearInterval(interval);
//                 }
//               }, 100)
//             }).then(function(){
//               setTimeout(function(){res(remote)},0)
//             })
//           }

//           const proxy = {get:(request)=> remote.get(request),init:(arg)=>{try {return remote.init(arg)} catch(e){console.log('remote container already initialized')}}}
//           res(proxy)
//           })`
// }
