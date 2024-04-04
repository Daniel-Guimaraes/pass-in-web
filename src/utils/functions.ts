import dayjs from 'dayjs'
import 'dayjs/locale/pt-br'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)
dayjs.locale('pt-br')

export const dateFormatter = (date: Date | string) => {
  return dayjs().to(date) // ex: há 30 dias, há 1 dia...
}
