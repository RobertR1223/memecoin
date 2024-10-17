export type TLink = {
  name: string
  link: string
  external?: boolean
  authenticated?: boolean
  menu?: (Omit<TLink, 'menu'> & { description?: string })[]
}