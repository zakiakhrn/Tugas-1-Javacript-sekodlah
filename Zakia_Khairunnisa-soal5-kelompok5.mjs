import prompts from "prompts"

const questions = [
    {
        type: 'number',
        name: 'angka1',
        message: 'Masukkan angka 1',
    },
    {
        type: 'number',
        name: 'angka2',
        message: 'Masukkan angka 2',
    }, 
    {
        type: 'number',
        name: 'angka3',
        message: 'Masukkan angka 3',
    }, 
    {
        type: 'number',
        name: 'angka4',
        message: 'Masukkan angka 4',
    }, 
    {
        type: 'number',
        name: 'angka5',
        message: 'Masukkan angka 5',
    },
    ];

    const { angka1, angka2, angka3, angka4, angka5 } = await prompts(questions);

const jumlah = angka1 + angka2 + angka3 + angka4 + angka5;
const rataRata = jumlah / 5;
const max = Math.max(angka1, angka2, angka3, angka4, angka5);
const min = Math.min(angka1, angka2, angka3, angka4, angka5);

console.log(`Jumlah: ${jumlah}`);
console.log(`Rata-rata: ${rataRata}`);
console.log(`Nilai maksimum: ${max}`);
console.log(`Nilai minimum: ${min}`);