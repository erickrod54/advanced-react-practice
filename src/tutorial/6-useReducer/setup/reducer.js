/**Modal app version 6 - created file for reducer related
 * code */

export const reducer = (state, action) => {

    if (action.type === 'ADD_ITEM') {
       const newPeople = [...state.people, action.payload]
       return {...state, 
                people: newPeople,
                isModalOpen: true,  
                modalContent: 'Item Added'};
              }
    if (action.type === 'NO_VALUE') {
        return{ ...state, 
             isModalOpen:true,
             modalContent: 'please enter a value'}
    }
    /**this line was action.type = 'CLOSE_MODAL' instead of
     * action.type === 'CLOSE_MODAL'*/
    if (action.type === 'CLOSE_MODAL') {
      return{ ...state, 
        isModalOpen:false
      }
    }
    if (action.type === 'REMOVE_ITEM') {
      const newPeople = state.people.filter(
          (person) =>  person.id !== action.payload
      )
      return { ...state, people: newPeople}
    }
    throw new Error('no matching action type')
  };