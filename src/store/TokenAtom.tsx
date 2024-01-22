import { atom, selector } from 'recoil'
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()

export const TokenAtom = atom({
  key: 'TokenAtom',
  default: false,
  effects_UNSTABLE: [persistAtom],
})

// eslint-disable-next-line react-refresh/only-export-components
export const isLoginSelector = selector({
  key: 'isLoginSelector',
  get: ({ get }) => get(TokenAtom),
})
