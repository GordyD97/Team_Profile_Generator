// class Users{
//     constructor(Name, Position, ){
//         this.Name = Name;
//         this.Position = Position;
//         this.
//     }
// getUsers(){
//     let out = "";
//     for(let i = 0; i < this.num; i++){
//         out += "Users ";
//     }
//     return out;
// }
// }


module.exports = function (title, data) {
    return (
        `
   <h1>${title}</h1>
   <main>${data}</main>
   `
    );
};