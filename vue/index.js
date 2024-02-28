const user = {
    firstName:'王1',
    lastName:'磊2',
    age:'31'
}
observer(user)
const setUserFirstName = () => {
    const firstNameDom = document.getElementById('firstName');
    firstNameDom.innerText=`姓：${user.firstName}`
}
const setUserlastName = () => {
    const firstNameDom = document.getElementById('lastName');
    firstNameDom.innerText=`名：${user.lastName}`
}
const setUserAge = () => {
    const firstNameDom = document.getElementById('age');
    firstNameDom.innerText=`年龄：${user.age}`
}
autoFunc(setUserAge)
autoFunc(setUserlastName)
autoFunc(setUserFirstName)

user.firstName = 'wa11'
user.firstName = '22'