let users = [
    {
        id: 1,
        usernames: 'Sarvar ',
        userSurname: 'Rustambekov',
        age: 14,
        group: 'F2-2495',
        teacherName: 'Emirhan Ertan',
        password: '12345',
        ligin: '12345',
        coin: 20,
        quvvat: 2380,
        rank: 'bot'
    },
    {
        id: 2,
        usernames: 'Yahiyo ',
        userSurname: 'Nosiraliev',
        age: 15,
        group: 'F2-2495',
        teacherName: 'Emirhan Ertan',
        password: '12345',
        ligin: '12345',
        coin: 2023,
        quvvat: 230,
        rank: '-bot'
    },
    {
        id: 3,
        usernames: 'Oybe ',
        userSurname: 'Abrorov',
        age: 16,
        group: 'F2-2495',
        teacherName: 'Emirhan Ertan',
        password: '12345',
        ligin: '12345',
        coin: 0,
        quvvat: 200,
        rank: '+bot'
    },
    {
        id: 4,
        usernames: 'Yusuf',
        userSurname: 'Pamidor',
        age: 11,
        group: 'F2-2495',
        teacherName: 'Emirhan Ertan',
        password: '12345',
        ligin: '12345',
        coin: 2000,
        quvvat: 2,
        rank: 'superbot'
    },
    {
        id: 5,
        usernames: 'Azizbek',
        userSurname: 'Jonkaev',
        age: 69,
        group: 'F2-2495',
        teacherName: 'Emirhan Ertan',
        password: 789989771,
        ligin: 8977000255,
        coin: 69,
        quvvat: 96,
        rank: 'transbot'
    },
    {
        id: 6,
        usernames: 'Asxad',
        userSurname: 'Tamaev',
        age: 25,
        group: 'F2-2495',
        teacherName: 'Emirhan Ertan',
        password: 6969212,
        ligin: 785795,
        coin: 'fitfilion',
        quvvat: 5,
        rank: 'MegaBot'
    },
    {
        id: 7,
        usernames: 'Umka',
        userSurname: 'Zumka',
        age: 1,
        group: 'F2-2495',
        teacherName: 'Emirhan Ertan',
        password: '12345',
        ligin: '12345',
        coin: 0,
        quvvat: 100,
        rank: 'ZumkaBot'
    },
    {
        id: 8,
        usernames: 'Kama',
        userSurname: 'lamavich',
        age: 15,
        group: 'F2-2495',
        teacherName: 'Emirhan Ertan',
        password: '12345',
        ligin: '12345',
        coin: 510,
        quvvat: 0,
        rank: 'JingaleBot'
    },
    {
        id: 9,
        usernames: 'Jaska',
        userSurname: 'Nigaravich',
        age: 55,
        group: 'F2-2495',
        teacherName: 'Emirhan Ertan',
        password: 99301,
        ligin: 42354,
        coin: -1350,
        quvvat: -100,
        rank: 'GigaBot'
    },
    {
        id: 10,
        usernames: 'SHXSH',
        userSurname: 'SHXSH',
        age: 55,
        group: 'F2-2495',
        teacherName: 'Emirhan Ertan',
        password: 996989898,
        ligin: 7778877,
        coin: 2200,
        quvvat: 10,
        rank: 'Old BOT'
    },
    {
        id: 11,
        usernames: 'OtashBT',
        userSurname: 'chatGPT',
        age: 55,
        group: 'F2-2495',
        teacherName: 'Emirhan Ertan',
        password: 5252155,
        ligin: 996978996,
        coin: 100,
        quvvat: 0,
        rank: 'CHat Bot'
    },
    {
        id: 12,
        usernames: 'ChocoPay',
        userSurname: 'SinChoPay',
        age: 99,
        group: 'F2-2495',
        teacherName: 'Emirhan Ertan',
        password: 1235123,
        ligin: 12341243,
        coin: 100,
        quvvat: 0,
        rank: 'vonka Bot'
    },

    {
        id: 14,
        usernames: 'Abu',
        userSurname: 'Uba',
        age: 0,
        group: 'F2-2495',
        teacherName: 'Emirhan Ertan',
        password: 123341,
        ligin: 103043,
        coin: 1,
        quvvat: 0,
        rank: 'abu Bot'
    },
    {
        id: 14,
        usernames: 'EMir',
        userSurname: 'Senyor',
        age: 1000,
        group: 'F2-2495',
        teacherName: 'Students',
        password: 1233,
        ligin: 33333,
        coin: 1158,
        quvvat: 0,
        rank: 'CHeburashka bot'
    },
    {
        id: 15,
        usernames: 'Yahiyo',
        userSurname: 'Xoshimov ',
        age: 69,
        group: 'F2-2495',
        teacherName: 'Emirhan',
        password: 124225,
        ligin: 777885,
        coin: 1158,
        quvvat: 0,
        rank: 'TUN TUN TUN TUN SAHUR'
    },
]

let idmodme = document.querySelector('#ModmeId')
let pasword = document.querySelector('#pas')
let submit = document.querySelector('.tasdiqlash')

submit.addEventListener('click', () => {
    let newNumber = idmodme.value
    let newpasword = pasword.value
    let result = users.find((e) => Number(newNumber) === e.password && Number(newpasword) === e.ligin)

    if (result) {
        let setItem = localStorage.setItem('student', JSON.stringify(result))
        window.location.href = './about.html'
        console.log(result);

    } else {
        alert('login yoki parol xato')
        idmodme.value = ' '
        pasword.value = ' '
    }



})
