//Action Creator
export const selectSong = (song) =>{
    //Return an action-payload is an option in an action but type is required
    return{
        type: 'SONG_SELECTED',
        payload: song
    }
};


