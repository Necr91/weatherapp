export const LOADING_SUCCES = 'LOADING_SUCCES';
export const TOWN_SELECT = 'TOWN_SELECT';

export function townSelect() {
    return {
        type: TOWN_SELECT,
        id: window.location.pathname.slice(1)
    };
}