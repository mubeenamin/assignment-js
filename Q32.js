// check the username must be unique

let current_user = ['nafees', 'fawad', 'mohsin', 'akram'];
let new_user = ['aslam', 'nafees', 'mohsin', 'mubeen'];
let match = [];
for (i = 0; i < current_user.length; i++) {
    for (b = 0; b < new_user.length; b++) {
        if (current_user[i] == new_user[b]) {
            match.push(current_user[i])
        }

    }
}
console.log(match, 'chose a different user names');