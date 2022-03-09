import * as actionTypes from "./shopping-types";

const INITIAL_STATE = {
  products: [
    {
      id: "1",
      category: "Marketing",
      title: "The Complete Digital Marketing Guide Courses",
      details: "Lorem ipsum zipjes lilol kiop hijack wavery jacke makel ifdsl vmikfio",
      price: "399",
      level: "beginner",
      img: "https://i.ibb.co/s9DK3xV/Rectangle-30.png",
      videolink: "https://www.youtube.com/watch?v=AQ0ktXH3LfI&list=RDAQ0ktXH3LfI&start_radio=1",
      instructor: "John Smith",
      instructorImage: "../src/Assets/InstructorImage.png"
    },
    {
      id: "2",
      category: "Marketing",
      title: "The Complete Digital Marketing Guide Courses",
      details: "Lorem ipsum zipjes lilol kiop hijack wavery jacke makel ifdsl vmikfio",
      price: "399",
      level: "beginner",
      img: "https://i.ibb.co/s9DK3xV/Rectangle-30.png",
      videolink: "https://www.youtube.com/watch?v=AQ0ktXH3LfI&list=RDAQ0ktXH3LfI&start_radio=1",
      instructor: "John Smith",
      instructorImage: "../src/Assets/InstructorImage.png"
    },
    {
      id: "3",
      category: "Marketing",
      title: "The Complete Digital Marketing Guide Courses",
      details: "Lorem ipsum zipjes lilol kiop hijack wavery jacke makel ifdsl vmikfio",
      price: "399",
      level: "beginner",
      img: "https://i.ibb.co/s9DK3xV/Rectangle-30.png",
      videolink: "https://www.youtube.com/watch?v=AQ0ktXH3LfI&list=RDAQ0ktXH3LfI&start_radio=1",
      instructor: "John Smith",
      instructorImage: "../src/Assets/InstructorImage.png"
    },
    {
      id: "4",
      category: "Marketing",
      title: "The Complete Digital Marketing Guide Courses",
      details: "Lorem ipsum zipjes lilol kiop hijack wavery jacke makel ifdsl vmikfio",
      price: "399",
      level: "beginner",
      img: "https://i.ibb.co/s9DK3xV/Rectangle-30.png",
      videolink: "https://www.youtube.com/watch?v=AQ0ktXH3LfI&list=RDAQ0ktXH3LfI&start_radio=1",
      instructor: "John Smith",
      instructorImage: "../src/Assets/InstructorImage.png"
    }
  ],
  cart: [],
  currentItem: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      // Great Item data from products array
      const item = state.products.find(
        (product) => product.id === action.payload.id
      );
      // Check if Item is in cart already
      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );

      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case actionTypes.ADJUST_ITEM_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: +action.payload.qty }
            : item
        ),
      };
    case actionTypes.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;