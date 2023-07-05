


export const getReadableDate = (date:Date)=>{
const d = new Date(date)
const year = d.getFullYear()
const month = d.getMonth()
const day = d.getDate()
const hour = d.getHours()
const min = d.getMinutes()

return `${day}/${month}/${year}, ${hour}:${min}`

}