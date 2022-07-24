import { atom, selector } from 'recoil';

export const textState = atom({
    key: 'textLengthState',
    default: '',
});

export const textLengthState = selector({
    key: 'textLengthState',
    get: ({ get }) => {
        const text = get(textState);
        const textLength = text.lenght;
        const isText = textLength ? true : false;
        return { textLength };
    },
});
