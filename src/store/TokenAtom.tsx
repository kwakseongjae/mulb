import { atom, selector } from 'recoil'
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()

// TODO: 한번 true로 세팅된 값을 동적으로 변경 가능하도록 로직 추가
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
