import prompts from "prompts";

const questions = [
{
    type: 'text',
    name: 'nama',
    message: 'Siapa nama anda',
},
{
    type: 'number',
    name: 'usia',
    message: 'Berapa usia anda',
}, 
]

const response = await prompts (questions);

console.log(`Halo, ${response.nama}! Usiamu saat ini ${response.usia} tahun.`);