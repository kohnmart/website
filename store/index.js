export const state = () => ({
    category: null
  })


export const mutations = {
     setCategory(state, filter)
    {
        state.category = filter;
        console.log(state.category);
    }
}