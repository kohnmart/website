export const state = () => ({
    category: 'vfx'
  })


export const mutations = {
     setCategory(state, filter)
    {
        state.category = filter;
        console.log(state.category);
    }
}