export const main =  async () =>{
    // const response = await fetch('https://alemangui.github.io/audio/piano-electro.mp3')
    const response = await fetch('src/files/audio.mp3')
    if (response.ok){
        const blob = await response.blob()
        return URL.createObjectURL(blob)
    }
}
