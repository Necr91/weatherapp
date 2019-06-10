export const LOADING_SUCCES = 'LOADING_SUCCES';
export const TOWN_SELECT = 'TOWN_SELECT';

export function townSelect(id) {
    return {
        type: TOWN_SELECT,
        id
    };
}