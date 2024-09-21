//spread function----------------------------------------------------------->
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Math.max(nums)----- max method doesnt accept a variable that conatins all the numbers(accepts an array itself)
//eg: Math.max(13,24,334,23443,23443234);
Math.max(...nums);

//spread with iterables-------------------------------------------------------->
const cats = ['blue', 'scout', 'rocket'];
const dogs = ['rusty', 'wyatt'];
const allPets = [...cats, ...dogs];
// console.log(allPets);
const allpet= [...cats,...dogs,'husky'];
// console.log(allpet);
//we can copy objects like shown above or create an an character array
const chararr = [...'surya'];
// console.log(chararr);

//spread as keys and values
const spreadString = { ..."HIIIIII" };
const spreadArray = { ...[11, 12, 13, 14, 15] };
// console.log(spreadArray)
// console.log(spreadString)

//rest---------------------------------------------------------------------------->
const rnums = [1, 2, 3, 4, 5];

const rsum = function(...rnums) {
    return rnums.reduce((total, rnum) => {
        return total + rnum
    });
};

// console.log(rsum(...rnums));  // Call the function with the spread operator

const winners = ['nithin', 'koushik', 'sridhar', 'surya', 'karthik'];

const wdisplay = function (gold, silver, ...everyone) {
    console.log(`Gold Medal Goes to : ${gold}`);
    console.log(`silver Medal Goes to : ${silver}`);
    console.log(`And thanks to Everyone : ${everyone}`);

}
// wdisplay(...winners);

//destructing Arrays------------------------------------------------------------>

const dscores = [12343, 12345432, 1234565, 12345, 2345, 23454];

const [gold, silver, bronze, ...rest] = dscores;

// console.log(gold);
// console.log(rest);


//destructuring objects------------------------------------------------------>
const duser = {
    email: 'asdfgfds@gmail.com',
    password: 'asdfghtdffref',
    firstName: 'asdfg',
    lastName: 'adfee',
    born: 1930,
    died: 1988,
    bio: 'agyt4efgffghjkjdtyuijhsroewsdfghjkmnbvfghjhfghjn',
    city: 'san francisco',
    state: 'claifornia'
}

const { email, lastName, firstName, city, state, bio } = duser;
console.log(email);
console.log(firstName);

//renaming the variables
const { born: birthyear } = duser;
console.log(birthyear);
