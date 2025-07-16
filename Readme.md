hello i am learning react

/*
    header
    - logo
    -nav items

    Body
    -search Bar
    -card container
    -restaurant container
      -restrocard
       -img
       -name of the restaurant ,star rating,cousine,time of delivery

    footer
    -links
    -address
    -contact info
    */

    {/* <RestaurantCard resData={resObj[0]} />
        <RestaurantCard resData={resObj[1]} />
        <RestaurantCard resData={resObj[2]} />
        <RestaurantCard resData={resObj[3]} />
        <RestaurantCard resData={resObj[4]} />
        <RestaurantCard resData={resObj[5]} /> */}


        TWO TYPES OF EXPORT AND IMPORT

        - DEFAULT EXPORT/IMPORT
         -export default component;
         -import component from "path";


         -NAMED EXPORT/IMPORT
          -export const component;
          -import {component} from "path";


          #REACT HOOKS
          (NORMAL JS UTILITY FUNCTIONS)
          -USE STATE() => SUPER POWERFULL STATE VARIABLES IN REACT
          -USE EFFETCS() =>





          // let listofRestaurants = [];

  //normal js variable
  // let listofRestaurantsjs = [
  //   {
  //     id: 1,
  //     name: "The Spice Hub",
  //     cuisine: "Indian",
  //     rating: 4.5,
  //     image: "",
  //   },
  //   {
  //     id: 2,
  //     name: "Pasta Palace",
  //     cuisine: "Italian",
  //     rating: 4.3,
  //     image: "",
  //   },
  //   {
  //     id: 3,
  //     name: "Sushi Central",
  //     cuisine: "Japanese",
  //     rating: 2.9,
  //     image: "",
  //   },
  // ];

  # 2 types od routing in web apps
  -client side routing
  -server side routing





  /*
--Parent constructor                               Mounting
-parent render                                        |
                                                  constructor
  - First constructor                               |                       
  -First render                                   Render
                                                      |
                                                React DOM Updates
                                                      |
  -Second constructor                             ComponentDidMount
  -Second render


<DOM UPDATED -Batching(in a single batch)>
  -First Componentdidmount
  -Second componentdid mount

  
  -Parent componentdidmoun

  # Redux
  -Install Redux @redux.js/toolkit and react-redux
  -Build our own store
  -connect our store to our app
  -Slice(cartslice)
  -disapatch(action)
  -selector



  //if no dependency array => useEffect is called on every render
  //if the dependecy array is empty =[] =>useEffect is called at initial render(just once) 
  //if dependency array is [btnnamereact] is called everytime btnNamereact is updated.



    //mutating the state here
      //vanilla(older) REDUX = dont mutate state
      // const newState=[...state]
      // .items.push(action.payload);
      // return newState;


      //redux Toolkit
      //-we have to mutate the state



       //originalState =["pizza"]
    clearCart: (state, action) => {
      // console.log(state); //pizza
      // console.log(current(state));
      // state = [];
      // console.log(state); //pizza



# Types of testing(developer can do)

-unit testing(test your react component in isolation----only one component at a time not tested as a whole)
-intergration testing(testing the integration of the components)
-End to End testing-E2E Testing


//For Routing we use react router dom
// for testing we are using react testing library
//for state management we are using Redux
//for bundelling we are using parcel

# setting up testing im our app
- Install React testing library
- Installed jest
- installed babel dependencies
- configure babel(babel.config.js)
- configure parcel config file to use.
- configure parcel config file to disable default babel transpilation.
- Jest - npx jest --init.
- install jsdom library.
- Install @babel/preset-react- to make jsx work in test cases
- include babel preset in babel config.
- install(npm i -D @testing-library/jest-dom )testing-library/jest-dom.