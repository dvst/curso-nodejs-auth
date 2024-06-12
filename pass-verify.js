const bcrypt = require('bcrypt');

async function verifyPassword() {
    const myPassword = 'admin 123 .202';
    const hash = '$2b$10$WZUbPyrhGIhUobE5ri1rO.20BbS2S7Fyv/yu3sqEgIGYowVnaAB6K';
    const isMatch = await bcrypt.compare(myPassword, hash);
    console.log(isMatch);
}

verifyPassword();