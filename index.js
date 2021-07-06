const { program } = require('commander');
program.version('1.0.1').description('Node password Generator');



program
.option('-l,--length <number>','set the length of your password','8')
.option('-s,--save','Save password in password.txt file')
.option('-nn,--no-numbers','no numbers will be in your password')
.option('-ns,--no-symbols','no symbols will be in your password')


.parse();

const {length,numbers,symbols,save}= program.opts()
// generate password fn
const pwdChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const pwdnumbers = '0123456789';
const pwdspecials = '!@#$%^&*()_+{}:"<>?\|[];\',./`~';
const generatefn=(length,number,symbols)=>{
    if(numbers==true && symbols==true){


    }

}