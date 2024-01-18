import { atom, selector } from 'recoil'

export const TokenAtom = atom({
  key: 'TokenAtom',
  default: '',
})

// eslint-disable-next-line react-refresh/only-export-components
export const isLoginSelector = selector({
  key: 'isLoginSelector',
  get: ({ get }) => !!get(TokenAtom),
})
