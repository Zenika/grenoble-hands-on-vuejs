import { add, format, parse, setMinutes } from 'date-fns'

export const displayHour = (time) => {
  return format(setMinutes(add(new Date(), { hours: time + 1 - 3 }), 0), 'dd/MM/yyyy HH:mm')
}

export const displayDate = (date) => {
  return format(parse(date, 'yyyyMMdd', new Date()), 'dd/MM/yyyy')
}
