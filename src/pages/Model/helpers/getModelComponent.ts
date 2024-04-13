import {
  Chocolate,
  Jelly,
  Breakfast,
  Strawberry,
  Vegetables,
  Pancakes,
  Dumplings,
  Puree,
} from "components/models";


const getModelComponent = (id?: string) => {
  switch (id) {
    case "1":
      return Chocolate;
    case "2":
      return Jelly;
    case "3":
      return Breakfast;
    case "4":
      return Strawberry;
    case "5":
      return Vegetables;
    case "6":
      return Pancakes;
    case "7":
      return Dumplings;
    case "8":
      return Puree;
    default:
      return null;
  };
};


export default getModelComponent;
