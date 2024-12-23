import { ACCESS_TOKEN } from '../constants'

export const getAccessToken = () => {
  const accessToken = localStorage.getItem(ACCESS_TOKEN)
  return accessToken
}

export const cn = (...args: ClassValue[]) => {
  return twMerge(clsx(args))
}