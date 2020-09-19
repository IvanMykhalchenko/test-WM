import { Lang } from "./../models/lang.interface";
export const redirect =  () => {
  return navigator.language.split('-')[0] === Lang.RU ? Lang.RU : Lang.EN;
}