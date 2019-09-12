const user = {
    name: 'Mango',
    age: 20,
    hobby: 'html',
    premium: true,
};

user.mood = 'happy';
user.hobby = 'javascript';
user.premium = false;

const userArr = Object.entries(user);

for (const someItem of userArr) {
    const userKey = someItem[0];
    const userVal = someItem[1];
    console.log(`${userKey}:${userVal}`);
}