import { subDays, format } from 'date-fns';

const date = new Date(1998, 4, 24);
const rta = subDays(date, 30); // resta dias, wena libreria eh
const str = format (rta, 'dd/MM/yyyy')
console.log(str)
