const fetch = require('node-fetch');

// module.exports = {
//     clients: [
//         {
//             "id": "1",
//             "name": "Audry Topsy",
//             "title": "Owner",
//             "company": "Topsy Turvy Cake Designs",
//             "profile_photo": "30825.jpg"
//         },
//         {
//             "id": "2",
//             "name": "Dahlia Landon",
//             "title": "CEO",
//             "company": "Landon Hotel",
//             "profile_photo": "15436.jpg",
//         }
//     ]
// }

module.exports = async function() {
    return fetch('https://trainingxyz.com/api/users/all')
        .then(res => res.json())
        .then(json => {
            return {
                clients: json
            }
        });
}