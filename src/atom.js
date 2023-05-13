import { atom } from "recoil";

export const navMenu = atom({
  key: "navMenu",
  default: ["할인혜택", "호텔 찾기", "즐길거리", "검색 가이드"],
});
